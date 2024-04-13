import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSys = props => {
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Context": "Unknown - Determine based on usage",
      "Icon Name": "SvgSys",
      "Color": "Blue",
      "Size": props.width || 64 // Assuming width and height are the same for size determination
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#0082c6" r={16} />
        <path d="M18.046 15.103a.117.117 0 0 0-.114.041.108.108 0 0 0 .023.156C22.334 18.478 16.101 25.754 4 18.011c10.26 9.655 24.547-1.01 14.046-2.908zm-5.844-4.248c-9.086 2.907 1.323 9.763 2.226 6.3a.11.11 0 0 0-.083-.137.12.12 0 0 0-.064.001c-1.337.435-8.701-1.624-2.08-6.164zM28 12.602c-7.867-5.61-22.628-.984-15.013 2.977a.119.119 0 0 0 .157-.047.11.11 0 0 0 .003-.098C10.05 8.89 25.781 10.88 28 12.602zm-6.528 8.151c4.159-1.89.777-8.361-4.724-7.112a.116.116 0 0 1-.138-.085.107.107 0 0 1 .04-.11c4.28-3.216 12.314 4.292 4.822 7.307z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgSys;