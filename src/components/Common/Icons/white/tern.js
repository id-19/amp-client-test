import React from 'react';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is exported correctly from its setup file

const SvgTern = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.983-16.226v-.23l-4.52 2.628v-1.31l4.52-2.627V9.387L15.99 3l-5.495 3.194-.198.115 4.52 2.627-1.126.654-4.52-2.627L5 9.387v12.774l5.495 3.194.199.115v-5.254l1.126.654v5.255l4.172 2.423 10.991-6.387v-6.387zm-5.695-2.424l-4.55 2.646v5.502l-.746.433-.563-.327v-5.29l-4.735-2.752v-.866l.563-.328 4.552 2.645 4.735-2.75.745.433v.655zM14.83 6.27l1.161-.674 8.758 5.09v2.175l-1.16.674v-2.176L20.542 9.59l-4.734 2.751-1.127-.654 4.735-2.752L14.83 6.27zM8.395 21.54l-1.162-.675v-10.18l1.872-1.088 1.162.674-1.872 1.089v3.538l4.734 2.752v1.309l-4.734-2.751v5.33zm16.355-2.025v1.35l-8.758 5.09-1.872-1.089v-1.35l1.872 1.088 3.045-1.769v-5.502l1.126-.655v5.503l4.587-2.666z" fill="#FFF" />
  </svg>
);

// Assuming SubmitButton.js is a functional component
const SubmitButton = () => {
  const handleClick = () => {
    Mixpanel.track("Submit Button Click", {
      "Icon": "SvgTern",
      "Action": "Form Submission",
      "Location": "Contact Form"
    });
  };

  return (
    <button type="submit" className="submit-btn" onClick={handleClick}>
      Submit
    </button>
  );
};

export default SubmitButton;