import React from 'react';
import { Classes } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser';

const ModalFooter = (props) => {
  const trackModalInteraction = () => {
    mixpanel.track("Modal Interaction", {
      "Action": "Click",
      "Modal Type": "Generic",
      "Element": "Child Element"
    });
  };

  return (
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS} onClick={trackModalInteraction}>
        {props.children}
      </div>
    </div>
  );
}

export default ModalFooter;