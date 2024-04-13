import React from 'react';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

const SvgOax = props => {
  const handleButtonClick = () => {
    mixpanel.track("Form Submission", {
      "Form Type": "User Feedback",
      "Icon": "Oax",
      "Location": "Feedback Page"
    });
  };

  return (
    <div>
      <svg width={props.width || 64} height={props.height || 64} {...props}>
        <path d="M19.544 19.969l-.612-1.301H17.55l.626 1.33h2.962l2.141-2.91-.779-1.07.779-1.07-2.141-2.91h-1.615l2.952 3.98zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.91-13.332l.594-1.296 1.121-2.354 1.121 2.315h1.415L15.838 12l-3.753 7.999h1.382zM24.07 16L27 12.003h-1.58l-2.141 2.91zm0 0l-.79 1.088 2.14 2.91H27zm-12.648-2.842a3.511 3.511 0 0 0-2.665-1.154 3.416 3.416 0 0 0-2.173.736l.92.98a2.19 2.19 0 0 1 1.25-.35 2.333 2.333 0 0 1 1.78.77c.462.508.722 1.188.723 1.896a2.652 2.652 0 0 1-.724 1.895 2.396 2.396 0 0 1-1.78.81 2.396 2.396 0 0 1-1.78-.81 2.822 2.822 0 0 1-.36-3.265l-.921-.98a3.965 3.965 0 0 0-.691 2.315 4 4 0 0 0 1.085 2.842A3.575 3.575 0 0 0 8.754 20c1.053 0 1.945-.347 2.668-1.156a4.124 4.124 0 0 0 1.085-2.842 3.965 3.965 0 0 0-1.085-2.843z" fill="#fff" />
      </svg>
      {/* Button added for event tracking */}
      <button className="submit-form-button" type="submit" aria-label="Submit Form" onClick={handleButtonClick} >
        Submit
      </button>
    </div>
  );
};

export default SvgOax;