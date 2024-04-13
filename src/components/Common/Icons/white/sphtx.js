import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgSphtx = props => {
  const handleSvgClick = () => {
    mixpanel.track("SVG Interaction", {
      "Action": "Click",
      "SVG Name": "Sphtx",
      "Context": "Used as an interactive element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 12.391h8.417v-.356H6zm0-1.035h8.417V11H6zm3.55 10.64h.338v-8.893H9.55zm.98 0h.337v-8.893h-.337zm15.232-.728l.238-.252-3.798-4.012-.238.251zM16.519 11l-.238.252 3.798 4.012.238-.251zm8.55 11l.238-.252-3.798-4.013-.238.252zm-9.242-10.268l-.239.252 3.798 4.012.239-.252zm5.421 4.768l-.454.48-.238.252-4.275 4.516.238.252 4.275-4.516.239-.252.454-.48.238-.252L26 11.984l-.238-.252-4.275 4.516zm-.454-.984l-.238.252-.455.48-.238.252-4.275 4.516.239.252 4.274-4.516.239-.252.454-.48.238-.252 4.275-4.516L25.07 11z" fill="#fff" fillRule="evenodd" />
    </svg>
  );
};

export default SvgSphtx;