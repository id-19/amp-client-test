import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgIgnis = props => {
  const handleSvgClick = () => {
    mixpanel.track("Ignis Icon Clicked", {
      "Context": "Unknown"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} id="svgIgnisIcon" // Added id for tracking
      onClick={handleSvgClick} // Added onClick handler for Mixpanel tracking
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#f9c011" r={16} />
        <path d="M14.812 6c1.518.887 2.946 1.914 4.45 2.825l-5.544 9.671c-.736-1.291-1.426-2.608-2.153-3.906 1.047-2.875 2.243-5.7 3.247-8.59zM10 26c3.139-5.709 6.4-11.355 9.504-17.079.83 1.457 1.661 2.913 2.496 4.37-2.406 4.232-4.83 8.454-7.217 12.695-1.595 0-3.188-.02-4.783.014zm5.082-.023c1.33-2.275 2.583-4.59 3.93-6.855.803 1.027 1.618 2.048 2.415 3.08a613.917 613.917 0 0 1-6.345 3.775z" fill="#fff" fillRule="nonzero" />
      </g>
    </svg>
  );
};

export default SvgIgnis;