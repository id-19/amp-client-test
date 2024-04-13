import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly installed and configured

const SvgMiota = props => {
  const handleClick = () => {
    // Assuming context, time, and user status are determined here or passed as props
    const eventProperties = {
      "Context": "Where the icon was clicked", // This should be dynamically determined
      "Time": new Date().toISOString(), // Capturing the current time
      "User Status": "Logged in or not" // This should be dynamically determined
    };
    Mixpanel.track("Icon Click", eventProperties);
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" fillRule="evenodd" onClick={handleClick} {...props} >