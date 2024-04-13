import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgUsdt = props => {
  useEffect(() => {
    const trackIconClick = () => {
      mixpanel.track("USDT Icon Clicked", {
        "Action": "Icon Interaction",
        "Icon": "USDT",
        "Context": "Learn More or Transaction Initiation"
      });
    };
    const svgElement = document.getElementById('SvgUsdtIcon');
    if (svgElement) {
      svgElement.addEventListener('click', trackIconClick);
    }
    return () => {
      if (svgElement) {
        svgElement.removeEventListener('click', trackIconClick);
      }
    };
  }, []);

  return (
    <svg id="SvgUsdtIcon" width={props.width || 64} height={props.height || 64} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#26A17B" />
        <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" />
      </g>
    </svg>
  );
};

export default SvgUsdt;