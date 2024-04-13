import React from 'react';
import SvgFtc from './SvgFtc'; // Assuming SvgFtc is exported from the given file path
import mixpanel from 'mixpanel-browser';

const ShareButton = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon": "FTC",
      "Action": "Click",
      "Context": "Share Feature"
    });
  };

  return (
    <button type="button" onClick={trackIconInteraction} {...props}>
      <SvgFtc />
    </button>
  );
};

export default ShareButton;