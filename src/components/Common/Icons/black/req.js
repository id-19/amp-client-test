import React from 'react';
// Assuming Mixpanel is initialized and imported elsewhere in the project setup
import mixpanel from 'mixpanel-browser';

const SvgReq = props => {
  // Function to handle click events on the SVG, triggering a Mixpanel event
  const handleSvgClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Req",
      "Context": "Unknown - Depends on where and how the icon is used"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Adding the onClick event handler to track clicks
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10 6v1.722l6.916.001c.892-.012 1.547.062 1.963.221 1.506.513 2.536 2.065 2.415 3.622-.038 1.802-1.645 3.395-3.482 3.444-1.592.022-3.185.002-4.778.01 1.495 2.44 3.74 6.1 6.735 10.98l1.43-.898a5181.37 5181.37 0 0 0-5.165-8.418c1.007-.018 2.037.085 3.018-.193 1.546-.409 2.868-1.538 3.5-2.98.698-1.567.578-3.468-.34-4.925a5.389 5.389 0 0 0-3.59-2.436c-.44-.093-1.113-.143-2.015-.15H10z" />
    </svg>
  );
};

export default SvgReq;