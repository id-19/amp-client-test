import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgSmart = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Interaction", {"Icon Name": "Smart", "Action": "Clicked"})}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="smart_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="smart_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="smart_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#smart_svg__a)" xlinkHref="#smart_svg__b" />
        <use fill="#FEC60D" xlinkHref="#smart_svg__b" />
        <use fill="url(#smart_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#smart_svg__b" />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path d="M25.697 9.589l-3.125-1.8c-..." fill="#FFF" />
    </g>
  </svg>
);

export default SvgSmart;