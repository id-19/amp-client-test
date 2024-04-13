import React from 'react';
import Mixpanel from 'mixpanel-browser';
import SvgExp from './SvgExp'; // Assuming SvgExp is in the same directory

Mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN'); // Initialize Mixpanel with your project token

const SomeParentComponent = () => {
  const handleSignUpClick = () => {
    // Track the event using Mixpanel
    Mixpanel.track("Sign Up Button Clicked", {
      "Location": "Header",
      "Icon": "Exp"
    });
  };

  return (
    <div>
      {/* Other component content */}
      <button type="button" className="btn btn-primary" onClick={handleSignUpClick} // Attach the event handler to the button
      >
        <SvgExp /> Sign Up
      </button>
      {/* Other component content */}
    </div>
  );
};

export default SomeParentComponent;