//@flow
import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import ampLogo from '../../assets/amp_black.png';
// Import Mixpanel for event tracking
import mixpanel from 'mixpanel-browser';

const AMPLogo = (props: { height: number, width: number }) => {
  const { height, width } = props;

  // Function to handle click events on the logo and send them to Mixpanel
  const handleLogoClick = () => {
    mixpanel.track("Logo Click", {
      "Source": ampLogo,
      "Alt Text": ""
    });
  };

  return (
    <Wrapper>
      <Container p={3}>
        {/* <div class="glitch-logo" /> */}
        <img src={ampLogo} width={width} height={height} alt="" onClick={handleLogoClick}/>
      </Container>
    </Wrapper>
  );
};

const Container = styled(Box)`
  z-index: 1;
  position: relative
`;

const Wrapper = styled.div`
  opacity: 0.3;
`;

export default AMPLogo;