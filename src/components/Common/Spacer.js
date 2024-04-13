import React, { useEffect } from 'react';
import styled from 'styled-components';
import { height } from 'styled-system';
import Mixpanel from 'mixpanel-browser';

const StyledSpacer = styled.div`
  ${height}
`;

const Spacer = (props) => {
  useEffect(() => {
    Mixpanel.track("Spacer Rendered", {
      "Purpose": "Layout Adjustment",
      "Visibility": "Dynamic"
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return <StyledSpacer {...props} />;
};

export default Spacer;