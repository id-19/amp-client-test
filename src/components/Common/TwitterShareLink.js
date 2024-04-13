import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '../../components/Common/Icons/faTwitter';
// Assuming Mixpanel is already initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const TwitterShareLink = () => {
  const trackShare = () => {
    mixpanel.track("Share on Twitter", {
      "URL Shared": "https://amp.exchange",
      "Share Context": "Trade promotion"
    });
  };

  return (
    <a href="https://twitter.com/home?status=Trade%20from%20your%20own%20wallet,%20without%20waiting%20for%20deposits%20and%20with%20the%20security%20of%20instant%20blockchain%20settlements%20at%20https%3A//amp.exchange.%0A%23trading%20%23decentralized%20%23finance" target="_blank" rel="noopener noreferrer" onClick={trackShare} // Added onClick event handler to track the event
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
}

export default TwitterShareLink;