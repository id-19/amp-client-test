import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgUsdt = props => {
  // Event handler to track the USDT icon click
  const handleIconClick = () => {
    mixpanel.track("USDT Icon Clicked", {
      "Action": "Navigate",
      "Target": "USDT Information Page",
      "Icon Type": "USDT"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
      fill="#FFF" fillRule="evenodd" >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z" />
    </svg>
  );
};

export default SvgUsdt;