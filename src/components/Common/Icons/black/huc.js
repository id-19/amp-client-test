import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgHuc = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Purpose": "Help",
      "Icon Name": "Huc"
    });
  };
  return (
    <div {...props} onClick={handleClick} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64}>
        <path d="M11.5 14.5V6h-3v16h3v-4.5h9V26h3V10h-3v4.5zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fillRule="evenodd" />
      </svg>
    </div>
  );
};
export default SvgHuc;