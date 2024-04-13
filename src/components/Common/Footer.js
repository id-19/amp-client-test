import React from 'react';
import Colors from './Colors';
import styled from 'styled-components';
import Indent from './Indent'
import ampLogo from '../../assets/amp_black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faGithub, faYoutube, faFacebook, faMedium } from '../Common/Icons'
import { Box } from './Box'
import { Devices } from './Variables'
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is initialized elsewhere

const Footer = () => {
  // Function to handle link clicks
  const handleLinkClick = (url) => {
    const platform = url.includes('twitter') ? 'Twitter' : 
                      url.includes('discord') ? 'Discord' : 
                      url.includes('facebook') ? 'Facebook' : 
                      url.includes('medium') ? 'Medium' : 
                      url.includes('github') ? 'Github' : 
                      url.includes('youtube') ? 'Youtube' : 'Other';
    mixpanel.track("External Link Clicked", { "Platform": platform, "URL": url });
  };

  // Function to handle logo click
  const handleLogoClick = () => {
    mixpanel.track("Logo Clicked", { "Action": "Navigate to homepage or specific action" });
  };

  return (
    <Wrapper>
      <Container>
        <TopSection>
          <LogosWrapper>
            <img src={ampLogo} className="Profile-image" width="120" height="120" alt="" onClick={handleLogoClick}/>
            <FooterText mt={3}>
              <FooterSatoshiQuote>"03/Jan/2009 Chancellor on brink of second bailout for banks"</FooterSatoshiQuote>
              <FooterFirstBlock>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa in Block 1</FooterFirstBlock>
            </FooterText>
          </LogosWrapper>
          <LinksWrapper className="content">
            <List hideOnMobile>
              <HeadListItem>About</HeadListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#about" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#about')}> Proof Suite </a>
                </LinkText>
              </NormalListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#apps" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#apps')}> Products </a>
                </LinkText>
              </NormalListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#terms" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#terms')}> Terms </a>
                </LinkText>
              </NormalListItem>
            </List>
            <List hideOnMobile>
              <HeadListItem>Platforms</HeadListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#amp" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#amp')}> AMP </a>
                </LinkText>
              </NormalListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#avocado" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#avocado')}> Avocado </a>
                </LinkText>
              </NormalListItem>
              <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#togen" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.proofsuite.com/#togen')}> Togen </a>
                </LinkText>
              </NormalListItem>
            </List>
            <List>
              <HeadListItem>Links</HeadListItem>
              <NormalListItem>
                <a href="https://twitter.com/proofsuite" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://twitter.com/proofsuite')}>
                  <FontAwesomeIcon icon={faTwitter} /><Indent /><LinkText>Twitter</LinkText>
                </a>
              </NormalListItem>
              <NormalListItem>
                <a href="https://discordapp.com/invite/eChaHFk" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://discordapp.com/invite/eChaHFk')}>
                  <FontAwesomeIcon icon={faDiscord} /><Indent /><LinkText>Discord</LinkText>
                </a>
              </NormalListItem>
              <NormalListItem>
                <a href="https://facebook.com/proofsuite" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://facebook.com/proofsuite')}>
                  <FontAwesomeIcon icon={faFacebook} /><Indent /><LinkText>Facebook</LinkText>
                </a>
              </NormalListItem>
              <NormalListItem>
                <a href="https://medium.com/proof-of-fintech" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://medium.com/proof-of-fintech')}>
                  <FontAwesomeIcon icon={faMedium} /><Indent /><LinkText>Medium</LinkText>
                </a>
              </NormalListItem>
              <NormalListItem>
                <a href="https://github.com/proofsuite" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://github.com/proofsuite')}>
                  <FontAwesomeIcon icon={faGithub} /><Indent /><LinkText>Github</LinkText>
                </a>
              </NormalListItem>
              <NormalListItem>
                <a href="https://www.youtube.com/channel/UCKDNphVF9TItP7PP9wJPM6g" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.youtube.com/channel/UCKDNphVF9TItP7PP9wJPM6g')}>
                  <FontAwesomeIcon icon={faYoutube} /><Indent /><LinkText>Youtube</LinkText>
                </a>
              </NormalListItem>
            </List>
            <List>
              <HeadListItem>Contact</HeadListItem>
              <NormalListItem>Support: support@proofsuite.com</NormalListItem>
              <NormalListItem>Careers: careers@proofsuite.com</NormalListItem>
              <NormalListItem />
            </List>
          </LinksWrapper>
        </TopSection>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div.attrs({ className: 'footer', })`
  background-color: ${Colors.DARK_GRAY4};
  width: 100%;
  color: ${Colors.LIGHT_GRAY5};
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 -1px 1px rgba(16, 22, 26, 0.4);
`;

const Container = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${Devices.laptop} {
    width: 100%;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0px 30px;
  margin-bottom: 15px;
  @media ${Devices.laptop} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LinksWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  @media ${Devices.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const List = styled.ul`
  @media ${Devices.mobileL} {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding-inline-start: 0px;
    ${props => props.hideOnMobile && "display: none;"}
  }
`;

const NormalListItem = styled.li`
  margin: 10px auto;
  @media ${Devices.mobileL} {
    margin: 10px 0px;
    display: flex;
    align-self: flex-start;
  }
`;

const HeadListItem = styled.li`
  color: ${Colors.GRAY2};
`;

const FooterText = styled(Box)`
`;

const FooterSatoshiQuote = styled.div`
  color: ${Colors.GRAY5};
  font-size: 12px;
  text-align: center;
`

const FooterFirstBlock = styled.div`
  width: 370px;
  color: ${Colors.GRAY1};
  font-size: 10px;
  text-align: right;
`;

const LinkText = styled.a`
`;