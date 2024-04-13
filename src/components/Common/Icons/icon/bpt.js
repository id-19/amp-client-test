import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgBpt = props => {
  useEffect(() => {
    mixpanel.track("Icon View", {
      "Icon Name": "Bpt",
      "View Time": "Timestamp or duration visible",
      "Page": "Page name or context"
    });
  }, []);

  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Type": "Click",
      "Icon Name": "Bpt",
      "Context": "Where it's used or page name"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick}>
      <defs>
        <linearGradient id="bpt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="bpt_svg__b" cx={16} cy={15} r={15} />
        <filter id="bpt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="bpt_svg__e" d="M25.884 19.737a6.873 6.873 0 0 1-.317.58c-..."/>
        <filter id="bpt_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#bpt_svg__a)" xlinkHref="#bpt_svg__b" />
        <use fill="#0F63D8" fillRule="evenodd" xlinkHref="#bpt_svg__b" />
        <use fill="url(#bpt_svg__c)" fillRule="evenodd" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#bpt_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#bpt_svg__d)" xlinkHref="#bpt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bpt_svg__e" />
      </g>
    </svg>
  );
};

export default SvgBpt;