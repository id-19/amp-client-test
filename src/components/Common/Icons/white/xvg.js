import React from 'react';
// Assuming Mixpanel has been initialized elsewhere in the project
const SvgXvg = props => {
  // Function to handle click events and track them with Mixpanel
  const handleClick = () => {
    // Using Mixpanel to track the event
    window.mixpanel.track("Icon Interaction", {
      "Icon Name": "xvg",
      "Action": "Click",
      "Context": "Assumed to be part of a Share button or similar interactive element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={handleClick} // Adding the onClick handler to track clicks
      {...props}
    >
      <path fill="#FFF" d="M9.61 10.335H8L15.951 27 24 10.335h-1.59l-6.36 13.33-6.438-13.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.61 10.335h12.798L24 7H8l1.61 3.335z" />
    </svg>
  );
};

export default SvgXvg;