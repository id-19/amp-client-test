import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgOax = props => {
  const handleSvgClick = () => {
    mixpanel.track("SVG Icon Interaction", {
      "Context": "Unknown - Define based on usage", // Placeholder for context definition
      "Icon": "Oax",
      "Action": "Clicked or Interacted"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Added onClick event handler for tracking
      fill="#164b79" >
      <g fill="none">
        <circle cx={16} cy={16} fill="#164b79" r={16} />
        <path d="M14.09 18.668l-.623 1.33h-1.382L15.838 12l2.503 5.333h-1.415l-1.12-2.315-1.122 2.354zm5.454 1.3l2.93-3.95-2.951-3.98h1.615l2.141 2.91-.779 1.07.779 1.07-2.14 2.91h-2.963l-.626-1.33h1.382zm4.526-3.967l-.791-1.087 2.141-2.91H27zm0 0L27 19.999h-1.58l-2.14-2.91zm-12.648-2.842a3.965 3.965 0 0 1 1.085 2.843 4.124 4.124 0 0 1-1.085 2.842C10.7 19.653 9.807 20 8.754 20a3.575 3.575 0 0 1-2.668-1.156A4 4 0 0 1 5 16.002a3.965 3.965 0 0 1 .691-2.315l.92.98a2.822 2.822 0 0 0 .362 3.265 2.396 2.396 0 0 0 1.78.81c.672 0 1.314-.293 1.78-.810a2.65 2.65 0 0 0 .723-1.895 2.82 2.82 0 0 0-.724-1.896 2.333 2.333 0 0 0-1.78-.77 2.19 2.19 0 0 0-1.249.35l-.92-.98a3.416 3.416 0 0 1 2.173-.736 3.51 3.51 0 0 1 2.665 1.154z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgOax;