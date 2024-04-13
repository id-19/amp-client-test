import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly initialized elsewhere in the project
import SvgIns from './SvgIns'; // Adjust the import path as necessary

const InstagramIconLink = () => {
  const handleClick = () => {
    Mixpanel.track("Navigate to Instagram", {
      "Icon": "Instagram",
      "Action": "Click",
      "Destination": "Instagram Page"
    });
  };

  return (
    <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="instagram-icon-link" onClick={handleClick}>
      <SvgIns width={64} height={64} />
    </a>
  );
};

export default InstagramIconLink;