import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgIcn = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Generic",
      "Purpose": "Not Specified",
      "Color": "#4C6F8C"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#4C6F8C" onClick={handleClick} {...props} >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#4C6F8C" />
        <path fill="#FFF" fillRule="nonzero" d="M20.833 7H23.5v18h-2.667V7zm-4.444 9h2.667v9h-2.667v-9zm-4.445-4.5h2.667V25h-2.667V11.5zm-4.444 9h2.667V25H7.5v-4.5z" />
      </g>
    </svg>
  );
};

export default SvgIcn;