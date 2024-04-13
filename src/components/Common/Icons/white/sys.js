import React from 'react';
import Mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is set up elsewhere in the project

const SvgSys = props => {
  const handleIconClick = () => {
    Mixpanel.track("Icon Interaction", {
      "Action": "Click",
      "Icon Name": "Sys",
      "Context": "Unknown - Requires further details"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" onClick={handleIconClick} {...props} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.046-16.897C28.546 17 14.26 27.666 4 18.01c12.101 7.743 18.334.467 13.955-2.711a.108.108 0 0 1-.023-.156.117.117 0 0 1 .114-.041zm-5.844-4.248c-6.622 4.54.742 6.599 2.079 6.164a.12.12 0 0 1 .064 0 .11.11 0 0 1 .083.135c-.903 3.464-11.312-3.392-2.226-6.299zM28 12.602c-2.22-1.721-17.95-3.711-14.853 2.832a.11.11 0 0 1-.003.098.119.119 0 0 1-.157.047C5.372 11.619 20.133 6.992 28 12.602zm-6.528 8.151c7.492-3.015-.541-10.523-4.822-7.306a.107.107 0 0 0-.04.11c.013.058.075.097.138.084 5.5-1.25 8.883 5.221 4.724 7.112z" />
    </svg>
  );
};

export default SvgSys;