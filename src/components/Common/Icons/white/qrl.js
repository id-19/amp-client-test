import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgQrl = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Context": "Quick Reload",
      "Time": new Date().toLocaleTimeString() // Capturing user local time at interaction
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Added onClick event handler to track interaction
    >