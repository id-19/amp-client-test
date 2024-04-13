import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';

const Hideable = ({ children, hiddenIf }) => {
  const [lastVisibility, setLastVisibility] = useState(!hiddenIf);

  useEffect(() => {
    // Check if the visibility has changed
    if (hiddenIf !== lastVisibility) {
      // Track the visibility change event with Mixpanel
      mixpanel.track("Promotion Banner Visibility Change", {
        "Visible": !hiddenIf,
        "Reason for Hiding": hiddenIf ? "User action/Time-based/Other" : "Became Visible"
      });
      // Update the last visibility state
      setLastVisibility(!hiddenIf);
    }
  }, [hiddenIf, lastVisibility]);

  if (hiddenIf) return null;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default Hideable;