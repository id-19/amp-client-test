import React from 'react';
import Mixpanel from 'mixpanel';

const SvgGtc = props => (
  <button type="button" aria-label="GTC Icon" onClick={() => Mixpanel.track('Icon Interaction', { 'Icon': 'GTC', 'Action': 'Click', 'Context': 'Assumed context based on where and how the icon is used' })} >
    <svg width={props.width} height={props.height} viewBox="0 0 3200 3200" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" >
      <defs>
        <style>{'.gtc_svg__fil2{fill:#fcfefd}'}</style>
        <clipPath id="gtc_svg__id0">
          <path d="M1600 219c763 0 1381 618 1381 1381s-618 1381-1381 1381S219 2363 219 1600 837 219 1600 219z" />
        </clipPath>
      </defs>
      <g id="gtc_svg__Layer_x0020_1">
        <circle cx={1600} cy={1600} r={1600} fill="#fefefe" />
        <g clipPath="url(#gtc_svg__id0)">
          <g id="gtc_svg___227704240">