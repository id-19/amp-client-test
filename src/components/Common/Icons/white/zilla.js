import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgZilla = props => {
  useEffect(() => {
    mixpanel.track("Icon Viewed", {
      "Icon Name": "Zilla",
      "Visibility": "Visible",
      "Context": "User scrolled to icon's position"
    });
  }, []);

  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Zilla",
      "Color": "White",
      "Size": "Default"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={handleClick} {...props} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.495-25.726c-..."></path>
    </svg>
  );
};

export default SvgZilla;