import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSberbank = props => {
  const trackClick = () => {
    mixpanel.track('SVG Icon Click', {
      'Icon': 'Sberbank',
      'Action': 'Click',
      'Context': 'Used as a navigational element'
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackClick} fill="#48B254" fillRule="evenodd">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#48B254" fillRule="nonzero" />
        <path fill="#FFF" d="M22.681 7.368l.945.858-11.932 6.812-5.776-3.325.54-1.073 5.236 2.977 10.987-6.25zM20.279 6l1.268.644-9.853 5.632-4.588-2.602.782-.938 3.806 2.172L20.28 6zm4.184 3.111l.701.939-13.47 7.697-6.505-3.701.297-1.18 6.208 3.54 12.769-7.295zm1.943 3.46c.396 1.109.594 2.27.594 3.486 0 1.216-.198 2.397-.594 3.54l-.27.725a11.142 11.142 0 0 1-2.348 3.486 10.85 10.85 0 0 1-3.51 2.307c-1.385.59-2.815.885-4.291.885-1.494 0-2.925-.295-4.293-.885a11.341 11.341 0 0 1-3.482-2.307 10.568 10.568 0 0 1-2.348-3.486c-.57-1.35-.865-2.8-.864-4.265v-.724l6.694 3.782 14.118-8.046.594 1.502z" />
      </g>
    </svg>
  );
};

export default SvgSberbank;