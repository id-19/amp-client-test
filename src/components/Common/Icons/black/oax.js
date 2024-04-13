import React from 'react';
import SvgOax from './SvgOax'; // Assuming SvgOax is in the same directory for simplicity
import mixpanel from 'mixpanel-browser';

const SomeComponent = () => {
  const handleSignUpClick = () => {
    mixpanel.track("Sign Up Button Clicked", {
      "Location": "Header",
      "Icon": "Oax"
    });
  };

  return (
    <div>
      {/* Other component content */}
      <button type="button" className="signup-btn-class" onClick={handleSignUpClick} >
        <SvgOax width={64} height={64} /> Sign Up
      </button>
      {/* Other component content */}
    </div>
  );
};

export default SomeComponent;