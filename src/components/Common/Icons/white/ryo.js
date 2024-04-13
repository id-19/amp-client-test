import React from 'react';
import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init('YOUR_MIXPANEL_TOKEN');

const SvgRyo = props => {
  const handleClick = () => {
    mixpanel.track("Sign Up", {
      "Icon Used": "Ryo",
      "Location": "Header",
      "Action": "Navigate to Sign Up Page"
    });
  };

  return (
    <button className="signup-button" type="button" aria-label="Sign up" onClick={handleClick}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.014-28C9.376 4 4 9.376 4 15.986S9.376 27.97 15.986 27.97 27.97 22.595 27.97 15.986C27.971 9.376 22.595 4 15.986 4zm0 1.632a10.34 10.34 0 0 1 10.353 10.354 10.34 10.34 0 0 1-10.353 10.353A10.34 10.34 0 0 1 5.632 15.986 10.341 10.341 0 0 1 15.986 5.632zm-4.453 5.928v8.85h8.905v-8.85h-8.905zm1.45 1.45h6.004v5.95h-6.003v-5.95z" fill="#FFF" />
      </svg>
    </button>
  );
};

export default SvgRyo;