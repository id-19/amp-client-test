// Assuming this is part of the React component file that includes the create wallet button
import React from 'react';
import { mixpanel } from 'path-to-mixpanel-setup'; // Adjust the import path as necessary
import { createWallet } from '../store/models/createWalletModal'; // Adjust the import path as necessary

class CreateWalletButton extends React.Component {
  handleCreateWalletClick = async () => {
    const { address, encryptedWallet, password, storeWallet, storePrivateKey } = this.props; // Assuming these props are passed to the component
    const eventProperties = {
      "Address Provided": address ? "Yes" : "No",
      "Encrypted Wallet Saved": storeWallet ? "LocalStorage" : storePrivateKey ? "SessionStorage" : "None",
      "Error": "No" // Default to "No", will be updated in catch block if an error occurs
    };
    try {
      await createWallet({ address, encryptedWallet, password, storeWallet, storePrivateKey });
      mixpanel.track('login-page/create-wallet', eventProperties);
    } catch (error) {
      console.error(error.message);
      eventProperties["Error"] = "Yes";
      mixpanel.track('login-page/create-wallet', eventProperties);
    }
  };

  render() {
    return (
      <button className="create-wallet-button" type="submit" form="create-wallet-form" onClick={this.handleCreateWalletClick} >
        Create Wallet
      </button>
    );
  }
}

export default CreateWalletButton;