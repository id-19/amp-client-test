import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgGame = props => {
  const handleClick = () => {
    mixpanel.track("Game Icon Clicked", {
      "Width": props.width || 64,
      "Height": props.height || 64
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.131-19.315v2.488h11.085v-2.488zm11.085 4.144H12.869v2.488h8.233v2.335c-1.104.952-3.266 1.444-3.266 1.444-6.347 1.106-8.37-4.33-8.37-4.33-1.84-6.265 2.62-8.753 2.62-8.753 5.474-3.317 9.568.921 9.568.921l1.932-1.888c-3.22-3.686-8.187-2.995-8.187-2.995-8.05.83-9.108 7.601-9.108 7.601-1.334 5.436 2.346 9.168 2.346 9.168 6.716 6.817 15.363.552 15.363.552V16.83z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgGame;