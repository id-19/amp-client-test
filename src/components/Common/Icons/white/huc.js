import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgHuc = props => {
  // Assuming the event tracking is desired upon the interaction with the SVG,
  // but since SVG itself doesn't capture interactions in this setup,
  // we expose a method to trigger the tracking from the parent component.
  const trackIconClick = () => {
    mixpanel.track('Icon Clicked', {
      "Icon Name": "Huc",
      "Context": "Assumed to be wrapped in an interactive element elsewhere"
    });
  };

  // Expose trackIconClick for parent components
  React.useEffect(() => {
    if (props.onMount) {
      props.onMount({ trackIconClick });
    }
  }, [props]);

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <path d="M11.5 14.5V6h-3v16h3v-4.5h9V26h3V10h-3v4.5zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};

export default SvgHuc;