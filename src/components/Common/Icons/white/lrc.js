import React from 'react';
import Mixpanel from 'mixpanel';

const SvgLrc = props => {
  const trackIconClick = () => {
    Mixpanel.track("SVG Icon Clicked", {
      "Icon Name": "Lrc",
      "Context": "Used in white-themed areas of the app",
      "Size": `${props.width || 64}x${props.height || 64}`
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" onClick={trackIconClick} {...props} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26L7 18.533 16 26l9-7.467zm-1.174 6.667V21.2L10.913 18zm2.348 0L21.087 18l-3.913 3.2z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgLrc;