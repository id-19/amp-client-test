// @flow
import React from 'react'
import styled from 'styled-components'
import { formatNumber } from 'accounting-js'
import { Button, Callout, Slider, Icon, Spinner, Checkbox } from '@blueprintjs/core'
import SmallTxNotification from '../../SmallTxNotification'
import { ModalBody, ModalFooter, FlexColumn, FlexRow, XLText, Colors, Box, EmphasizedText } from '../../Common'
import { Fonts } from '../../Common/Variables'
import Mixpanel from 'mixpanel' // Assuming Mixpanel is correctly initialized elsewhere

type Props = {
  step: string,
  goToFirstStep: void => void,
  goToSecondStep: void => void,
  goToThirdStep: void => void,
  userHasETH: boolean,
  userHasWETH: boolean,
  userHasApprovedWETH: boolean,
  handleConvertETH: void => void,
  handleApproveWETH: void => void,
  ETHBalance: number,
  WETHBalance: number,
  convertAmount: number,
  convertFraction: number,
  changeConvertETHFraction: number => void,
  ETHAddress: string,
  convertTxStatus: string,
  convertTxHash: string,
  approveTxStatus: string,
  approveTxHash: string,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
  transactionsPending: boolean,
  transactionsComplete: boolean,
}

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

const FooterActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const SecondStep = (props: Props) => {
  const {
    goToThirdStep,
    userHasETH,
    userHasWETH,
    userHasApprovedWETH,
    handleConvertETH,
    handleApproveWETH,
    ETHBalance,
    WETHBalance,
    convertAmount,
    convertFraction,
    changeConvertETHFraction,
    ETHAddress,
    convertTxStatus,
    convertTxHash,
    approveTxStatus,
    approveTxHash,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox,
    transactionsPending,
    transactionsComplete
  } = props

  // Mixpanel Event Handlers
  const trackContinueAfterSuccess = () => Mixpanel.track("Continue After Success", { "Step": "Transaction Complete" });
  const trackViewFAQ = () => Mixpanel.track("View FAQ");
  const trackDepositETH = () => Mixpanel.track("Deposit ETH");
  const trackApproveTrading = () => Mixpanel.track("Approve Trading");
  const trackSkipStep = () => Mixpanel.track("Skip Step", { "Step": userHasETH ? "ETH Deposit" : "WETH Approval" });
  const trackToggleDoNotShowAgain = () => Mixpanel.track("Toggle Do Not Show Again", { "Checked": showHelpModalChecked.toString() });

  if (transactionsPending) {
    return (
      <FlexColumn width="100%">
        <ModalBody>
          <IconBox>
            <h2>Your deposit is being processed ...</h2>
          </IconBox>
          <NotificationBox>
            {convertTxHash && <SmallTxNotification txName='Deposit' status={convertTxStatus} hash={convertTxHash} />}
          </NotificationBox>
          <NotificationBox>
            {approveTxHash && <SmallTxNotification txName='Approval' status={approveTxStatus} hash={approveTxHash} />}
          </NotificationBox>
        </ModalBody>
        <ModalFooter>
          <ButtonBox>
            <Button intent='primary' disabled onClick={() => { goToThirdStep(); trackContinueAfterSuccess(); }} text='Continue' />
          </ButtonBox>
        </ModalFooter>
      </FlexColumn>
    )
  }

  if (transactionsComplete) {
    return (
      <FlexColumn width="100%">
        <ModalBody>
          <IconBox>
            <Icon intent='success' iconSize={120} icon='tick-circle' />
            <h2>Deposit successful!</h2>
          </IconBox>
          <NotificationBox>
            {convertTxHash && <SmallTxNotification txName='Deposit Transaction' status={convertTxStatus} hash={convertTxHash} />}
          </NotificationBox>
          <NotificationBox>
            {approveTxHash && <SmallTxNotification txName='Approval Transaction' status={approveTxStatus} hash={approveTxHash} />}
          </NotificationBox>
        </ModalBody>
        <ModalFooter>
          <ButtonBox>
            <Button intent='primary' onClick={() => { goToThirdStep(); trackContinueAfterSuccess(); }} text='Continue' />
          </ButtonBox>
        </ModalFooter>
      </FlexColumn>
    )
  }

  if (userHasETH && !userHasWETH) {
    return (
      <FlexColumn width="100%">
        <ModalBody>
          <Callout intent="primary" title='Deposit ETH for trading!' icon="none">
            To trade on AMP, you need to add some Ether to your trading deposit. You will notice that your ETH balance is now divided into:
            <br />
            <br />
            • <b>ETH Wallet Balance:</b> Amount of ETH you can use for blockchain transactions.
            <br />
            • <b>ETH Trading Balance:</b> Amount of ETH you can use for trading and placing orders on AMP.
            <br />
            <br />
            <FlexRow alignItems="center">
              <EmphasizedText bold>You can withdraw your trading ETH at any time</EmphasizedText>
              <Button minimal interactive onClick={trackViewFAQ}>View FAQ</Button>
            </FlexRow>
          </Callout>
          <FlexColumn width="100%" alignItems="center">
            <XLText m={4} muted>Choose the fraction of your ETH you want to deposit</XLText>
            <SliderGroup>
              <SliderBox>
                <Slider max={100} min={0} onChange={changeConvertETHFraction} value={convertFraction} labelStepSize={25} />
              </SliderBox>
            </SliderGroup>
            <BalancesGroup>
              <FlexRow width="60%" justifyContent="space-around">
                <FlexColumn alignItems="center">
                  <BalanceText m={2} muted>Wallet Balance:</BalanceText>
                  <BalanceValueText m={2}>
                    {formatNumber(Number(ETHBalance) - convertAmount, { precision: 3 })} ETH
                  </BalanceValueText>
                </FlexColumn>
                <FlexColumn alignItems="center">
                  <BalanceText m={2} muted>Trading Balance:</BalanceText>
                  <BalanceValueText m={2}>
                    {formatNumber(Number(WETHBalance) + convertAmount, { precision: 3 })} ETH
                  </BalanceValueText>
                </FlexColumn>
              </FlexRow>
            </BalancesGroup>
            <br />
          </FlexColumn>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onClick={() => { toggleShowHelpModalCheckBox(); trackToggleDoNotShowAgain(); }}> Do not show again </Checkbox>
            <FooterActionsBox>
              <NotificationBox>
                {convertTxHash && <SmallTxNotification txName='Conversion Transaction' status={convertTxStatus} hash={convertTxHash} />}
              </NotificationBox>
              <NotificationBox>
                {approveTxHash && <SmallTxNotification txName='Approval Transaction' status={approveTxStatus} hash={approveTxHash} />}
              </NotificationBox>
              <div>
                <Button onClick={() => { goToThirdStep(); trackSkipStep(); }}>Skip</Button>
                <Button intent='primary' onClick={() => { handleConvertETH(); trackDepositETH(); }} text='Deposit ETH' />
              </div>
            </FooterActionsBox>
          </FooterBox>
        </ModalFooter>
      </FlexColumn>
    )
  }

  if (userHasWETH && !userHasApprovedWETH) {
    return (
      <FlexColumn width="100%">
        <ModalBody>
          <Callout intent='success' title='Approve Ether to start trading'>
            You need to grant approval to perform trades to the AMP exchange. Granting approval does not allow the AMP exchange to move your funds without your permission.
          </Callout>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onClick={() => { toggleShowHelpModalCheckBox(); trackToggleDoNotShowAgain(); }}> Do not show again </Checkbox>
            <div>
              <Button onClick={() => { goToThirdStep(); trackSkipStep(); }}>Skip</Button>
              <Button intent='primary' onClick={() => { handleApproveWETH(); trackApproveTrading(); }} text='Approve Trading' />
            </div>
          </FooterBox>
        </ModalFooter>
      </FlexColumn>
    )
  }

  if (!userHasETH) {
    return (
      <div>
        <ModalBody>
          <Callout intent='success'>
            You don't have any Ether in your wallet. Send some ether now or skip this step. This form will update when your Ether is received.
          </Callout>
          <WaitingFormBox>
            <SpinnerBox>
              <Spinner intent='primary' size={100} />
            </SpinnerBox>
            <Address>{ETHAddress}</Address>
            <CurrentBalanceBox>
              (Your current balance is {ETHBalance} ETH)
            </CurrentBalanceBox>
          </WaitingFormBox>
        </ModalBody>
        <ModalFooter>
          <FooterBox>