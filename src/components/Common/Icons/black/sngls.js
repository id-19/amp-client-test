import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgSngls = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgSngls",
      "Action": "Click",
      "Context": "Unknown - Assumed to be wrapped in a clickable element"
    });
  };

  return (
    <div onClick={trackIconInteraction} style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.913-10.766c5.63-.437 10.049-4.635 10.049-4.635s-4.295-4.088-9.81-4.614l-.422-.735-.75-1.25-.441.734-.73 1.25C9.294 12.522 5 16.59 5 16.6c0 0 4.42 4.198 10.049 4.635l.932 1.736.932-1.736zM5.932 16.599s4.054-2.768 8.223-3.473l-.662 1.141.518 1.012 1.403-2.302c.192-.01.384-.02.567-.02.182 0 .374.01.557.02l1.374 2.302.528-1.061-.634-1.102c4.17.695 8.224 3.404 8.224 3.473 0 .08-4.256 2.918-8.531 3.523l2.084-3.91-.566-.982-1.086 2.024-1.49 2.967c-.162.01-.316.01-.48.01-.163 0-.326 0-.49-.01l-2.026-3.989.01-.01-.52-.972-.566.982 2.084 3.9c-4.275-.615-8.53-3.523-8.521-3.523z" />
      </svg>
    </div>
  );
};

export default SvgSngls;