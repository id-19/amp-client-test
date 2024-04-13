import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgPirl = props => {
  // Event handler to track the icon click
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Pirl",
      "Action": "TBD" // Replace "TBD" with the specific action the icon performs
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Attach the event handler to the svg element
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.406-15.895c.092.254.224.492.391.705l.031.04-.045-.054c.058.083.12.162.187.237l.092.092c.036.035.065.07.094.095l1.996 2.011c.35.352.86.49 1.337.36.477-.128.85-.504.978-.985s-.009-.994-.358-1.346L12.4 13.333a.286.286 0 0 0 .007-.007l.06-.051 3.943-3.944.024.026.009.01 7.37 7.44a1.423 1.423 0 0 0 1.779-.195c.48-.483.543-1.244.15-1.8L17.4 6.408a1.376 1.376 0 0 0-1.953-.003L12.9 8.954l-.091.08c-.06.055-.122.106-.187.154l-3.145 3.146a1.399 1.399 0 0 0 0 1.971l2.493 2.518a2.507 2.507 0 0 1-.377-.718zm8.146 2.573a.352.352 0 0 0-.006.006l-.058.047-3.935 3.935-.025-.03-7.384-7.457a1.383 1.383 0 0 0-1.872-.01 1.408 1.408 0 0 0-.185 1.877l8.477 8.547c.54.543 1.414.543 1.954 0l2.624-2.624c.06-.053.124-.104.19-.15l3.148-3.149c.54-.544.54-1.427 0-1.972l-2.611-2.627a4.957 4.957 0 0 1 .064.092 1.92 1.92 0 0 0-.144-.183l-.091-.092c-.037-.035-.066-.07-.094-.095l-1.997-2.01a1.378 1.378 0 0 0-2.361.98c0 .37.145.725.405.986z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgPirl;