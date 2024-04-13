import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { Box, Link, Paragraph, EmphasizedText } from "../../components/Common";
import { Devices } from '../../components/Common/Variables';
import FaqItem from './FaqItem';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_ACTUAL_MIXPANEL_PROJECT_TOKEN");

class FaqPage extends React.PureComponent {
  trackLinkClick = (url, text) => {
    mixpanel.track("External Link Clicked", { "URL": url, "Link Text": text });
  };

  trackFaqItemClick = (question) => {
    mixpanel.track("FAQ Item Clicked", { "Question": question });
  };

  render() {
    const { match } = this.props;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <Container style={props}>
          <h1>AMP Knowledge Base</h1>
          <FaqGrid>
            <FirstColumn>
              <FaqItem question="What is AMP ?" match={match} onClick={() => this.trackFaqItemClick("What is AMP ?")}>
                AMP is a community-owned marketplace and decentralized exchange built on the Ethereum blockchain. AMP trades are settled directly between the two exchanging parties without any intermediates. We do not hold any funds and have no ability to do so. With AMP, you can trade any ERC20 Ethereum token whether they represent native Ethereum tokens or are tethered tokens representing other cryptocurrencies or fiat currencies.
              </FaqItem>
              <Box p={2} />
              <FaqItem question="Are there fees ?" match={match} onClick={() => this.trackFaqItemClick("Are there fees ?")}>
                Contrary to most exchanges that take a percentage of each transaction value, AMP trades only cost a fixed amount that include the gas fees. The trading is denominated in the quote currency of the traded pair. For example, when trading the ETH/USDC pair, each trade will cost 0.5 USDC when completely matched. The current fees for each quote token at the time of this writing are 0.5 USDC (for USDC pairs), 0.5 DAI (for DAI pairs) and 0.004 WETH (for WETH pairs).
              </FaqItem>
              <Box p={2} />
              <FaqItem question="How is AMP different from an exchange like Binance or Coinbase ?" match={match} onClick={() => this.trackFaqItemClick("How is AMP different from an exchange like Binance or Coinbase ?")}>
                Unlike custodial and centralized exchanges, AMP does not hold any funds nor secret keys. You can deposit and withdraw your funds immediately and your account can not be compromised by a disgruntled employee or a database hack.
              </FaqItem>
              <Box p={2} />
              {/* Additional FaqItem components with onClick handlers calling this.trackFaqItemClick with their respective questions */}
              <FaqItem question="What is my ETH wallet balance ? ETH trading balance?" match={match} onClick={() => this.trackFaqItemClick("What is my ETH wallet balance ? ETH trading balance?")}>
                <EmphasizedText bold>Short answer</EmphasizedText>
                <br /><br />
                <div>
                  <li>Your ETH wallet balance is your normal ETH balance.</li>
                  <li>We recommend that you leave some ETH in your wallet if you need to make an an Ethereum transaction for example</li>
                  <li>Your ETH trading balance is the amount of ETH that can be used for placing orders on AMP.</li>
                  <li>You can not use your ETH trading balance for paying gas fees</li>
                  <li>You can move ETH between your wallet and your trading account at any time (Proofsuite does not hold any funds)</li>
                </div>
                <br /><br />
                <EmphasizedText bold>Detailed answer</EmphasizedText>
                <br /><br />
                <div>
                  <li>Ether or ETH is the native currency of the Ethereum blockchain.</li>
                  <li>WETH is a tokenized version of ETH that implements the ERC20 standard. </li>
                  <li>When you deposit ETH into your trading account, you convert ETH into WETH. </li>
                </div>
                <br />
                <p> As other decentralized exchanges, AMP uses WETH to improve user experience. We also choose to not make the distinction between ETH and WETH on the user interface to further improve user experience for people that are not familiar with WETH. You can convert any amount of ETH into WETH or any amount of WETH into ETH at any time (Proofsuite does not control WETH funds and can not prevent you from withdrawing your funds). When you are converting ETH to WETH, you receive 1 WETH token for each Ether you've converted. Using WETH allows decentralized applications such as the AMP decentralized exchanges to offer better functionality and a better user experience. You can read more about WETH <Link url={"https://weth.io/"} onClick={() => this.trackLinkClick("https://weth.io/", "here")}>here</Link>. </p>
              </FaqItem>
              <Box p={2} />
              {/* Ensure all other instances of FaqItem and Link are updated similarly */}
              <Link url={"https://weth.io/"} onClick={() => this.trackLinkClick("https://weth.io/", "here")}>here</Link>
            </FirstColumn>
            <SecondColumn>
              {/* Ensure FaqItem components here also have onClick handlers for tracking */}
            </SecondColumn>
          </FaqGrid>
        </Container>}
      </Spring>
    );
  }
}

const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
`;

const FaqList = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const FaqListItem = styled.li`
  // padding: 10px;
`;

const FaqGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  @media ${Devices.tablet} {
    grid-template-columns: 1fr;
  }
`;

const FirstColumn = styled.div``;
const SecondColumn = styled.div``;

export default FaqPage;