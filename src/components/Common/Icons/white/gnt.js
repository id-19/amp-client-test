import React from 'react';
import SvgGnt from './SvgGnt'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser'; // Hypothetical parent component that uses SvgGnt within a button

class FormSubmitButton extends React.Component {
  trackFormSubmission = () => {
    mixpanel.track("Form Submission", {
      "Form ID": "ID or name of the form",
      "Form Purpose": "Purpose of the form, e.g., 'Newsletter Signup'",
      "Icon Used": "SvgGnt"
    });
  };

  render() {
    return (
      <button type="submit" onClick={this.trackFormSubmission}>
        <SvgGnt width={64} height={64} />
        Submit
      </button>
    );
  }
}

export default FormSubmitButton;