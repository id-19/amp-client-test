import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEla = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Context": "Unknown",
      "Icon": "Ela",
      "Action": "Clicked"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <g fillRule="evenodd">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 10.23l10 5.704 10-5.704-5-2.8-5.004 2.872L11 7.432l-5 2.799zm0 9l10 5.704 10-5.704-5-2.8-5 2.874-5-2.871-5 2.798z" />
        <g fillRule="nonzero">
          <path fillOpacity={0.604} d="M11 22.119l5-2.82v5.635l-5-2.815zm0-9l5-2.82v5.635l-5-2.815z" />
          <path fillOpacity={0.299} d="M26 19.23l-5 2.886V16.43l5 2.8zm0-9l-5 2.886V7.43l5 2.8z" />
          <path fillOpacity={0.197} d="M11 22.116v-5.683l5 2.87-5 2.813zm0-9V7.433l5 2.87-5 2.813z" />
          <path fillOpacity={0.404} d="M21 22.116l-5 2.818v-5.63l5 2.812zm0-9l-5 2.818v-5.63l5 2.812z" />
          <path fillOpacity={0.5} d="M11 16.433v5.683l-5-2.885 5-2.798zm0-9v5.683l-5-2.885 5-2.798z" />
        </g>
      </g>
    </svg>
  );
};

export default SvgEla;