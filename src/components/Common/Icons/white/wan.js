import React from 'react';
// Assuming Mixpanel is initialized elsewhere in the application
import mixpanel from 'mixpanel-browser';

const SvgWan = props => {
  // Event handler to track clicks on the SVG
  const handleSvgClick = () => {
    mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Wan",
      "Context": "Assumed to be used where users can interact with it"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Added onClick event handler to track the click event
      fill="#FFF" fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7 11.09v11.974l9-5.315 9 5.315V11.09l-2.606 1.13v6.353L16 14.786l-6.333 3.787V12.22L7 11.09zm.303-.489l2.364.978L16 7.883l6.394 3.696 2.364-.978L16 5.5l-8.697 5.101zm1.879 11.821L16.03 26.5l6.849-4.078-2.03-1.13-4.819 2.825-4.878-2.825-1.97 1.13z" />
    </svg>
  );
};

export default SvgWan;