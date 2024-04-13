//@flow
import React, { useEffect } from 'react'; // Import useEffect
import styled from 'styled-components';
import { Spinner } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel

const SpinnerContainer = () => {
  useEffect(() => {
    // Track the event when the component mounts
    mixpanel.track("Spinner Displayed", {
      "Intent": "Primary",
      "Size": "Large"
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Wrapper>
      <Spinner large intent="primary" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default SpinnerContainer;