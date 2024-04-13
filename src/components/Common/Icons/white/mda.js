import React from 'react';
// Assuming Mixpanel has been initialized in the project, we import it here
import mixpanel from 'mixpanel-browser';

const SvgMda = props => {
  // Event handler function to track the interaction with the SVG
  const handleSvgClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgMda",
      "Action": "Click",
      "Context": "Assumed to be part of a clickable element for navigation or action triggering",
      "Location": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} // Adding the onClick event handler to the svg element
      style={{ cursor: 'pointer' }} // Optional: Change the cursor to pointer to indicate it's clickable
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.663-24.008C19.419 6.636 17.879 6 16.013 6c-1.891 0-3.432.636-4.675 1.936C10.095 9.21 9.5 10.841 9.5 12.805c0 1.936.622 3.569 1.865 4.869.973 1.023 2.135 1.632 3.46 1.853v1.162h-2.73v1.245h2.756v.664h-2.756v1.161h2.73V26h2.35v-2.24h2.757v-1.162h-2.784v-.664h2.784v-1.245h-2.756v-1.134c1.351-.222 2.513-.83 3.486-1.854 1.217-1.3 1.838-2.932 1.838-4.868 0-1.91-.621-3.541-1.837-4.841zm-2.541 7.386c-.514.664-1.243.996-2.108.996-.838 0-1.54-.332-2.081-.996s-.812-1.522-.812-2.6c0-1.052.27-1.882.812-2.545.54-.664 1.243-.996 2.08-.996.812 0 1.514.332 2.055 1.023.567.664.838 1.522.838 2.545 0 1.051-.27 1.909-.784 2.573z" fill="#fff" />
    </svg>
  );
};

export default SvgMda;