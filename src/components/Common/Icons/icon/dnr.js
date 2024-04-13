import React from 'react';
import mixpanel from 'mixpanel-browser';

mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgDnr = props => {
  // Event handler for click events
  const handleClick = () => {
    mixpanel.track("SVG Interaction", {
      Action: "Clicked",
      Component: "SvgDnr",
      Description: "User clicked on the DNR SVG icon"
    });
  };

  // Event handler for mouse enter events
  const handleMouseEnter = () => {
    mixpanel.track("SVG Interaction", {
      Action: "Hovered",
      Component: "SvgDnr",
      Description: "User hovered over the DNR SVG icon"
    });
  };

  return (
    <svg
      width={props.width || 64}
      height={props.height || 64}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {/* SVG content remains unchanged */}
      <defs>
        <linearGradient id="dnr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="dnr_svg__b" cx={15} cy={15} r={15} />
        <filter id="dnr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
      </defs>
      <g fill="none" transform="translate(1)">
        <use fill="#000" filter="url(#dnr_svg__a)" xlinkHref="#dnr_svg__b" />
        <use fill="#B8B8B8" fillRule="evenodd" xlinkHref="#dnr_svg__b" />
        <use fill="url(#dnr_svg__c)" fillRule="evenodd" style={{ mixBlendMode: 'soft-light' }} xlinkHref="#dnr_svg__b" />
        <circle cx={15} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
        {/* Additional SVG paths */}
      </g>
    </svg>
  );
};

export default SvgDnr;