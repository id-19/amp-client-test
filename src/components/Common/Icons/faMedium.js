import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

var prefix = 'fab';
var iconName = 'medium';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f23a';
var svgPathData = 'M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z';

var definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData],
};

// Assuming the icon is used here within a link/button for navigation or action
const IconLink = () => (
  <a href="Link to Medium profile or share URL" target="_blank" className="medium-icon-link" onClick={() => mixpanel.track("Medium Icon Clicked", {"Location": "Footer/Header/Sidebar", "Purpose": "Visit Medium Profile"})}>
    {/* Icon rendering logic here */}
  </a>
);

module.exports = {
  definition,
  faMedium: definition,
  prefix,
  iconName,
  width,
  height,
  ligatures,
  unicode,
  svgPathData,
  IconLink,
};