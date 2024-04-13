import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgQrl = props => {
  // Function to handle click event and track it with Mixpanel
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Qrl",
      "Action": "Clicked",
      "Context": "Assumed to be part of a clickable element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Add onClick event handler to track the interaction
    >