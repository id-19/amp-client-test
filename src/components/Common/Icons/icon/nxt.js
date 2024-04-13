import React from 'react';
import SvgNxt from './SvgNxt'; // Assuming SvgNxt is in the same directory
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const ButtonWithIcon = (props) => {
  const handleClick = () => {
    // Track the event using Mixpanel
    mixpanel.track("Settings Opened", {
      "Icon": "Nxt",
      "Action": "Open settings menu",
      "Location": "Assuming location in the app where the icon is used"
    });
  };

  return (
    <button type="button" aria-label="Open settings" className="Assuming className or id of the button" onClick={handleClick}>
      <SvgNxt width={64} height={64} />
    </button>
  );
};

export default ButtonWithIcon;