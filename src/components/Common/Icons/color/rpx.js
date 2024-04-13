import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgRpx = props => {
  useEffect(() => {
    mixpanel.track("SVG Rendered", {
      "Type": "Icon",
      "Icon Name": "Rpx",
      "Usage Context": "Assumed Clickable"
    });
  }, []);

  const handleClick = () => {
    mixpanel.track("SVG Clicked", {
      "Type": "Icon",
      "Icon Name": "Rpx",
      "Action": "Click",
      "Context": "Assumed Part of Clickable Element"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#8d181b" r={16} />
        <path d="M25.696 15.732c.72 0 1.304.57 1.304 1.275s-.584 1.275-1.304 1.275c-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756-.484 1.895a.479.479 0 0 1-.466.356H6.48c-.265 0-.48-.21-.48-.47s.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 6.42c.063-.571.918-.555.957.018l.981 14.34 1.014-7.524c.074-.549.889-.543.954.007l.582 4.915.784-1.396a.482.482 0 0 1 .421-.243h4.004a1.304 1.304 0 0 1 1.212-.805z" fill="#fff" />
      </g>
    </svg>
  );
};

export default SvgRpx;