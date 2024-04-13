import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Replace YOUR_MIXPANEL_TOKEN with your actual Mixpanel project token

const SvgKin = props => {
  const handleIconClick = () => {
    const eventData = {
      "Icon Name": "Kin",
      "Action": "Click",
      "Context": props.context || "Unknown", // Assuming 'context' is passed as a prop to SvgKin
      "Timestamp": new Date().toISOString()
    };
    mixpanel.track("Icon Interaction", eventData);
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="none" fillRule="evenodd" onClick={handleIconClick} {...props} >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#005fff" r={16} />