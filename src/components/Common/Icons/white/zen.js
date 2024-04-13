import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgZen = props => (
  <svg 
    width={props.width || 64} 
    height={props.height || 64} 
    {...props} 
    onClick={() => mixpanel.track("Icon Click", { 
      "Icon Name": "SvgZen", 
      "Action": "Click", 
      "Context": "Common Icons" 
    })}
  >
    <path 
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.666-14.702V11.97L14.16 9.349v1.672l3.16 1.846v3.627zM16.83 13.63l-4.515 2.653v5.287l1.3-.777v-3.74l3.215-1.889zm-2.296 3.485l4.517 2.666 4.524-2.664-1.4-.837-3.109 1.839-3.088-1.839zm4.517 3.135l-4.919-2.903v5.764l4.92 2.89 4.918-2.875v-5.773zm-7.137-4.2l4.916-2.888-4.933-2.884L7 13.163v5.783l4.915 2.863zM23.97 8.861L19.073 6l-4.912 2.882 4.906 2.854v5.803l4.904-2.885z" 
      fill="#fff" 
      fillRule="evenodd" 
    />
  </svg>
);

export default SvgZen;