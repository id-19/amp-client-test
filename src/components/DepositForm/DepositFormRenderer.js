// @flow
import React from 'react';
import WaitingFormRenderer from './steps/WaitingFormRenderer';
import ConversionFormRenderer from './steps/ConversionFormRenderer';
import ConfirmFormRenderer from './steps/ConfirmFormRenderer';
import mixpanel from 'mixpanel-browser';
import type { TxReceipt } from '../../types/common';

type Props = {
  step: 'waiting' | 'convert' | 'confirm',
  address: string,
  balance: ?number,
  tokens: Array<Object>,
  token: Object,
  isEtherDeposit: boolean,
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  toggleShouldConvert: void => void,
  toggleTokenSuggest: void => void,
  showTokenSuggest: boolean,
  handleChangeToken: (SyntheticEvent<>) => void,
  handleSubmitChangeToken: (SyntheticEvent<>) => Promise<void>,
  handleConfirm: (SyntheticEvent<>) => void,
  allowTradingCheckboxDisabled: boolean,
  submitButtonDisabled: boolean,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
};

class DepositFormRenderer extends React.Component<Props> {
  handleSubmit = (e: SyntheticEvent<>) => {
    e.preventDefault();
    mixpanel.track("Conversion Form Submitted", {
      "Step": "convert",
      "Tokens": this.props.tokens,
      "Convert Amount": this.props.convertAmount,
      "Is Ether Deposit": this.props.isEtherDeposit
    });
    // Further form submission logic...
  }

  handleConfirmClick = () => {
    mixpanel.track("Confirmation Completed", {
      "Step": "confirm",
      "Transaction Status": this.props.transactionStatus,
      "Allow Trading": this.props.shouldAllow
    });
    // Further confirmation logic...
  }

  handleCheckboxChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;
    switch(name) {
      case 'toggleShouldAllowTrading':
        mixpanel.track("Toggle Allow Trading", { "Allowed": checked });
        break;
      case 'toggleShouldConvert':
        mixpanel.track("Toggle Should Convert", { "Should Convert": checked });
        break;
      case 'toggleTokenSuggest':
        mixpanel.track("Toggle Token Suggest", { "Suggest Token": checked });
        break;
      default:
        break;
    }
    // Further checkbox handling logic...
  }

  render() {
    const { step, ...props } = this.props;
    switch (step) {
      case 'waiting':
        return <WaitingFormRenderer {...props} />;
      case 'convert':
        return (
          <ConversionFormRenderer
            {...props}
            onSubmit={this.handleSubmit}
            onChange={this.handleCheckboxChange}
          />
        );
      case 'confirm':
        return (
          <ConfirmFormRenderer
            {...props}
            onConfirmClick={this.handleConfirmClick}
          />
        );
      default:
        return null;
    }
  }
}

export default DepositFormRenderer;