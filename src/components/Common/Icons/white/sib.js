import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSib = props => {
  // Track the "Icon Rendered" event when the component mounts
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon Name": "SvgSib",
      "Context": "Unknown - Determine based on usage",
      "Render Count": "1 per render"
    });
  }, []);

  // Function to handle click events on the SVG and track the "Icon Clicked" event
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgSib",
      "Context": "Unknown - Determine based on usage",
      "Click Count": "1 per interaction"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add the onClick handler here
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 16 4zm4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.439 6.439 0 0 1-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.587 4.587 0 0 1-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a4.991 4.991 0 0 0 3.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43v1.014z" fill="#FFF" />
    </svg>
  );
};

export default SvgSib;