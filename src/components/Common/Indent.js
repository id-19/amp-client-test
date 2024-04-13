import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const Indent = () => {
  useEffect(() => {
    mixpanel.track("Indent Rendered", {
      "Purpose": "Layout Spacing",
      "Context": "Unknown"
    });
  }, []);

  return (
    <React.Fragment>
      &nbsp;&nbsp;&nbsp;
    </React.Fragment>
  );
}

export default Indent;