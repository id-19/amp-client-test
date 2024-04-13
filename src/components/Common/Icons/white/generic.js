import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGeneric = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Generic",
      "Width": props.width || 64,
      "Height": props.height || 64,
      "Context": props.context || 'Unknown',
      "Custom Property": props.customProperty || 'None'
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconInteraction} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.002-22.145l.81-3.241-2.596-.646-.643 2.575a8.277 8.277 0 0 0-1.298-.323l.644-2.575L15.323 5l-.81 3.241c-2.983.542-5.509 2.737-6.28 5.823s.426 6.206 2.804 8.08l-.81 3.242 2.596.646.643-2.575a8.277 8.277 0 0 0 1.298.323l-.644 2.575 2.596.645.81-3.241a7.974 7.974 0 0 0 5.2-3.385l-2.847-.708a5.373 5.373 0 0 1-5.134 1.43c-2.866-.712-4.62-3.572-3.917-6.387s3.599-4.519 6.466-3.806a5.357 5.357 0 0 1 3.86 3.667l2.846.708a7.947 7.947 0 0 0-2.998-5.423z" fill="#fff" />
    </svg>
  );
};

export default SvgGeneric;