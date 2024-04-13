// @flow
import React from 'react';
import styled from 'styled-components';
import Help from '../../components/Help'
import { formatNumber } from 'accounting-js'
import { List, AutoSizer } from 'react-virtualized'
import { Position, Button, InputGroup } from '@blueprintjs/core';
import { Spring } from 'react-spring'
import { FlexRowSpaceBetween, Colors, AMPLogo, Centered, LargeText, SmallText, BlueGlowingButton, FlexRow, Box, CryptoIconPair, } from '../Common';
import { Devices } from '../Common/Variables'
import type { PairData } from './MarketsTable'
import mixpanel from 'mixpanel-browser'; // Import Mixpanel
mixpanel.init("YOUR_MIXIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

type Props = {
  searchInput: string,
  pairs: Array<PairData>,
  handleSearchInputChange: (SyntheticInputEvent<>) => void,
  redirectToTradingPage: string => void,
  selectedTab: string,
  handleChangeTab: string => void,
  tabs: Array<string>,
  quoteTokens: Array<string>,
  currentReferenceCurrency: string,
  toggleMarketStatistics: void => void
};

class MarketsTableRenderer extends React.PureComponent<Props> {
  rowRenderer = ({ key, index, style }: *) => {
    const { pairs, redirectToTradingPage, currentReferenceCurrency, } = this.props;
    const { pair, baseTokenSymbol, quoteTokenSymbol, price, change, volume, orderVolume, } = pairs[index]
    return (
      <Row key={key} onClick={() => { redirectToTradingPage(pair); mixpanel.track("Trade Button Clicked", { "Pair": pair, "Action": "Redirect to Trading Page" }); // Track event }} style={style}>
        <Cell>
          <FlexRow alignItems="center">
            <Box pb={4} mr={2}>
              <CryptoIconPair size={32} baseToken={baseTokenSymbol} quoteToken={quoteTokenSymbol} />
            </Box>
            <SmallText muted>{pair}</SmallText>
          </FlexRow>
        </Cell>
        <Cell type="price">
          <SmallText muted> {formatNumber(price, { precision: 2 })} {quoteTokenSymbol} </SmallText>
        </Cell>
        <Cell type="referencePrice">
          <SmallText muted> {formatNumber(price, { precision: 2 })} {currentReferenceCurrency} </SmallText>
        </Cell>
        <Cell type="volume">
          <SmallText muted> {formatNumber(volume, { precision: 2 })} </SmallText>
        </Cell>
        <Cell type="orderVolume">
          <SmallText muted> {orderVolume ? formatNumber(orderVolume, { precision: 2 }) : 'N.A'} </SmallText>
        </Cell>
        <Cell type="change">
          <ChangeCell change={change}>{change ? `${formatNumber(change, { precision: 2 })}%` : 'N.A'}</ChangeCell>
        </Cell>
        <Cell>
          <FlexRow justifyContent="flex-end" p={1}>
            <BlueGlowingButton intent="primary" text="Trade" onClick={() => { redirectToTradingPage(pair); mixpanel.track("Trade Button Clicked", { "Pair": pair, "Action": "Redirect to Trading Page" }); // Track event }} />
          </FlexRow>
        </Cell>
      </Row>
    )
  }
  noRowsRenderer = () => {
    return (
      <Centered my={4}>
        <AMPLogo height="150em" width="150em" />
        <LargeText muted>No pairs to display!</LargeText>
      </Centered>
    )
  }
  render() {
    const { pairs, searchInput, handleSearchInputChange, selectedTab, handleChangeTab, currentReferenceCurrency, tabs, toggleMarketStatistics } = this.props;
    return (
      <Spring from={{ opacity: 0, marginLeft: -200 }} to={{ opacity: 1, marginLeft: 0 }} >
        {props => <TableSection style={props}>
          <TableToolBar mt={3} mb={4}>
            <TableSearchBar>
              <InputGroup type="string" leftIcon="search" placeholder="Search Token..." value={searchInput} onChange={(e) => { handleSearchInputChange(e); mixpanel.track("Token Search", { "Search Query": e.target.value }); // Track event }} />
              <MarketStatisticsButton minimal intent="primary" text="View Market Statistics" icon="stacked-chart" onClick={() => { toggleMarketStatistics(); mixpanel.track("Market Statistics Viewed"); // Track event }} />
            </TableSearchBar>
            <ButtonRow>
              {tabs.map((tab, i) => {
                return (
                  <QuoteSelectionButton text={tab} minimal fill onClick={() => { handleChangeTab(tab); mixpanel.track("Tab Selected", { "Tab": tab }); // Track event }} active={selectedTab === tab} intent={selectedTab === tab ? 'primary' : ''} />
                )
              })}
            </ButtonRow>
          </TableToolBar>
          <TableHeader>
            <TableHeaderCell>Market</TableHeaderCell>
            <TableHeaderCell type="price">Price</TableHeaderCell>
            <TableHeaderCell type="referencePrice">Price ({currentReferenceCurrency})</TableHeaderCell>
            <TableHeaderCell type="volume">Volume</TableHeaderCell>
            <TableHeaderCell type="orderVolume"> Order Volume <span> </span> <Help position={Position.RIGHT}> The total amount of bids and asks currently in the orderbook </Help> </TableHeaderCell>
            <TableHeaderCell type="change">Change 24H</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableHeader>
          <Table>
            <TableBody>
              <AutoSizer>
                {({ width, height }) => (
                  <List width={width} height={height} rowCount={pairs.length} rowHeight={60} rowRenderer={this.rowRenderer} noRowsRenderer={this.noRowsRenderer} overscanRowCount={0} />
                )}
              </AutoSizer>
            </TableBody>
          </Table>
        </TableSection>}
      </Spring>
    );
  }
};

const ChangeCell = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`

const Table = styled.div.attrs({ className: '', })`
  width: 100%; overflow: hidden;
`;

const TableToolBar = styled(FlexRowSpaceBetween)`
  @media ${Devices.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
`;

const TableSearchBar = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${Devices.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
`

const TableSection = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TableBody = styled.div`
  height: 80vh;
`;

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TableHeaderCell = styled(Box)`
  width: 15%;
  @media ${Devices.tablet} {
    width: 25%;
    display: ${props => (props.type === "volume") ? "none" : props.type === "orderVolume" ? "none" : props.type === "change" ? "none" : "flex"};
  }
  @media ${Devices.mobileM} {
    width: 50%;
    display: ${props => (props.type === "volume") ? "none" : props.type === "orderVolume" ? "none" : props.type === "change" ? "none" : props.type === "price" ? "none" : props.type === "referencePrice" ? "none" : "flex"};
  }
`;

const Cell = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Devices.tablet} {
    width: 25%;
    display: ${props => (props.type === "volume") ? "none" : props.type === "orderVolume" ? "none" : props.type === "change" ? "none" : "flex"};
  }
  @media ${Devices.mobileM} {
    width: 50%;
    display: ${props => (props.type === "volume") ? "none" : props.type === "orderVolume" ? "none" : props.type === "change" ? "none" : props.type === "price" ? "none" : props.type === "referencePrice" ? "none" : "flex"};
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  padding-left: 6px;
  &:hover {
    background-color: ${Colors.BLUE_MUTED} !important;
    cursor: pointer;
    position: relative;
    border-radius: 3px;