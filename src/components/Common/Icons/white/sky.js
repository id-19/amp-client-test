import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the application
import Mixpanel from 'mixpanel-browser';

const SvgSky = props => {
  const trackIconClick = () => {
    Mixpanel.track("Icon Clicked", {
      "Icon Type": "Sky",
      "Context": "Common Icons",
      "Color": "White"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={trackIconClick} {...props} >
      <path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.027-19.197a5.384 5.384 0 0 0-1.67-.564L17.292 23.5h1.923l4.812-10.697zm-8.42-6.284c-2.853.209-5.108 2.653-5.108 5.648C7.462 12.167 5 14.702 5 17.833c0 2.286 1.316 4.249 3.204 5.145l7.403-16.459zm5.894 5.648c0-1.06-.287-2.049-.78-2.897L14.32 23.5h2.083l5.099-11.333zm1.894 10.982C25.5 22.35 27 20.274 27 17.836c0-.683-.123-1.335-.339-1.943l-3.266 7.256zm1.442-9.814L20.265 23.5h1.236c.178 0 .36-.01.536-.028l3.986-8.858a5.572 5.572 0 0 0-1.186-1.28zM16.02 6.5L8.543 23.123c.607.24 1.266.377 1.956.377h.28L18.21 6.981a5.299 5.299 0 0 0-2.19-.481zm4.267 2.118a5.596 5.596 0 0 0-1.614-1.403L11.346 23.5h2.246l6.695-14.882z" />
    </svg>
  );
};

export default SvgSky;