import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSrn = props => {
  const trackIconInteraction = () => {
    mixpanel.track('Icon Interaction', {
      'Icon Name': 'Srn',
      'Action': 'Click',
      'Context': 'Specify where used, e.g., \'Header\', \'Footer\', \'Button\'',
      'Page': 'Specify the page or component where the icon is located, if applicable'
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#fff" onClick={trackIconInteraction} {...props}>