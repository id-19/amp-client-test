import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the application
import mixpanel from 'mixpanel-browser';

const SvgMnx = props => {
  // Function to handle click events
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Mnx",
      "Context": "Unknown - Hypothetical Usage"
    });
  };

  // Function to handle hover events
  const handleHover = () => {
    mixpanel.track("Icon Hover", {
      "Action": "Hover",
      "Icon Name": "Mnx",
      "Context": "Unknown - Hypothetical Usage"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} onMouseEnter={handleHover} >
      <path fill="#FFF" d="M14.863 26.986v-3.37A7.7 7.7 0 0 1 8.336 16a7.7 7.7 0 0 1 6.527-7.616v-3.37C9.32 5.595 5 10.292 5 16c0 5.708 4.32 10.405 9.863 10.986zM17.038 5v3.363a7.7 7.7 0 0 1 6.585 6.474h3.363C26.44 9.617 22.268 5.48 17.038 5zM27 17.017h-3.356a7.7 7.7 0 0 1-6.606 6.62V27c5.278-.483 9.48-4.694 9.962-9.983zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" />
    </svg>
  );
};

export default SvgMnx;