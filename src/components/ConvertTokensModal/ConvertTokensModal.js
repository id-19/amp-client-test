// @flow
import React, { useEffect } from 'react';
import Modal from '../Modal';
import ConvertTokensFormContainer from '../ConvertTokensForm';
import type { Token } from '../../types/tokens';
import mixpanel from 'mixpanel-browser';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  fromToken: Token,
  toToken: Token
};

const ConvertTokensFormModal = (props: Props) => {
  const title = (props.fromToken === "ETH") ? "Deposit" : "Withdraw";

  useEffect(() => {
    // Assuming Mixpanel is initialized elsewhere or checking before using
    if (props.isOpen) {
      mixpanel.track("Modal Opened", {
        "Action": "Open",
        "Title": title,
        "From Token": props.fromToken,
        "To Token": props.toToken
      });
    } else {
      mixpanel.track("Modal Closed", {
        "Action": "Close",
        "Title": title,
        "From Token": props.fromToken,
        "To Token": props.toToken
      });
    }
  }, [props.isOpen, props.fromToken, props.toToken, title]);

  return (
    <Modal
      title={title}
      icon="info-sign"
      isOpen={props.isOpen}
      onClose={props.handleClose}
      width={600}
    >
      <ConvertTokensFormContainer fromToken={props.fromToken} toToken={props.toToken} />
    </Modal>
  );
};

export default ConvertTokensFormModal;