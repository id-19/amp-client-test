import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgIotx = props => {
  // Track the "Icon Rendered" event when the component mounts
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon Name": "Iotx",
      "Page": "Assuming context to determine page"
    });
  }, []);

  // Handler for tracking the "Icon Clicked" event
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Iotx",
      "Action": "Assuming context to determine action",
      "Page": "Assuming context to determine page"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Add the onClick handler here
    >
      <path d="M13.577 22.012l-3.717-2.14v5.456l1.89-1.091 3.72 2.14V20.92l-1.893 1.092zm-3.35-9.704l.024.014v5.437l4.73-2.725-1.942-1.122.012-.006 2.726 1.572V10.03l.742.427V5l-4.738 2.732 3.988 2.293-2.008 1.155-2.722-1.573v3.15-5.438L6.3 10.044l3.92 2.261-4.73 2.729 4.737 2.725v-5.45zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.519-27v5.457l4.738-2.725L16.519 5zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zM4.273 10.273v5.457l4.738-2.732-4.738-2.725zm2.465 5.48v5.457l4.737-2.732-4.737-2.725zm9.743 6.468v5.457l4.73-2.733-4.73-2.724zm.038-6.307l-4.73 2.732 4.73 2.725v-5.457zm-9.781 1.27L2 19.91l4.738 2.733v-5.457zm19.256-6.727l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732V13.19zm4.737 2.725l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732v-5.457zm0-10.914l-4.738 2.725 4.738 2.732V7.732z" />
    </svg>
  );
};

export default SvgIotx;