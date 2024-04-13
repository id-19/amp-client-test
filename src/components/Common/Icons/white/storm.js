import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgStorm = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Storm",
      "Context": "Unknown - Requires further context"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-26l-12.03 8.25 6.077 3.875L9 26l13.302-9.208-5.994-3.875z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};

export default SvgStorm;