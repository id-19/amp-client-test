import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgStorj = props => {
  const handleClick = () => {
    mixpanel.track("Storj Icon Clicked", {
      "Context": "Where the icon is used within the app",
      "Action": "Click"
    });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>