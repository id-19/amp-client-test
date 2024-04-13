import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgPivx = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon": "PIVX",
      "Action": "Clicked",
      "Context": "Assumed to be used as a clickable element, specifics depend on implementation",
      "Width": props.width || 64,
      "Height": props.height || 64
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.153-20.259H10v2.255h7.153v-2.255zM23 12.831l-.02-.5c-.225-2.92-2.433-4.831-5.52-4.831h-6.41v2.432l4.543-.014h1.688c1.92 0 3.07 1.076 3.07 2.913 0 1.873-1.161 2.976-3.096 2.976h-5.924V24.5h2.599v-6.274h3.542c3.238 0 5.528-2.187 5.528-5.395z" />
    </svg>
  );
};

export default SvgPivx;