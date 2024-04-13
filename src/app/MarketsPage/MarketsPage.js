// @flow
import React from 'react'
import Mixpanel from 'mixpanel-browser'; // Import Mixpanel
import MarketsPageRenderer from './MarketsPageRenderer'

export type Props = {
  authenticated: boolean,
  appIsLoaded: boolean,
  connected: boolean,
  loading: boolean,
  queryMarketData: void => void,
}

export type State = {
  showMarketStatistics: boolean
}

class MarketsPage extends React.PureComponent<Props, State> {
  state = {
    showMarketStatistics: false
  }

  componentDidMount() {
    const { queryMarketData, appIsLoaded } = this.props
    if (appIsLoaded) queryMarketData()
  }

  toggleMarketStatistics = () => {
    const newVisibility = !this.state.showMarketStatistics;
    this.setState({ showMarketStatistics: newVisibility })
    // Mixpanel event tracking
    Mixpanel.track("Toggle Market Statistics", {
      "Market Statistics Visible": newVisibility ? "True" : "False",
      "User Authenticated": this.props.authenticated ? "True" : "False",
    });
  }

  render() {
    const { loading, appIsLoaded } = this.props
    const { showMarketStatistics } = this.state
    if (!appIsLoaded) return null
    return (
      <MarketsPageRenderer
        loading={loading}
        showMarketStatistics={showMarketStatistics}
        toggleMarketStatistics={this.toggleMarketStatistics}
      />
    )
  }
}

export default MarketsPage