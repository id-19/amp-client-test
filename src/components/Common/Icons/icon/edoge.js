import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly set up and initialized elsewhere in the project

const SignupButton = () => {
  const handleSignupButtonClick = () => {
    Mixpanel.track("Sign Up Button Clicked", {
      Location: "Header",
      Icon: "Edoge"
    });
  };

  return (
    <button type="button" className="signup-btn" onClick={handleSignupButtonClick}>
      Sign Up
    </button>
  );
};

export default SignupButton;