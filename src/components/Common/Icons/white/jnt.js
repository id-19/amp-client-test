import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgJnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Sign Up Icon Clicked", { "Context": "Sign Up Button", "Icon": "Jnt", "Color": "White" })} role="button" tabIndex="0" style={{ cursor: 'pointer' }} >
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-6c.648 0 1.284-.174 1.844-.505l5.306-3.12a3.797 3.797 0 0 0 1.85-3.26v-6.23a3.785 3.785 0 0 0-1.85-3.259l-5.306-3.12A3.585 3.585 0 0 0 16.008 6c-.65 0-1.29.175-1.852.505L8.85 9.626A3.797 3.797 0 0 0 7 12.885v6.23a3.785 3.785 0 0 0 1.85 3.26l5.306 3.12c.56.33 1.196.505 1.844.505zm-3.052-6.429c.26.267.612.417.981.418.765 0 1.385-.631 1.385-1.41v-7.984h1.382v4.696c.001.776.62 1.405 1.382 1.407.369 0 .723-.15.983-.416l.982 1a2.663 2.663 0 0 1-1.965.812 2.715 2.715 0 0 1-1.382-.376v.852c-.002 1.559-1.243 2.821-2.774 2.823a2.69 2.69 0 0 1-1.957-.822z" fill="#fff" fillRule="evenodd" />
  </svg>
);

export default SvgJnt;