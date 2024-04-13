import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgAmb = props => {
  useEffect(() => {
    mixpanel.track("Icon View", {
      "Icon Name": "Amb",
      "Page": "Describe the page or section where the icon is displayed"
    });
  }, []);

  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Type": "Click",
      "Icon Name": "Amb",
      "Context": "Describe where or how this icon is used"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} >
      <defs>
        <linearGradient id="amb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="amb_svg__b" cx={16} cy={15} r={15} />
        <filter id="amb_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="amb_svg__e" d="M27 15.015v.008a.522.522 0 0 1-.063.228c-.14.255-3.491 6.249-10.936 6.249S5.203 15.506 5.064 15.251A.522.522 0 0 1 5 15.023v-.045l.001-.023a.52.52 0 0 1 .054-.189l.002-.004a.662.662 0 0 1 .006-.012C5.203 14.494 8.555 8.5 16 8.5c7.445 0 10.797 5.995 10.936 6.25l.006.012.003.005a.52.52 0 0 1 .053.188v.046l.002.014zM25.89 15c-.563-.874-2.679-3.793-6.515-4.967a6.07 6.07 0 0 1 2.437 3.63c.263.06.452.296.457.57a.594.594 0 0 1-.437.586.584.584 0 0 1-.665-.29.601.601 0 0 1 .119-.724c-.494-2.223-2.322-3.94-4.574-4.239a.267.267 0 0 1-.05-.011 12.37 12.37 0 0 0-1.325 0 .268.268 0 0 1-.05.011 5.372 5.372 0 0 0-2.43.97.272.272 0 0 1-.417-.14.278.278 0 0 1 .101-.308 5.02 5.02 0 0 1 .073-.052C8.784 11.213 6.672 14.126 6.11 15c.557.867 2.64 3.74 6.41 4.935a6.037 6.037 0 0 1-2.375-3.77.597.597 0 0 1-.38-.626c.03-.273.24-.49.508-.525a.587.587 0 0 1 .624.377.601.601 0 0 1-.212.703c.43 2.21 2.148 3.927 4.332 4.33a12.003 12.003 0 0 0 1.968 0 5.375 5.375 0 0 0 2.245-.992.27.27 0 0 1 .272-.035.278.278 0 0 1 .052.478l-.087.065c3.778-1.193 5.865-4.072 6.423-4.94zm-5.07.017c0 2.697-2.162 4.892-4.82 4.892-2.657 0-4.82-2.195-4.82-4.892 0-2.697 2.162-4.891 4.82-4.891 2.658 0 4.82 2.193 4.82 4.891zm-.544 0c0-2.392-1.918-4.339-4.276-4.339-2.358 0-4.277 1.946-4.277 4.34 0 2.392 1.919 4.338 4.277 4.338s4.276-1.946 4.276-4.339zm-2.7-1.343c0 .524-.259 1.012-.69 1.3l.43 2.627a.314.314 0 0 1-.317.379h-1.92a.315.315 0 0 1-.318-.379l.428-2.627a1.573 1.573 0 0 1-.573-1.894c.28-.689 1-1.081 1.72-.937.721.145 1.24.786 1.24 1.531zm4.347 2.043a6.041 6.041 0 0 1-1.51 3.368.27.27 0 0 1-.462-.1.28.28 0 0 1 .06-.272 5.49 5.49 0 0 0 1.372-3.06.274.274 0 0 1 .301-.242c.15.018.256.155.239.306zm-9.87-4.868a.278.278 0 0 1 .01.39 5.49 5.49 0 0 0-1.423 2.97.274.274 0 0 1-.31.231.276.276 0 0 1-.229-.313 6.04 6.04 0 0 1 1.567-3.267.27.27 0 0 1 .385-.01z" />
        <filter id="amb_svg__d" width="115.9%" height="126.9%" x="-8%" y="-9.6%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#amb_svg__a)" xlinkHref="#amb_svg__b" />
        <use fill="#3C5BE0" fillRule="evenodd" xlinkHref="#amb_svg__b" />
        <use fill="url(#amb_svg__c)" fillRule="evenodd" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#amb_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#amb_svg__d)" xlinkHref="#amb_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#amb_svg__e" />
      </g>
    </svg>
  );
};

export default SvgAmb;