import React from 'react';
import SvgBtx from './SvgBtx'; // Assuming SvgBtx is exported properly from its file
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN"); // Initialize Mixpanel with your project token

const ButtonWithSvgBtx = (props) => {
  const handleClick = () => {
    mixpanel.track("Submit Button Click", {
      "Icon": "BTX",
      "Action": "Submit",
      "Context": "Assumed context where the button is used"
    });
  };

  return (
    <button type="submit" aria-label="Submit" className="className or id of the button" // Replace with actual className or id
      onClick={handleClick}
    >
      <SvgBtx width={64} height={64} />
    </button>
  );
};

export default ButtonWithSvgBtx;