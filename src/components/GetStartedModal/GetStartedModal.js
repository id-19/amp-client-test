// @flow
import React from 'react'
import GetStartedModalRenderer from './GetStartedModalRenderer'
import { setShowHelpModalSetting } from '../../store/services/storage'
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is already set up elsewhere in the project

type Props = {
  ETHAddress: string,
  ETHBalance: number,
  WETHBalance: number,
  WETHAllowance: number,
  convertETH: number => void,
  approveWETH: void => void,
  approveTxState: Object,
  convertTxState: Object,
  redirectToTradingPage: void => void,
  redirectToFAQPage: void => void,
  isOpen: boolean,
  closeHelpModal: void => void,
  currentTab: string
}

type State = {
  step: string,
  convertAmount: number,
  convertFraction: number,
  showHelpModalChecked: boolean,
}

class GetStartedModal extends React.PureComponent<Props, State> {
  state = {
    step: '1',
    convertAmount: 0,
    convertFraction: 0,
    showHelpModalChecked: false,
    currentTab: "default"
  }

  componentDidUnmount = () => {
    this.handleClose()
  }

  goToFirstStep = () => {
    this.setState({ step: '1' })
    mixpanel.track("Go To First Step"); // Tracking event for going to the first step
  }

  goToSecondStep = () => {
    const { ETHBalance, WETHBalance, WETHAllowance } = this.props
    if (ETHBalance > 0 && WETHBalance > 0 && WETHAllowance > 0) {
      console.log('here')
      this.setState({ step: '3' })
      return
    }
    this.setState({ step: '2' })
  }

  goToThirdStep = () => {
    this.setState({ step: '3' })
  }

  changeConvertETHFraction = (convertFraction: number) => {
    this.setState((prevState, { ETHBalance }) => {
      return {
        ...prevState,
        convertFraction: convertFraction,
        convertAmount: ETHBalance * convertFraction / 100,
      }
    });
  };

  toggleShowHelpModalCheckBox = () => {
    this.setState({ showHelpModalChecked: !this.state.showHelpModalChecked })
    mixpanel.track("Toggle Help Modal"); // Tracking event for toggling the help modal checkbox
  }

  handleChangeTab = (tab: string) => {
    this.setState({ currentTab: tab })
    mixpanel.track("Change Tab", { Tab: tab }); // Tracking event for changing tabs
  }

  handleClose = () => {
    let { closeHelpModal } = this.props
    let { showHelpModalChecked } = this.state
    setShowHelpModalSetting(!showHelpModalChecked)
    closeHelpModal()
  }

  handleConvertETH = () => {
    let { convertAmount } = this.state
    this.props.convertETH(convertAmount)
    mixpanel.track("Convert ETH"); // Tracking event for converting ETH
  }

  handleApproveWETH = () => {
    this.props.approveWETH()
    mixpanel.track("Approve WETH"); // Tracking event for approving WETH
  }

  checkTransactionsPending = () => {
    const { approveTxState, convertTxState } = this.props
    if (approveTxState.approveTxStatus === 'sent') return true
    if (convertTxState.convertTxStatus === 'sent') return true
    return false
  }

  checkTransactionsComplete = () => {
    const { approveTxState, convertTxState } = this.props
    const { approveTxStatus } = approveTxState
    const { convertTxStatus } = convertTxState
    if (approveTxStatus === 'confirmed' && convertTxStatus === 'incomplete') return true
    if (approveTxStatus === 'incomplete' && convertTxStatus === 'confirmed') return true
    if (approveTxStatus === 'confirmed' && convertTxStatus === 'confirmed') return true
    return false
  }

  render() {
    const { step, convertAmount, convertFraction, showHelpModalChecked, currentTab } = this.state
    const { ETHAddress, ETHBalance, WETHBalance, WETHAllowance, approveTxState, convertTxState, redirectToTradingPage, redirectToFAQPage, isOpen, } = this.props
    const userHasETH = ETHBalance > 0
    const userHasWETH = WETHBalance > 0
    const userHasApprovedWETH = WETHAllowance > 0
    const { approveTxStatus, approveTxHash } = approveTxState
    const { convertTxStatus, convertTxHash } = convertTxState
    const transactionsPending = this.checkTransactionsPending()
    const transactionsComplete = this.checkTransactionsComplete()

    return (
      <GetStartedModalRenderer
        step={step}
        goToFirstStep={this.goToFirstStep}
        goToSecondStep={this.goToSecondStep}
        goToThirdStep={this.goToThirdStep}
        changeConvertETHFraction={this.changeConvertETHFraction}
        handleClose={this.handleClose}
        handleConvertETH={this.handleConvertETH}
        handleApproveWETH={this.handleApproveWETH}
        ETHAddress={ETHAddress}
        ETHBalance={ETHBalance}
        WETHBalance={WETHBalance}
        convertAmount={convertAmount}
        convertFraction={convertFraction}
        userHasETH={userHasETH}
        userHasWETH={userHasWETH}
        userHasApprovedWETH={userHasApprovedWETH}
        approveTxStatus={approveTxStatus}
        approveTxHash={approveTxHash}
        convertTxStatus={convertTxStatus}
        convertTxHash={convertTxHash}
        redirectToTradingPage={redirectToTradingPage}
        redirectToFAQPage={redirectToFAQPage}
        toggleShowHelpModalCheckBox={this.toggleShowHelpModalCheckBox}
        showHelpModalChecked={showHelpModalChecked}
        isOpen={isOpen}
        transactionsPending={transactionsPending}
        transactionsComplete={transactionsComplete}
        currentTab={currentTab}
        handleChangeTab={this.handleChangeTab}
      />
    )
  }
}

export default GetStartedModal