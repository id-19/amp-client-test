import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
const SvgKin = props => {
  // Track "Icon Viewed" event when the component mounts
  useEffect(() => {
    mixpanel.track("Icon Viewed", {
      "Icon Name": "SvgKin",
      "Page": "Assumed Page Name or URL",
      "Action": "Rendered"
    });
  }, []);

  // Handler to track "Icon Clicked" event
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgKin",
      "Page": "Assumed Page Name or URL",
      "Action": "Clicked"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add onClick event handler to track clicks
    >