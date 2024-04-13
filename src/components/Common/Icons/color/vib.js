import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgVib = props => (
  <svg width={props.width || 64} height={props.height || 64} fill="none" {...props} onClick={() => mixpanel.track("Icon Clicked", {"Icon Name": "Vib", "Icon Type": "SVG"})}>
    <g fill="none">
      <circle cx={16} cy={16} fill="#ff1f43" r={16} />
      <path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff" />
    </g>
  </svg>
);
export default SvgVib;