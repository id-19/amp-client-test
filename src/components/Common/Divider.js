//@flow
import React, { useEffect } from 'react';
import { Box } from './Box';
import mixpanel from 'mixpanel-browser';

const heights = {
  small: 0.1,
  large: 0.3,
};

const Divider = Box.withComponent('hr').extend`
  height: ${props => heights[props.height]}em;
  border: 0;
`;

Divider.displayName = 'Divider';

Divider.defaultProps = {
  height: '2px',
  mx: 0,
};

useEffect(() => {
  mixpanel.track("Section Viewed", {
    "Section": "Unknown", // This should ideally be replaced with a meaningful identifier
    "Height": "2px"
  });
}, []);

export default Divider;