import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgLoom = props => {
  const handleClick = () => {
    mixpanel.track("Video Share Options Opened");
  };

  return (
    <div onClick={handleClick} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M24.92 15.62l.551-.387a28.18 28.18 0 0 1-.005-.006l.697-.487a4.247 4.247 0 0 0 0-6.953l.008.01L22.21 5.02l-4.9 3.429 1.314.925 3.58-2.505 3.09 2.167a2.729 2.729 0 0 1 0 4.473l-1.697 1.184L9.78 5 5.809 7.791a4.247 4.247 0 0 0 0 6.953l1.241.871-.304.214.005.007-.942.658a4.247 4.247 0 0 0 0 6.953l3.957 2.779 4.897-3.429-1.314-.926-3.586 2.506-3.09-2.167a2.729 2.729 0 0 1 0-4.473l1.705-1.19 13.816 9.692 3.972-2.792a4.247 4.247 0 0 0 0-6.953l-1.247-.874zm-1.326.93l1.697 1.19a2.729 2.729 0 0 1 0 4.473l-3.094 2.164-12.49-8.757 4.966-3.466-1.32-.928-.367.256-.01-.015-4.6 3.22L6.683 13.5a2.729 2.729 0 0 1 0-4.473l3.093-2.164 12.492 8.757-4.974 3.471 1.315.926 3.71-2.592.01.012 1.265-.887zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" />
      </svg>
    </div>
  );
};

export default SvgLoom;