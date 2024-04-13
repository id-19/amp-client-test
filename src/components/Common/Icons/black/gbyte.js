import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly initialized elsewhere in the project

const SvgGbyte = props => {
  // Function to handle click events and track them using Mixpanel
  const handleClick = () => {
    Mixpanel.track("Icon Interaction", {
      "Icon Type": "Gbyte",
      "Action": "Clicked"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Added onClick event handler to track the interaction
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11z" />
    </svg>
  );
};

export default SvgGbyte;