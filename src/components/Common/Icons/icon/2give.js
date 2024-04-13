import React from 'react';
import mixpanel from 'mixpanel-browser';

const Svg2give = props => {
  const handleClick = () => {
    mixpanel.track("Donation Icon Clicked", {
      "Icon": "2give",
      "Action": "Clicked",
      "Context": "Donation Page",
      "Timestamp": new Date().toISOString()
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="2give_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="2give_svg__b" cx={15} cy={15} r={15} />
        <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="2give_svg__a">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#2give_svg__a)" xlinkHref="#2give_svg__b" />
          <use fill="#F1CB60" xlinkHref="#2give_svg__b" />
          <use fill="url(#2give_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#2give_svg__b" />
          <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
        </g>
        <g fill="#FFF">
          {/* SVG paths remain unchanged */}
        </g>
      </g>
    </svg>
  );
};

export default Svg2give;