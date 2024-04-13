import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

const SvgRpx = props => {
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon Name": "SvgRpx",
      "Path": "src/components/Common/Icons/white/rpx.js"
    });
  }, []);

  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgRpx",
      "Action": "Clicked",
      "Path": "src/components/Common/Icons/white/rpx.js"
    });
  };

  return (
    <div onClick={handleIconClick} className="svg-click-wrapper">
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.696-16.268c-.55 0-1.021.333-1.212.805H20.48a.482.482 0 0 0-.42.243l-.785 1.396-.582-4.915c-.065-.55-.88-.556-.954-.007l-1.014 7.523-.981-14.339c-.04-.573-.894-.59-.957-.018l-1.22 11.147-.849-4.67c-.09-.498-.813-.523-.939-.031l-.938 3.67H6.48c-.266 0-.481.211-.481.47s.215.47.48.47h4.736c.22 0 .412-.146.466-.355l.484-1.895 1.047 5.756c.098.535.892.508.95-.033l.991-9.054.935 13.667c.039.566.88.592.956.03l1.14-8.454.308 2.607c.054.455.673.574.899.173l1.372-2.441h3.72c.19.471.662.805 1.212.805.72 0 1.304-.571 1.304-1.275s-.584-1.275-1.304-1.275z" fill="#fff" />
      </svg>
    </div>
  );
};

export default SvgRpx;