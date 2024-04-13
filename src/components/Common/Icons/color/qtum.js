import React from 'react';
import SvgQtum from './SvgQtum'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const ButtonWithSvgQtum = () => {
  const handleClick = () => {
    mixpanel.track("Sign Up Click", {
      "Icon": "Qtum",
      "Location": "Header",
      "Action": "Navigate to Sign Up"
    });
  };

  return (
    <button type="button" aria-label="Sign Up" onClick={handleClick} className="your-button-class">
      <SvgQtum width={64} height={64} />
    </button>
  );
};

export default ButtonWithSvgQtum;