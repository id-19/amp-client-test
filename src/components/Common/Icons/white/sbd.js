import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgSbd = props => {
  const handleInteraction = (action) => {
    mixpanel.track("Icon Interaction", {
      "Context": "Unknown - Determine based on usage",
      "Action": action
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" onClick={() => handleInteraction("Click")} onMouseEnter={() => handleInteraction("Hover")} {...props}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.87 8.229c-.193-.098-2.64 1.958-2.64 3.471-.004 2.068 2.854 6.752 3.336 8.564.414 1.554-.703 3.419-.396 3.504.28.183 2.947-2.562 3.051-3.732.134-1.864-3.114-7.297-3.373-8.7-.3-1.638.238-3.07.022-3.107zm6.109-2.14c-.246-.124-3.368 2.496-3.368 4.427-.003 2.637 3.642 8.61 4.255 10.92.528 1.981-.895 4.36-.506 4.466.36.232 3.758-3.265 3.892-4.759.172-2.375-3.972-9.303-4.301-11.095-.383-2.083.302-3.912.028-3.958zm6.305 2.14c-.191-.098-2.64 1.958-2.64 3.471-.004 2.068 2.855 6.752 3.336 8.564.414 1.554-.702 3.419-.396 3.504.282.183 2.95-2.562 3.052-3.732.133-1.864-3.114-7.297-3.374-8.7-.3-1.638.238-3.07.022-3.107z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgSbd;