import React from 'react';
// Assuming Mixpanel has been initialized in the project
import mixpanel from 'mixpanel-browser';

const SvgStart = props => (
  <svg 
    width={props.width || 64} 
    height={props.height || 64} 
    {...props} 
    onClick={() => mixpanel.track("Icon Click", { "Icon Name": "Start", "Context": "Unknown - Define based on where and how used" })}
  >
    <defs>
      <linearGradient id="start_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="start_svg__b" cx={16} cy={15} r={15} />
      <filter id="start_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="start_svg__e" d="M21.069 17.89c-.013 2.074-1.211 3.84-3.122 4.565-...3.085" />
      <filter id="start_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#start_svg__a)" xlinkHref="#start_svg__b" />
      <use fill="#01AEF0" xlinkHref="#start_svg__b" />
      <use fill="url(#start_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#start_svg__b" />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#start_svg__d)" xlinkHref="#start_svg__e" />
      <use fill="#FFF" xlinkHref="#start_svg__e" />
    </g>
  </svg>
);

export default SvgStart;