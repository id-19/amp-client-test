import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const SvgPink = props => (
  <svg 
    width={props.width || 64} 
    height={props.height || 64} 
    {...props} 
    fill="#fff" 
    fillRule="evenodd"
    // Adding onClick event handler to track the event with Mixpanel
    onClick={() => mixpanel.track("Favorite Icon Clicked", {
      "Icon": "Pink Heart", 
      "Action": "Clicked", 
      "Context": "Assumed to be part of a favorite feature"
    })}
  >
    <g>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.452-23.071A9.865 9.865 0 0 0 16.43 6C10.946 6 6.5 10.477 6.5 16c0 2.624 1.003 5.011 2.644 6.795v-7.121h.008c.169-3.9 3.363-7.011 7.278-7.011 2.012 0 3.833.821 5.152 2.149zm0 14.142l-1.87-1.883a7.238 7.238 0 0 1-4.99 2.147V26a9.865 9.865 0 0 0 6.86-2.928zM11.68 24.784c.755.415 1.57.735 2.429.941v-5.511c.728.43 1.576.677 2.482.677 2.712 0 4.911-2.214 4.911-4.945 0-2.732-2.199-4.946-4.91-4.946-2.623 0-4.765 2.069-4.905 4.674h-.007zm4.911-6.338a2.491 2.491 0 0 1-2.482-2.5c0-1.381 1.111-2.5 2.482-2.5s2.483 1.119 2.483 2.5c0 1.38-1.112 2.5-2.483 2.5z" />
      <path d="M23.452 8.929l-1.87 1.883a7.238 7.238 0 0 0-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 0 1 6.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 0 1 7.022 2.929zm0 14.142A9.865 9.865 0 0 1 16.592 26v-2.664a7.238 7.238 0 0 0 4.99-2.147z" opacity={0.5} />
    </g>
  </svg>
);

export default SvgPink;