import React from 'react';
import Mixpanel from 'mixpanel-browser'; // Assuming Mixpanel is installed and imported

const SvgMsr = props => {
  // Function to handle click events and send them to Mixpanel
  const handleIconClick = () => {
    Mixpanel.track("Icon Interaction", {
      "Icon Name": "Msr",
      "Action": "Click",
      "Context": "Assumed to be wrapped by an interactive element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26C10.48 6 6 10.48 6 16c0 .133.013.26.02.393h4.693l2.267-3.9L16 16.82l3.013-4.327 2.267 3.9h4.693c.007-.133.02-.26.02-.393C26 10.48 21.52 6 16 6zm6.893 9.187C22.487 11.74 19.553 9.06 16 9.06s-6.487 2.687-6.893 6.127H7.893C8.3 11.073 11.78 7.853 16 7.853c4.22 0 7.693 3.22 8.107 7.334h-1.214zm-3.966-.454L16 18.933l-2.927-4.2-1.666 2.867H6.14C6.907 22.36 11.02 26 16 26c4.98 0 9.093-3.64 9.86-8.407h-5.267l-1.666-2.86zm3.42 4.067h1.293c-1.147 3.113-4.133 5.347-7.64 5.347-3.507 0-6.493-2.234-7.64-5.347h1.293c1.08 2.433 3.514 4.14 6.347 4.14 2.833 0 5.267-1.707 6.347-4.14z" />
    </svg>
  );
};

export default SvgMsr;