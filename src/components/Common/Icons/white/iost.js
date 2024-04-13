import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the project
import Mixpanel from 'mixpanel-browser';

const SvgIost = props => {
  // Event tracking function
  const trackIconClick = () => {
    Mixpanel.track("Icon Clicked", {
      "Icon": "IOST",
      "Action": "Undefined"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" fillRule="evenodd" {...props} onClick={trackIconClick} // Added onClick event handler for tracking
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.5-21L16 6l-8.5 5v10l8.5 5 8.5-5zm-8.768 5.407l-1.031-.606-.623.368-1.476-.863.628-.37-3.33-1.959 6.271-3.688 5.917 3.438-1.586.938-4.327-2.53-3.131 1.842 1.754 1.032.897-.53 1.476.863-.902.533 1.03.606.736-.434 1.476.862-.74.437 3.673 2.162-6.27 3.687-6.525-3.79.027-1.843 6.495 3.787 3.13-1.841-2.098-1.235-.785.463-1.476-.862z" />
    </svg>
  );
};

export default SvgIost;