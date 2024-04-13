import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgXmy = props => {
  const trackIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Name": "SvgXmy",
      "Context": "Unknown - Determine based on usage",
      "Action": "Click"
    });
  };

  return (
    <div onClick={trackIconClick} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.05-11h4.567c.764 0 1.383-.642 1.383-1.433s-.619-1.433-1.39-1.433l-2.637.018c.68-2.182 1.022-3.617 1.022-4.304 0-1.818-1.263-2.848-2.765-2.848-1.623 0-2.766.848-3.427 1.576C17.323 11.485 16.24 11 15.4 11s-1.803.242-2.525 1.152c-.16-.687-.6-1.03-1.322-1.03h-5.14a1.425 1.425 0 0 0 .031 2.848h3.065l-1.382 5.757c.04.849.44 1.273 1.202 1.273.841 0 1.382-.485 1.623-1.455.44-1.777.781-3.11 1.022-4 .36-1.333 1.142-1.939 1.983-1.939.842 0 1.202.606 1.202 1.091 0 .323-.112.84-.337 1.55-.577 2.127-.865 3.288-.865 3.48 0 .485.18 1.273 1.263 1.273.72 0 1.222-.364 1.502-1.09.722-2.789 1.182-4.506 1.383-5.152.3-.97 1.29-1.152 1.743-1.152.781 0 1.202.546 1.202 1.091 0 .283-.071.603-.214.96-.699 2.306-1.048 3.683-1.048 4.13 0 .91.661 1.213 1.262 1.213z" fill="#fff" />
      </svg>
    </div>
  );
};

export default SvgXmy;