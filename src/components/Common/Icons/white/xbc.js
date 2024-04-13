import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import Mixpanel from 'mixpanel-browser';

const SvgXbc = props => {
  // Define the event tracking function
  const trackSvgClick = () => {
    Mixpanel.track("SVG Icon Clicked", {
      "Icon Name": "Xbc",
      "Action": "Click",
      "Context": "White Icon Set"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackSvgClick} // Add the onClick event listener here
    >
      <path d="M25.977 19.754l2.183.545.363-1.456-2.183-.544.544-2.183-1.456-.363-.544 2.183-2.183-.544-.363 1.455 2.183.545-.544 2.183 1.455.363zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.611-18.24c.28-1.844-1.09-2.826-2.965-3.477l.623-2.499-1.487-.37-.606 2.433a53.14 53.14 0 0 0-1.191-.28l.61-2.45-1.485-.37-.624 2.498a48.602 48.602 0 0 1-.949-.223l.002-.007-2.05-.512-.405 1.624s1.103.253 1.08.269c.602.15.709.557.689.88l-.71 2.846c.041.01.095.026.154.05l-.157-.039-.994 3.988c-.075.187-.264.469-.684.365.014.021-1.08-.27-1.08-.27l-.75 1.743 1.935.482c.36.09.713.185 1.06.274l-.63 2.527 1.485.37.624-2.5c.405.11.8.212 1.184.308l-.62 2.489 1.486.37.63-2.523c2.535.477 4.445.269 5.26-2.079.658-1.89-.016-2.974-1.348-3.676.974-.234 1.71-.891 1.913-2.24zm-3.427 4.886c-.47 1.888-3.577.886-4.585.635l.836-3.348c1.007.251 4.24.743 3.749 2.713zm.487-4.897c-.43 1.718-3.015.86-3.854.651l.757-3.037c.84.21 3.543.594 3.097 2.386z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};

export default SvgXbc;