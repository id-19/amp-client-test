import React from 'react';
// Import Mixpanel library
import mixpanel from 'mixpanel-browser';

const MetamaskIcon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  // Function to handle click event and track it with Mixpanel
  const handleIconClick = () => {
    mixpanel.track("Metamask Icon Clicked", {
      "Action": "Icon Interaction",
      "Icon": "Metamask",
      "Context": "Used for initiating connection or transaction"
    });
  };

  return (
    <svg style={styles.svg} width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 90 80" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={handleIconClick} // Added onClick event handler
    >
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="2.-login-(grey)" transform="translate(-500.000000, -422.000000)">
          <g id="Group-8" transform="translate(311.000000, 396.000000)">
            <g id="Group-4" transform="translate(167.000000, 0.000000)">
              <g id="logo/metamask-recreated" transform="translate(22.000000, 26.000000)">
                <g id="metamask-recreated">
                  <polygon id="Path-16" fill="#CDBDB2" points="25.7142861 73.3333344 37.3809529 76.4285726 37.3809529 72.3809535 38.3333339 71.4285725 45.0000007 71.4285725 45.0000007 76.1904773 45.0000007 79.5238107 37.8571434 79.5238107 29.0476195 75.7142868" />
                  <polygon id="Path-16-Copy" fill="#CDBDB2" transform="translate(54.285715, 75.476192) scale(-1, 1) translate(-54.285715, -75.476192) " points="44.7619054 73.3333344 56.190477 76.4285726 56.190477 72.3809535 57.142858 71.4285725 63.8095248 71.4285725 63.8095248 76.1904773 63.8095248 79.5238107 56.6666675 79.5238107 47.8571436 75.7142868" />
                  <polygon id="Path-17" fill="#393939" points="38.3333339 64.5238105 37.3809529 72.3809535 38.5714291 71.4285725 50.9523817 71.4285725 52.3809532 72.3809535 51.4285722 64.5238105 49.5238103 63.3333343 40.0000006 63.5714295" />
                  <polygon id="Path-20" fill="#F89C35" points="31.9047624 11.4285716 37.6190482 24.7619051 40.2380958 63.5714295 49.5238103 63.5714295 52.3809532 24.7619051 57.6190485 11.4285716" />
                  <g id="face/left">
                    <polygon id="Path-15" fill="#F89D35" points="6.90476201 40.7142863 0.238095242 60.0000009 16.9047622 59.0476199 27.619048 59.0476199 27.619048 50.7142865 27.1428575 33.5714291 24.7619051 35.476191" />
                    <polygon id="Path-8" fill="#D87C30" points="19.5238098 42.8571435 39.0476196 43.333334 36.9047625 53.3333341 27.619048 50.9523817" />
                    <polygon id="Path-9" fill="#EA8D3A" points="19.5238098 43.0952387 27.619048 50.7142865 27.619048 58.3333342" />
                    <polygon id="Path-10" fill="#F89D35" points="27.619048 50.9523817 37.1428577 53.3333341 40.2380958 63.5714295 38.0952387 64.7619057 27.619048 58.5714294" />
                    <polygon id="Path-11" fill="#EB8F35" points="27.619048 58.5714294 25.7142861 73.3333344 38.3333339 64.5238105" />
                    <polygon id="Path-12" fill="#EA8E3A" points="39.0476196 43.333334 40.2380958 63.5714295 36.6666672 53.2142865" />
                    <polygon id="Path-13" fill="#D87C30" points="16.6666669 58.8095247 27.619048 58.5714294 25.7142861 73.3333344" />
                    <polygon id="Path-14" fill="#EB8F35" points="5.47619056 79.761906 25.7142861 73.3333344 16.6666669 58.8095247 0.238095242 60.0000009" />
                    <polygon id="Path-7" fill="#E8821E" points="37.6190482 24.7619051 27.3809528 33.3333338 19.5238098 42.8571435 39.0476196 43.5714292" />
                    <polygon id="Path-18" fill="#DFCEC3" points="25.7142861 73.3333344 38.3333339 64.5238105 37.3809529 72.1428582 37.3809529 76.4285726 28.8095242 74.7619059" />
                    <polygon id="Path-18-Copy" fill="#DFCEC3" transform="translate(57.619048, 70.476192) scale(-1, 1) translate(-57.619048, -70.476192) " points="51.4285722 73.3333344 63.8095248 64.5238105 62.8571438 72.1428582 62.8571438 76.4285726 54.2857151 74.7619059" />
                    <polygon id="Path-19-Copy" fill="#393939" transform="translate(31.785715, 50.357144) scale(-1, 1) translate(-31.785715, -50.357144) " points="29.7619052 47.6190483 27.1428575 53.0952389 36.428572 50.7142865" />
                    <polygon id="Path-21" fill="#E88F35" points="5.23809532 0.238095242 37.6190482 24.7619051 32.1428576 11.4285716" />
                    <path d="M5.23809532,0.238095242 L0.952380967,13.3333335 L3.33333338,27.619048 L1.66666669,28.571429 L4.04761911,30.7142862 L2.14285717,32.3809529 L4.76190483,34.7619053 L3.09523814,36.1904767 L6.90476201,40.9523816 L24.7619051,35.476191 C33.492064,28.4920639 37.7777783,24.9206353 37.6190482,24.7619051 C37.460318,24.603175 26.6666671,16.4285717 5.23809532,0.238095242 Z" id="Path-22" fill="#8E5A30" />
                  </g>