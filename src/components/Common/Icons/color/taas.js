import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgTaas = props => {
  const handleInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Taas",
      "Action": "Viewed or Clicked",
      "Context": "Assuming wrapped in a clickable element elsewhere"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleInteraction}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#002342" />
        <path fill="#FFF" d="M4 13h1.298v1.221H4V13zm1.298 4.774h3.777V19H4v-3.558h3.81v1.22H5.299v1.112zm17.627-2.332H28V19h-3.81v-1.226h2.512v-1.111h-3.777v-1.221zm3.798-1.162h-3.8v-1.221h3.8v1.22zm-16.411 1.162h5.075v2.384h-1.264V19h-3.811v-3.558zm3.777 2.332v-1.111H11.61v1.11h2.48zM10.312 13h5.075v1.221h-5.075V13zm6.334 2.442h5.075v2.384h-1.264V19h-3.81v-3.558zm3.772 2.332v-1.111h-2.48v1.11h2.48zM16.646 13h5.075v1.221h-5.075V13z" />
      </g>
    </svg>
  );
};

export default SvgTaas;