import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgPasc = props => {
  const handleSvgClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgPasc",
      "Action": "TBD based on specific use case",
      "Location": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} fill="#FFF">
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 16 4zm6 5.813a2.25 2.25 0 0 1 2.25 2.25v3.374a2.25 2.25 0 0 1-2.25 2.25h-2.786l-.18.844a.488.488 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844h1.313l.179-.844a.488.488 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844H22z" />
    </svg>
  );
};

export default SvgPasc;