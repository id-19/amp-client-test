import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNcash = props => {
  useEffect(() => {
    // Track Icon Rendered event
    mixpanel.track("Icon Rendered", {
      "Icon Name": "ncash",
      "Context": "Unknown - Depends on where and how used"
    });
  }, []);

  const handleClick = () => {
    // Track Icon Clicked event
    mixpanel.track("Icon Clicked", {
      "Icon Name": "ncash",
      "Action": "Unknown - Depends on wrapping element's onClick handler"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#36a9cf" fillRule="nonzero" r={16} />