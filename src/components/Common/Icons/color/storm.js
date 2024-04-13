import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgStorm = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon": "Storm",
      "Context": "Share via Storm"
    });
  };
  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="none" fillRule="evenodd">
      <g>
        <circle cx={16} cy={16} fill="#080d98" r={16} />
        <path d="M23 6l-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z" fill="#fff" />
      </g>
    </svg>
  );
};
export default SvgStorm;