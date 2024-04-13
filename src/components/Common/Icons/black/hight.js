import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgHight = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Type": "SVG",
      "Action": "Click",
      "Icon Name": "Hight"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.496-21.668l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0 0 17.96-14.94l.003-.007zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 0 0-17.96 14.94l8.452-13.93h5.047z" />
    </svg>
  );
};

export default SvgHight;