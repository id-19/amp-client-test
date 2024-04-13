import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgLend = props => {
  const handleClick = () => {
    mixpanel.track("Lend Button Clicked", {
      "Icon": "Lend",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#0fa9c9" r={16} />
        <path d="M17.147 20.446L11.697 26l-1.554-1.705 3.777-3.85L10 16.452l1.673-1.706zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgLend;