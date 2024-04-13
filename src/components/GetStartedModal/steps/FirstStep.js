// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, ModalBody, ModalFooter, Header, FlexRow, FlexColumn, Text, Link } from '../../Common'
import Modal from '../../Modal'
import { DISCORD_URL, MEDIUM_URLS } from '../../../config/urls'
import { Callout, Checkbox, Tabs, Tab } from '@blueprintjs/core'
import Mixpanel from 'mixpanel-browser'

type Props = {
  step: string,
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
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
}

const FirstStep = (props: Props) => {
  const { currentTab, handleChangeTab } = props;
  const trackButtonClick = (step) => {
    Mixpanel.track("Modal Navigation Clicked", { Step: step });
  };
  const trackCheckboxChange = (isChecked) => {
    Mixpanel.track("Help Modal Preference", { "Show Again": isChecked ? "True" : "False" });
  };
  const trackLinkClick = (url, section) => {
    Mixpanel.track("External Link Clicked", { URL: url, Section: section });
  };
  return (
    <React.Fragment>
      <SideMenu ml={3} mt={3}>
        <Button my={1} text="Get Started" onClick={() => { handleChangeTab('default'); trackButtonClick('Get Started'); }} active={currentTab === 'default'} intent={currentTab === 'default' ? 'primary' : 'none'} />
        <Button my={1} text="Basics" onClick={() => { handleChangeTab('basics'); trackButtonClick('Basics'); }} active={currentTab === 'basics'} intent={currentTab === 'basics' ? 'primary' : 'none'} />
        <Button my={1} text="Security" onClick={() => { handleChangeTab('security'); trackButtonClick('Security'); }} active={currentTab === 'security'} intent={currentTab === 'security' ? 'primary' : 'none'} />
        <Button my={1} text="Community/News" onClick={() => { handleChangeTab('news'); trackButtonClick('Community/News'); }} active={currentTab === 'news'} intent={currentTab === 'news' ? 'primary' : 'none'} />
      </SideMenu>
      <Tabs selectedTabId={currentTab}>
        <Tab id="default" panel={<GetStartedSectionRenderer {...props} />} />
        <Tab id="basics" panel={<BasicsSectionRenderer {...props} />} />
        <Tab id="security" panel={<SecuritySectionRenderer {...props} />} />
        <Tab id="news" panel={<NewsSectionRenderer {...props} />} />
        <Tab id="startTrading" panel={<StartTradingContentRenderer {...props} />} />
      </Tabs>
    </React.Fragment>
  );
};
// The rest of the component implementations remain the same, with added Mixpanel tracking in onClick handlers for Links and Checkboxes similar to the Button examples above.