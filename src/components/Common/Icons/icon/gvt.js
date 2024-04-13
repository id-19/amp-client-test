import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly installed and imported
import SvgGvt from './SvgGvt'; // Adjust the import path as necessary

const SomeInteractiveComponent = () => {
  const handleButtonClick = () => {
    Mixpanel.track("Sign Up Button Clicked", {
      "Location": "Header",
      "Icon": "Gvt"
    });
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handleButtonClick} name="signup-button" >
      <SvgGvt width={64} height={64} />
      Sign Up
    </button>
  );
};

export default SomeInteractiveComponent;