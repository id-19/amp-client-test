import React from 'react';
import Mixpanel from 'mixpanel';
import SvgPowr from './SvgPowr';

const mixpanel = Mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN');

const PowerButton = () => {
  const handlePowerModeActivation = () => {
    mixpanel.track('Power Mode Activated', {
      'Feature': 'Power Mode',
      'Status': 'Activated'
    });
  };

  return (
    <button type="button" onClick={handlePowerModeActivation}>
      <SvgPowr width={64} height={64} />
    </button>
  );
};

export default PowerButton;