import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgQrl = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "QRL",
      "Context": "Assumed to be wrapped in a clickable element elsewhere"
    });
  };

  return (
    <div onClick={handleIconClick} style={{ cursor: 'pointer', display: 'inline-block' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none" fillRule="evenodd">
          <circle cx={16} cy={16} fill="#252525" r={16} />