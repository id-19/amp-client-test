import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGtc = props => {
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Context": "Used in interactive element",
      "Icon Name": "Gtc",
      "Action": "Click",
      "Location": "Common Icons"
    });
  };

  return (
    <svg {...props} onClick={handleClick} width={props.width} height={props.height} fill={props.fill} viewBox="0 0 3200 3200" >
      <g id="gtc_svg__Layer_x0020_1">
        <circle cx={1600} cy={1600} r={1600} />
        <g clipPath="url(#gtc_svg__id0)">
          <g id="gtc_svg___227704240">