import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgSrn = props => {
  // Track view on mount
  useEffect(() => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgSrn",
      "Action": "View",
      "Context": "Assuming wrapped by a button or link"
    });
  }, []);

  // Function to handle click event
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgSrn",
      "Action": "Click",
      "Context": "Assuming wrapped by a button or link"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} fill="#1c1c1c">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#1c1c1c" r={16} />