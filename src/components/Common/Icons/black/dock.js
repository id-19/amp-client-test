import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgDock = props => {
  // Event handler to track clicks
  const handleClick = () => {
    mixpanel.track("Icon Click", {
      "Icon": "Dock",
      "Action": "Click",
      "Context": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add onClick event handler to track clicks
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.069-21.229v-.004A8 8 0 1 0 23 18.87l-.001-.067V6.142a1.143 1.143 0 0 0-2.286 0v12.576a5.695 5.695 0 1 1-4.705-5.63l-1.707 1.707a1.143 1.143 0 0 0 1.616 1.616l3.64-3.636a1.143 1.143 0 0 0 0-1.617l-3.636-3.636-.038-.038a1.144 1.144 0 1 0-1.582 1.654l1.63 1.633z" />
    </svg>
  );
};

export default SvgDock;