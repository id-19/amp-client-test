import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import WalletLoginForm from '../../components/WalletLoginForm'
import CreateWalletForm from '../../components/CreateWalletForm'
import type { CreateWalletParams } from '../../types/createWallet'
import { Spring } from 'react-spring'
import { Spinner, Button } from '@blueprintjs/core'
import { Centered, Divider, LargeText, LinkText, Colors, Flex, Indent, FlexRow, Box, TwitterShareLink, Card } from '../../components/Common'
import { Devices } from '../../components/Common/Variables'
import mixpanel from 'mixpanel-browser'; mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

type Props = {
  view: string,
  showWalletLoginForm: CreateWalletParams => void,
  showLoginMethods: () => void,
  loginWithMetamask: void => void,
  loginWithLedger: void => void,
  loginWithWallet: void => void,
}

const LoginPageRenderer = (props: Props) => {
  const {
    view,
    loginWithMetamask,
    loginWithWallet,
    loginWithLedger,
    showCreateWallet,
    showWalletLoginForm,
    metamaskStatus,
    showLoginMethods,
    walletCreated,
  } = props

  const trackLoginMethod = (method) => {
    mixpanel.track("Login Method Selected", { Method: method });
  };

  const trackExternalLink = (destination) => {
    mixpanel.track("External Link Clicked", { Destination: destination });
  };

  const views = {
    loginMethods: (
      <LoginMethodsView
        showWalletLoginForm={showWalletLoginForm}
        loginWithMetamask={() => {
          trackLoginMethod("Metamask");
          loginWithMetamask();
        }}
        loginWithLedger={loginWithLedger}
        showCreateWallet={showCreateWallet}
        metamaskStatus={metamaskStatus}
      />
    ),
    // Other views remain unchanged
  }

  return views[view]
}

const LoginMethodsView = (props: Props) => {
  const {
    showWalletLoginForm,
    loginWithMetamask,
    metamaskStatus,
    showCreateWallet
  } = props

  return (
    <FlexRow p={5} pb={6} justifyContent="space-between">
      <Box />
      <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
        {props => <WelcomeCard style={props} intent="success" title="Disclaimer" hideOnTablet>
          // Content remains unchanged
        </WelcomeCard>}
      </Spring>
      <LoginMethodsBox>
        <LoginMethodsHeading>
          <FormattedMessage {...messages.loginMethods} />
        </LoginMethodsHeading>
        <LoginCards>
          <Flex flexDirection="column" width="100%">
            <Flex flexDirection="column" py={1}>
              <StyledButton onClick={() => {
                trackLoginMethod("Metamask");
                loginWithMetamask();
              }} disabled={metamaskStatus === "undefined"} large intent="primary" fill>
                // Button content remains unchanged
              </StyledButton>
              // Other elements remain unchanged
            </Flex>
            <Flex flexDirection="column" py={1}>
              <StyledButton onClick={() => {
                trackLoginMethod("Wallet");
                showWalletLoginForm();
              }} large intent="primary" fill>
                // Button content remains unchanged
              </StyledButton>
              <Flex p={1} justifyContent="flex-end">
                <LinkText onClick={() => {
                  mixpanel.track("Create Wallet Initiated", {});
                  showCreateWallet();
                }}>→ Create a new wallet</LinkText>
              </Flex>
            </Flex>
            <Flex p={1} justifyContent="flex-end">
              <a href="https://metamask.io/" onClick={() => trackExternalLink("Metamask Website")}>→ Get Metamask</a>
            </Flex>
          </Flex>
        </LoginCards>
      </LoginMethodsBox>
      <Box />
    </FlexRow>
  )
}

export default LoginPageRenderer

const StyledButton = styled(Button)`
  box-shadow: ${"0 3px 20px " + Colors.BLUE1 + "!important;"}
  &hover: {
    background-color: ${Colors.BLUE5}
    box-shadow: ${"0 3px 20px " + Colors.BLUE5 + "!important;"}
  }
`

const WelcomeCard = styled(Card)`
  width: 500px;
`

const LoginMethodsBox = styled(Box)`
  width: 30%;
  @media ${Devices.tablet} {
    width: 60%;
  }
  @media ${Devices.mobileL} {
    width: 100%;
  }
`

const WidgetWrapper = styled.div`
  width: 600px;
  margin: 60px auto;
`;

const Reminder = styled.div``;

const LoginMethodsHeading = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`;

const LoginCards = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AnnouncementMessages = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const WelcomeMessage = styled.div`
  font-size: 40px;
`

const messages = defineMessages({
  announcement: {
    id: 'loginPage.announcement',
    defaultMessage: 'Make sure you are visiting {link} to prevent any phishing attacks.',
  },
  noPlugins: {
    id: 'loginPage.noPlugins',
    defaultMessage: "Never trade more value than you are willing to lose.",
  },
  thisAppIsInBeta: {
    id: 'loginPage.thisAppIsInBeta',
    defaultMessage: "This app is in beta. Please expect a certain amount of bugs for upcoming weeks.",
  },
  exchangeLaws: {
    id: 'loginPage.exchangeLaws',
    defaultMessage: ' To adhere to international securities and exchange laws, AMP Marketplace prohibits use of this platform by US and South Korean residents. By using this platform, you are confirming that you are not excluded from use by this criteria.',
  },
  tokenListing: {
    id: 'loginPage.tokenListing',
    defaultMessage: 'For inquiries about listing your token, contact us at support@proofsuite.com.'
  },
  noOfficialStaffs: {
    id: 'loginPage.noOfficialStaffs',
    defaultMessage: 'Never make transactions or send funds to anyone who claims to be a member of Proof Suite support.',
  },
  noDisclosure: {
    id: 'loginPage.noDisclosure',
    defaultMessage: 'Never disclose your password, private keys or other authentication elements to anyone, including Proof Suite support.',
  },
  loginMethods: {
    id: 'loginPage.loginMethodsHeading',
    defaultMessage: 'Choose a login method',
  },
  connect: {
    id: 'loginPage.connect',
    defaultMessage: 'Connect to {name}',
  },
  import: {
    id: 'loginPage.import',
    defaultMessage: 'Import your {name}',
  },
  metamask: {
    id: 'loginPage.metamask',
    defaultMessage: 'Metamask',
  },
  ledger: {
    id: 'loginPage.ledger',
    defaultMessage: 'Ledger',
  },
  metamaskNotFound: {
    id: 'loginPage.metamask',
    defaultMessage: 'Metamask not detected'
  },
  wallet: {
    id: 'loginPage.wallet',
    defaultMessage: 'Wallet',
  },
  createWallet: {
    id: 'loginPage.createWallet',
    defaultMessage: 'Create a new wallet',
  },
});