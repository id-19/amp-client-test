// @flow
import React from 'react';
import * as notifierActionCreators from '../actions/app';
import { getOrdersDomain, getAccountDomain } from '../domains';
import type { State, ThunkAction } from '../../types';
import { parseCancelOrderError } from '../../config/errors';
import { getSigner } from '../services/signer';
import { mixpanel } from '../services/analytics';

export default function ordersTableSelector(state: State) {
  let { authenticated } = getAccountDomain(state);
  let ordersDomain = getOrdersDomain(state);
  return {
    orders: ordersDomain.lastOrders(50),
    authenticated,
  };
}

export const cancelOrder = (hash: string): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    try {
      let signer = getSigner();
      let orderCancelPayload = await signer.createOrderCancel(hash);
      dispatch(notifierActionCreators.addSuccessNotification({ message: `Cancelling order ...` }));
      socket.sendNewOrderCancelMessage(orderCancelPayload);
    } catch (error) {
      let message = parseCancelOrderError(error);
      return dispatch(notifierActionCreators.addErrorNotification({ message }));
    }
  };
};

class OrderCancellationButton extends React.Component {
  handleCancelOrder = () => {
    const { hash, cancelOrder } = this.props;
    cancelOrder(hash);
    mixpanel.track('trading-page/cancel-order'); // Ensuring tracking is directly tied to the button's onClick event
  };

  render() {
    return (
      <button type="button" className="cancel-order-button" onClick={this.handleCancelOrder}>
        Cancel Order
      </button>
    );
  }
}