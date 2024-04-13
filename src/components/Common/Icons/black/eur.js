import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgEur = props => {
  const trackEvent = (eventName, eventProperties) => {
    mixpanel.track(eventName, eventProperties);
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} {...props} onClick={() => {
      trackEvent("Currency Icon Clicked", {
        "Currency": "EUR",
        "Action": "View Currency Info",
        "Context": "Currency Selector"
      });
      trackEvent("Currency Conversion Initiated", {
        "Currency From": "USD",
        "Currency To": "EUR",
        "Context": "Currency Converter"
      });
    }}
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 19.004h1.994C11.097 23 13.733 25 17.9 25c1.585 0 2.951-.216 4.1-.648v-2.373c-1.209.494-2.32.74-3.334.74-1.419 0-2.512-.271-3.277-.815-.766-.545-1.416-1.511-1.949-2.9h4.956l.8-2.003h-6.184c-.03-.378-.045-.806-.045-1.285 0-.416.019-.748.056-.995h7.096l.811-2.003h-7.422c.713-2.292 2.316-3.438 4.809-3.438a8.92 8.92 0 0 1 3.683.776V7.532A14.002 14.002 0 0 0 18.103 7c-4.16 0-6.833 1.906-8.02 5.718H8.812L8 14.721h1.69a12.95 12.95 0 0 0-.057 1.25c0 .332.011.675.034 1.03H8.81z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgEur;