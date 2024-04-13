import React from 'react';
// Assuming Mixpanel has been initialized in the project
import mixpanel from 'mixpanel-browser';

const SvgMiota = props => {
  // Function to handle click event and track it with Mixpanel
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Miota",
      "Context": "Where it's used if identifiable" // This needs to be dynamically determined based on where the icon is used
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Added onClick event handler to track the event
    >