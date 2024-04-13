import React from 'react';
import { Redirect } from 'react-router-dom';
import { NonIdealState, Spinner } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel

type Props = {
  logout: void => void,
  authenticated: boolean,
};

class LogoutPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.logout();
    // Track the event as specified in the event signature
    mixpanel.track("Logout Initiated", {
      "Page": "LogoutPage",
      "Method": "ComponentDidMount",
      "Authenticated": this.props.authenticated ? "True" : "False",
    });
  }

  render() {
    const { authenticated } = this.props;
    if (!authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <NonIdealState title="Cleaning up your data..." visual={<Spinner intent="primary" large />}>
        Please wait for a moment.
      </NonIdealState>
    );
  }
}

export default LogoutPage;