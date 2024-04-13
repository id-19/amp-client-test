import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is already set up elsewhere in the project

const SvgQtum = props => {
  const handleIconClick = () => {
    Mixpanel.track("Icon Click", {
      "Icon": "Qtum",
      "Action": "Clicked",
      "Location": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick}>