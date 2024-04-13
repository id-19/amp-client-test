import React from 'react';
import Mixpanel from 'mixpanel';

const SubmitButton = () => {
  const handleClick = () => {
    Mixpanel.track("Form Submission", {
      "Form ID": "user-registration",
      "Action": "Submit"
    });
  };

  return (
    <button type="submit" aria-label="Submit form" className="submit-btn" onClick={handleClick}>
      Submit
    </button>
  );
};

export default SubmitButton;