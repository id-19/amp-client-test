import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgXrp = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("XRP Icon Clicked", {})}>
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.07-24l-4.574 4.523a3.556 3.556 0 0 1-4.996 0L8.93 8H6.035l6.02 5.957a5.621 5.621 0 0 0 7.89 0L25.961 8h-2.89zM8.895 24.563L13.504 20a3.556 3.556 0 0 1 4.996 0l4.605 4.563H26l-6.055-5.993a5.621 5.621 0 0 0-7.89 0L6 24.562h2.895z" fill="#FFF" />
  </svg>
);

export default SvgXrp;