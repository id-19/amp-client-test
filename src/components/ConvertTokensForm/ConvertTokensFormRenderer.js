// @flow
import React from 'react';
import styled from 'styled-components';
import TxNotification from '../TxNotification';
import { Button, Icon, Slider } from '@blueprintjs/core';
import { formatNumber } from 'accounting-js'
import { ModalBody, FlexColumn, FlexRow, Box, XLText, Colors } from '../Common'
import { Fonts, } from '../Common/Variables'
import CenteredSpinner from '../Common/CenteredSpinner'
import type { TxReceipt } from '../../types/common'
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is imported correctly

type Props = {
  address: string,
  fromToken: string,
  toToken: string,
  txSubmitted: boolean,
  shouldAllow: boolean,
  convertFraction: number,
  handleConvertTokens: void => void,
  handleChangeConvertFraction: number => void,
  toggleShouldAllowTrading: void => void,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
  reset: string => void,
  formType: "deposit" | "withdrawal"
};

const ConvertTokensFormRenderer = (props: Props) => {
  if (props.txSubmitted) {
    return <ConfirmFormRenderer {...props} />
  } else {
    return <ConversionFormRenderer {...props} />
  }
};

const ConversionFormRenderer = (props: Props) => {
  const { handleConvertTokens, handleChangeConvertFraction, convertFraction, fromToken, depositBalance, walletBalance, formType } = props;
  const trackSliderChange = (value) => {
    handleChangeConvertFraction(value);
    Mixpanel.track("Convert Fraction Changed", {
      "Form Type": formType,
      "Convert Fraction": value
    });
  };
  const trackButtonClick = () => {
    handleConvertTokens();
    Mixpanel.track("Conversion Submitted", {
      "Form Type": formType
    });
  };
  return (
    <ModalBody>
      <FlexColumn my={3}>
        <FlexColumn m={2} alignItems="center" width="100%">
          <XLText muted textAlign="center" >
            {messages[fromToken].label1}
          </XLText>
          <Box my={3} width="50%">
            <Slider max={100} min={0} onChange={trackSliderChange} value={convertFraction} labelStepSize={25} />
          </Box>
        </FlexColumn>
        <FlexColumn my={3} alignItems="center">
          <XLText muted>Balances after {formType}</XLText>
          <FlexColumn my={3} alignItems="stretch" width="50%">
            <FlexRow justifyContent="space-between" my={2}>
              <BalanceText>Wallet:</BalanceText>
              <BalanceValueText>{formatNumber(walletBalance, { precision : 3 })} <BalanceSymbolText muted>ETH</BalanceSymbolText> </BalanceValueText>
            </FlexRow>
            <FlexRow justifyContent="space-between" my={2}>
              <BalanceText>Trading Deposit:</BalanceText>
              <BalanceValueText>{formatNumber(depositBalance, { precision: 3 })} <BalanceSymbolText muted>ETH</BalanceSymbolText> </BalanceValueText>
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
      <Button intent="primary" onClick={trackButtonClick} text={formType === "deposit" ? "Deposit" : "Withdraw"} large fill />
    </ModalBody>
  );
};
// The rest of the file remains unchanged...
export default ConvertTokensFormRenderer;