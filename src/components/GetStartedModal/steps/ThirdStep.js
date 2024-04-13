// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Intent } from '@blueprintjs/core'
import { ModalFooter, ModalBody, FlexColumn } from '../../Common'
import { DISCORD_URL } from '../../../config/urls'
import { Spring } from 'react-spring'
import mixpanel from 'mixpanel-browser'

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
  handleClose: void => void,
  redirectToTradingPage: void => void,
  redirectToFAQPage: void => void,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
}

const Thirdstep = (props: Props) => {
  const {
    handleClose,
    redirectToTradingPage,
    redirectToFAQPage,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox,
    goToFirstStep,
  } = props

  // Event tracking functions
  const trackButtonClick = (purpose) => {
    mixpanel.track("Button Click", { "Button Purpose": purpose });
  };
  const trackCheckboxToggle = (state) => {
    mixpanel.track("Checkbox Toggle", { "Checkbox State": state ? "Checked" : "Unchecked" });
  };
  const trackLinkClick = (purpose) => {
    mixpanel.track("Link Click", { "Link Purpose": purpose });
  };

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} >
      {animation => <FlexColumn width="100%" style={animation}>
        <ModalBody>
          <Box>
            <h2>You have everything you need to start trading!</h2>
            <h2>Choose what to do next:</h2>
            <ButtonGroupBox>
              <ButtonBox>
                <Button intent={Intent.PRIMARY} onClick={() => { redirectToTradingPage(); trackButtonClick("View Trading Page"); }}>
                  View Trading page
                </Button>
              </ButtonBox>
              <ButtonBox>
                <Button intent={Intent.PRIMARY} onClick={() => { handleClose(); trackButtonClick("View Portfolio"); }}>
                  View Portfolio
                </Button>
              </ButtonBox>
              <ButtonBox>
                <Button intent={Intent.PRIMARY} onClick={() => { redirectToFAQPage(); trackButtonClick("Frequently Asked Questions"); }}>
                  Frequently asked questions
                </Button>
              </ButtonBox>
              <ButtonBox>
                <Button intent={Intent.PRIMARY} onClick={() => { goToFirstStep(); trackButtonClick("Go Back to Introduction Modal"); }}>
                  Go back to introduction modal
                </Button>
              </ButtonBox>
            </ButtonGroupBox>
            <ContactLinksBox>
              <p>Contact us at support@proofsuite.com</p>
              <p>Join our <a href={DISCORD_URL} onClick={() => trackLinkClick("Join Discord Channel")}>Discord</a> channel</p>
            </ContactLinksBox>
          </Box>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onChange={(e) => { toggleShowHelpModalCheckBox(e.target.checked); trackCheckboxToggle(e.target.checked); }}>
              Do not show again
            </Checkbox>
            <Button onClick={handleClose}>Close</Button>
          </FooterBox>
        </ModalFooter>
      </FlexColumn>}
    </Spring>
  )
}

const Box = styled.div`
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
`

const ButtonBox = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ButtonGroupBox = styled.div`
  padding-left: 25%;
  padding-right: 25%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const FooterBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

const ContactLinksBox = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Thirdstep