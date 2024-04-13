import React from 'react';
import { mixpanel } from 'mixpanel-browser'; // Assuming mixpanel-browser is installed and configured

const SvgSnm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} fill="#0b1c26" r={16} />