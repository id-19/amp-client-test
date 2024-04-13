import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgFlmi = props => {
  useEffect(() => {
    // Track "Icon Rendered" event when the component mounts
    mixpanel.track("Icon Rendered", {
      "Icon Name": "Flmi",
      "Path": "src/components/Common/Icons/icon/flmi.js"
    });
  }, []);

  const handleIconClick = () => {
    // Track "Icon Clicked" event when the icon is clicked
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Flmi",
      "Action": "Clicked",
      "Path": "src/components/Common/Icons/icon/flmi.js"
    });
  };

  return (
    <svg width={props.width} height={props.height} viewBox="0 0 1024 1024" preserveAspectRatio onClick={handleIconClick}>