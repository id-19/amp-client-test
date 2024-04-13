import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSumo = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Clicked", { "Icon": "Sumo", "Context": "Learn More", "Action": "Navigate" })}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#2D9CDB" />
      <path fill="#FFF" d="M18.061 9.084c3.404 3.566 4.268 4.196 5.095 4.423-2.875-.36-4.497-.564-7.206-1.986l-1.71 1.99L25 15.9c-3.366 2.862-4.824 4.387-6.939 7.014H13.99c-1.789-2.618-2.982-3.468-5.28-4.527 3.058.282 4.758.47 7.24 1.94l1.861-2.09L7 15.9c2.514-2.072 3.977-3.454 6.989-6.816h4.072zm-3.821-.497c.93-1.145 1.31-1.702 1.81-2.587.49.912.869 1.475 1.76 2.587h-3.57zm3.57 14.826C16.879 24.558 16.498 25.115 16 26c-.49-.912-.87-1.475-1.76-2.587h3.57z" />
    </g>
  </svg>
);

export default SvgSumo;