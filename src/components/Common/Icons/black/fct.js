import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgFct = props => (
  <button onClick={() => mixpanel.track("Icon Clicked", {
    "Icon Name": "SvgFct",
    "Context": "Unknown - Specify where used",
    "Action": "Unknown - Specify action performed"
  })}
  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
    <svg width={props.width || 64} height={props.height || 64} {...props} aria-label="SvgFct icon">
      <path fillRule="evenodd" d="M8.012 10.005l.022-.023..." />
    </svg>
  </button>
);

export default SvgFct;