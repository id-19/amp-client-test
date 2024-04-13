import React from 'react';
// Assuming Mixpanel is initialized and available
// import mixpanel from 'mixpanel-browser';
// Uncomment if Mixpanel needs to be imported

const SvgTix = props => {
  // Handler function to track the event
  const handleIconClick = () => {
    // Using Mixpanel to track the event
    window.mixpanel.track("Sign Up Icon Clicked", {
      "Icon": "Tix",
      "Action": "Sign Up",
      "Location": "Common Icons"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} fill="#ef494d">
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#ef494d" fillRule="nonzero" r={16} />
        <path d="M6 11.386c0-.213.173-.386.387-.386h5.024c2.318 0 3.768 1.196 3.768 2.885 0 .705-.322 1.346-.966 1.923.901.513 1.352 1.282 1.352 2.307C15.565 20.52 13.246 21 11.7 21H6.386A.386.386 0 0 1 6 20.614v-1.15c0-.214.173-.387.386-.387H11.7c1.095 0 1.643-.353 1.643-1.058s-.548-1.09-1.643-1.154H6.386A.386.386 0 0 1 6 16.48v-1.15c0-.214.173-.387.386-.387H11.7c.773-.128 1.16-.448 1.16-.961 0-.705-.387-1.058-1.16-1.058H6.386A.386.386 0 0 1 6 12.537v-1.15zm10.435 0c0-.213.173-.386.386-.386h5.121c.213 0 .387.173.387.386v9.228a.386.386 0 0 1-.387.386h-1.45a.386.386 0 0 1-.386-.386V13.31a.386.386 0 0 0-.386-.387h-2.9a.386.386 0 0 1-.386-.386zM23.68 11h1.933c.213 0 .386.173.386.386v1.15a.386.386 0 0 1-.386.387H23.68a.386.386 0 0 1-.386-.386v-1.15c0-.214.173-.387.386-.387z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgTix;