// @flow
import React from 'react';
import styled from 'styled-components';
import MarketsTableRenderer from './MarketsTableRenderer';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

export type PairData = {
  pair: string,
  baseTokenSymbol: string,
  quoteTokenSymbol: string,
  baseTokenAddress: string,
  baseTokenDecimals: number,
  quoteTokenDecimals: number,
  quoteTokenAddress: string,
  price: number,
  change: number,
  orderVolume: number,
  makeFee: string,
  takeFee: string,
  listed: bool,
  active: bool,
  rank: number
}

type Props = {
  pairs: Array<PairData>,
  quoteTokens: Array<string>,
  redirectToTradingPage: (string, string) => void,
  currentReferenceCurrency: string,
  toggleMarketStatistics: void => void,
};

type State = {
  searchInput: string,
  selectedTab: string,
};

class MarketsTable extends React.PureComponent<Props, State> {
  static defaultProps = {
    pairs: []
  }

  state = {
    searchInput: '',
    selectedTab: this.props.quoteTokens[0],
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
    mixpanel.track("Market Search", { "Search Term": e.target.value }); // Track Market Search event
  };

  handleChangeTab = (selectedTab: string ) => {
    this.setState({ selectedTab });
    mixpanel.track("Tab Change", { "Selected Tab": selectedTab }); // Track Tab Change event
  }

  filterTokens = (pairs: Array<PairData>) => {
    const { searchInput, selectedTab } = this.state;
    if (selectedTab !== 'ALL') pairs = pairs.filter(pair => pair.quoteTokenSymbol === selectedTab);
    pairs = searchInput ? pairs.filter(pair => pair.baseTokenSymbol.indexOf(searchInput.toUpperCase()) > -1) : pairs;
    return pairs;
  };

  render() {
    let { pairs, redirectToTradingPage, quoteTokens, currentReferenceCurrency, toggleMarketStatistics } = this.props;
    let { searchInput, selectedTab } = this.state;
    let filteredPairs = this.filterTokens(pairs);
    let tabs = quoteTokens.concat(['ALL']);

    return (
      <Wrapper>
        <MarketsTableRenderer
          pairs={filteredPairs}
          searchInput={searchInput}
          handleSearchInputChange={this.handleSearchInputChange}
          redirectToTradingPage={(pair, quoteToken) => {
            redirectToTradingPage(pair, quoteToken);
            mixpanel.track("Redirect To Trading", { "Pair": pair, "Quote Token": quoteToken }); // Track Redirect To Trading event
          }}
          quoteTokens={quoteTokens}
          tabs={tabs}
          selectedTab={selectedTab}
          handleChangeTab={this.handleChangeTab}
          currentReferenceCurrency={currentReferenceCurrency}
          toggleMarketStatistics={toggleMarketStatistics}
        />
      </Wrapper>
    );
  }
}

export default MarketsTable;

const Wrapper = styled.div`
  height: 100%;
`;