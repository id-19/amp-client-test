import React from 'react';
import SvgSls from './SvgSls'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser';

const ButtonWithIcon = () => {
  const handleClick = () => {
    mixpanel.track("Form Submission", {
      "Form ID": "registration-form",
      "Icon Used": "Sls",
      "Action": "Submit"
    });
  };

  return (
    <button type="submit" form="registration-form" className="submit-btn" // Assuming class name
            onClick={handleClick}>
      <SvgSls width={64} height={64} />
      Submit
    </button>
  );
};

export default ButtonWithIcon;