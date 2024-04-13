import React, { useEffect } from 'react';

const SvgFjc = props => {
  useEffect(() => {
    window.mixpanel.track("Icon Rendered", {
      "Icon Name": "Fjc",
      "Context": "Unknown - Static Analysis"
    });
  }, []);

  const handleClick = () => {
    window.mixpanel.track("Icon Clicked", {
      "Icon Name": "Fjc",
      "Context": "Unknown - Requires Dynamic Analysis"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fjc_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="fjc_svg__b" cx={15} cy={15} r={15} />
        <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="fjc_svg__a">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#fjc_svg__a)" xlinkHref="#fjc_svg__b" />
          <use fill="#00AFEC" xlinkHref="#fjc_svg__b" />
          <use fill="url(#fjc_svg__c)" style={{ mixBlendMode: 'soft-light', }} xlinkHref="#fjc_svg__b" />
          <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
        </g>
        <g fill="#FFF">
          <path d="M19.948 11.175c.044-.071.084-.168.125-.25a11.034 11.034 0 0 0 1.427-5.42c-1.315-.758-2.705-1.236-4.214-1.403.558 2.441 1.35 4.803 2.495 7.03l.167.042zm-7.544-.416l-.04-.01-.32-.073v-.006h-.005l.288-1.258c.213.045.427.097.64.148h.004a29.813 29.813 0 0 0 1.812-5.457 10.98 10.98 0 0 0-5.42 2.16v.003A11.014 11.014 0 0 0 5 14.816v.219a11.155 11.155 0 0 0 3.798 1.344l.007-.007a30.349 30.349 0 0 0 3.602-5.612l-.003-.001zm6.887 1.856c.241.129.33.31.446.67.158.544.051 1.114-.062 1.65l1.33.31.33-1.433c1.343 2.067 2.833 4.202 4.64 5.878-.327.745-.53 1.005-1.013 1.66-2.962-.912-6.115-1.395-9.213-1.365l.265-1.058-.884-.207c-.137-.034-.278-.096-.36-.216-.104-.138-.104-.32-.07-.481l.554-2.404c.285.069.584.114.853.24a.86.86 0 0 1 .512.585c.072.364-.083.715-.145 1.066l1.19.275.991-4.297-.1-.035-.078-.014c.275-.289.515-.546.764-.86l.05.036zm-10.458 4.04l.028-.04c.23.052.408.033.646.057.845.075 1.667.092 2.509-.028.065-.01.13-.015.196-.017l-.196.75c-.034.147-.1.302-.227.395a.547.547 0 0 1-.433.075c-.303-.062-.605-.144-.911-.203-.093.42-.192.84-.289 1.255l2.032.471c-.083.378-.103.481-.19.856-1.621.22-3.43.608-4.994 1.09-.481-.653-.687-.812-1.01-1.557 1.029-.955 1.954-2.015 2.839-3.105zm4.716 3.028l.815.189-.028.162-.87.061.083-.412zm-1.502-3.28c.063-.009.127-.014.191-.017v-.003l1.049-4.538c.041-.206.124-.412.058-.619a.509.509 0 0 0-.318-.318l-.035-.011c-.173-.047-.04-.014-.217-.056-.02-.004-.107.026-.127.022a29.72 29.72 0 0 1-3.568 5.544c.23.048.193.034.423.058a11.04 11.04 0 0 0 2.544-.062z" />
          <path d="M14.377 9.882v.004c.162-.68.313-1.365.478-2.046l1.355.313-.471 2.045.811.19.239-1.023.117-.512.119-.51 1.354.309-.059.275c-.13.593-.277 1.18-.408 1.775l1.56.363c-1.145-2.227-1.903-4.555-2.461-6.996-.351-.041-.499-.027-.853-.034h-.216c-.389 0-.533-.01-.915.034-.428 1.873-.934 3.837-1.714 5.593l1.065.22zm1.798 1.75l.045.01.005-.01z" />