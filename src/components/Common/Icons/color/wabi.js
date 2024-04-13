import React from 'react';
import mixpanel from 'mixpanel-browser'; // Import Mixpanel

const SvgWabi = props => {
  // Event handler to track icon click
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Name": "Wabi",
      "Action": "Clicked",
      "Context": "Assuming it's used for a specific feature interaction"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Add onClick event handler to track the click event
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#399b32" r={16} />