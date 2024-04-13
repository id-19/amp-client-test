import React from 'react';
import Mixpanel from 'mixpanel';

const SvgIns = props => {
  const trackIconClick = () => {
    Mixpanel.track('Icon Clicked', {
      Icon: 'Instagram',
      Action: 'Open Instagram Profile',
    });
  };

  return (
    <button onClick={trackIconClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="#fff" fillRule="evenodd">