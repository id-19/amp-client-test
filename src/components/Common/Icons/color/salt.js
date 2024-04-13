import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgSalt = props => {
  // Handler for tracking the click event
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Type": "Salt",
      "Context": "Assumed to be part of a clickable element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Added onClick event handler for tracking
    fill="#1BEEF4" >
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#1BEEF4" />
        <path fill="#FFF" d="M16.5 10.445l5.804 12.214H10.696L16.5 10.445zM16.5 5L7 25h19L16.5 5z" />
      </g>
    </svg>
  );
};

export default SvgSalt;