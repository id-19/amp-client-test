import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgSnm = props => {
  const trackIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Snm",
      "Context": "Unknown - Define based on usage context",
      "Icon Purpose": "Unknown - Define based on specific use case"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" onClick={trackIconClick} {...props} >