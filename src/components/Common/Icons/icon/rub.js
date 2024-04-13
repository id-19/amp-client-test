import React from 'react';
import SvgRub from './path/to/SvgRub'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';
mixpanel.init('YOUR_MIXPANEL_TOKEN'); // Initialize Mixpanel with your project token

const SubmitButton = () => {
  const handleClick = () => {
    // Mixpanel event tracking
    mixpanel.track("Form Submission", {
      "Icon Used": "SVG Rub",
      "Action": "Submit",
      "Location": "Assumed location in the app where this is used"
    });
  };

  return (
    <button type="submit" aria-label="Submit form" className="submit-button-class" onClick={handleClick}>
      <SvgRub width={64} height={64} />
    </button>
  );
};

export default SubmitButton;