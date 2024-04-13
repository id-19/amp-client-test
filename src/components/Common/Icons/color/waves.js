import React from 'react';
// Assuming Mixpanel is initialized elsewhere
const SvgWaves = props => {
  // Event tracking handler
  const handleIconClick = () => {
    // Using Mixpanel to track the event
    window.mixpanel.track("Icon Click", {
      "Icon": "Waves",
      "Action": "Click",
      "Context": "Unknown"
    });
  };
  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#0155ff" r={16} />
        <path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
      </g>
    </svg>
  );
};
export default SvgWaves;