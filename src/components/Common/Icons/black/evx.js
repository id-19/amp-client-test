import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is exported from an initialization file

const SvgEvx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => Mixpanel.track("Icon Click", {
    "Icon Name": "Evx",
    "Context": props.context || "Unknown - Specify where used" // Assuming a 'context' prop is passed to SvgEvx
  })}
  >
    <path d="M10.082 17.21a1.61 1.61 0 0 0 1.783-.01l1.114 1.114 1.163-1.162-1.583-1.582a1.622 1.622 0 0 0-1.593-1.334c-.807 0-1.477.592-1.6 1.365L6.88 18.089A9.35 9.35 0 0 1 6.644 16c0-5.16 4.197-9.356 9.356-9.356S25.356 10.84 25.356 16c0 .764-.092 1.506-.266 2.217l-3.874-3.874a1.621 1.621 0 0 0-1.61-1.456 1.62 1.62 0 0 0-1.614 1.491l-8.417 8.417-1.162 1.163c.398.38.825.73 1.277 1.047A10.939 10.939 0 0 0 16 27c6.065 0 11-4.935 11-11S22.065 5 16 5 5 9.935 5 16a10.957 10.957 0 0 0 1.234 5.058l1.23-1.23zm8.709-1.306a1.609 1.609 0 0 0 1.65-.012l4.045 4.046c-1.49 3.197-4.733 5.418-8.486 5.418a9.301 9.301 0 0 1-5.127-1.534zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.635-18.212a.728.728 0 1 1-.001 1.455.728.728 0 0 1 .001-1.455zm-8.66 1.327a.728.728 0 1 1-.002 1.456.728.728 0 0 1 .001-1.456z" fillRule="evenodd" />
  </svg>
);

export default SvgEvx;