import React from 'react';
import styled from 'styled-components';
import { Button, Callout, ControlGroup, Spinner } from '@blueprintjs/core';
import { ModalBody, ModalFooter } from '../../Common';
import TokenSuggest from '../../TokenSuggest';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const WaitingFormRenderer = (props: Props) => {
  const { tokens, token, address, balance, handleChangeToken, handleSubmitChangeToken, toggleTokenSuggest, showTokenSuggest, } = props;

  // Event handler for Mixpanel tracking
  const trackEvent = (eventName, properties = {}) => {
    mixpanel.track(eventName, properties);
  };

  return (
    <ModalBody>
      <Callout intent="primary" title="Notice">
        Send {token.symbol} to the address displayed below. This form will update once your account balance is changed.
      </Callout>
      <WaitingFormBox>
        <Spinner intent="primary" large />
        <Address>{address}</Address>
        <CurrentBalanceBox>
          (Your current balance is {balance} {token.symbol})
        </CurrentBalanceBox>
      </WaitingFormBox>
      <ModalFooter>
        {showTokenSuggest ? (
          <ControlGroup>
            <Button onClick={() => { toggleTokenSuggest(); trackEvent("Cancel Token Suggest"); }} text="Cancel" minimal className="cancel-button" />
            <TokenSuggest tokens={tokens} token={token} onChange={(selectedToken) => { handleChangeToken(selectedToken); trackEvent("Token Selection Suggest", { "Selected Token": selectedToken.symbol }); }} className="token-suggest" />
            <Button intent="primary" text="Confirm" onClick={() => { handleSubmitChangeToken(); trackEvent("Confirm Token Change"); }} className="confirm-button" />
          </ControlGroup>
        ) : (
          <ControlGroup>
            <Button onClick={() => { toggleTokenSuggest(); trackEvent("Initiate Token Deposit"); }} text="Deposit another token" className="deposit-another-token-button" />
          </ControlGroup>
        )}
      </ModalFooter>
    </ModalBody>
  );
};

const WaitingFormBox = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const CurrentBalanceBox = styled.div`
  padding-top: 4px;
`;

const Address = styled.div`
  padding-top: 40px;
  font-weight: bold;
`;

export default WaitingFormRenderer;