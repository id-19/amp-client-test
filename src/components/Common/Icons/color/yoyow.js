import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgYoyow = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Context": "Sign Up Button",
      "Icon": "Yoyow",
      "Color": "Blue"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#21a5de" onClick={handleIconClick} {...props} >
      <g fill="none">
        <circle cx={16} cy={16} fill="#21a5de" r={16} />
        <path d="M21.49 16.575c.34.364.546.849.546 1.381 0 1.129-.928 2.044-2.072 2.044-1.143 0-2.07-.915-2.07-2.044 0-.532.206-1.017.544-1.381A.743.743 0 0 1 17.243 16a.72.72 0 0 1 .157-.45c-.369.334-.86.538-1.4.538s-1.031-.204-1.4-.538a.72.72 0 0 1 .157.45c0 .403-.33.73-.74.73a.743.743 0 0 1-.455-.155c.338.364.545.849.545 1.381 0 1.129-.928 2.044-2.071 2.044-1.144 0-2.072-.915-2.072-2.044 0-.532.207-1.017.545-1.381A.743.743 0 0 1 9.314 16a.72.72 0 0 1 .157-.45c-.369.334-.86.538-1.4.538-1.144 0-2.071-.915-2.071-2.044S6.927 12 8.071 12c1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 0 1-.545 1.381.743.743 0 0 1 1.196.575.72.72 0 0 1-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 0 1-.158-.45.743.743 0 1 1 1.196-.575 2.022 2.022 0 0 1-.545-1.381c0-1.129.927-2.044 2.071-2.044s2.071.915 2.071 2.044a2.02 2.02 0 0 1-.545 1.381.743.743 0 0 1 1.196.575.72.72 0 0 1-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 0 1-.158-.45.743.743 0 1 1 1.196-.575 2.022 2.02 0 0 1-.545-1.381c0-1.129.927-2.044 2.071-2.044S26 12.915 26 14.044s-.927 2.044-2.071 2.044c-.54 0-1.031-.204-1.4-.538a.72.72 0 0 1 .157.45c0 .403-.33.73-.74.73a.743.743 0 0 1-.455-.155z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgYoyow;