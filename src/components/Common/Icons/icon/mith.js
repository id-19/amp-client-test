import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Initialize Mixpanel with your project token

const SvgMith = props => {
  // Function to handle both click and hover events
  const handleEvent = (action) => () => {
    mixpanel.track("Icon Interaction", {
      "Action": action,
      "Icon Name": "SvgMith",
      "Context": "Describe the context of interaction, e.g., 'Navigation', 'Action Button'",
      "Page": "Optional: Include if the icon's interaction is page-specific"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleEvent("Click")} onMouseEnter={handleEvent("Hover")}>
      <defs>
        <linearGradient id="mith_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="mith_svg__b" cx={16} cy={15} r={15} />
        <filter id="mith_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>