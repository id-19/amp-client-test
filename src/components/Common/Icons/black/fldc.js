import React from 'react';
// Assuming Mixpanel has been initialized in the project
import mixpanel from 'mixpanel-browser';

const SvgFldc = props => {
  // Function to handle click event on the SVG
  const handleIconClick = () => {
    // Tracking the click event with Mixpanel
    mixpanel.track("Icon Click", {
      "Context": "TBD based on usage", // This should be dynamically determined based on where the icon is used
      "Time": new Date().toISOString(), // Capturing the current time
      "UserID": "TBD based on user session" // This should be fetched from the user's session
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
    fillRule="evenodd" >