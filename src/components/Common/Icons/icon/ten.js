import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgTen = props => {
  // Function to handle click event and send data to Mixpanel
  const handleClick = () => {
    mixpanel.track("Icon Viewed", {
      "Icon Name": "SvgTen",
      "Location": "Common Icons",
      "View Trigger": "Click"
    });
  };

  // Function to handle visibility change event and send data to Mixpanel
  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      mixpanel.track("Icon Viewed", {
        "Icon Name": "SvgTen",
        "Location": "Common Icons",
        "View Trigger": "Scroll into view"
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        handleVisibilityChange(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    const svgElement = document.getElementById("SvgTen");
    if (svgElement) {
      observer.observe(svgElement);
    }
    return () => {
      if (svgElement) {
        observer.unobserve(svgElement);
      }
    };
  }, []);

  return (
    <svg id="SvgTen" width={props.width || 64} height={props.height || 64} {...props} onClick={handleClick} // Added onClick event handler
    >
      <defs>
        <linearGradient id="ten_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="ten_svg__b" cx={16} cy={15} r={15} />
        <filter id="ten_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
        </filter>