import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgWabi = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Wabi",
      "Context": "Unknown" // This should be dynamically replaced based on where the icon is used.
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#fff" >