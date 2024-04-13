import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgIcn = props => {
  const trackIconClick = () => {
    mixpanel.track('Icon Click', {
      'Context': 'Sign Up',
      'Icon': 'SvgIcn',
      'Color': 'White'
    });
  };

  return (
    <div onClick={trackIconClick} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} fill="#FFF" fillRule="evenodd" {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.833-25v18H23.5V7h-2.667zm-4.444 9v9h2.667v-9h-2.667zm-4.445-4.5V25h2.667V11.5h-2.667zm-4.444 9V25h2.667v-4.5H7.5z" />
      </svg>
    </div>
  );
};

export default SvgIcn;