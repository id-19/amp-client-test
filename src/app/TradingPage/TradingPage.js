// @flow
import React from 'react'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { CloseableCallout, EmphasizedText } from '../../components/Common'
import { Redirect } from 'react-router-dom'
import { AutoSizer } from 'react-virtualized'
import { SizesAsNumbers as Sizes } from '../../components/Common/Variables'
import { Responsive } from 'react-grid-layout'
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is initialized elsewhere or here
const ResponsiveReactGridLayout = Responsive
type Props = {
  authenticated: boolean,
  isConnected: boolean,
  isInitiated: boolean,
  balancesLoading: boolean,
  baseTokenBalance: string,
  quoteTokenBalance: string,
  baseTokenAllowance: string,
  quoteTokenAllowance: string,
  baseTokenSymbol: string,
  quoteTokenSymbol: string,
  pairIsAllowed: boolean,
  pairName: string,
  queryTradingPageData: () => void,
  makeFee: string,
  takeFee: string,
  toggleAllowances: (string, string) => void,
}
type State = {
  calloutVisible: boolean,
  calloutOptions: Object,
  layouts: LayoutMap,
  items: Array<string>,
  collapsedItems: any,
  currentBreakpoint: string,
}
type Layout = Array<Object>
type LayoutMap = { [string]: Layout }
// Layouts omitted for brevity
class TradingPage extends React.PureComponent<Props, State> {
  state = {
    items: ['tokenSearcher', 'orderForm', 'ohlcv', 'ordersTable', 'orderBook', 'tradesTable'],
    calloutVisible: false,
    calloutOptions: {},
    layouts: defaultLayouts,
    currentBreakpoint: 'lg',
    collapsedItems: {
      'tokenSearcher': false,
      'orderForm': false,
      'ohlcv': false,
      'ordersTable': false,
      'orderBook': false,
      'tradesTable': false
    }
  }
  // Callouts omitted for brevity
  componentDidMount() {
    if (this.props.isConnected) {
      this.props.queryTradingPageData();
    }
    // this.checkIfCalloutRequired()
  }
  // Lifecycle methods and event handlers omitted for brevity
  renderItem =(item: string) => {
    const { items } = this.state
    const fullScreen = (items[0] === "ohlcv" && items.length === 1)
    const renderedItems = {
      tokenSearcher: (
        <div key="tokenSearcher" onClick={() => mixpanel.track("Token Search", {"Search Term": "User entered search term"})}>
          <TokenSearcher onCollapse={this.onCollapse} onExpand={this.onExpand} onResetDefaultLayout={this.onResetDefaultLayout} />
        </div>
      ),
      orderForm: (
        <form key="orderForm" onSubmit={(e) => {e.preventDefault(); mixpanel.track("Order Submission", {"Order Type": "Buy or Sell", "Asset": "Asset being traded", "Amount": "Amount of the order", "Price": "Order price"})}}>
          <OrderForm onCollapse={this.onCollapse} onExpand={this.onExpand} onResetDefaultLayout={this.onResetDefaultLayout} />
        </form>
      ),
      ohlcv: (
        <div key="ohlcv" onClick={() => mixpanel.track("Chart Full Screen Toggle", {"Full Screen": fullScreen.toString()})}>
          <OHLCV onCollapse={this.onCollapse} onExpand={this.onExpand} onResetDefaultLayout={this.onResetDefaultLayout} onFullScreen={this.onFullScreenOHLCV} fullScreen={fullScreen} />
        </div>
      ),
      ordersTable: (
        <div key="ordersTable" onClick={() => mixpanel.track("Orders Table Toggle", {"Collapsed": this.state.collapsedItems['ordersTable'].toString()})}>
          <OrdersTable onCollapse={this.onCollapse} onExpand={this.onExpand} onResetDefaultLayout={this.onResetDefaultLayout} />
        </div>
      ),
      tradesTable: (
        <div key="tradesTable" onClick={() => mixpanel.track("Trades Table Toggle", {"Collapsed": this.state.collapsedItems['tradesTable'].toString()})}>
          <TradesTable onCollapse={this.onCollapse} onExpand={this.onExpand} onResetDefaultLayout={this.onResetDefaultLayout} />
        </div>
      )
    }
    return renderedItems[item]
  }
  render() {
    const { authenticated, isInitiated } = this.props
    const { calloutOptions, calloutVisible, layouts, items } = this.state
    return (
      <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ width, height }) => (
          <ResponsiveReactGridLayout
            width={width}
            layouts={layouts}
            breakpoints={{lg: Sizes.laptop, md: Sizes.tablet, sm: Sizes.mobileL, xs: Sizes.mobileM, xxs: Sizes.mobileS }}
            cols={{lg:60, md: 60, sm: 60, xs: 60, xxs: 60 }}
            onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
            onBreakpointChange={this.onBreakpointChange}
            className="layout"
            rowHeight={10}
            compactType="vertical"
            draggableHandle=".drag"
          >
            {items.map(item => this.renderItem(item))}
          </ResponsiveReactGridLayout>
        )}
      </AutoSizer>
    )
  }
}
export default TradingPage