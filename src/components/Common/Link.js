// @flow
import React from 'react';
import mixpanel from 'mixpanel-browser'; // Importing Mixpanel

type Props = {
  url: string,
  children: React.Node
}

const Link = ({ url, children }: Props) => {
  // Event tracking function
  const trackLinkClick = () => {
    mixpanel.track("Link Clicked", { "URL": url });
  }

  return (
    <a href={url} rel="noopener noreferrer" target="_blank" onClick={trackLinkClick}>
      {children}
    </a>
  )
}

export default Link