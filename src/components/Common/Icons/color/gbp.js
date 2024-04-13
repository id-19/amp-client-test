import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgGbp = props => {
  const handleIconClick = () => {
    mixpanel.track("Currency Icon Clicked", {
      "Currency": "GBP",
      "Context": "Change Currency",
      "Icon Size": "Medium"
    });
  };
  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#bc3fe0">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#bc3fe0" r={16} />
        <path d="M11.087 14.815v-2.332c0-3.676 2.219-5.983 6.075-5.983 2.932 0 4.57 1.242 5.838 2.84l-2.483 1.9c-.951-1.165-1.85-1.85-3.328-1.85-1.77 0-2.827 1.217-2.827 3.17v2.255h6.578v2.637h-6.578v4.335h8.585V24.5H9v-1.977l2.087-.609v-4.462H9v-2.637z" fill="#fff" />
      </g>
    </svg>
  );
};
export default SvgGbp;