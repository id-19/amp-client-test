import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly installed and imported
Mixpanel.init('YOUR_MIXPANEL_TOKEN');

const SvgShift = props => (
  <button className="shift-feature-button" type="button" aria-label="Shift Feature" onClick={() => Mixpanel.track("Shift Feature Activated", {
    "Location": "Common Icons",
    "Action": "Click",
    "Feature": "Shift"
  })}
  >
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#964B9C" />
        <g fill="#FFF">
          <path opacity={0.6} d="M20.507 16.406l-4.472 4.471h8.942l-4.47-4.471z" />
          <path opacity={0.7} d="M11.528 16.41L16 11.94H7.057l4.472 4.471z" />
          <path opacity={0.4} d="M16.035 20.878l4.46-4.46-4.48-4.482-8.943 8.942 8.942 8.943 8.943-8.943h-.002z" />
          <path opacity={0.8} d="M16.056 3l-8.937 8.937H16l-4.446 4.446 4.502 4.501 8.942-8.942z" />
        </g>
      </g>
    </svg>
  </button>
);

export default SvgShift;