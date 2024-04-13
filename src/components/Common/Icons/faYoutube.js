import React from 'react';
import mixpanel from 'mixpanel-browser';

// Original icon data preserved
var prefix = 'fab';
var iconName = 'youtube';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f167';
var svgPathData = 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z';

// Transforming the icon data into a React component
const FaYoutubeIcon = () => (
  <svg width={width} height={height} viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d={svgPathData} />
  </svg>
);

// Creating a button component that includes the icon and tracks the click event
const YoutubeIconButton = () => {
  const handleClick = () => {
    mixpanel.track("YouTube Icon Clicked", {
      "Action": "Navigate to YouTube channel",
      "Icon": "YouTube",
      "Location": "Hypothetical - Specific page or component not provided"
    });
    // Hypothetical navigation action, e.g., window.location.href = 'YouTube channel URL';
  };

  return (
    <button onClick={handleClick} aria-label="YouTube Icon">
      <FaYoutubeIcon />
    </button>
  );
};

export default YoutubeIconButton;