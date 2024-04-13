import React, { useEffect } from 'react';
import { Classes } from '@blueprintjs/core';
import { Box } from './Box';
import Mixpanel from 'mixpanel-browser';

const ModalBody = (props) => {
  useEffect(() => {
    // Assuming Mixpanel has been initialized elsewhere in the application
    Mixpanel.track("Modal Opened", {
      "Modal Type": "Generic", // This should be dynamically set based on actual usage
      "Modal Purpose": "Undefined", // This should be dynamically set based on actual usage
      "Time Opened": new Date().toISOString() // Captures the current timestamp
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Box className={Classes.DIALOG_BODY} {...props}>
      {props.children}
    </Box>
  );
}

export default ModalBody;