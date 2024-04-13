import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgReq = props => {
  const trackFeatureRequestClick = () => {
    mixpanel.track("Feature Request Clicked", {
      "Icon": "Request",
      "Action": "Open Feature Request Modal",
      "Location": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackFeatureRequestClick} >
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#6CFCCD" />
        <path fill="#FFF" d="M10 6h6.607c.902.007 1.574.057 2.016.15a5.389 5.389 0 0 1 3.589 2.436c.918 1.457 1.038 3.358.34 4.925-.632 1.442-1.954 2.571-3.5 2.98-.981.278-2.01.175-3.018.193a5181.37 5181.37 0 0 1 5.165 8.418L19.77 26c-2.995-4.88-5.24-8.54-6.735-10.98 1.593-.008 3.186.012 4.778-.01 1.837-.049 3.444-1.642 3.482-3.444.12-1.557-.91-3.11-2.415-3.622-.416-.159-1.07-.233-1.963-.22L10 7.721V6z" />
      </g>
    </svg>
  );
};

export default SvgReq;