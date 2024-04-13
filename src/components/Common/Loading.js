import React, { useEffect } from 'react';
import { Spinner } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser';

const Loading = ({ height }) => {
  useEffect(() => {
    mixpanel.track("Loading Spinner Displayed", {
      "Height": height,
      "Component": "Loading"
    });
  }, []);

  return (
    <div className="loading-overlay">
      <Spinner intent="primary" />
    </div>
  );
};

export default Loading;