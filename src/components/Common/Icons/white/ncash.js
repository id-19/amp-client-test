import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNcash = props => {
  const trackSignUpClick = () => {
    mixpanel.track('Sign Up Clicked', {
      'Location': 'Homepage',
      'Logged In': 'False'
    });
  };

  return (
    <div>
      <svg width={props.width || 64} height={props.height || 64} {...props}>