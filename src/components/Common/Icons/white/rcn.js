import React from 'react';
import SvgRcn from './SvgRcn'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser'; // Function to handle the click event and track it with Mixpanel

const handleSignUpClick = () => {
  mixpanel.track("Sign Up Button Clicked", {
    "Icon": "Rcn",
    "Location": "Header",
    "Action": "Sign Up"
  });
};

const SignUpButton = () => (
  <button type="button" onClick={handleSignUpClick} className="sign-up-button">
    <SvgRcn width={64} height={64} />
    Sign Up
  </button>
);

export default SignUpButton;