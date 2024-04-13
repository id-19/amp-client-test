import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgFair = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => mixpanel.track("Fair Icon Clicked", { "Context": "User clicked on the fair icon", "Location": "Part of the app where the icon is used" })}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#C99705" />
      <path fill="#FFF" d="M8 24.254l.043-.175c.155-.597.561-.965 1.167-1.132.615-.17 1.202-.105 1.735.257.175.118.307.269.392.458.024.051.071.093.108.14.04-.046.097-.086.117-.138.131-.349.278-.694.377-1.05.536-1.94 1.06-3.881 1.586-5.822.021-.076.034-.155.053-.247-.14 0-.27.001-.399 0-.442-.008-.886.005-1.326-.029-.599-.046-1.006-.415-1.017-.982-.01-.496.283-.877.844-.974.392-.068.804-.042 1.207-.049.387-.006.773 0 1.16-.004.035 0 .094-.04.103-.071.098-.344.189-.69.28-1.037.006-.02.001-.043.001-.077-.438 0-.871.013-1.303-.004-.34-.014-.668-.091-.952-.287-.353-.243-.45-.59-.393-.974.058-.388.307-.648.705-.757.14-.038.292-.054.438-.055a77.962 77.962 0 0 1 1.873.004c.151.003.218-.046.278-.172.208-.433.412-.87.653-1.285.44-.757.956-1.468 1.596-2.086.843-.812 1.836-1.388 3.026-1.599.79-.14 1.586-.174 2.362.092.466.16.812.457 1.03.884.137.27.27.537.255.854-.043.9-.808 1.472-1.501 1.495-.532.018-.99-.126-1.344-.511-.333-.362-.374-.783-.24-1.232.01-.033.023-.066.035-.1l-.027-.034c-.068.044-.145.08-.202.134a4.077 4.077 0 0 0-.75.987c-.42.752-.723 1.548-.973 2.364-.008.025-.006.053-.01.096.216 0 .429.003.64 0 .308-.005.614-.004.907.106.357.134.63.353.702.728.073.381-.002.68-.358.971-.29.238-.63.287-.985.299-.474.016-.95.02-1.424.028-.063.001-.113 0-.131.08-.077.327-.161.653-.242.979-.004.016.001.034.003.062.333 0 .664-.01.994.002.355.013.683.106.942.362.316.314.36.764.096 1.117-.086.115-.189.22-.282.33-.194.228-.465.307-.753.318-.493.02-.987.025-1.48.022-.134 0-.187.04-.217.158-.175.694-.343 1.39-.537 2.08-.39 1.387-.824 2.76-1.536 4.036a7.251 7.251 0 0 1-1.281 1.683c-.743.722-1.623 1.217-2.675 1.4-.718.124-1.442.167-2.15-.048-.6-.182-1.015-.555-1.175-1.154L8 24.52v-.266z" />
    </g>
  </svg>
);

export default SvgFair;