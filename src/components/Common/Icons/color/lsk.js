import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is set up elsewhere in the project

const SvgLsk = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon Name": "Lsk",
      "Action": "Click",
      "Context": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#0d4ea0">
      <g fill="none">
        <circle cx={16} cy={16} fill="#0d4ea0" r={16} />
        <path d="M14.249 24.958c-.014.014-.042.028-.056.042h-1.552c-.028 0-.042-.014-.056-.028L8.01 19.804a.09.09 0 0 1 0-.083l5.698-9.835c.028-.041.097-.041.125 0l1.594 2.758c.014.014.014.042 0 .07l-3.854 6.645c-.014.027 0 .055.014.083l2.301 2.591a.105.105 0 0 0 .056.028h2.717c.07 0 .097.07.055.111zm1.69-18.916c.029-.056.098-.056.112 0l7.943 13.65c.014.029 0 .057-.014.084l-4.574 5.168a.105.105 0 0 1-.056.028h-3.715c-.07 0-.097-.07-.055-.111l2.481-2.814 2.329-2.619c.028-.028.028-.056.014-.083l-4.409-7.606-1.663-2.87c-.014-.013-.014-.041 0-.07z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgLsk;