import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGrs = props => {
  useEffect(() => {
    mixpanel.track("Icon Visibility", {
      "Icon Name": "SvgGrs",
      "Visibility": "Visible",
      "Timestamp": Date.now(), // Assuming UNIX timestamp in milliseconds is acceptable
      "Page": window.location.pathname // Dynamically capturing the page name
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <defs>
        <linearGradient id="grs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="grs_svg__b" cx={16} cy={15} r={15} />
        <filter id="grs_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="grs_svg__e" d="M23.148 28.19l...zM11.437.707A15.932 15.932 0 0 1 16 0c-1.59 0-3.124.248-4.563.707zm7.906 14.908l-.057-.014c-.032-.454-.05-.91-.098-1.361-.111-1.047-.409-2.034-.985-2.926-.852-1.32-2.278-1.852-3.645-1.323-1.122.433-1.717 1.323-1.986 2.459-.254 1.074-.234 2.163-.104 3.247.124 1.031.418 2.013 1.012 2.886.763 1.12 1.827 1.609 3.15 1.388 1.255-.209 2.046-1.021 2.368-2.23.184-.69.235-1.416.345-2.126z" />
        <filter id="grs_svg__d" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#grs_svg__a)" xlinkHref="#grs_svg__b" />
        <use fill="#377E96" xlinkHref="#grs_svg__b" />
        <use fill="url(#grs_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#grs_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#grs_svg__d)" xlinkHref="#grs_svg__e" />
        <use fill="#FFF" xlinkHref="#grs_svg__e" />
      </g>
    </svg>
  );
};

export default SvgGrs;