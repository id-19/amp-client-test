import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgSub = props => {
  const handleClick = () => {
    const eventProperties = {
      "Location": props.location || "default location",
      "Action": "Subscribe"
    };
    mixpanel.track("Subscribe Button Clicked", eventProperties);
  };

  return (
    <button type="button" aria-label="Subscribe" onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none">
          <circle cx={16} cy={16} r={16} fill="#E53431" />
          <path fill="#FFF" d="M12.117 5.314a.24.24 0 0 1 .15-.05.25.25 0 0 1 .15.05l1.257.942a.25.25 0 1 1-.301.4l-1.106-.827L8.67 8.526l15.8 11.854a.252.252 0 0 1 0 .403l-1.161.87a.25.25 0 0 1-.3-.402l.893-.67L8.101 8.729a.248.248 0 0 1 0-.4l4.016-3.014zm4.017 0a.247.247 0 0 1 .3-.002l8.035 6.027a.246.246 0 0 1 .086.279.249.249 0 0 1-.237.172h-4.017a.255.255 0 0 1-.15-.05l-5.273-3.954a.25.25 0 1 1 .301-.402l5.207 3.904h3.179l-7.28-5.46-5.04 3.78a.25.25 0 1 1-.301-.402l5.19-3.892zM9.21 10.509a.252.252 0 0 1 .3.402l-.841.63L24.47 23.395a.25.25 0 0 1 0 .402l-4.017 3.013a.253.253 0 0 1-.3 0l-1.163-.872a.251.251 0 0 1 .303-.402l1.01.757 3.6-2.7L8.098 11.742a.253.253 0 0 1 0-.402l1.11-.83zm-.959 9.819v.002h4.015a.24.24 0 0 1 .15.05l5.216 3.911a.25.25 0 1 1-.3.402l-5.146-3.861H9.005l7.281 5.46 5.03-3.772a.251.251 0 0 1 .302.402l-5.181 3.884a.25.25 0 0 1-.15.05.246.246 0 0 1-.151-.05l-8.037-6.025a.251.251 0 1 1 .152-.453z" />
        </g>
      </svg>
    </button>
  );
};

export default SvgSub;