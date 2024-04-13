// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';
import { createWalletFromJSON } from '../../store/services/wallet';
import type { LoginWithWallet } from '../../types/loginPage';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is installed and imported

type Props = {
  authenticated: boolean,
  loginWithMetamask: () => void,
  loginWithLedger: () => void,
  loginWithWallet: LoginWithWallet => void,
  removeNotification: any => void,
};

type State = {
  view: string,
  metamaskStatus: 'unlocked' | 'locked' | 'undefined',
};

class LoginPage extends React.PureComponent<Props, State> {
  state = {
    view: 'loginMethods',
    metamaskStatus: 'undefined',
  };

  componentDidMount = () => {
    typeof window.web3 === 'undefined' ? this.setState({ metamaskStatus: 'undefined' })
    : typeof window.web3.eth.defaultAccount === 'undefined' ? this.setState({ metamaskStatus: 'locked' })
    : this.setState({ metamaskStatus: 'unlocked' });
  };

  showWalletLoginForm = () => {
    this.setState({ view: 'wallet' });
    Mixpanel.track("Navigate", { Destination: "Wallet Login Form" });
  };

  showLoginMethods = () => {
    this.setState({ view: 'loginMethods' });
    Mixpanel.track("Navigate", { Destination: "Login Methods" });
  };

  showCreateWallet = () => {
    this.setState({ view: 'createWallet' });
    Mixpanel.track("Navigate", { Destination: "Create Wallet" });
  };

  hideModal = () => {
    this.setState({ view: 'loginMethods' });
    Mixpanel.track("Action", { Type: "Hide Modal" });
  };

  loginWithMetamask = () => {
    this.props.loginWithMetamask();
    Mixpanel.track("Login Attempt", { Method: "Metamask" });
  };

  loginWithLedger = () => {
    this.props.loginWithLedger();
    Mixpanel.track("Login Attempt", { Method: "Ledger" });
  };

  loginWithWallet = (loginDetails: LoginWithWallet) => {
    this.props.loginWithWallet(loginDetails);
    Mixpanel.track("Login Attempt", { Method: "Wallet File" });
  };

  walletCreated = async (props: Object) => {
    const { password, encryptedWallet, storeWallet, storePrivateKey } = props;
    var { wallet } = await createWalletFromJSON(encryptedWallet, password);
    if (wallet) {
      this.props.loginWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
      Mixpanel.track("Wallet Creation", { Success: "True" });
    }
  };

  render() {
    const { props: { authenticated }, state: { view, metamaskStatus },
      showWalletLoginForm, showLoginMethods, showCreateWallet, hideModal,
      walletCreated, loginWithMetamask, loginWithLedger, loginWithWallet,
    } = this;

    if (authenticated) {
      return <Redirect to="/wallet" />;
    }

    return (
      <div>
        <LoginPageRenderer
          view={view}
          metamaskStatus={metamaskStatus}
          loginWithWallet={loginWithWallet}
          loginWithLedger={loginWithLedger}
          loginWithMetamask={loginWithMetamask}
          showCreateWallet={showCreateWallet}
          hideModal={hideModal}
          walletCreated={walletCreated}
          showWalletLoginForm={showWalletLoginForm}
          showLoginMethods={showLoginMethods}
        />
      </div>
    );
  }
}

export default LoginPage;