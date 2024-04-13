import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgTau = props => {
  const handleClick = () => {
    mixpanel.track("SVG Clicked", {
      "Title": "Tau Icon",
      "Size": `${props.width || 64}x${props.height || 64}`
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} fill="#7b346e" >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#7b346e" r={16} />
        <path d="M8.094 13.678l2.11 2.11H6zm2.11 2.55l-2.11 2.094L6 16.228zm2.852-2.853l-2.11 2.094v-4.203zm-2.55 2.094l-2.093-2.094 2.094-2.11zm2.854-2.413l-2.094-2.094h4.203zm0-4.643l2.109 2.109h-4.203zm4.962-.304l-2.11 2.094V6zm-2.55 2.094L13.678 8.11 15.772 6zm-2.716 8.437l-2.11 2.094v-4.203zm-4.643 0l2.094-2.109v4.203zm10.212-5.584l-2.094-2.094h4.203zm-2.094-2.534l2.094-2.11 2.11 2.11zM15.47 21.493l-2.11 2.094-2.093-2.094zm-2.11-2.55l2.11 2.11h-4.203zm10.228-5.568l-2.109 2.094v-4.203zm-4.643 0l2.094-2.11v4.204zm-5.266 10.53l2.094-2.108V26zm2.534-2.108l2.11 2.109L16.212 26zm2.413 1.79l-2.094-2.094h4.203zm0-4.643l2.11 2.11H16.53zm2.853-2.413l2.11 2.11-2.11 2.093zm-2.534 2.11l2.094-2.11v4.203zm4.947-.32l-2.094-2.093H26zm0-4.643L26 15.788h-4.203z" fill="#fff" fillRule="nonzero" />
      </g>
    </svg>
  );
};

export default SvgTau;