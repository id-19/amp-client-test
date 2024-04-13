import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgPowr = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Power",
      "Context": "Used in settings toggle",
      "Color": "White"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#fff" >