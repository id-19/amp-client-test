import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Replace YOUR_MIXPANEL_TOKEN with your actual Mixpanel project token

const SvgPowr = props => {
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Powr",
      "Action": "Click",
      "Context": "Assumed to be part of an interactive element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} >