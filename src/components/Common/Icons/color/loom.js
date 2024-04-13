import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgLoom = props => {
  const handleIconClick = () => {
    mixpanel.track("Video Call Initiated", {
      Icon: "Loom",
      Action: "Click"
    });
  };

  return (
    <div onClick={handleIconClick} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none">
          <circle cx={16} cy={16} r={16} fill="#48BEFF" />
          <g fill="#FFF">
            <path d="M22.194 26.239L5.81 14.744a4.247 4.247 0 0 1 0-6.953L9.78 5l16.386 11.494a4.247 4.247 0 0 1 0 6.953l-3.972 2.792zM9.776 6.863L6.683 9.027a2.729 2.729 0 0 0 0 4.473l15.514 10.877 3.094-2.164a2.729 2.729 0 0 0 0-4.473L9.776 6.863z" />
            <path d="M9.763 24.377l-3.09-2.167a2.729 2.729 0 0 1 0-4.473l8-5.583-1.32-.928-7.544 5.268a4.247 4.247 0 0 0 0 6.953l3.957 2.779 4.897-3.429-1.314-.926-3.586 2.506zM26.17 7.797L22.21 5.02l-4.9 3.429 1.314.925 3.58-2.505 3.09 2.167a2.729 2.729 0 0 1 0 4.473l-8 5.582 1.315.926 7.554-5.277a4.247 4.247 0 0 0 0-6.953l.008.01z" />
            <path d="M6.746 15.829l6.23-4.362.868 1.24-6.231 4.362zm17.75-1.758l-3.035 2.125.868 1.241 3.142-2.204c-.334-.382-.657-.772-.981-1.163l.006.001z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgLoom;