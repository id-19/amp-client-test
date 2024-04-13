import React from 'react';
// Import Mixpanel for event tracking
import mixpanel from 'mixpanel-browser';

const SvgVib = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} fill="#fff" onClick={() => {
    // Track the event with Mixpanel
    mixpanel.track("Icon Interaction", {
      "Context": "Unknown",
      "Icon": "Vib",
      "Action": "Click"
    });
  }}>
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7 7l10.2 18H22V7h-3.6v12.775L11.2 7z" />
  </svg>
);

export default SvgVib;