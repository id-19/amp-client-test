import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgWaves = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Waves",
      "Action": "Click",
      "Context": "White Icon Set"
    });
  };
  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconInteraction}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26L6 16l10 10 10-10z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};
export default SvgWaves;