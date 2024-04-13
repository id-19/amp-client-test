import React from 'react';
import SvgDgb from './SvgDgb'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser'; // Hypothetical button component that uses the SvgDgb component

const PlayButton = () => {
  const handleButtonClick = () => {
    // Implementing the event tracking as specified in the event signatures
    mixpanel.track("Play Video Button Clicked", {
      "Icon Used": "Dgb",
      "Action": "Play Video",
      "Context": "Given the SVG is used within a play button, additional context about the video could be included here"
    });
  };

  return (
    <button type="button" aria-label="Play Video" className="play-video-button" // Assuming this is the class name referred to in the event signatures
      onClick={handleButtonClick}
    >
      <SvgDgb width={64} height={64} />
    </button>
  );
};

export default PlayButton;