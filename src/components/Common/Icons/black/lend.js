import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgLend = props => (
  <button type="button" className="lend-button" onClick={() => {
    mixpanel.track("Lend Button Clicked", {
      "Location": "Lending Page",
      "User Status": "Logged-in"
    });
  }}>
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.147-11.554l-5.474-5.7L10 16.45l3.92 3.995-3.777 3.849L11.697 26zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z" />
    </svg>
  </button>
);

export default SvgLend;