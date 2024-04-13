// @flow
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import { FlexRow, Box } from '../Common'
import { Spring } from 'react-spring'
import mixpanel from 'mixpanel-browser';

type Props = {
  step: string,
  goToFirstStep: void => void,
  goToSecondStep: void => void,
  goToThirdStep: void => void,
  userHasETH: boolean,
  userHasWETH: boolean,
  userHasApprovedWETH: boolean,
  handleConvertETH: void => void,
  handleApproveWETH: void => void,
  ETHBalance: number,
  WETHBalance: number,
  convertAmount: number,
  convertFraction: number,
  changeConvertETHFraction: number => void,
  ETHAddress: string,
  approveTxStatus: string,
  approveTxHash: string,
  convertTxStatus: string,
  convertTxHash: string,
  redirectToTradingPage: void => void,
  redirectToFAQPage: void => void,
  toggleShowHelpModalCheckBox: void => void,
  showHelpModalChecked: boolean,
  handleClose: void => void,
  isOpen: boolean,
  transactionsPending: boolean,
  transactionsComplete: boolean,
  currentTab: string,
  handleChangeTab: string => void,
};

const trackEvent = (eventName, properties) => {
  mixpanel.track(eventName, properties);
};

const GetStartedModalRenderer = (props: Props) => {
  const { handleClose, isOpen, step } = props;

  useEffect(() => {
    const beforeClose = () => {
      trackEvent("Modal Closed", {
        "Reason": "User clicked close",
        "Step at Close": step,
      });
    };
    window.addEventListener('beforeunload', beforeClose);
    return () => {
      window.removeEventListener('beforeunload', beforeClose);
    };
  }, [step]);

  useEffect(() => {
    // Track the current step when it changes
    if (step === '1' || step === '2' || step === '3') {
      const completed = props.transactionsComplete ? "True" : "False";
      trackEvent(`Onboarding Step ${step}`, {
        "Step": step,
        "Completed": completed,
      });
    }
  }, [step, props.transactionsComplete]);

  return (
    <Modal title="Get Started" icon="info-sign" isOpen={isOpen} onClose={() => {
      handleClose();
      trackEvent("Modal Closed", {
        "Reason": "User clicked close",
        "Step at Close": step,
      });
    }}>
      <ModalContent>
        <Stepper {...props} />
      </ModalContent>
    </Modal>
  );
};

const Stepper = (props: Props) => {
  const { step } = props;
  let StepComponent = null;
  switch (step) {
    case '1':
      StepComponent = <FirstStep {...props} />;
      break;
    case '2':
      StepComponent = <SecondStep {...props} />;
      break;
    case '3':
      StepComponent = <ThirdStep {...props} />;
      break;
    default:
      StepComponent = null;
  }
  return (
    <>
      {StepComponent}
    </>
  );
};

// 🚀📈 💶💵💴🔥🌊🛸🍪🧞🧙🐲
const ModalContent = styled(FlexRow)``;

export default GetStartedModalRenderer;