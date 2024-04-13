import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const SvgSan = props => {
  // Track "Icon Rendered" event on component mount
  useEffect(() => {
    mixpanel.track("Icon Rendered", {
      "Icon Name": "SvgSan",
      "Context": "Assumed context or specific UI location"
    });
  }, []);

  // Handler to track "Icon Clicked" event
  const handleClick = () => {
    mixpanel.track("Icon Clicked", {
      "Icon Name": "SvgSan",
      "Action": "Assumed action or specific UI interaction",
      "Location": "Assumed location or specific UI section"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" {...props} onClick={handleClick} // Add onClick event handler to track clicks
    >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-15.961C27.045 9.996 22.13 5.041 16.05 5 10.013 4.96 5.05 9.85 5 15.886 4.951 21.98 9.838 26.953 15.923 27c6.08.045 11.03-4.853 11.077-10.961zm-21.204-.035c-.01-5.514 4.542-10.106 9.944-10.198 5.587-.096 10.44 4.325 10.462 10.184.02 5.626-4.58 10.195-10.217 10.183-5.631-.012-10.178-4.55-10.189-10.17zm12.885-4.776c-1.213-.642-2.43-.777-3.685-.48a2.077 2.077 0 0 0-1.47 1.233 3.137 3.137 0 0 0 .955 3.779c.29.226.623.396.921.612.447.325.926.622 1.308 1.012.495.506.595 1.17.28 1.8-.315.624-.956.718-1.568.621-.642-.102-1.266-.318-1.949-.498l-.469 1.364c1.07.72 2.978.944 4.098.49.732-.297 1.303-.784 1.544-1.556.405-1.302.23-2.51-.757-3.506-.364-.367-.823-.64-1.24-.955-.453-.342-.94-.647-1.354-1.032-.403-.376-.383-.895-.215-1.382.164-.475.601-.585 1.023-.544.71.07 1.413.22 2.17.344.107-.34.253-.804.408-1.302zm-8.08 4.59a1.26 1.26 0 0 0-1.245-1.278 1.295 1.295 0 0 0-1.294 1.244c-.016.697.583 1.307 1.282 1.304a1.27 1.27 0 0 0 1.258-1.27zm12.093-1.243c-.77 0-1.3.503-1.3 1.235 0 .7.556 1.268 1.251 1.278.71.01 1.285-.575 1.276-1.297-.01-.702-.529-1.217-1.227-1.216z" />
    </svg>
  );
};

export default SvgSan;