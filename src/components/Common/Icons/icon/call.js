import React from 'react';
// Assuming Mixpanel is initialized and available globally
const SvgCall = props => {
  // Event tracking function
  const trackIconClick = () => {
    // Check if Mixpanel is available
    if (window.Mixpanel) {
      window.Mixpanel.track("Icon Clicked", {
        "Icon Type": "Call",
        "Action": "Initiate Call"
      });
    }
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconClick} // Adding the onClick handler for tracking
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="call_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="call_svg__b" cx={15} cy={15} r={15} />
        <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="call_svg__a">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#call_svg__a)" xlinkHref="#call_svg__b" />
          <use fill="#FBB413" xlinkHref="#call_svg__b" />
          <use fill="url(#call_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#call_svg__b" />
          <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
        </g>
        <g fill="#FFF">
          <path d="M16.016 20.32a4.192 4.192 0 0 0 1.78-.308c.223-.08.436-.184.636-.313a.166.166 0 0 1 .247.031l1.447 1.49c.105.108.1.143-.023.228a6.897 6.897 0 0 1-1.625.822 7.696 7.696 0 0 1-2.207.409 7.658 7.658 0 0 1-2.826-.386 6.947 6.947 0 0 1-2.15-1.208 7.966 7.966 0 0 1-1.505-1.652 6.538 6.538 0 0 1-.613-1.073 10.988 10.988 0 0 1-.348-.907 8.074 8.074 0 0 1-.324-1.733 5.226 5.226 0 0 1 .02-1.297 9.41 9.41 0 0 1 .223-1.262 7.916 7.916 0 0 1 .749-1.818 7.41 7.41 0 0 1 2.949-2.84 7.32 7.32 0 0 1 1.47-.603c.414-.123.84-.206 1.27-.247a4.91 4.91 0 0 1 1-.023c.059.004.118.004.177 0 .546.014 1.087.1 1.61.255a5.97 5.97 0 0 1 1.285.506c.43.212.835.471 1.208.771.073.066.131.035.19-.027l.89-.941 1.286-1.367c.15-.162.19-.166.351-.019.496.446.953.932 1.367 1.455.524.651.97 1.361 1.331 2.115.289.623.526 1.269.71 1.93.155.544.205 1.1.325 1.644v.031c0 .506.111 1.011.057 1.517-.061.575-.092 1.158-.212 1.725-.102.477-.231.947-.386 1.409a10.846 10.846 0 0 1-1.679 3.18c-.112.147-.146.15-.274 0-.424-.428-.849-.864-1.277-1.289-.09-.089-.078-.158 0-.254a8.83 8.83 0 0 0 1.088-2.054c.243-.684.41-1.394.498-2.115.053-.553.065-1.109.035-1.663a6.036 6.036 0 0 0-.112-.938 8.692 8.692 0 0 0-1.505-3.52c-.082-.116-.182-.22-.255-.344-.074-.123-.081-.089-.15-.02-.41.414-.83.815-1.228 1.236-.14.147-.297.262-.429.413-.13.15-.289.293-.436.44l-.447.448c-.07.07-.124.042-.17-.023a4.987 4.987 0 0 0-1.432-1.39 4.763 4.763 0 0 0-1.803-.695 5.427 5.427 0 0 0-1.513-.019 4.662 4.662 0 0 0-1.76.556 4.91 4.91 0 0 0-1.505 1.281 4.983 4.983 0 0 0-.814 1.51 5.97 5.97 0 0 0-.274 2.002 4.828 4.828 0 0 0 1.266 3.293 5.118 5.118 0 0 0 1.775 1.27 4.55 4.55 0 0 0 2.042.382z" />