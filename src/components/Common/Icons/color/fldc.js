import React from 'react';
// Step 1: Import Mixpanel
import mixpanel from 'mixpanel-browser';

const SvgFldc = props => {
  // Step 2: Define the event handler
  const handleIconClick = () => {
    // Step 3: Track the event with Mixpanel
    mixpanel.track("Icon Clicked", {
      "Icon Name": "FLDC",
      "Context": "Where this icon is used",
      "Action": "What action clicking this icon represents"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} fill="#c40e09"
      // Add the onClick event handler to the svg element
      onClick={handleIconClick}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#c40e09" r={16} />