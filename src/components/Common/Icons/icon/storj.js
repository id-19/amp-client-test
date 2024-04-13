import React from 'react';
import SvgStorj from './SvgStorj'; // Assuming SvgStorj is exported properly from its file
import mixpanel from 'mixpanel-browser';

// Hypothetical parent component that uses SvgStorj within a button
const SignUpButton = () => {
  const trackSignUpClick = () => {
    mixpanel.track("Sign Up Button Click", {
      "Location": "Header",
      "Icon": "Storj"
    });
  };

  return (
    <button type="button" onClick={trackSignUpClick} className="sign-up-button">
      <SvgStorj /> Sign Up
    </button>
  );
};

// Hypothetical parent component that uses SvgStorj within a link
const LearnMoreLink = () => {
  const trackLearnMoreClick = () => {
    mixpanel.track("Learn More Link Click", {
      "Topic": "Storj",
      "Location": "Footer"
    });
  };

  return (
    <a href="https://example.com/learn-more" onClick={trackLearnMoreClick} className="learn-more-link">
      <SvgStorj /> Learn More
    </a>
  );
};

export { SignUpButton, LearnMoreLink };