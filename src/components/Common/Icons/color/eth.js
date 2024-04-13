import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly initialized elsewhere in the project
const mixpanel = Mixpanel.init('YOUR_MIXPANEL_TOKEN');

const SvgEth = props => {
  // Function to handle click events and log them to Mixpanel
  const handleIconClick = () => {
    mixpanel.track('Ethereum Icon Interaction', {
      'Action': 'Click',
      'Icon': 'Ethereum',
      'Context': 'Assumed to be wrapped in an interactive element elsewhere'
    });
  };

  return (
    <div onClick={handleIconClick}>
      {/* Wrapping the SVG in a div to capture click events */}
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none" fillRule="evenodd">
          <circle cx={16} cy={16} r={16} fill="#627EEA" />
          <g fill="#FFF" fillRule="nonzero">
            <path fillOpacity={0.602} d="M16.498 4v8.87l7.497 3.35z" />
            <path d="M16.498 4L9 16.22l7.498-3.35z" />
            <path fillOpacity={0.602} d="M16.498 21.968v6.027L24 17.616z" />
            <path d="M16.498 27.995v-6.028L9 17.616z" />
            <path fillOpacity={0.2} d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
            <path fillOpacity={0.602} d="M9 16.22l7.498 4.353v-7.701z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgEth;