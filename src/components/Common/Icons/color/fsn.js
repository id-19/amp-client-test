import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgFsn = props => {
  const handleSvgClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Fsn",
      "Context": "Assumed Context Here",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} fill="#1D9AD7">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#1D9AD7" />
        <path fill="#FFF" d="M26 12.212c-1.009-1.054-3.082-1.936-6.948-2.477a59.901 59.901 0 0 0-3.67-.399c-.953-.057-1.878-.114-2.774-.114-1.485 2.22-2.886 4.897-4.119 8.114C7.144 20.866 5.94 24.34 5.1 27.5h-.252c.084-3.388.644-7.231 1.793-11.217.757-2.59 1.653-4.869 2.662-6.861-4.54.484-7.79 1.879-9.302 3.871 1.289-3.16 5.127-5.836 10.983-6.775 3.11-4.641 6.78-6.72 9.834-5.808 1.064.313 1.961.996 2.69 1.964-.085-.057-.169-.114-.28-.142-2.242-.911-5.268.398-8.21 3.644h.14c6.584-.028 9.918 2.762 10.843 6.036zm-8.237 4.27c1.793 0 3.25 1.509 3.25 3.36 0 1.85-1.457 3.359-3.25 3.359s-3.25-1.509-3.25-3.36c0-1.878 1.457-3.359 3.25-3.359z" />
      </g>
    </svg>
  );
};

export default SvgFsn;