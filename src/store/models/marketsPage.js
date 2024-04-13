// @flow
import * as actionCreators from '../actions/marketsPage'
import * as notifierActionCreators from '../actions/app'
import { getAccountDomain, getTokenPairsDomain } from '../domains'
import { parseQueryMarketDataError } from '../../config/errors'
import { parseTokenPairsData } from '../../utils/parsers'
import type { State, ThunkAction } from '../../types'
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Ensure you replace "YOUR_MIXPANEL_TOKEN" with your actual Mixpanel project token

export default function marketsPageSelector(state: State) {
  let { authenticated, appIsLoaded } = getAccountDomain(state)
  return { authenticated, appIsLoaded }
}

export function queryMarketData(): ThunkAction {
  return async (dispatch, getState, { api, provider }) => {
    try {
      let state = getState()
      let pairDomain = getTokenPairsDomain(state)
      let pairs = pairDomain.getPairsByCode()
      let tokenPairData = await api.fetchTokenPairData()
      tokenPairData = parseTokenPairsData(tokenPairData, pairs)
      let tradingStats = await api.fetchTradingStats()
      dispatch(actionCreators.updateMarketPageData(tokenPairData, tradingStats))
    } catch (e) {
      console.log(e)
      let message = parseQueryMarketDataError(e)
      dispatch(notifierActionCreators.addErrorNotification({ message }))
    };
  };
}

// Example event tracking integration in a React component (assuming this is part of MarketDataComponent.jsx)
function MarketDataComponent() {
  const handleRefreshClick = () => {
    mixpanel.track("Refresh Market Data", {
      "User Action": "Refresh Data",
      "Market": "Crypto"
    });
    // Additional logic for refreshing market data
  };

  const handlePairSelectionChange = (event) => {
    mixpanel.track("Market Pair Selection", {
      "User Action": "Select Pair",
      "Selected Pair": event.target.value // Assuming the value is the pair like "BTC-ETH"
    });
    // Additional logic for handling pair selection
  };

  const handleViewToggle = () => {
    mixpanel.track("Toggle Market Data View", {
      "User Action": "Toggle View",
      "View": "Historical Data"
    });
    // Additional logic for toggling view
  };

  return (
    <div>
      <button type="button" id="refresh-market-data-btn" onClick={handleRefreshClick}>Refresh Data</button>
      <select id="market-pair-selector" onChange={handlePairSelectionChange}>
        {/* Options here */}
      </select>
      <div className="view-toggle" id="market-data-view-toggle" onClick={handleViewToggle}>Toggle View</div>
    </div>
  );
}