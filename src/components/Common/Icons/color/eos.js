import React from 'react';
import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN');

const SvgEos = props => (
  <button type="button" aria-label="Share" className="share-button" onClick={() => {
    mixpanel.track("Share Button Clicked", {
      "Icon": "Eos",
      "Action": "Share",
      "Context": "Assumed context where the button is used"
    });
  }}>
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#000" fillRule="nonzero" />
        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.64} d="M10.886 11.61L16 27.667l-7.588-4.754 2.474-11.303L16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986 2.475 11.303-7.588 4.754L21.12 11.61" />
      </g>
    </svg>
  </button>
);

export default SvgEos;