import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgStorj = props => {
  const handleSvgClick = () => {
    mixpanel.track("Storj Icon Clicked", {
      "Icon": "Storj",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="none" fillRule="evenodd" onClick={handleSvgClick} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#2683FF" />