import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is already installed and configured

const SvgStq = props => {
  // Event handler function
  const handleSvgClick = () => {
    Mixpanel.track("SVG Icon Clicked", {
      "Icon": "SvgStq",
      "Context": "Unknown - requires further details",
      "Path": "src/components/Common/Icons/white/stq.js"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={handleSvgClick} // Attach the event handler to the svg element
      {...props}
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.155 9.036c-.06.63-.06 1.274.06 1.904.618.024 1.25.024 1.88.024.179.334.37.655.524 1.012.75 1.584 1.512 3.155 2.298 4.726.452.905.821 1.893 1.512 2.667.214.286.595.321.952.321h6.667c.56 0 1.166-.023 1.607-.392.535-.465.774-1.131 1.13-1.727.953-1.666 1.882-3.345 2.858-5 .202-.357.357-.821.143-1.214-.179-.357-.62-.369-.976-.393-4.81 0-9.643.024-14.453 0-.369-.619-.476-1.369-.952-1.904-1.072-.096-2.179-.024-3.25-.024zm7.512 11.94c-.584.131-1.06.643-1.131 1.238-.107.715-.107 1.548.404 2.12.477.476 1.215.523 1.858.476.56-.048 1.154-.31 1.392-.858.25-.607.25-1.285.108-1.916-.131-.548-.608-.965-1.155-1.084-.488-.095-1-.095-1.476.024zm5.952 0c-.583.131-1.036.62-1.155 1.203a2.817 2.817 0 0 0 .215 1.869c.297.535.916.75 1.488.773.583.012 1.226-.047 1.666-.464.477-.5.548-1.25.477-1.905-.048-.56-.334-1.154-.881-1.38-.572-.215-1.215-.227-1.81-.096z" />
    </svg>
  );
};

export default SvgStq;