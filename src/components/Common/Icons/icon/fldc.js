import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgFldc = props => {
  const handleDownloadClick = () => {
    mixpanel.track("Download Icon Clicked", {
      "Icon": "FLDC",
      "Action": "Download",
      "Context": "Report Download"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <defs>
        <linearGradient id="fldc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="fldc_svg__b" cx={16} cy={15} r={15} />
        <filter id="fldc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="fldc_svg__e" d="M22.2 6.14c...z" />
        <filter id="fldc_svg__d" width="123.3%" height="115.9%" x="-11.7%" y="-5.7%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#fldc_svg__a)" xlinkHref="#fldc_svg__b" />
        <use fill="#C40E09" xlinkHref="#fldc_svg__b" />
        <use fill="url(#fldc_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#fldc_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#fldc_svg__d)" xlinkHref="#fldc_svg__e" />
        <use fill="#FFF" xlinkHref="#fldc_svg__e" />
      </g>
      {/* Adding a button for the download icon click event */}
      <button type="button" onClick={handleDownloadClick} style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, // Making the button invisible but clickable }}>
        Download
      </button>
    </svg>
  );
};

export default SvgFldc;