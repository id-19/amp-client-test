import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEvx = props => (
  <svg width={props.width || 64} height={props.height || 64} fill="#044aac" onClick={() => mixpanel.track("Icon Click", { "Icon Name": "Evx", "Action": "Click", "Context": "Assumed to be wrapped in a clickable element" })} {...props} >
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#044aac" r={16} />
      <path d="M10.082 17.21l-2.618 2.62-1.23 1.23A10.937 10.937 0 0 1 5 16C5 9.935 9.935 5 16 5s11 4.935 11 11-4.935 11-11 11c-2.346 0-4.522-.739-6.31-1.995a11.08 11.08 0 0 1-1.277-1.047l1.162-1.163 8.417-8.417a1.621 1.621 0 0 1 1.614-1.49 1.62 1.62 0 0 1 1.61 1.455l3.874 3.874A9.346 9.346 0 0 0 25.356 16c0-5.16-4.197-9.356-9.356-9.356S6.644 10.84 6.644 16c0 .718.081 1.417.235 2.089L9.367 15.6a1.621 1.621 0 0 1 1.599-1.365 1.62 1.62 0 0 1 1.593 1.334l1.583 1.582-1.163 1.162-1.114-1.114a1.61 1.61 0 0 1-1.783.01zm8.709-1.306l-7.918 7.918A9.301 9.301 0 0 0 16 25.356c3.753 0 6.997-2.221 8.486-5.418l-4.045-4.046a1.609 1.609 0 0 1-1.65.012zm.844-2.116a.728.728 0 1 0 .002 1.455.728.728 0 0 0-.002-1.455zm-8.66 1.327a.728.728 0 1 0 0 1.456.728.728 0 0 0 0-1.456z" fill="#fff" />
    </g>
  </svg>
);

export default SvgEvx;