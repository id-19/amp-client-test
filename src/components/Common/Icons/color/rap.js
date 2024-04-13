import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgRap = props => {
  // Destructure props to extract width, height, and an optional onClick handler
  const { width = 64, height = 64, onClick, ...restProps } = props;

  // Enhanced click handler that includes Mixpanel tracking
  const handleClick = (e) => {
    // Check if there's an onClick prop passed to the component
    if (onClick) {
      onClick(e); // Call the passed onClick handler
    }
    // Trigger Mixpanel event tracking
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Rap",
      // Context should be enriched at the point of use
      "Context": "Usage context not provided; to be determined by implementation"
    });
  };

  return (
    <svg width={width} height={height} {...restProps} onClick={handleClick} // Attach the enhanced click handler
         style={{ cursor: 'pointer' }} // Optional: change cursor to indicate clickability
    >
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#000" />
        <path d="M12.478 6.435v19.478H9V6h3.478v.435zM14.957 6h1.956c4.044 0 6.74 2.565 6.74 6.217 0 2.957-1.61 5.218-4.523 5.957l5.087 7.739H20.13L13.174 15.13h3.348c2.217 0 3.608-1 3.608-2.956 0-1.957-1.39-2.957-3.608-2.957H15V6h-.043z" fill="#FFF" />
      </g>
    </svg>
  );
};

export default SvgRap;