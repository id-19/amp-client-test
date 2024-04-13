import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEtc = props => {
  const handleClick = () => {
    mixpanel.track("SVG Icon Clicked", {
      "Width": props.width || 64,
      "Height": props.height || 64,
      "Location": "To be determined based on where the icon is used"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <g fillRule="evenodd">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.732-16L16 12.19 9.268 16 16 19.781l6.732-3.783zM16 21.047a3944.37 3944.37 0 0 0-7-3.952c2.079 3.248 4.66 7.26 7 10.904 2.34-3.643 4.921-7.656 7-10.904a3944.185 3944.185 0 0 0-7 3.952zm0-10.089l7 3.907L16 4 9 14.866l7-3.907z" />
        <path fillOpacity={0.296} fillRule="nonzero" d="M22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V4l6.988 10.845-6.988-3.9z" />
        <path fillOpacity={0.803} d="M15.989 16.553l6.72-.577-6.72 3.775z" />
        <path opacity={0.311} d="M15.988 16.553l-6.721-.577 6.721 3.775z" />
      </g>
    </svg>
  );
};

export default SvgEtc;