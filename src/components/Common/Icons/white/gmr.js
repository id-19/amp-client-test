import React from 'react';
// Import Mixpanel or ensure it's initialized elsewhere in your project
import mixpanel from 'mixpanel-browser';

const SvgGmr = props => {
  // Event handler to track the event
  const handleSvgClick = () => {
    mixpanel.track("Share Article", {
      "Article ID": "12345",
      "Share Platform": "Twitter",
      "Device": "Desktop"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Add the onClick event handler here
    fill="#FFF" >