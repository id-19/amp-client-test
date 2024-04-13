// @flow
import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import CenteredSpinner from '../../components/Common/CenteredSpinner';
import MarketsTable from '../../components/MarketsTable';
import StatisticsBoard from '../../components/StatisticsBoard';
import mixpanel from 'mixpanel-browser';

type Props = {
  loading: boolean,
  showMarketStatistics: boolean,
  toggleMarketStatistics: void => void
}

const MarketsPageRenderer = (props: Props) => {
  const { loading, showMarketStatistics, toggleMarketStatistics } = props;

  const handleToggleStatistics = () => {
    toggleMarketStatistics();
    mixpanel.track("Toggle Market Statistics", {
      "Action": "Toggle",
      "Component": "StatisticsBoard",
      "Visible": showMarketStatistics ? "False" : "True"
    });
  };

  const handleViewMarkets = () => {
    mixpanel.track("View Markets", {
      "Action": "View",
      "Component": "MarketsTable"
    });
  };

  return (
    <MarketPageBox>
      <RowWrapper>
        <MarketPageContentBox>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <MarketsTableBox onClick={handleViewMarkets}>
              {showMarketStatistics ? (
                <StatisticsBoard toggleMarketStatistics={handleToggleStatistics} />
              ) : (
                <MarketsTable toggleMarketStatistics={handleToggleStatistics} />
              )}
            </MarketsTableBox>
          )}
        </MarketPageContentBox>
      </RowWrapper>
    </MarketPageBox>
  );
}

const MarketPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const MarketPageContentBox = styled(Card)`
  height: 90vh;
  width: 100%;
  margin-right: 0.5em;
  margin-left: 0.5em;
  overflow: auto;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MarketsTableBox = styled.div`
  height: 100%;
  width: 100%;
`;

export default MarketsPageRenderer;