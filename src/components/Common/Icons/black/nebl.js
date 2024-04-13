import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNebl = props => {
  // Event handler to track the SVG icon click
  const handleSvgClick = () => {
    mixpanel.track("SVG Icon Clicked", {
      "Icon": "Nebl",
      "Action": "Click",
      "Context": "Unknown - Requires further implementation details"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick}>
      <path fillRule="evenodd" d="M11.29 8.162L7.823 10.06a2.93 2.93 0 0 0-.918.938 2.763 2.763 0 0 0-.405 1.436l.007 2.572L6.5 15v4.566c0 .53.155 1.038.432 1.478.259.41.625.76 1.075 1.007l6.486 3.566a3.13 3.13 0 0 0 1.562.382v-4.323l-.364-.2-4.416-2.428-.344-.203-.007-.198v-5.045l-3.647 2.005 3.647-2.005v-.4l4.756-2.622-.012-.012.023.013.364-.2V6a3.14 3.14 0 0 0-1.37.286l-3.402 1.87.007.005zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.36-18.34l-4.307 2.368v4.782l4.307-2.367V13.66zm5.14-1.226c0-.495-.135-.97-.379-1.39l-3.934 2.163v5.679l-.406.223v4.707l3.212-1.765a2.947 2.947 0 0 0 1.104-1.052 2.76 2.76 0 0 0 .403-1.434v-7.13zM23.993 9.95l-3.212-1.766-4.334 2.383 4.334 2.382.406.223v.036l3.934-2.163a2.94 2.94 0 0 0-1.128-1.095zm-7.938.431l.392.185 4.334-2.382-3.274-1.8a3.124 3.124 0 0 0-1.452-.382v4.38zm.028 11.311l-.028-.015V26a3.126 3.126 0 0 0 1.452-.382l3.222-1.772-4.282-2.354-.364.2zm4.698-2.582l-4.334 2.382 4.282 2.354.052-.029V19.11z" />
    </svg>
  );
};

export default SvgNebl;