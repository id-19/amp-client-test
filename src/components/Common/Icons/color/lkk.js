import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgLkk = props => {
  const trackSignUp = () => {
    mixpanel.track("Sign Up");
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#9D01EB" />
        <path fill="#FFF" fillRule="nonzero" d="M10.005 26v-3.656L16 16.24l5.976 6.105V26L16 19.894 10.005 26zM5 13.633h8.469L16 16.24H7.531L5 13.633zm22 0l-2.531 2.606H16V5l2.531 2.586v6.047H27z" />
      </g>
      <button type="button" role="button" onClick={trackSignUp}>Sign Up</button>
    </svg>
  );
};

export default SvgLkk;