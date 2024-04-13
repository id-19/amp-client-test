import React from 'react';
// Assuming Mixpanel has been initialized elsewhere
import mixpanel from 'mixpanel-browser';

const SvgRise = props => {
  // Event handler to track clicks
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Rise",
      "Action": "Click",
      "Context": "Unknown"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Added onClick event handler
    fill="none" fillRule="evenodd">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#f49352" r={16} />
        <path d="M12.605 9.155c-.857 0-1.552-.706-1.552-1.577S11.748 6 12.605 6c.858 0 1.553.706 1.553 1.578s-.695 1.577-1.553 1.577zM19.447 26a1.565 1.565 0 0 1-1.552-1.578c0-.87.695-1.577 1.552-1.577.858 0 1.553.706 1.553 1.577 0 .872-.695 1.578-1.553 1.578zm-6.205-11.79a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.986l7.158-5.562a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.987zm.053 5.669a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.986zm0 5.829a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.986z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgRise;