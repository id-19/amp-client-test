import React from 'react';
import Mixpanel from 'mixpanel';

const SvgSteem = props => (
  <button className="steem-share-button"
    type="button" 
    aria-label="Share on Steem" 
    onClick={() => Mixpanel.track("Share Button Clicked", {
      "Platform": "Steem", 
      "Action": "Share", 
      "Content Type": "Post or Page"
    })}
  >
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <path fill="#FFF" fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.021-25.91c-.246-.125-3.368 2.495-3.368 4.426-.003 2.637 3.642 8.61 4.255 10.92.528 1.981-.895 4.36-.506 4.466.36.232 3.758-3.265 3.892-4.759.172-2.375-3.972-9.303-4.301-11.095-.383-2.083.302-3.912.028-3.958zm-6.11 2.139c-.192-.098-2.64 1.958-2.64 3.471-.003 2.068 2.855 6.752 3.337 8.564.414 1.554-.703 3.419-.396 3.504.28.183 2.947-2.562 3.051-3.732.134-1.864-3.114-7.297-3.373-8.7-.3-1.638.238-3.07.022-3.107zm12.415 0c-.191-.098-2.64 1.958-2.64 3.471-.004 2.068 2.855 6.752 3.336 8.564.414 1.554-.702 3.419-.396 3.504.282.183 2.95-2.562 3.052-3.732.133-1.864-3.114-7.297-3.374-8.7-.3-1.638.238-3.07.022-3.107z" />
    </svg>
  </button>
);

export default SvgSteem;