import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgPrl = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Prl",
      "Context": "Assumed to be wrapped in an interactive element like a button or link"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#1061e3" onClick={handleIconClick} {...props} >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#1061e3" r={16} />