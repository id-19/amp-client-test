import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNxt = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon": "SvgNxt",
      "Action": "TBD based on usage context",
      "Color": "Blue"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#008FBB">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#008FBB" />
        <path fill="#FFF" d="M26.082 16.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V16c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373 .918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 0 1-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373 .918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 0 1-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 0 1 .531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373 .918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z" />
      </g>
    </svg>
  );
};

export default SvgNxt;