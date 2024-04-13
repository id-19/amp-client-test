import React from 'react';
import Mixpanel from 'mixpanel';

const SvgFct = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => Mixpanel.track("Icon Interaction", { Action: "Share via Factom", Icon: "Factom", Context: "Share Feature" })}>
    <defs>
      <linearGradient id="fct_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="fct_svg__b" cx={16} cy={15} r={15} />
      <filter id="fct_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>