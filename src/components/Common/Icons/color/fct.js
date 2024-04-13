import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgFct = props => {
  // Function to handle click and hover events
  const handleEvent = (interactionType) => {
    mixpanel.track("Icon Interaction", {
      "Context": "Unknown",
      "Icon Name": "SvgFct",
      "Interaction Type": interactionType,
      "Purpose": "Could be navigation or action initiation"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => handleEvent("Click")} onMouseEnter={() => handleEvent("Hover")} fill="none" fillRule="evenodd">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#417BA4" />