// @flow
import React, { useEffect } from 'react';
import Modal from '../Modal';
import DepositFormContainer from '../DepositForm';
import mixpanel from 'mixpanel-browser';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  step: 'waiting' | 'convert' | 'confirm',
  balance: ?number,
  address: string,
  tokenData: Array<Object>,
  token: Object,
};

const DepositModal = (props: Props) => {
  // Track Modal open
  useEffect(() => {
    if (props.isOpen) {
      mixpanel.track("Modal Interaction", {
        "Action": "Open",
        "Modal Title": "Receive Ether or Tokens"
      });
    }
  }, [props.isOpen]);

  // Enhance handleClose to track Modal close
  const enhancedHandleClose = (event) => {
    mixpanel.track("Modal Interaction", {
      "Action": "Close",
      "Modal Title": "Receive Ether or Tokens"
    });
    props.handleClose(event);
  };

  return (
    <Modal 
      title="Receive Ether or Tokens" 
      icon="info-sign" 
      isOpen={props.isOpen} 
      onClose={enhancedHandleClose}
    >
      <DepositFormContainer 
        tokenData={props.tokenData} 
        token={props.token}
        onDepositSubmit={() => {
          mixpanel.track("Deposit Submission", {
            "Token Type": "Assumed from tokenData",
            "Amount": "User Input - Assumed"
          });
        }}
      />
    </Modal>
  );
};

export default DepositModal;