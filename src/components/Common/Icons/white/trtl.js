import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgTrtl = props => {
  const trackIconInteraction = () => {
    mixpanel.track("Icon Interaction", {
      "Context": "Specific feature or action the icon is part of",
      "Icon Name": "SvgTrtl",
      "Action": "Click"
    });
  };

  return (
    <svg width={props.width || 64} height={props.height || 64} fill="#FFF" onClick={trackIconInteraction} {...props} >
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.006-26.4c.394 0 .781.103 1.122.3l7.16 4.134a2.245 2.245 0 0 1 1.122 1.945v8.434c0 .802-.427 1.543-1.122 1.944l-7.161 4.135a2.245 2.245 0 0 1-2.245 0L7.72 22.357a2.246 2.246 0 0 1-1.123-1.944v-8.434c0-.802.428-1.543 1.123-1.945L14.88 5.9c.342-.197.73-.301 1.123-.301h.002zm-.002-1.561a3.81 3.81 0 0 0-1.902.51L6.94 8.682a3.816 3.816 0 0 0-1.903 3.296v8.434a3.816 3.816 0 0 0 1.903 3.296l7.16 4.134c1.178.68 2.629.68 3.806 0l7.161-4.134a3.816 3.816 0 0 0 1.903-3.296v-8.434a3.816 3.816 0 0 0-1.903-3.296l-7.16-4.135a3.81 3.81 0 0 0-1.904-.51zm4.89 11.91h-1.662a.468.468 0 0 0-.405.234l-.863 1.493a.468.468 0 0 0 0 .468L19 19.936a13.072 13.072 0 0 0 1.895-3.987zm-1.661-.78h1.856c.176-.82.274-1.653.291-2.491a.468.468 0 0 0-.244-.421l-2.096-1.144-1.074 1.861a.468.468 0 0 0 0 .468l.862 1.493a.468.468 0 0 0 .405.234zm-4.106 2.35h1.758a.467.467 0 0 0 .405-.233l.862-1.493a.468.468 0 0 0 0-.468l-.862-1.493a.468.468 0 0 0-.405-.234h-1.758a.468.468 0 0 0-.406.234l-.861 1.493a.468.468 0 0 0 0 .468l.861 1.493a.468.468 0 0 0 .406.234zm-2.349-2.35a.47.47 0 0 0 .406-.234l.861-1.493a.468.468 0 0 0 0-.468l-1.074-1.861-2.097 1.144a.468.468 0 0 0-.243.421c.017.838.115 1.672.291 2.491h1.856zm3.452-5.59a.468.468 0 0 0-.448 0l-2.126 1.16 1.066 1.845a.468.468 0 0 0 .405.234h1.758a.467.467 0 0 0 .405-.234l1.066-1.845-2.126-1.16zm-5.114 6.37a13.072 13.072 0 0 0 1.895 3.987l1.035-1.792a.468.468 0 0 0 0-.468l-.862-1.493a.468.468 0 0 0-.405-.234h-1.663zm4.01 2.351a.468.468 0 0 0-.405.234l-1.2 2.08a13.21 13.21 0 0 0 2.199 2.159.47.47 0 0 0 .573 0 13.21 13.21 0 0 0 2.198-2.16l-1.2-2.079a.468.468 0 0 0-.405-.234h-1.76z" />
    </svg>
  );
};

export default SvgTrtl;