import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is initialized in this way

const SvgMiota = props => {
  // Event handler for click action
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon": "Miota",
      "Context": "Unknown - Define based on specific usage"
    });
  };

  // Event handler for hover action
  const handleMouseEnter = () => {
    mixpanel.track("Icon Hover", {
      "Action": "Hover",
      "Icon": "Miota",
      "Context": "Unknown - Define based on specific usage"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} onMouseEnter={handleMouseEnter} >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#242424" />