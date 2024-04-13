import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const VerifiedIcon = () => {
  const handleHover = () => {
    mixpanel.track("Verified Icon Hover", {
      "Action": "Hover",
      "Location": "Common Icons"
    });
  };

  const handleClick = () => {
    mixpanel.track("Verified Icon Click", {
      "Action": "Click",
      "Location": "Common Icons"
    });
  };

  return (
    <svg className="verified-icon" src="path/to/verified-icon.svg" alt="Verified Icon" onMouseEnter={handleHover} onClick={handleClick} >
      {/* SVG content */}
    </svg>
  );
};

export default VerifiedIcon;