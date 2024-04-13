// @flow
import React from 'react';
import Download from '@axetroy/react-download';
import { Button, Spinner, Checkbox, Dialog, FormGroup, Icon, InputGroup, Intent, Label, ProgressBar, } from '@blueprintjs/core';
import Steps from 'rc-steps';
import styled from 'styled-components';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel

type Props = {
  address: string,
  title: string,
  visible: boolean,
  hideModal: void => void,
  currentStep: number,
  goBackToCreateWallet: void => void,
  goToDownloadWallet: (SyntheticEvent<>) => Promise<void>,
  goToComplete: (SyntheticEvent<>) => void,
  goBackToDownloadWallet: (SyntheticEvent<>) => void,
  complete: (SyntheticEvent<>) => void,
  cancel: (SyntheticEvent<>) => void,
  password: string,
  passwordStatus: string,
  encryptionPercentage: number,
  showPassword: boolean,
  togglePasswordView: () => void,
  showEncryptionProgress: boolean,
  handleChange: (SyntheticInputEvent<>) => void,
  storeWallet: boolean,
  storePrivateKey: boolean,
  encryptedWallet: string,
};

const intents = {
  invalid: Intent.DANGER,
  valid: Intent.SUCCESS,
  incomplete: Intent.PRIMARY,
};

const inputStatuses = {
  password: {
    incomplete: '',
    valid: '',
    invalid: 'Password is required.',
  },
};

const CreateWalletWizardRenderer = (props: Props) => {
  const {
    title,
    address,
    visible,
    hideModal,
    currentStep,
    password,
    showPassword,
    encryptedWallet,
    passwordStatus,
    showEncryptionProgress,
    encryptionPercentage,
    goToDownloadWallet,
    cancel,
    goToComplete,
    goBackToCreateWallet,
    complete,
    goBackToDownloadWallet,
    togglePasswordView,
    handleChange,
    storeWallet,
    storePrivateKey,
  } = props;

  // Modified event handlers to include Mixpanel tracking
  const handleDownloadWalletClick = (e) => {
    mixpanel.track("Download Wallet Clicked");
    goToDownloadWallet(e);
  };

  const handleCompleteLoginClick = (e) => {
    mixpanel.track("Complete & Login Clicked");
    complete(e);
  };

  const handleCreateWalletClick = (e) => {
    mixpanel.track("Create Wallet Clicked");
    goToDownloadWallet(e);
  };

  const handleTogglePasswordView = () => {
    mixpanel.track("Toggle Password Visibility");
    togglePasswordView();
  };

  const handleStoreWalletChange = (e) => {
    mixpanel.track("Store Wallet Option Changed", { Option: "Store encrypted wallet in local storage" });
    handleChange(e);
  };

  const handleStorePrivateKeyChange = (e) => {
    mixpanel.track("Store Private Key Option Changed", { Option: "Store private key in session storage" });
    handleChange(e);
  };

  const buttons = [
    { ok: 'Create Wallet', cancel: 'Cancel', onOkClick: handleCreateWalletClick, onCancelClick: cancel, },
    { ok: 'I have downloaded my wallet', cancel: 'Go back', onOkClick: handleCompleteLoginClick, onCancelClick: goBackToCreateWallet, },
    { ok: 'Complete & Login', cancel: 'Go back', onOkClick: handleCompleteLoginClick, onCancelClick: goBackToDownloadWallet, },
  ];

  const content = {
    '0': (
      <WalletPasswordStep
        password={password}
        showPassword={showPassword}
        passwordStatus={passwordStatus}
        handleChange={handleChange}
        togglePasswordView={handleTogglePasswordView}
        showEncryptionProgress={showEncryptionProgress}
        encryptionPercentage={encryptionPercentage}
      />
    ),
    '1': <WalletDownloadStep address={address} encryptedWallet={encryptedWallet} />,
    '2': (
      <WalletInformationStep
        address={address}
        storeWallet={storeWallet}
        storePrivateKey={storePrivateKey}
        handleChange={handleChange}
      />
    ),
  };

  return (
    <Dialog
      title={title}
      icon="inbox"
      isOpen={visible}
      onClose={hideModal}
      width={800}
      className="bp3-dark"
      style={{ width: '600px' }}
    >
      {currentStep === 3 ? (
        <LoadingState />
      ) : (
        <div>
          <div className="bp3-dialog-body">
            <Steps current={currentStep}>
              <Steps.Step title="Choose password" />
              <Steps.Step title="Download Wallet" />
              <Steps.Step title="Wallet Information" />
            </Steps>
            {content[currentStep]}
          </div>
          <div className="bp3-dialog-footer">
            <div className="bp3-dialog-footer-actions">
              <Button key="Previous" text={buttons[currentStep].cancel} onClick={buttons[currentStep].onCancelClick} />
              <Button key="Next" text={buttons[currentStep].ok} intent={Intent.PRIMARY} onClick={buttons[currentStep].onOkClick} />
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

// Other component definitions remain unchanged

export default CreateWalletWizardRenderer;