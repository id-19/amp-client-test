import React from 'react';
import SvgCoqui from './path/to/SvgCoqui'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // This should ideally be done once in your application

const ButtonWithIcon = () => {
  const handleClick = () => {
    // Here we track the event as specified in the event signature
    mixpanel.track("Icon Click", {
      "Icon": "SvgCoqui",
      "Context": "Form submission",
      "Location": "Hypothetical page or section name"
    });
    // Additional logic for the button click can be added here
  };

  return (
    <button onClick={handleClick} type="submit">
      <SvgCoqui />
      Submit
    </button>
  );
};

export default ButtonWithIcon;