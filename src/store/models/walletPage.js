// @flow
import { push } from 'connected-react-router'
import * as actionCreators from '../actions/walletPage'
import * as notifierActionCreators from '../actions/app'
import { getAccountBalancesDomain, getAccountDomain, getTokenDomain, } from '../domains'
import { quoteTokens } from '../../config/quotes'
import { getCurrentBlock } from '../services/wallet'
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'
import { parseQueryAccountDataError } from '../../config/errors'
import { pricedTokens } from '../../config'
import { parseWETHPair, parseETHtoWETHToken, parseToWETHPair } from '../../utils/helpers'
import type { State, ThunkAction } from '../../types'

export default function walletPageSelector(state: State) {
    let accountBalancesDomain = getAccountBalancesDomain(state)
    let tokenDomain = getTokenDomain(state)
    let { authenticated, currentBlock, showHelpModal, referenceCurrency } = getAccountDomain(state)
    let tokens = tokenDomain.tokens()
    let quoteTokens = tokenDomain.quoteTokens()
    let baseTokens = tokenDomain.baseTokens()
    let tokenData = accountBalancesDomain.getBalancesAndAllowances(tokens, referenceCurrency)
    return {
        balancesLoading: accountBalancesDomain.loading(),
        WETHBalance: accountBalancesDomain.tokenBalance('WETH'),
        WETHAllowance: accountBalancesDomain.tokenAllowance('WETH'),
        tokenData: tokenData,
        quoteTokens: quoteTokens,
        baseTokens: baseTokens,
        authenticated: authenticated,
        currentBlock: currentBlock,
        showHelpModal: showHelpModal,
        connected: true,
        referenceCurrency: referenceCurrency.symbol,
    }
}

export function queryAccountData(): ThunkAction {
    return async (dispatch, getState, { api, provider }) => {
        const state = getState()
        const { address: accountAddress } = getAccountDomain(state)
        const savedTokens = getTokenDomain(state).tokens()
        let balances = []
        let allowances = []
        try {
            let [ currentBlock, tokens, pairs, exchangeAddress, txs ] = await Promise.all([
                getCurrentBlock(),
                api.getTokens(),
                api.fetchPairs(),
                api.getExchangeAddress(),
                provider.queryTransactionHistory(accountAddress)
            ])
            if (!currentBlock) throw new Error('')
            tokens = [ ...new Set([ ...savedTokens, ...tokens ]) ]
            // let tokenSymbols = tokens.map(token => token.symbol)
            let tokenSymbols = pricedTokens
            let currencySymbols = ['USD', 'EUR', 'JPY']
            let exchangeRates = await api.fetchExchangeRates(tokenSymbols, currencySymbols)
            tokens = tokens.map(token => {
                return { ...token, USDRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].USD : 0,
                         EURRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].EUR : 0,
                         JPYRate: exchangeRates[token.symbol] ? exchangeRates[token.symbol].JPY : 0,
                }
            })
            dispatch(actionCreators.updateWalletPageData(currentBlock, tokens, pairs, exchangeAddress, txs))
            //we remove the ETH 'token' because the process to obtain balances for ETH and others tokens is different
            tokens = tokens.filter(token => token.symbol !== 'ETH')
            let [ etherBalance, tokenBalanceResult, tokenAllowanceResult, ] = await Promise.all([
                provider.queryEtherBalance(accountAddress),
                provider.queryTokenBalances(accountAddress, tokens),
                provider.queryExchangeTokenAllowances(accountAddress, tokens)
            ])
            balances.push(etherBalance)
            let { errors: tokenBalanceErrors, tokenBalances } = tokenBalanceResult
            balances.concat(tokenBalances)
            let { errors: tokenAllowanceErrors, tokenAllowances } = tokenAllowanceResult
            allowances = tokenAllowances
            balances = [etherBalance].concat(tokenBalances)
            // TODO handle unsubscriptions
            provider.subscribeTokenBalances(accountAddress, tokens, balance => dispatch(actionCreators.updateBalance(balance)))
            provider.subscribeEtherBalance(accountAddress, balance => dispatch(actionCreators.updateBalance({ symbol: 'ETH', balance: balance })))
            provider.subscribeTokenAllowances(accountAddress, tokens, allowance => { dispatch(actionCreators.updateAllowance(allowance))})
        } catch (e) {
            console.log(e)
            let message = parseQueryAccountDataError(e)
            dispatch(notifierActionCreators.addErrorNotification({ message }))
        } finally {
            dispatch(actionCreators.updateBalances(balances))
            dispatch(actionCreators.updateAllowances(allowances))
        }
    }
}

export function redirectToTradingPage(symbol: string): ThunkAction {
    return async (dispatch, getState, { mixpanel }) => {
        let tradedTokenSymbol = parseETHtoWETHToken(symbol)
        let quoteTokenSymbols = quoteTokens.map(token => token.symbol)
        let quoteTokenIndex = quoteTokenSymbols.indexOf(tradedTokenSymbol)
        let baseTokenSymbol, quoteTokenSymbol
        if (quoteTokenIndex === 0) {
            quoteTokenSymbol = quoteTokens[0].symbol
            baseTokenSymbol = quoteTokens[1].symbol
        } else {
            quoteTokenSymbol = quoteTokens[0].symbol
            baseTokenSymbol = symbol
        }
        let pair = `${baseTokenSymbol}/${quoteTokenSymbol}`
        mixpanel.track('wallet-page/redirect-to-trading-page', {
            "Pair": pair
        })
        dispatch(actionCreators.updateCurrentPair(pair))
        dispatch(push('/trade'))
    }
}

export function toggleAllowance(symbol: string): ThunkAction {
    return async (dispatch, getState, { txProvider, mixpanel }) => {
        try {
            const state = getState()
            const tokens = getTokenDomain(state).bySymbol()
            const isAllowed = getAccountBalancesDomain(state).isAllowed(symbol)
            const isPending = getAccountBalancesDomain(state).isAllowancePending(symbol)
            const tokenContractAddress = tokens[symbol].address
            const txType = isAllowed ? 'Token Locked' : 'Token Unlocked'
            if (isPending) throw new Error('Trading approval pending')
            mixpanel.track('wallet-page/toggle-allowance', {
                "Token Status": txType,
                "Token Symbol": symbol
            })
            const lockTxSentHandler = (txHash) => {
                // Handler content remains unchanged
            }
            const unlockTxSentHandler = (txHash) => {
                // Handler content remains unchanged
            }
            const lockTxConfirmedHandler = (txConfirmed, txHash) => {
                // Handler content remains unchanged
            }
            const unlockTxConfirmedHandler = (txConfirmed, txHash) => {
                // Handler content remains unchanged
            }
            if (isAllowed) {
                await txProvider.updateExchangeAllowance(tokenContractAddress, 0, lockTxConfirmedHandler, lockTxSentHandler)
            } else {
                await txProvider.updateExchangeAllowance(tokenContractAddress, ALLOWANCE_THRESHOLD, unlockTxConfirmedHandler, unlockTxSentHandler)
            }
        } catch (e) {
            console.log(e)
            if (e.message === 'Trading approval pending') {
                dispatch(notifierActionCreators.addErrorNotification({ message: 'Trading approval pending' }))
            }
        }
    }
}