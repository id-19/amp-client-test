import React from 'react';
// Assuming Mixpanel is initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgVet = props => {
  // Function to handle click events and send them to Mixpanel
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Vet",
      "Context": "White Icons Collection"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" fillRule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.262-7.266c.502 1.021 1.952 1.021 2.453 0l7.78-15.849a.258.258 0 0 0-.233-.376h-.331a.382.382 0 0 0-.34.206l-5.605 11.372c-.5 1.02-1.951 1.02-2.452 0L10.388 8.706a.382.382 0 0 0-.34-.206H7.38a.38.38 0 0 0-.34.546l7.698 15.688z" onClick={handleClick} {...props} />
  );
};

export default SvgVet;