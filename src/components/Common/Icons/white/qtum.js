import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgQtum = props => {
  useEffect(() => {
    mixpanel.track("SVG Rendered", {
      "Icon": "Qtum",
      "Render Time": new Date().toISOString()
    });
  }, []);

  const handleClick = () => {
    mixpanel.track("SVG Clicked", {
      "Icon": "Qtum",
      "Click Time": new Date().toISOString(),
      "Page Location": window.location.href
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>