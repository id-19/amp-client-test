import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNeos = props => {
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "Neos",
      "Context": "Unknown - Specify where used",
      "Action": "Unknown - Specify action performed"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.5 9.358V26h2.429V13.948l5.714 3.433v-3.097zm11 13.284V6h-2.429v12.052l-5.714-3.433v3.097z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgNeos;