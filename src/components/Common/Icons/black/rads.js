import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgRads = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Rads",
      "Default Width": props.width || "64",
      "Default Height": props.height || "64"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.47 7.661a3.808 3.808 0 1 0 0 7.617 3.808 3.808 0 0 0 0-7.617zm3.807 12.87a5.253 5.253 0 0 1 5.253-5.253 3.808 3.808 0 1 0-3.808-3.808c0 2.9-2.352 5.253-5.253 5.253a3.808 3.808 0 1 0 3.808 3.808zm5.253 3.808a3.808 3.808 0 1 0 .001-7.616 3.808 3.808 0 0 0 0 7.616zm0-2.66a1.148 1.148 0 1 1 0-2.296 1.148 1.148 0 0 1 0 2.296zm-9.06 0a1.148 1.148 0 1 1 0-2.296 1.148 1.148 0 0 1 0 2.296zm9.06-9.062a1.148 1.148 0 1 1 0-2.296 1.148 1.148 0 0 1 0 2.296zm-9.06 0a1.148 1.148 0 1 1 0-2.296 1.148 1.148 0 0 1 0 2.296z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgRads;