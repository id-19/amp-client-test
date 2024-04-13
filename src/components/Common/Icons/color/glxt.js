import React from 'react';
import SvgGlxt from './SvgGlxt'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';
mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN'); // Initialize Mixpanel with your project token

const ButtonWithIcon = () => {
  const handleButtonClick = () => {
    // Track the event with Mixpanel
    mixpanel.track("Form Submission", {
      "Icon Used": "GLXT",
      "Action": "Submit",
      "Location": "Profile Page" // This should be dynamically determined based on actual usage
    });
  };

  return (
    <button type="submit" aria-label="Submit form" onClick={handleButtonClick} className="your-button-class" // Replace with actual class name or id as necessary
    >
      <SvgGlxt width={64} height={64} />
      Submit
    </button>
  );
};

export default ButtonWithIcon;