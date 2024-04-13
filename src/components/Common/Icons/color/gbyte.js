import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming mixpanel-browser is used

const SvgGbyte = props => {
  // Event tracking function
  const trackIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Gbyte",
      "Context": "Specify the context or parent component" // This should be dynamically set based on actual usage
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconClick} // Added onClick event handler for tracking
         fill="none" fillRule="evenodd">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
        <circle cx={16} cy={16} r={11} fill="#FFF" />
      </g>
    </svg>
  );
};

export default SvgGbyte;