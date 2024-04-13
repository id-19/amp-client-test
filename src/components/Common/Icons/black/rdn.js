import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is already set up elsewhere in the project

const SvgRdn = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Click", {
      "Icon": "Rdn",
      "Action": "TBD",
      "Context": "TBD"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10 6.006c.083.046.173.078.258.118 1.55.682 3.04 1.526 4.361 2.595 1.214.98 2.282 2.162 3.047 3.531.715 1.278 1.169 2.72 1.212 4.192a5 5 0 0 1-.022.624h4.134c.062-1.56-.167-3.13-.649-4.614a15.153 15.153 0 0 0-1.972-3.945 14.88 14.88 0 0 0-2.046-2.391c-.064-.05-.114-.14-.212-.11H10zm3.002 7.327L13 26c1.72-1.103 3.435-2.215 5.156-3.317-.33-.607-.667-1.211-1-1.817a4715.11 4715.11 0 0 0-4.155-7.533z" />
    </svg>
  );
};

export default SvgRdn;