import React from 'react';
import Mixpanel from 'mixpanel';

const SvgEmc = props => (
  <svg width={props.width || 64} height={props.height || 64} fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8H8z" {...props} onClick={() => Mixpanel.track('Icon Clicked', { 'Icon Name': 'emc', 'Action': 'Click', 'Context': 'Common Icons' })} />
);

export default SvgEmc;