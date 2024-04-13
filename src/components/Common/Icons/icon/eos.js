import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEos = props => {
  const trackIconClick = () => {
    mixpanel.track('Icon Click', {
      'Context': 'Navigation Menu',
      'Time': 'Timestamp Placeholder', // In a real implementation, this would be dynamically generated
      'User ID': 'User ID Placeholder' // This would also be dynamically determined based on the user's session
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={trackIconClick}>
      <defs>
        <linearGradient id="eos_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="eos_svg__b" cx={16} cy={15} r={15} />
        <filter id="eos_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#eos_svg__a)" xlinkHref="#eos_svg__b" />
        <use fill="#282828" fillRule="evenodd" xlinkHref="#eos_svg__b" />
        <use fill="url(#eos_svg__c)" fillRule="evenodd" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#eos_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <path fill="#FFF" d="M9.177 19.914l2.776-4.899-1.01-3.17-1.766 8.069zm3.04-4.068l-3.256 5.747h5.087l-1.83-5.747zm-2.691 6.387l5.904 3.7-1.178-3.7H9.526zm2.857-7.977L15.68 8.44V4.603l-4.44 6.065 1.143 3.588zm-1.81-3.709a.322.322 0 0 1 .057-.13l5.111-6.982a.311.311 0 0 1 .262-.132.311.311 0 0 1 .262.132l5.111 6.983a.322.322 0 0 1 .058.13l2.47 11.283a.322.322 0 0 1-.154.363l-7.573 4.745a.317.317 0 0 1-.174.05.317.317 0 0 1-.173-.05l-7.573-4.745a.322.322 0 0 1-.154-.363l2.47-11.284zm5.43 15.078l1.08-3.392h-2.16l1.08 3.392zm.574.308l5.904-3.7h-4.726l-1.178 3.7zm4.486-14.089l-1.01 3.171 2.776 4.899-1.766-8.07zm-.297-1.176l-4.439-6.065v3.836l3.296 5.817 1.143-3.588zm2.28 10.925l-3.257-5.747-1.83 5.747h5.086zM16.002 9.166l-3.355 5.921 2.072 6.506h2.567l2.072-6.506-3.356-5.921zm7.313 12.905l.279-.478h-.55l.271.478zm-14.904-.478l.279.478.27-.478h-.549z" />
      </g>
    </svg>
  );
};

export default SvgEos;