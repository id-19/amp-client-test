import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgMed = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Icon Clicked", {"Context": "Unknown", "Action": "Click"})}>
    <path fill="#FFF" fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-19.939l-8 4.805-8-4.805v8.915l2.536 1.48v-5.953L16 19.777l5.464-3.27v5.95L24 20.977V12.06zm-7.97 11.117l-2.338-1.399-2.31 1.399L16.03 26l4.649-2.822-2.31-1.399-2.34 1.399zm4.62-14.356L16 6l-4.65 2.822 2.311 1.399L16 8.822l2.339 1.399 2.31-1.399z" />
  </svg>
);

export default SvgMed;