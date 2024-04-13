import React from 'react';
import styled from 'styled-components';
import { space, width, height, color } from 'styled-system';
import mixpanel from 'mixpanel-browser';

const Centered = props => {
  const handleInteraction = () => {
    mixpanel.track("Content Interaction", {
      "Content Type": "Unknown",
      "Interaction Type": "Click or View",
      "Location": "Centered Component"
    });
  };

  return (
    <Wrapper {...props} onClick={handleInteraction}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Centered;