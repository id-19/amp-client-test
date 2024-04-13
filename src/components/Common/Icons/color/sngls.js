import React from 'react';
// Assuming Mixpanel has been initialized in another part of the application
import mixpanel from 'mixpanel-browser';

const SvgSngls = props => {
  // Event handler to track the icon click
  const handleIconClick = () => {
    mixpanel.track("Icon Clicked", {
      "Context": "Navigation/Action Button",
      "Icon Name": "Sngls",
      "Page": "Variable depending on where the icon is used"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleIconClick} // Adding the onClick event handler
    fill="#B30D23" >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#B30D23" />
        <path fill="#FFF" fillRule="nonzero" d="M16.913 21.234l-.932 1.736-.932-1.736C9.419 20.797 5 16.599 5 16.599c0-.01 4.294-4.078 9.809-4.614l.73-1.25.442-.735.75 1.25.422.735c5.514.526 9.809 4.614 9.809 4.614s-4.42 4.198-10.05 4.635zM5.932 16.599c-.01 0 4.246 2.908 8.521 3.523l-2.084-3.9.566-.982.52.972-.01.01 2.027 3.99c.163.01.326.01.49.01.163 0 .317 0 .48-.01l1.489-2.968 1.086-2.024.566.982-2.084 3.91c4.275-.605 8.53-3.443 8.53-3.523 0-.07-4.053-2.778-8.223-3.473l.634 1.102-.528 1.061-1.374-2.302a10.45 10.45 0 0 0-.557-.02c-.183 0-.375.01-.567.02l-1.403 2.302-.518-1.012.662-1.141c-4.169.705-8.223 3.473-8.223 3.473z" />
      </g>
    </svg>
  );
};

export default SvgSngls;