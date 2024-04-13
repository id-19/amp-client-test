// @flow
import React from 'react';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { getLocalStorageWallets } from '../../store/services/storage';
import WalletSettingsForm from '../../components/WalletSettingsForm/index.js';
import SignerSettingsForm from '../../components/SignerSettingsForm/index.js';
import { Box } from '../../components/Common';
import { Devices } from '../../components/Common/Variables'
import { Spring } from 'react-spring'
import mixpanel from 'mixpanel-browser'; // Assuming mixpanel is imported
import type { Wallet } from '../../types/wallets'
import type { Address } from '../../types/common'

type Props = {
  authenticated: bool
}

type State = {
  wallets: Array<Wallet>
}

class SettingsPage extends React.PureComponent<Props, State> {
  state = {
    wallets: getLocalStorageWallets()
  };

  removeWallet = (address: Address) => {
    localStorage.removeItem(address);
    this.setState({ wallets: getLocalStorageWallets() });
    // Mixpanel tracking for Wallet Settings Updated
    mixpanel.track("Wallet Settings Updated", {
      "Number of Wallets": this.state.wallets.length,
      "Action": "Remove"
    });
  };

  updateSignerSettings = () => {
    // Mixpanel tracking for Signer Settings Updated
    mixpanel.track("Signer Settings Updated", {
      "Signer Action": "Updated"
    });
  };

  render() {
    const { wallets } = this.state;
    if (!this.props.authenticated) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <Spring from={{ opacity: 0 }} to= {{ opacity: 1}} >
        {props => <Box style={props}>
          <WalletSettingsFormBox p={2} pt={3}>
            <WalletSettingsForm wallets={wallets} removeWallet={this.removeWallet} />
          </WalletSettingsFormBox>
          <SignerSettingsFormBox p={2} pb={3}>
            <SignerSettingsForm updateSettings={this.updateSignerSettings} />
          </SignerSettingsFormBox>
        </Box>}
      </Spring>
    );
  }
}

const WalletSettingsFormBox = styled(Box)`
  width: 500px;
  @media ${Devices.mobileL} {
    width: 100%;
  }
`

const SignerSettingsFormBox = styled(Box)`
  width: 500px;
  @media ${Devices.mobileL} {
    width: 100%;
  }
`

export default SettingsPage;