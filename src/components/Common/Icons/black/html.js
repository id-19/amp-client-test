import React from 'react';
// Assuming Mixpanel has been initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgHtml = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("SVG Icon Interaction", {
    "Icon": "HTML",
    "Action": "View More About HTML",
    "Context": "Used within an interactive element like a button or link"
  })}
  >
    <path d="M16.02 16.945l-.529 1.64h-.788l1.317-4.107V7.945h7.344l-1.397 15.39-5.947 1.602zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-7.364-7.531L15.98 26.5l7.384-2.031L25 6.5H7zm5.163-6.793l-3.526-1.432v-.592l3.526-1.433v.742l-2.469.99 2.47.984zm7.933-1.432v-.592l-3.527-1.433v.742l2.47.987-2.47.987v.741zm-5.712.7l1.1-3.413h-.796l-.304.947z" fillRule="evenodd" />
  </svg>
);

export default SvgHtml;