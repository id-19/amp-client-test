import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgIns = props => {
  const trackClick = () => {
    mixpanel.track("Instagram Icon Clicked", {
      "Location": "Footer",
      "Action": "Navigate",
      "Destination": "Instagram Page"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackClick}>
      <g fillRule="evenodd">