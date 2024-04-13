import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgNas = props => {
  const handleClick = () => {
    mixpanel.track("Icon Interaction", {
      "Icon Name": "Nas",
      "Action": "Click",
      "Width": props.width || 64,
      "Height": props.height || 64
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 16.002c.133.051.206.082.281.108 2.04.693 4.077 1.39 6.12 2.073.225.076.351.2.453.406 1.217 2.485 2.442 4.967 3.666 7.449.15.304.303.607.48.962.045-.116.068-.17.087-.226.691-2.03 1.387-4.058 2.066-6.092a.88.88 0 0 1 .493-.565c2.632-1.288 5.259-2.588 7.887-3.885l.467-.237c-.141-.05-.217-.078-.294-.104-2.04-.693-4.08-1.383-6.115-2.085-.148-.051-.323-.161-.389-.293-1.356-2.724-2.699-5.455-4.044-8.184-.048-.097-.1-.193-.17-.329-.048.126-.079.2-.105.275-.696 2.05-1.394 4.1-2.082 6.152a.652.652 0 0 1-.364.414c-1.761.86-3.519 1.729-5.277 2.596-1.034.51-2.066 1.024-3.16 1.565zm7.73 2.653l4.762 1.609-1.616 4.773-3.145-6.382zm-5.753-2.769l6.382-3.153-1.618 4.77-4.764-1.617zm6.031 2.024c.424-.211.811-.405 1.2-.597 1.866-.921 3.731-1.846 5.603-2.757a.698.698 0 0 1 .477-.03c1.492.492 2.979 1 4.466 1.505.065.022.128.048.247.094-.545.272-1.043.522-1.543.769-1.756.867-3.512 1.736-5.273 2.595-.123.06-.301.095-.425.054-1.54-.51-3.075-1.035-4.61-1.557-.036-.012-.067-.036-.142-.076zm6.499-4.065l-6.87 3.392 3.48-10.267c1.144 2.32 2.26 4.581 3.39 6.875z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgNas;