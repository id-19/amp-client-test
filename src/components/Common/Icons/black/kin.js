import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgKin = props => {
  // Track SVG Icon Viewed event on component mount
  useEffect(() => {
    mixpanel.track("SVG Icon Viewed", {
      "Icon": "Kin",
      "Context": "Displayed on Page Load or Component Mount"
    });
  }, []);

  // Handler for tracking SVG Icon Clicked event
  const handleClick = () => {
    mixpanel.track("SVG Icon Clicked", {
      "Icon": "Kin",
      "Action": "Triggered some functionality"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add onClick event handler to track clicks
    >