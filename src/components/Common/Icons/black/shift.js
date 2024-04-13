import React from 'react';
import SvgShift from './SvgShift'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const ShiftButton = () => {
  const trackShiftAction = () => {
    mixpanel.track("Shift Action", {
      "Action": "Shift",
      "Location": "Assumed location in the app",
      "Time": new Date().toISOString() // Assuming current time as when the action was triggered
    });
  };

  return (
    <button type="button" aria-label="Shift" onClick={trackShiftAction} className="Assumed className or id where SVG is used" // Replace with actual className or id
    >
      <SvgShift width={64} height={64} />
    </button>
  );
};

export default ShiftButton;