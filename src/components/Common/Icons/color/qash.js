import React from 'react';
import SvgQash from './SvgQash'; // Assuming SvgQash is exported properly and can be imported like this
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const ParentComponent = () => {
  const handleIconClick = () => {
    // Here we track the event using Mixpanel
    mixpanel.track("Icon Click", {
      "Icon": "Qash",
      "Action": "Navigate",
      "Destination": "Assumed destination or action triggered by the click"
    });
    // Additional logic for handling the click, such as navigation, can be added here
  };

  return (
    <button type="button" onClick={handleIconClick}>
      <SvgQash width={64} height={64} />
    </button>
  );
};

export default ParentComponent;