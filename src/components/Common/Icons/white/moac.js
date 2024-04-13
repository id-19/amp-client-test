import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgMoac = props => {
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon Type": "Moac",
      "Context": "White Icon Set"
    });
  }, []);

  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Moac",
      "Context": "White Icon Set"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} fill="#FFF" >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.208-16.208L9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215l-6.529 6.577z" />
    </svg>
  );
};

export default SvgMoac;