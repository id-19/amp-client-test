import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is installed and configured

const SvgArdr = props => {
  // Event handler to track icon interaction
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Ardr",
      "Action": "Click",
      "Context": "Assumed to be part of an interactive element"
    });
  };

  return (
    <div onClick={handleIconClick} style={{ cursor: 'pointer' }}>
      {/* Wrapping SVG in a div for click tracking */}
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <defs>
          <linearGradient id="ardr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
            <stop offset="100%" stopOpacity={0.5} />
          </linearGradient>
          <circle id="ardr_svg__b" cx={16} cy={15} r={15} />
          <filter id="ardr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
            <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
          </filter>
          <path id="ardr_svg__e" d="M15.883 16.19l1.769 2.312L12.5 22l3.383-5.81zM16 5l2.727 4.474L11.455 22H6L16 5zm0 9.842l3.636-2.684L26 22h-4.545L16 14.842z" />
          <filter id="ardr_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
            <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <use fill="#000" filter="url(#ardr_svg__a)" xlinkHref="#ardr_svg__b" />
          <use fill="#3C87C7" xlinkHref="#ardr_svg__b" />
          <use fill="url(#ardr_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#ardr_svg__b" />
          <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
          <use fill="#000" filter="url(#ardr_svg__d)" xlinkHref="#ardr_svg__e" />
          <use fill="#FFF" xlinkHref="#ardr_svg__e" />
        </g>
      </svg>
    </div>
  );
};

export default SvgArdr;