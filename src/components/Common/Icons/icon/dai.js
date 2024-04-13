import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgDai = props => {
  const trackDAITransaction = () => {
    mixpanel.track("DAI Transaction Initiated", {
      "Crypto": "DAI",
      "Action": "Transaction Submit",
      "Location": "Assumed location in UI"
    });
  };

  return (
    <button type="button" onClick={trackDAITransaction} className="AssumedButtonClassNameOrID" purpose="Submit transaction">
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none" fill-rule="evenodd">
          <circle fill="#FFF" cx="16" cy="16" r="16"/>
          <g fill-rule="nonzero">
            <path fill="#FFCE45" d="M15.998 3.645L28.253 15.9 15.998 28.155 3.743 15.9z"/>
            <path fill="#FEBE44" d="M15.998 19.899l-12.265-4L15.998 3.644 28.263 15.9z"/>
            <path fill="#FFF" d="M7.999 15.1h5.6l2.399-2.667 2.666 2.666h5.6l-8.266-8.932z"/>
            <path fill="#D9A547" opacity=".42" d="M15.998 28.154V3.644L28.253 15.9 15.998 28.154z"/>
          </g>
        </g>
      </svg>
    </button>
  );
}

export default SvgDai;