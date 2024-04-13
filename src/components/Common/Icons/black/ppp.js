import React from 'react';
import mixpanel from 'mixpanel-browser';

const SvgPpp = props => (
  <>
    <svg width={props.width || 64} height={props.height || 64} {...props}>
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.312-24.956a1.255 1.255 0 0 0-1.802 0L19.183 9.43 16.2 6.377a1.204 1.204 0 0 0-.2-.166 1.147 1.147 0 0 0-1.488.139l-.025.026h-.001l-.001.002-7.624 7.819a.198.198 0 0 1-.014.015l-.016.015c-.44.45-.44 1.181 0 1.632l2.306 2.354c.44.443 1.146.44 1.582-.007a1.17 1.17 0 0 0 .007-1.62l-1.45-1.483 6.005-6.16 3.118 3.195c.382.39.97.477 1.442.21a1.29 1.29 0 0 0 .342-.25l3.13-3.208a1.33 1.33 0 0 0 0-1.846zm1.858 9.102l-.028-.029-.003-.002-.002-.002-2.273-2.325a1.105 1.105 0 0 0-1.582.007 1.17 1.17 0 0 0-.007 1.62l1.45 1.483-5.994 6.144-3.126-3.198a1.193 1.193 0 0 0-1.12-.336c-.249.05-.478.176-.656.362l-3.13 3.208c-.324.329-.451.81-.334 1.262.118.452.462.805.904.925s.911-.01 1.233-.342l2.313-2.378 2.917 2.984a1.148 1.148 0 0 0 1.754.122l7.654-7.848a.198.198 0 0 1 .015-.015l.016-.015a1.165 1.165 0 0 0-.001-1.627z" fillRule="evenodd" />
    </svg>
    <button type="submit" aria-label="Submit form" className="Assumed classname or id of the button" onClick={() => mixpanel.track("Form Submission", { "Form ID": "Assumed form ID", "Form Type": "Assumed form type, e.g., registration", "Icon Used": "PPP" })}>
      Submit
    </button>
  </>
);

export default SvgPpp;