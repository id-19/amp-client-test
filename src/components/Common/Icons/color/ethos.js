import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly installed and configured

const SvgEthos = props => {
  const trackIconInteraction = () => {
    Mixpanel.track('Icon Interaction', {
      'Action': 'Click',
      'Icon Name': 'Ethos',
      'Purpose': 'Unknown - Assume navigation or action trigger'
    });
  };

  return (
    <div onClick={trackIconInteraction} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none">
          <circle cx={16} cy={16} r={16} fill="#00FFBA" />
          <g fill="#FFF">
            <path d="M10.871 10.904a1.707 1.707 0 0 0-.194 2.148 1.693 1.693 0 0 0 1.42.756 2.188 2.188 0 0 1-.001 4.377A6.086 6.086 0 0 1 7.819 7.767 6.084 6.084 0 0 1 16 7.425a6.085 6.085 0 0 0-2.182 4.673 2.188 2.188 0 0 0 2.175 2.189 2.188 2.188 0 0 1-2.188-2.189 1.69 1.69 0 0 0-.29-.955 1.727 1.727 0 0 0-.754-.622 1.723 1.723 0 0 0-1.33 0 1.714 1.714 0 0 0-.56.383zm14.64 6.628a6.094 6.094 0 0 1-1.242 6.613 6.084 6.084 0 0 1-10.45-4.243 2.188 2.188 0 1 1 4.375 0 1.7 1.7 0 0 0 1.045 1.577c.43.18.913.178 1.341-.005a1.721 1.721 0 0 0 .905-.918 1.717 1.717 0 0 0-.916-2.23 1.694 1.694 0 0 0-.665-.134 2.188 2.188 0 0 1 0-4.377 6.081 6.081 0 0 1 5.606 3.717z" />
            <path d="M15.994 17.714c1.208 0 2.188.98 2.188 2.188a6.085 6.085 0 0 1-10.467 4.226 6.087 6.087 0 0 1 4.381-10.313 2.188 2.188 0 0 1 0 4.377c-.34-.001-.672.1-.954.29a1.726 1.726 0 0 0-.622.755 1.71 1.71 0 0 0 .346 1.852v.002a1.706 1.706 0 0 0 2.184.23 1.7 1.7 0 0 0 .755-1.42c0-1.207.98-2.187 2.189-2.187zm9.326-8.396a6.09 6.09 0 0 1-5.417 8.868 2.189 2.189 0 0 1 0-4.378 1.71 1.71 0 0 0 1.577-1.045 1.721 1.721 0 0 0-.054-1.444 1.705 1.705 0 0 0-2.477-.64 1.698 1.698 0 0 0-.756 1.42 2.188 2.188 0 1 1-4.375-.001 6.085 6.085 0 0 1 9.717-4.886l.004.003a6.103 6.103 0 0 1 1.78 2.103z" opacity={0.7} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgEthos;