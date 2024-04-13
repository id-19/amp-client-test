import React from 'react';
import mixpanel from 'mixpanel-browser';
const SvgSafe = props => {
  const handleSvgClick = () => {
    mixpanel.track("Safe Icon Clicked", {
      "Context": "User clicked on the safe icon",
      "Location": "Not specified, depends on where the icon is used"
    });
  };
  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleSvgClick} fill="#00688C">
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#00688C" />
        <g fill="#FFF">
          <path d="M26.989 22.671V9.998L15.985 3.66l-.015.008-10.966 6.337v12.67l10.975 6.322.001.001 11.008-6.326zm-4.87-2.026l-1.877-1.076L16.054 22a.079.079 0 0 1-.08 0l-4.805-2.785-.002-4.845-4.221-2.42 8.998-5.275a.023.023 0 0 1 .024 0l8.357 4.778-1.478.855-6.875-3.956-6.097 3.579 2.115 1.215 3.986-2.318.002-.002 4.87 2.785-.002 4.61 4.151 2.377-.001.07-9.016 5.264-8.358-4.772 1.463-.857 6.881 3.947 6.153-3.606z" />
          <path d="M17.305 15.145v-.034l-.001-.022-.001-.012-.002-.025v-.008l-.003-.027v-.007l-.004-.028v-.005l-.004-.029v-.004l-.005-.03-.001-.002-.006-.03-.001-.003-.007-.03v-.002a.354.354 0 0 0-.007-.03v-.002l-.009-.03v-.001l-.009-.032a.481.481 0 0 0-.02-.06v-.001l-.012-.03a.485.485 0 0 0-.012-.03l-.013-.03-.013-.028-.014-.03-.014-.028-.016-.028a1.103 1.103 0 0 1-.016-.027v-.001l-.016-.026-.001-.001a.478.478 0 0 0-.017-.025v-.002l-.017-.024s0-.002-.002-.002l-.017-.024-.002-.002c-.006-.008-.01-.016-.017-.024l-.001-.002-.019-.023-.002-.002-.018-.022-.002-.002-.02-.021a.01.01 0 0 1-.002-.003l-.019-.021a.01.01 0 0 1-.002-.003l-.019-.02a3663.992 3663.992 0 0 0-.023-.023l-.003-.003-.02-.02a43.362 43.362 0 0 1-.023-.02l-.003-.003a.528.528 0 0 0-.021-.019l-.003-.003a.43.43 0 0 0-.021-.017l-.003-.002-.022-.018-.003-.002-.023-.017-.003-.002-.023-.017-.003-.002-.023-.016-.003-.001-.024-.016-.002-.002-.025-.015h-.002l-.026-.016h-.002l-.027-.016h-.001a1.342 1.342 0 0 0-1.143 2.426l-.58 2.652h2.194l-.585-2.65c.502-.21.829-.7.829-1.243z" />
        </g>
      </g>
    </svg>
  );
};
export default SvgSafe;