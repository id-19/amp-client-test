import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is installed and imported

const SvgHuc = props => {
  // Handler function for the click event
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Action": "Submit",
      "Icon": "Huc",
      "Context": "Form Submission"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#ffc018" r={16} />
        <path d="M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgHuc;