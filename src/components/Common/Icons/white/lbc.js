import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgLbc = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Lbc",
      "Action": "Click",
      "Context": "Unknown" // Replace "Unknown" with the actual context if known
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconInteraction} fill="#fff" fillRule="evenodd" >
      <path d="M24.176 17.184l-8.37 5.182-8.787-4.39v-2.58l9.284-5.806 8.315 4.056v.363l-8.813 5.476-6.749-3.346-.444.896 7.247 3.593 9.759-6.063v-1.544l-9.375-4.573L6.02 14.842v3.752l9.839 4.916 8.872-5.493-.215.862.97.242.621-2.485-2.485-.621-.242.97zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" />
    </svg>
  );
};

export default SvgLbc;