import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgEng = props => {
  // Event handler to track icon interaction
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Eng",
      "Action": "Click",
      "Context": "Unknown - Assume part of a clickable element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Added onClick event handler for tracking
    >
      <defs>
        <linearGradient id="eng_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="eng_svg__b" cx={16} cy={15} r={15} />
        <filter id="eng_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>