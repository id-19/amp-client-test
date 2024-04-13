import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgXvg = props => {
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "xvg",
      "Context": "Placeholder for where the icon is used within the application"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} fill="#00CBFF" >
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#00CBFF" />
        <path fill="#FFF" d="M9.61 10.335L8 7h16l-1.592 3.335H24L15.951 27 8 10.335h1.61zm0 0l6.438 13.33 6.36-13.33H9.611z" />
        <path fill="#FFF" opacity={0.504} d="M16 24.5L8 7h15.999z" />
      </g>
    </svg>
  );
};

export default SvgXvg;