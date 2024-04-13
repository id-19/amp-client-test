import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgXp = props => {
  // Event handler function for tracking clicks
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon": "XP",
      "Action": "Unknown",
      "Context": "Assumed to be a clickable icon for a specific action"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="none" fillRule="evenodd">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#008200" r={16} />
        <path d="M14.79 23h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019c.784-.012 1.391-.277 1.823-.793.432-.517.637-1.21.615-2.083a2.31 2.31 0 0 0-.035-.335l2.73-1.427c.378.695.522 1.514.434 2.455-.146 1.372-.74 2.47-1.779 3.293-1.039.824-2.364 1.236-3.973 1.236l-2.306-.01L17.94 23zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 9h3.48l1.23 4.789 1.052-1.78h1.75-1.75L15.34 9h2.215l5.126.01c1.165.032 2.12.341 2.866.927l-2.8 1.464a1.773 1.773 0 0 0-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694zm-9.425 9.942l5.327-2.785L8.765 23H5l.767-1.085z" fill="#fff" fillRule="nonzero" />
      </g>
    </svg>
  );
};

export default SvgXp;