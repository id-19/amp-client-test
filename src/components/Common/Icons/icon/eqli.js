import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly installed and imported
import SvgEqli from './SvgEqli'; // Adjust the import path as necessary

// Initialize Mixpanel with your project's token
const mixpanel = Mixpanel.init('YOUR_MIXPANEL_TOKEN');

const IconWithTracking = () => {
  const handleIconClick = () => {
    // Here we track the event as specified in the event signature
    mixpanel.track('Share Icon Clicked', {
      'Icon': 'Eqli',
      'Action': 'Share',
      'Context': 'Article Page' // Assuming 'Article Page' as the context
    });
  };

  return (
    <button type="button" aria-label="Share" className="your-button-class" // Replace with the actual class or id as needed
            onClick={handleIconClick}>
      <SvgEqli width={64} height={64} />
    </button>
  );
};

export default IconWithTracking;