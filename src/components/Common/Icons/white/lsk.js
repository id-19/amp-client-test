import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly initialized elsewhere in the project

const SvgLsk = props => {
  const trackIconClick = () => {
    Mixpanel.track("Sign Up Icon Clicked");
  };

  return (
    <div onClick={trackIconClick} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.751-7.042l2.467-2.786c.042-.042.014-.111-.055-.111h-2.717a.105.105 0 0 1-.056-.028l-2.301-2.59c-.014-.029-.028-.057-.014-.084l3.854-6.645c.014-.028.014-.056 0-.07l-1.594-2.758c-.028-.041-.097-.041-.125 0L8.01 19.721a.09.09 0 0 0 0 .083l4.575 5.168c.014.014.028.028.056.028h1.552c.014-.014.042-.028.056-.042zm1.69-18.916L14.333 8.8c-.014.028-.014.056 0 .07l1.663 2.869 4.409 7.606c.014.027.014.055-.014.083l-2.329 2.619-2.481 2.814c-.042.041-.014.111.055.111h3.715a.105.105 0 0 0 .056-.028l4.574-5.168c.014-.027.028-.055.014-.083L16.051 6.042c-.014-.056-.083-.056-.111 0z" fill="#fff" />
      </svg>
    </div>
  );
};

export default SvgLsk;