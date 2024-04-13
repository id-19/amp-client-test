import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgAmp = props => {
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon": "Amp",
      "Context": "Unknown - Determine based on usage",
      "Render Time": new Date().toISOString()
    });
  }, []);

  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon": "Amp",
      "Context": "Unknown - Determine based on parent element interaction",
      "Click Time": new Date().toISOString()
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick}>
      <defs>
        <linearGradient id="amp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="amp_svg__b" cx={16} cy={15} r={15} />
        <filter id="amp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="amp_svg__e" d="M8.303 10.957h...z" />
        <filter id="amp_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#amp_svg__a)" xlinkHref="#amp_svg__b" />
        <use fill="#2DAEE4" xlinkHref="#amp_svg__b" />
        <use fill="url(#amp_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#amp_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#amp_svg__d)" xlinkHref="#amp_svg__e" />
        <use fill="#FFF" xlinkHref="#amp_svg__e" />
      </g>
    </svg>
  );
};

export default SvgAmp;