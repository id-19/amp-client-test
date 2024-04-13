import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgIop = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Name": "Iop",
      "Context": "Unknown - Specify where used"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} >
      <path d="M10.123 8.283l-3.625 3.293v3.233l-.355.639a1.14 1.14 0 0 0 0 1.104l.355.639v7.199h3.998l.025.044c.194.35.558.566.952.566h8.955c.39 0 .75-.212.946-.557l.592-1.04 3.437-2.98v-3.07l.449-.791a1.14 1.14 0 0 0 0-1.124l-.449-.79v-7.14h-4.058A1.089 1.089 0 0 0 20.428 7h-8.955a1.09 1.09 0 0 0-.952.566zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.473 8.119h8.955L24.905 16l-4.477 7.881h-8.955L7.095 16zm.405.712L7.895 16l3.983 7.17h8.149L24.1 16l-4.073-7.17zm1.883 3.05h4.677l2.189 4.068-2.19 4.068h-4.676l-2.189-4.068z" />
    </svg>
  );
};

export default SvgIop;