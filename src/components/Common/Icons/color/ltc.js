import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgLtc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => {
    mixpanel.track("Litecoin Icon Clicked", {
      "Action": "Initiate Transaction",
      "Currency": "LTC",
      "Context": "User clicked on Litecoin icon"
    });
  }} fill="none" fillRule="evenodd" >
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#BFBBBB" />
      <path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z" />
    </g>
  </svg>
);

export default SvgLtc;