import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgXin = props => {
  const trackIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Name": "Xin",
      "Context": "Unknown", // This should be customized based on the icon's context
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconClick} style={{ cursor: 'pointer' }} // Added to visually indicate the icon is clickable
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM26.405 7.151l-3.63 1.61a.673.673 0 0 0-.35.59v12.98a.66.66 0 0 0 .36.59l3.63 1.57a.338.338 0 0 0 .5-.3V7.451a.35.35 0 0 0-.51-.3zM9.02 8.741l-3.52-1.6a.338.338 0 0 0-.5.3v16.74a.341.341 0 0 0 .52.29l3.54-1.87a.667.667 0 0 0 .32-.57v-12.7a.7.7 0 0 0-.36-.59zm11.04 4.43l-3.79-2.17a.668.668 0 0 0-.67 0l-3.86 2.15a.684.684 0 0 0-.34.59v4.4c0 .243.13.468.34.59l3.86 2.22c.207.12.463.12.67 0l3.79-2.2a.684.684 0 0 0 .34-.59v-4.4a.672.672 0 0 0-.34-.59z" fill="#FFF" />
    </svg>
  );
};

export default SvgXin;