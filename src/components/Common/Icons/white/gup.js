import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGup = props => {
  const handleSvgClick = () => {
    mixpanel.track("Icon Interaction", {
      "Context": "Unknown",
      "Width": props.width || 64,
      "Height": props.height || 64
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick}>
      <path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.01-19.321l2.8-2.82A32.464 32.464 0 0 0 16 6a32.574 32.574 0 0 0-2.794 3.875l2.784 2.804zm5.718 2.81c-.759-1.676-1.515-3.234-2.39-4.748l-3.328 3.352-3.31-3.334c-.828 1.438-1.558 2.934-2.28 4.557-.786 2.202-2.078 4.577-.97 6.691 1.907 3.644 6.387 5.054 10.006 3.135a7.503 7.503 0 0 0 3.112-3.135c1.099-2.114-.054-4.316-.84-6.517z" />
    </svg>
  );
};

export default SvgGup;