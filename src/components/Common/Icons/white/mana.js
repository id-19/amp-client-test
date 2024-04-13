import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgMana = props => {
  const trackIconInteraction = () => {
    mixpanel.track('Icon Interaction', {
      'Icon Name': 'Mana',
      'Action': 'Click',
      'Context': 'Used in a button'
    });
  };

  return (
    <div onClick={trackIconInteraction} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-27C9.939 5 5 9.939 5 16s4.939 11 11 11 11-4.939 11-11S22.061 5 16 5zm8.855 9.889l-.946.165-1.364-1.892h-.44a3.756 3.756 0 0 0-3.322-5.5c-2.068 0-3.762 1.672-3.762 3.74 0 1.716 1.166 3.168 2.739 3.619l-.055.055-.539.275-.88-.319-.869-.506-1.221 1.54-.979-.539-1.881.484-.946-3.102H8.08l-1.683 2.948-.517.011C5.946 10.346 10.467 5.88 16 5.88c5.577 0 10.12 4.543 10.12 10.12v.319l-1.265-1.43zM16 26.12c-4.301 0-7.986-2.695-9.449-6.49.286 0 .594.011.902.011.165.046.335.068.506.066.143 0 .286-.011.407-.044.07-.002.14.002.209.011-.022.066-.022.088-.022.11 0 .484.517.836 1.232.836.693 0 1.199-.33 1.221-.792l.341.033c2.926.319 3.124.847 3.124.869.011.044-.055.275-.649.671-1.243.858-1.672 1.375-1.562 1.914.132.649.979.814 2.266 1.056.363.066.77.143 1.188.242.462.099.957.198 1.43.297.858.176 1.738.352 2.442.561A10.17 10.17 0 0 1 16 26.12zm4.708-1.166c-.825-.407-2.079-.649-3.399-.913a63.833 63.833 0 0 1-1.408-.286 23.798 23.798 0 0 0-1.221-.242c-.594-.11-1.309-.253-1.54-.385.077-.121.319-.407 1.177-.99.308-.209 1.243-.847.99-1.661-.231-.759-1.43-1.221-3.872-1.485-.22-.022-.451-.044-.693-.066-.121-.363-.297-.88-.55-1.628l-.418-1.221-.418 1.221c-.143.407-.253.737-.352 1.023-.11-.352-.308-.924-.649-1.914l-.385-1.243-.418 1.221c-.572 1.672-.737 2.167-.781 2.354h-.506a10.769 10.769 0 0 1-.352-1.991l1.012-.033 1.672-2.926h1.155l1.001 3.289 2.354-.605.539.297-1.144 1.441.693.55 2.442-3.091.286.165 1.32.484.572-.297c-.11.231-.176.484-.176.748s.165.825 1.419 1.034c.399.065.692.41.693.814v1.43a2.526 2.526 0 0 0-.594-.308h.011c-.484-.154-.935-.385-1.078-.858-.11.385-.418.605-.814.759-1.023.275-1.76 1.045-1.76 1.958 0 .33.253 1.111 2.552 1.111 2.31 0 2.552-.781 2.552-1.111v-1.727c.154.055.33.099.539.132.399.065.692.41.693.814v.99c0 .231.165.44.396.462a.446.446 0 0 0 .484-.44v-1.012a.827.827 0 0 1 .693-.814c1.254-.209 1.419-.759 1.419-1.034 0-.737-.484-1.375-1.199-1.738h.011c-.011 0-.022-.011-.044-.011-.121-.066-.264-.11-.396-.154a1.362 1.362 0 0 1-.495-.396c-.055-.781-.638-1.441-1.474-1.76h-.011c-.055-.022-.11-.033-.165-.055-.418-.154-.781-.385-.902-.792-.132.451-.517.682-1.012.836-.033.011-.077.022-.11.044l1.375-1.463.825 1.111.66-.528h.165l1.43 1.969 1.012-.176 1.485 1.683c-.484 3.212-2.497 5.94-5.291 7.414zm-.968-3.421c-.154.11-.726.286-1.672.286s-1.518-.176-1.672-.286c.044-.616.792-1.122 1.672-1.122.88 0 1.628.506 1.672 1.122zm2.563-3.751c.88 0 1.628.506 1.672 1.122-.154.11-.737.286-1.672.286-.935 0-1.518-.176-1.672-.286.044-.616.792-1.122 1.672-1.122zm-.451-1.078c-.154.11-.737.286-1.672.286-.935 0-1.518-.176-1.672-.286.044-.616.792-1.122 1.672-1.122.88 0 1.628.506 1.672 1.122zm-.671-3.729l-.66-.891-2.046 2.189a2.874 2.874 0 0 1 .308-5.731 2.873 2.873 0 0 1 2.871 2.871 2.84 2.84 0 0 1-.473 1.562zM9.499 19.696l.297-.891.297.891c-.194.059-.4.059-.594 0zm-1.815-.935c.066-.198.165-.517.286-.858.121.352.231.671.286.869-.198 0-.385-.011-.572-.011zm4.224-5.907a2.56 2.56 0 0 0 2.552-2.552 2.554 2.554 0 0 0-2.552-2.552 2.554 2.554 0 0 0-2.552 2.552 2.554 2.554 0 0 0 2.552 2.552zm0-4.224c.913 0 1.672.748 1.672 1.672a1.672 1.672 0 1 1-1.672-1.672z" />
      </svg>
    </div>
  );
};

export default SvgMana;