import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgGbyte = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Clicked", {"Icon Name": "Gbyte", "Context": "Unknown"})}>
    <path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11z" />
  </svg>
);
export default SvgGbyte;