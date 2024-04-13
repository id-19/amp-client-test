import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgPoa = props => (
  <svg 
    width={props.width || 64} 
    height={props.height || 64} 
    {...props} 
    fill="#444fa1" 
    onClick={() => mixpanel.track("Icon Interaction", {
      "Action": "Click", 
      "Icon Name": "Poa", 
      "Context": "Specify where used, e.g., 'Header', 'Footer'", 
      "Purpose": "Specify action, e.g., 'Open Modal', 'Navigate'"
    })}
  >
    <g fill="none">
      <circle cx={16} cy={16} fill="#444fa1" r={16} />
      <path d="M5 24L16 5l11 19zm6.872-9.676c1.285-.858 2.663-1.291 4.128-1.291s2.843.433 4.128 1.291L16 7.194zm-1.951 3.37l-2.997 5.177h18.152l-2.997-5.176c-1.81 1.989-3.843 2.999-6.079 2.999s-4.27-1.01-6.08-3zM16 19.565c1.938 0 3.711-.89 5.338-2.7-1.627-1.813-3.4-2.702-5.338-2.702s-3.711.89-5.338 2.701c1.627 1.812 3.4 2.702 5.338 2.702zm0-.483c-1.16 0-2.101-.975-2.101-2.178 0-1.202.94-2.177 2.101-2.177s2.101.975 2.101 2.177c0 1.203-.94 2.178-2.101 2.178zm0-1.13c.559 0 1.012-.469 1.012-1.048 0-.579-.453-1.048-1.012-1.048s-1.012.47-1.012 1.048c0 .58.453 1.049 1.012 1.049z" fill="#fff" />
    </g>
  </svg>
);

export default SvgPoa;