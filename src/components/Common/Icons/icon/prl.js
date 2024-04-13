import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is installed and configured

const SvgPrl = props => {
  // Event handler to track button clicks
  const handleButtonClick = () => {
    Mixpanel.track("Icon Clicked", {
      "Icon Name": "Prl",
      "Action": "Submit",
      "Location": "Form Submission" // Assuming location as per the event signature
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <defs>
        <linearGradient id="prl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="prl_svg__b" cx={16} cy={15} r={15} />
        <filter id="prl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="prl_svg__e" d="M24.281 19.867c.084.861-.185 1.711-1.018 2.263-..."/>
        <filter id="prl_svg__d" width="117.5%" height="121.9%" x="-8.8%" y="-7.8%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#prl_svg__a)" xlinkHref="#prl_svg__b" />
        <use fill="#1061E3" xlinkHref="#prl_svg__b" />
        <use fill="url(#prl_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#prl_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#prl_svg__d)" xlinkHref="#prl_svg__e" />
        <use fill="#FFF" xlinkHref="#prl_svg__e" />
      </g>
      {/* Button added for event tracking */}
      <button type="submit" aria-label="Submit" onClick={handleButtonClick} style={{
        // Styling to visually integrate the button with the SVG, this will need adjustment
        position: 'absolute',
        top: '50%', // Example positioning
        left: '50%', // Example positioning
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}>
        Submit
      </button>
    </svg>
  );
};

export default SvgPrl;