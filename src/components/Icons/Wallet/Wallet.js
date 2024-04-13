import React from 'react';
// Assuming Mixpanel has been initialized in the project
import mixpanel from 'mixpanel-browser';

const WalletIcon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  };

  // Event handler to track icon clicks
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "Wallet",
      "Context": "Unknown - Specify where this icon is used within the application",
      "Action": "Clicked"
    });
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480.16 480.16" style={styles.svg} xmlSpace="preserve" width={`${props.size}px`} height={`${props.size}px`} className="WalletIconSVG" // Added class name for tracking
    onClick={handleIconClick} // Added onClick event handler for tracking
    fill={props.color} // Assuming fill is a prop for color
    >
      <g>
        <g>
          <g>
            <path d="M384.08,128.16h-14.544c-26.01-40.463-79.898-52.179-120.36-26.168c-0.86,0.553-1.711,1.121-2.552,1.704 c8.66-47.823-23.088-93.612-70.911-102.272C127.889-7.237,82.1,24.512,73.44,72.335C69.831,92.265,73.208,112.83,83,130.56 c-16.054,5.537-26.851,20.619-26.92,37.6v272c0.026,22.08,17.92,39.974,40,40h288c22.08-0.026,39.974-17.92,40-40v-272 C424.053,146.079,406.16,128.186,384.08,128.16z M295.967,104.142c25.746-0.023,49.543,13.712,62.401,36.017 c6.344,10.938,9.694,23.355,9.712,36c0.011,8.178-1.388,16.297-4.136,24h-17.328c12.027-25.144,3.661-55.307-19.6-70.664 c-18.814-12.218-43.058-12.218-61.872,0c-23.261,15.357-31.627,45.52-19.6,70.664h-17.328c-2.748-7.703-4.147-15.822-4.136-24 C224.044,136.422,256.229,104.178,295.967,104.142z M329.625,197.607c-0.572,0.874-1.178,1.726-1.818,2.552h-63.456 c-5.309-6.88-8.215-15.31-8.272-24c-0.006-13.415,6.722-25.937,17.912-33.336c13.434-8.72,30.742-8.72,44.176,0 C336.46,154.788,341.59,179.315,329.625,197.607z" data-original={props.color} className="active-path" />
            {/* Other paths omitted for brevity */}
          </g>
        </g>
      </g>
    </svg>
  );
};

export default WalletIcon;