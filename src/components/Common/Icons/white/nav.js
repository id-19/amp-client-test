import React, { useEffect } from 'react'; 
// Assuming Mixpanel is globally available or imported above
const SvgNav = props => {
  // Track component render
  useEffect(() => {
    window.Mixpanel.track("Navigation Icon Interaction", {
      Icon: "Nav",
      Action: "Rendered",
      Location: "Common Icons"
    });
  }, []);

  // Handler for tracking clicks
  const handleClick = () => {
    window.Mixpanel.track("Navigation Icon Interaction", {
      Icon: "Nav",
      Action: "Clicked",
      Location: "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Added onClick handler for tracking
      fill="#FFF" fillRule="evenodd" 
      d="M16.524 22h4.797L27 10h-4.797l-3.443 7.276L14.815 10h-4.797L5 22h4.797l2.929-7.005L16.524 22zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" />
  );
};

export default SvgNav;