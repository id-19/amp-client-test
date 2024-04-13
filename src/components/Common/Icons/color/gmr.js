import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGmr = props => {
  const handleClick = () => {
    // Assuming the onClick prop is a function that the parent component uses
    // in addition to tracking the event.
    if (props.onClick) {
      props.onClick();
    }
    // Tracking the event with Mixpanel
    mixpanel.track("Sign Up", {
      Icon: "Gmr",
      Location: "Assumed location on the page, e.g., header, footer",
      Action: "Navigate to sign-up page"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#372D2C" fillRule="nonzero" />
        <path d="M22.885 23.604a12.23 12.23 0 0 0 1.27-1.915 12.82 12.82 0 0 1-1.289 1.932.228.228 0 0 0 .019-.017zm-15.868-3.91a9.732 9.732 0 0 1-.228-4.48l-.005-.01a9.755 9.755 0 0 0 .761 5.911c.421.89.945 1.726 1.562 2.492a.241.241 0 0 0 .028.024 12.5 12.5 0 0 1-1.584-2.516 10.01 10.01 0 0 1-.534-1.421zm17.963 0a9.731 9.731 0 0 0-.002 0h.002zM9.43 18.53l.136-.067.12-.058a15.16 15.16 0 0 0-.256.125z" />
        <path d="M9.965 18.487l.101-.075h-.034l-.466.43a1.43 1.43 0 0 1 .4-.355z" fill="#000" fillRule="nonzero" />