// @flow
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import CenteredSpinner from '../../components/Common/CenteredSpinner';
import { AMPLogo } from '../../components/Common';
import TokenTable from '../../components/TokenTable';
import WalletInfo from '../../components/WalletInfo';
import GetStartedModal from '../../components/GetStartedModal';
import type { TokenData } from '../../types/tokens';
import type { Tx } from '../../types/Tx';
import { Devices } from '../../components/Common/Variables';
import mixpanel from 'mixpanel-browser';

type Props = {
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  connected: boolean,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void,
  isHelpModalOpen: boolean,
  closeHelpModal: void => void,
  balancesLoading: boolean,
  referenceCurrency: string,
}

const WalletPageRenderer = (props: Props) => {
  const {
    tokenData,
    baseTokens,
    quoteTokens,
    connected,
    toggleAllowance,
    redirectToTradingPage,
    isHelpModalOpen,
    closeHelpModal,
    balancesLoading,
    referenceCurrency,
  } = props;

  useEffect(() => {
    mixpanel.track("Wallet Info Viewed");
  }, []);

  useEffect(() => {
    if (isHelpModalOpen) {
      mixpanel.track("Get Started Modal Toggled", { "Modal State": "Opened" });
    } else {
      mixpanel.track("Get Started Modal Toggled", { "Modal State": "Closed" });
    }
  }, [isHelpModalOpen]);

  useEffect(() => {
    const handleTokenInteraction = () => {
      mixpanel.track("Token Interaction", {
        "Connected": connected.toString(),
        "Token Data": tokenData.map(token => token.symbol),
        "Base Tokens": baseTokens,
        "Quote Tokens": quoteTokens
      });
    };
    const tokenTable = document.getElementById("DepositTableBox");
    if (tokenTable) tokenTable.addEventListener("click", handleTokenInteraction);
    return () => {
      if (tokenTable) tokenTable.removeEventListener("click", handleTokenInteraction);
    };
  }, [connected, tokenData, baseTokens, quoteTokens]);

  return (
    <WalletPageBox>
      <RowWrapper>
        <WalletInfoBox>
          <WalletInfo />
        </WalletInfoBox>
        <WalletPageContentBox>
          {balancesLoading ? (
            <CenteredSpinner />
          ) : (
            <DepositTableBox id="DepositTableBox">
              <TokenTable
                connected={connected}
                tokenData={tokenData}
                baseTokens={baseTokens}
                quoteTokens={quoteTokens}
                toggleAllowance={toggleAllowance}
                redirectToTradingPage={redirectToTradingPage}
                referenceCurrency={referenceCurrency}
              />
            </DepositTableBox>
          )}
        </WalletPageContentBox>
      </RowWrapper>
      <GetStartedModal isOpen={isHelpModalOpen} closeHelpModal={closeHelpModal} />
    </WalletPageBox>
  );
}

const WalletPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const WalletInfoBox = styled.div`
  width: 30%;
  height: 92vh;
  margin-right: 0.5em;
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${Devices.tablet} {
    display: none;
  }
`;

const WalletPageContentBox = styled(Card)`
  height: 92vh;
  width: 70%;
  margin-right: 0.5em;
  margin-left: 0.5em;
  @media ${Devices.tablet} {
    width: 100%;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DepositTableBox = styled.div`
  height: 100%;
  width: 100%;
`;

export default WalletPageRenderer;