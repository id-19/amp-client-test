import React from 'react';
import mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is installed and configured

const SvgSbd = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgSbd",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Added onClick event handler for tracking
      fill="none" fillRule="evenodd" >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#4ba2f2" r={16} />
        <path d="M9.87 8.229c.216.037-.322 1.47-.022 3.107.26 1.403 3.507 6.836 3.373 8.7-.104 1.17-2.77 3.915-3.051 3.732-.307-.085.81-1.95.396-3.504-.482-1.812-3.34-6.496-3.337-8.564 0-1.513 2.448-3.569 2.64-3.471zm6.109-2.14c.274.047-.41 1.876-.028 3.959.33 1.792 4.473 8.72 4.301 11.095-.134 1.494-3.532 4.991-3.892 4.76-.39-.107 1.034-2.486.506-4.468-.613-2.308-4.258-8.282-4.255-10.919 0-1.931 3.122-4.55 3.368-4.426zm6.305 2.14c.216.037-.321 1.47-.022 3.107.26 1.403 3.507 6.836 3.374 8.7-.103 1.17-2.77 3.915-3.052 3.732-.306-.085.81-1.95.396-3.504-.481-1.812-3.34-6.496-3.337-8.564 0-1.513 2.45-3.569 2.641-3.471z" fill="#fff" fillRule="nonzero" />
      </g>
    </svg>
  );
};

export default SvgSbd;