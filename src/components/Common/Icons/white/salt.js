import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSalt = props => {
  const handleClick = () => {
    mixpanel.track("Sign Up Icon Clicked", {
      "Icon": "Salt",
      "Context": "Sign Up Button",
      "Color": "White"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={handleClick} {...props}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.5-27L7 25h19L16.5 5zm0 5.445l5.804 12.214H10.696L16.5 10.445z" />
    </svg>
  );
};

export default SvgSalt;