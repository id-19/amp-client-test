// @flow
import React from 'react'
import WalletPageRenderer from './WalletPageRenderer'
import { Redirect } from 'react-router-dom'
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is installed and imported
import type { State } from '../../types'
import type { TokenData } from '../../types/tokens'
import type { Tx } from '../../types/transactions'
import { loadShowHelpModalSetting } from '../../store/services/storage'

export type Props = {
  connected: boolean,
  accountAddress: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  authenticated: boolean,
  queryAccountData: void => void,
  redirectToTradingPage: string => void,
  openConnection: void => void,
  toggleAllowance: string => void,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  showHelpModal: boolean,
  closeHelpModal: void => void,
  balancesLoading: boolean,
  WETHBalance: string,
  WETHAllowance: string,
  referenceCurrency: string,
  recentTransactions: Array<Tx>
}

class WalletPage extends React.PureComponent<Props, State> {
  componentDidMount() {
    const { authenticated, queryAccountData } = this.props
    if (authenticated) queryAccountData()
  }

  checkOpenHelpModal = () => {
    const showHelpModalSetting = loadShowHelpModalSetting()
    const { authenticated, showHelpModal, balancesLoading, WETHBalance, WETHAllowance } = this.props
    const result = !showHelpModalSetting || !authenticated || !showHelpModal || balancesLoading;
    mixpanel.track("Help Modal Checked", {
      "Authenticated": authenticated.toString(),
      "ShowHelpModal": showHelpModal.toString(),
      "BalancesLoading": balancesLoading.toString(),
      "WETHBalance": WETHBalance,
      "WETHAllowance": WETHAllowance
    });
    return !result;
  }

  render() {
    const { connected, authenticated, accountAddress, etherBalance, gasPrice, gas, toggleAllowance, redirectToTradingPage, tokenData, quoteTokens, baseTokens, closeHelpModal, balancesLoading, referenceCurrency, recentTransactions } = this.props
    if (!authenticated) {
      mixpanel.track("User Redirected to Login");
      return <Redirect to="/login" />
    }
    const isHelpModalOpen = this.checkOpenHelpModal()
    return (
      <WalletPageRenderer
        gas={gas}
        gasPrice={gasPrice}
        etherBalance={etherBalance}
        tokenData={tokenData}
        baseTokens={baseTokens}
        quoteTokens={quoteTokens}
        connected={connected}
        accountAddress={accountAddress}
        toggleAllowance={this.toggleAllowance} // Assuming this function is defined elsewhere and called with relevant parameters
        balancesLoading={balancesLoading}
        redirectToTradingPage={redirectToTradingPage}
        isHelpModalOpen={isHelpModalOpen}
        closeHelpModal={closeHelpModal}
        referenceCurrency={referenceCurrency}
        recentTransactions={recentTransactions}
      />
    )
  }

  // Assuming toggleAllowance function exists and is called with a token name and a boolean for the new allowance state
  // Example implementation for tracking the "Token Allowance Toggled" event
  toggleAllowance = (tokenName, newState) => {
    mixpanel.track("Token Allowance Toggled", {
      "Token": tokenName,
      "AllowanceSetTo": newState.toString()
    });
    // Implementation of toggling the allowance
  }
}

export default WalletPage