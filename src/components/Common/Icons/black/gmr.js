import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGmr = props => {
  const trackFormSubmission = () => {
    mixpanel.track("Form Submission", {
      "Form ID": "user-registration-form",
      "Timestamp": Date.now(), // Assuming UNIX timestamp in milliseconds
      "User ID": "USER_ID_PLACEHOLDER" // This should be dynamically replaced with the actual user ID
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackFormSubmission}>