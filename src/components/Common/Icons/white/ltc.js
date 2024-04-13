import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgLtc = props => {
  const handleClick = () => {
    mixpanel.track("SVG Icon Click", {
      "Icon": "LTC",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} fill="#FFF" fillRule="evenodd">
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z" />
    </svg>
  );
};

export default SvgLtc;