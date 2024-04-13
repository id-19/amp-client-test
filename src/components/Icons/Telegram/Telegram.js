import React from 'react';
import mixpanel from 'mixpanel-browser';

const TelegramIcon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  };

  const trackIconClick = () => {
    mixpanel.track("Telegram Icon Clicked", {
      "Action": "Clicked",
      "Location": "Telegram Icon",
      "Purpose": "Share via Telegram or link to profile"
    });
  };

  return (
    <svg style={styles.svg} width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 72 62" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={trackIconClick} >
      <defs />
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.-login-(grey)" transform="translate(-343.000000, -431.000000)" fill-rule="nonzero">
          <g id="Group-8" transform="translate(311.000000, 396.000000)">
            <g id="Group-3">
              <g id="telegram-icon" transform="translate(32.000000, 35.000000)">
                <path d="M71.5945594,2.19256705 L60.2706513,59.2824521 C60.2706513,59.2824521 58.6862069,63.2423755 54.331954,61.3419923 L28.2016858,41.3095785 L18.6997701,36.7177778 L2.7056705,31.3301916 C2.7056705,31.3301916 0.251800766,30.4607663 0.0142528736,28.5603831 C-0.223295019,26.66 2.78643678,25.6314176 2.78643678,25.6314176 L66.3708812,0.688888889 C66.3708812,0.688888889 71.5945594,-1.60819923 71.5945594,2.19256705 Z" id="Shape" fill="#FFFFFF" />
                <path d="M26.1944061,58.6410728 C26.1944061,58.6410728 25.4318774,58.5698084 24.4816858,55.5529502 C23.5314943,52.536092 18.7021456,36.7082759 18.7021456,36.7082759 L57.1041379,12.3263602 C57.1041379,12.3263602 59.3204598,10.9794636 59.242069,12.3263602 C59.242069,12.3263602 59.6387739,12.563908 58.4510345,13.6732567 C57.263295,14.7826054 28.2824521,40.8321073 28.2824521,40.8321073" id="Shape" fill="#D8E5F1" />
                <path d="M38.2214559,48.9895019 L27.8857471,58.4130268 C27.8857471,58.4130268 27.0780843,59.0259004 26.1944061,58.6505747 L28.1731801,41.1456705" id="Shape" fill="#BDCFE3" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TelegramIcon;