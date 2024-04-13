import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgPrl = props => {
  // Event handler to track icon interaction
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Prl",
      "Action": "Click",
      "Context": "Assumed Context e.g., Share Button",
      "Page": "Assumed Page e.g., HomePage"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" {...props} onClick={handleIconClick} // Add onClick event handler to track interaction
    >