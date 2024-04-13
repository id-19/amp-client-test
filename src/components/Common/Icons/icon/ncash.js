import React from 'react';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel

const SvgNcash = props => {
  // Function to handle click event and track it with Mixpanel
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Ncash",
      "Action": "Click",
      "Context": "Where it's used within the app"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Add onClick event listener to track interaction
    >
      <defs>
        <linearGradient id="ncash_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="ncash_svg__b" cx={16} cy={15} r={15} />
        <filter id="ncash_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>