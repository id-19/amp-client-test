import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgFlo = props => {
  const trackFeatureExploration = () => {
    mixpanel.track("Feature Exploration Initiated", {
      "Icon": "Flo",
      "Action": "Click",
      "Location": "Common Icons"
    });
  };

  return (
    <div onClick={trackFeatureExploration} style={{ cursor: 'pointer' }}>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.893-14.87c1.798-4.113.802-7.74-1.914-11.13-2.736 3.417-3.722 7.07-1.868 11.197-2.24-2.351-5.002-2.903-8.111-2.399.53 2.022 3.25 4.839 4.862 5.034-1.533-.967-2.774-2.114-3.134-3.964.196-.04.335-.074.475-.095 1.183-.177 2.26.155 3.287.685 1.256.647 2.325 1.539 3.331 2.508.138.133.27.272.448.452-2.418.09-4.21 1.038-5.265 3.187 1.27.42 3.22.134 3.896-.562-.941.35-1.855.566-2.792.092.404-1.08 3.014-2.481 4.225-2.286-.547.985-.866 2.015-.726 3.15.139 1.13.647 2.086 1.373 3.001 1.56-1.966 1.881-3.997.604-6.234.946.194 1.801.39 2.567.809.494.27.942.632 1.38.99.16.13.23.364.348.565-.969.46-1.853.26-2.74-.011 1.177.756 2.445.82 3.831.513-1.067-2.181-2.868-3.126-5.233-3.215.037-.069.047-.101.068-.123 1.207-1.205 2.493-2.313 4.074-3.034.94-.428 1.922-.648 2.969-.48.286.046.396.134.31.445-.268.985-.807 1.805-1.566 2.482-.455.406-.958.76-1.51 1.193 2.5-.96 3.915-2.798 4.918-5.098-3.112-.498-5.858.027-8.107 2.328zm-1.913 3.167c-1.145 1.307-1.173 3.1.013 4.294 1.121-1.08 1.122-3.093-.013-4.294zm.001-12.192c-2.705 3.128-2.603 6.826-.002 9.899 2.648-3.136 2.655-6.816.002-9.9z" fillRule="evenodd" />
      </svg>
    </div>
  );
};

export default SvgFlo;