import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgGxs = props => {
  useEffect(() => {
    mixpanel.track("SVG Icon Viewed", {
      "Icon Name": "GXS",
      "Default Width": props.width || "64",
      "Default Height": props.height || "64"
    });
  }, [props.width, props.height]);

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <defs>
        <linearGradient id="gxs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="gxs_svg__b" cx={16} cy={15} r={15} />
        <filter id="gxs_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <path id="gxs_svg__e" d="M7.02 6.027c1.27-1.327 3.59-1.38 4.901-.09 1.37 1.34 2.726 2.692 4.068 4.057 1.428-1.357 2.764-2.805 4.198-4.156 1.364-1.232 3.684-1.083 4.895.297 1.242 1.302 1.222 3.573-.067 4.837-1.327 1.351-2.671 2.682-4.01 4.022 1.368 1.409 2.793 2.763 4.15 4.19 1.216 1.333 1.1 3.605-.219 4.83-1.297 1.31-3.623 1.314-4.918-.002-1.347-1.322-2.665-2.676-4.003-4.004-1.428 1.374-2.79 2.816-4.233 4.176C10.4 25.41 8.07 25.227 6.88 23.82c-1.2-1.299-1.17-3.512.08-4.77a217.222 217.222 0 0 1 3.566-3.567l1.507 1.505c-1.176 1.214-2.413 2.376-3.571 3.608-.781.8-.093 2.292 1.004 2.274.665.059 1.124-.492 1.556-.908 1.147-1.168 2.311-2.315 3.458-3.483-2.5-2.522-5.04-5.009-7.528-7.542-1.298-1.308-1.257-3.64.07-4.91zm1.453 3.39c1.323 1.38 2.697 2.711 4.044 4.068.65-.658 1.304-1.312 1.962-1.963-1.303-1.313-2.601-2.635-3.922-3.93-.421-.455-1.141-.624-1.69-.298-.764.37-1.005 1.506-.395 2.123zm12.94-1.79c-2.486 2.44-4.922 4.932-7.395 7.384.667.647 1.332 1.296 1.983 1.96.499-.492.995-.99 1.492-1.488.502.501 1.001 1.005 1.507 1.503-.491.5-.985.996-1.484 1.49 1.341 1.349 2.656 2.723 4.041 4.028.703.74 2.067.291 2.27-.684.218-.69-.278-1.287-.746-1.721a2157.89 2157.89 0 0 1-6.596-6.593 266.94 266.94 0 0 0 1.501-1.509c.5.498.999.996 1.51 1.486 1.315-1.363 2.709-2.65 4.004-4.034.653-.634.392-1.849-.442-2.192-.56-.289-1.243-.085-1.646.37z" />
        <filter id="gxs_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.3%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
        </filter>
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#gxs_svg__a)" xlinkHref="#gxs_svg__b" />
        <use fill="#35A5F3" fillRule="evenodd" xlinkHref="#gxs_svg__b" />
        <use fill="url(#gxs_svg__c)" fillRule="evenodd" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#gxs_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#gxs_svg__d)" xlinkHref="#gxs_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#gxs_svg__e" />
      </g>
    </svg>
  );
};

export default SvgGxs;