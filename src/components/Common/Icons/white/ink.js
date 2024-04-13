import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Initialize Mixpanel, replace YOUR_MIXPANEL_TOKEN with your actual Mixpanel project token

const SvgInk = props => {
  // Track SVG Visibility on component mount
  useEffect(() => {
    mixpanel.track("SVG Visibility", {
      "Component": "SvgInk",
      "Visibility": "Visible",
      "Context": "Part of interactive element"
    });
  }, []);

  // Function to handle SVG Interaction tracking
  const handleSvgClick = () => {
    mixpanel.track("SVG Interaction", {
      "Action": "Click",
      "Component": "SvgInk",
      "Context": "Wrapped in interactive element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Add onClick event handler to track SVG Interaction
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.14-20.473c-.318.086-.445.421-.593.691-1.25 2.386-2.52 4.76-3.77 7.124a.696.696 0 0 0 .096.842c.243.27.624.173.942.195.328 0 .752.053.953-.281.413-.734.773-1.511 1.186-2.256.243-.454.974-.378 1.143.097.286.723.52 1.479.816 2.202.2.475.931.475 1.154.022 1.334-2.494 2.678-4.977 4.012-7.47.276-.421-.084-1.036-.571-1.004-.466.043-1.08-.173-1.42.27-.412.712-.75 1.457-1.174 2.159-.254.388-.9.334-1.09-.087-.319-.701-.594-1.424-.9-2.126-.128-.302-.477-.475-.784-.378zm-4.363.184c-.243.01-.423.216-.529.42-1.292 2.43-2.583 4.858-3.875 7.276-.275.4.106.993.561.972.37 0 .752.032 1.122-.022.318-.086.434-.432.583-.69 1.238-2.333 2.488-4.664 3.727-7.006.2-.378-.064-.907-.477-.95a9.55 9.55 0 0 0-1.112 0zm13.14.021c-.254.087-.36.367-.476.583-.202.421-.456.82-.636 1.252-.2.54.487 1.09.953.767.741-.454 1.461-.95 2.192-1.414.36-.184.445-.734.159-1.026-.233-.28-.636-.216-.953-.227-.413.033-.837-.054-1.239.065zm-3.505 6.455c-.211.097-.307.346-.402.55-.127.27-.286.519-.392.8-.148.388.17.863.572.863.805.01 1.62 0 2.435 0 .381.032.71-.345.667-.734-.01-.291-.264-.496-.508-.604-.572-.27-1.133-.573-1.694-.853-.201-.108-.466-.151-.678-.022z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};

export default SvgInk;