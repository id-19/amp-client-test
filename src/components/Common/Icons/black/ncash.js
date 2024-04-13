import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNcash = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Clicked", { "Icon": "Ncash", "Action": "Clicked", "Context": "Assumed to be part of a clickable element" })} >