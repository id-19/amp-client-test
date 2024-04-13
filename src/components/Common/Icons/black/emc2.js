import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEmc2 = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Clicked", { "Icon Name": "Emc2", "Context": "Common Icons", "Path": "src/components/Common/Icons/black/emc2.js" })}>
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 22.998h13.095l1.893-3.839H7.894L6 23zm2.51-5.09h13.096l1.888-3.828H10.4l-1.888 3.828zm2.507-5.08H24.11L26 9H12.905l-1.888 3.829z" />
    <path fillOpacity={0.4} d="M7.894 19.16h8.781l-1.894 3.838H6l1.894-3.839zm.617-1.252L10.4 14.08h8.78l-1.888 3.828H8.51zm2.506-5.08L12.905 9h8.781l-1.889 3.829h-8.78z" />
    <path fillOpacity={0.4} d="M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z" />
  </svg>
);

export default SvgEmc2;