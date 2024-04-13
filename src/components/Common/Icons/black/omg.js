import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgOmg = props => {
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Omg",
      "Context": "Assumed to be wrapped in a clickable element for demonstration purposes"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <path fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.144-14.71a4.353 4.353 0 0 0-4.35 4.355A4.353 4.353 0 0 0 11.855 26a4.353 4.353 0 0 0 4.352-4.355 4.353 4.353 0 0 0-4.351-4.355zm0 7.393a3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.037 3.035 3.035 0 0 1 3.034 3.037 3.04 3.04 0 0 1-3.034 3.036zM21.15 8a4.353 4.353 0 0 0-4.351 4.355 4.353 4.353 0 0 0 4.35 4.355 4.353 4.353 0 0 0 4.352-4.355A4.353 4.353 0 0 0 21.149 8zm0 7.393a3.035 3.035 0 0 1-3.034-3.036A3.035 3.035 0 0 1 21.15 9.32a3.035 3.035 0 0 1 3.033 3.037 3.04 3.04 0 0 1-3.033 3.036zM11.856 8a4.358 4.358 0 0 0-1.696 8.37 4.351 4.351 0 0 0 5.288-1.556 4.36 4.36 0 0 0-.475-5.497h1.233V8h-4.35zm3.034 4.355a3.035 3.035 0 0 1-3.034 3.036 3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.036 3.04 3.04 0 0 1 3.035 3.036h-.001z" />
    </svg>
  );
};

export default SvgOmg;