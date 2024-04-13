import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgMtl = props => {
  // Function to handle click events and send them to Mixpanel
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgMtl",
      "Action": "Unknown - Depends on context",
      "Location": "Common Icons/White"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add the onClick event handler here
    >
      <path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 9v14h1V9H8zm5 3v9h1v-9h-1zm5 2v5h1v-5h-1zm5-5v14h1V9h-1z" />
    </svg>
  );
};

export default SvgMtl;