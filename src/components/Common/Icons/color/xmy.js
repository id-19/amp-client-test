import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgXmy = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Type": "xmy",
      "Context": "Hypothetical context description",
      "Color": "#ec1076",
      "Size": "64x64"
    });
  };

  return (
    <button className="icon-button" onClick={handleIconClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <g fill="none" fillRule="evenodd">
          <circle cx={16} cy={16} fill="#ec1076" fillRule="nonzero" r={16} />
          <path d="M21.05 21c-.602 0-1.263-.303-1.263-1.212 0-.448.35-1.825 1.048-4.132.143-.356.214-.676.214-.959 0-.545-.42-1.09-1.202-1.09-.454 0-1.443.18-1.743 1.15-.2.647-.661 2.364-1.383 5.152-.28.727-.781 1.091-1.502 1.091-1.082 0-1.263-.788-1.263-1.273 0-.192.288-1.353.865-3.48.225-.71.337-1.227.337-1.55 0-.485-.36-1.09-1.202-1.09-.841 0-1.623.605-1.983 1.938-.24.89-.581 2.223-1.022 4-.24.97-.782 1.455-1.623 1.455-.762 0-1.162-.424-1.202-1.273l1.382-5.757H6.443a1.425 1.425 0 1 1-.03-2.849h5.139c.721 0 1.162.344 1.322 1.03C13.596 11.243 14.557 11 15.4 11s1.923.485 2.404 1.576c.66-.728 1.803-1.576 3.426-1.576 1.502 0 2.765 1.03 2.765 2.848 0 .687-.341 2.122-1.022 4.304l2.637-.018c.771 0 1.39.642 1.39 1.433S26.381 21 25.617 21z" fill="#fff" />
        </g>
      </svg>
    </button>
  );
};

export default SvgXmy;