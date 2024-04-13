import React from 'react';
// Assuming Mixpanel has been initialized elsewhere in the project
import mixpanel from 'mixpanel-browser';

const SvgHpb = props => {
  // Function to handle click events and track them with Mixpanel
  const handleIconClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "SvgHpb",
      "Action": "Click",
      "Context": "Assumed to be wrapped in an interactive element or directly made interactive",
      "Location": "Unknown - Depends on where the icon is used within the application"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler to the SVG element
    >
      <defs>
        <linearGradient id="hpb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="hpb_svg__b" cx={16} cy={15} r={15} />
        <filter id="hpb_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>
        <filter id="hpb_svg__d" width="117.5%" height="118.4%" x="-8.8%" y="-6.6%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#hpb_svg__a)" xlinkHref="#hpb_svg__b" />
        <use fill="#1591CA" xlinkHref="#hpb_svg__b" />
        <use fill="url(#hpb_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#hpb_svg__b" />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <g fill="#FFF" fillRule="nonzero" filter="url(#hpb_svg__d)" transform="translate(6 5.5)">
          <path d="M10.572 8.772s1.327-2.95-1.275-5.8c0 0-1.48-1.9-4.54-1.75l.611-.24c.102-.04.209-.068.317-.082l.602-.079 4.234-.65s1.497-.293 2.632.03c.323.094.617.269.85.507.626.634 1.883 2.311 1.06 4.963 0 0-.817 2.95-3.878 3.65 0 .001-.766.201-.613-.549zm-.189 1.644s1.913 2.623 5.742 1.884c0 0 2.422-.279 3.851-2.937l-.102.639c-.017.106-.047.21-.09.309l-.238.547-1.588 3.9s-.505 1.411-1.368 2.203a1.952 1.952 0 0 1-.876.459c-.875.203-2.988.408-4.898-1.638 0 0-2.173-2.193-1.227-5.13 0-.002.214-.747.794-.236zm-1.385-.947s-3.27.344-4.495 3.975c0 0-.944 2.204.714 4.73l-.517-.4a1.3 1.3 0 0 1-.23-.229l-.37-.472L1.416 13.8S.408 12.673.131 11.55c-.08-.322-.072-.66.022-.978.249-.847 1.106-2.75 3.863-3.372 0 0 3.017-.777 5.162 1.475.002 0 .56.551-.18.794z" />
          <path d="M11.106 9.659s3.26-.425 4.39-4.085c0 0 .887-2.227-.837-4.711l.528.387c.087.065.167.14.236.223l.381.462 2.77 3.206s1.034 1.1 1.342 2.218c.087.32.087.656 0 .976-.227.853-1.034 2.778-3.775 3.468 0 0-2.996.85-5.198-1.346.002 0-.57-.536.163-.798zm-1.638.603s-1.401 2.917 1.127 5.83c0 0 1.429 1.936 4.495 1.86l-.618.225a1.35 1.35 0 0 1-.319.073l-.603.064-4.25.546s-1.503.256-2.63-.095a1.952 1.952 0 0 1-.837-.527c-.61-.65-1.823-2.355-.932-4.987 0 0 .89-2.93 3.969-3.554 0 .003.773-.18.598.566zm.109-1.536s-1.952-2.596-5.769-1.8c0 0-2.418.313-3.808 2.99l.092-.641a1.3 1.3 0 0 1 .086-.31l.23-.55 1.53-3.924s.485-1.418 1.336-2.221a1.95 1.95 0 0 1 .872-.47c.872-.217 2.982-.45 4.92 1.569 0 0 2.205 2.161 1.302 5.112 0-.002-.204.748-.791.245z" opacity={0.5} />
        </g>
      </g>
    </svg>
  );
};

export default SvgHpb;