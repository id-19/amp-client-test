import React from 'react';
import Mixpanel from 'mixpanel-browser';
import SvgBrd from './SvgBrd';

class ParentComponent extends React.Component {
  trackSubmitButtonClick = () => {
    Mixpanel.track('Submit Button Clicked', {
      "Location": "Form Name or ID",
      "Icon Used": "SVG BRD",
      "Action": "Submit"
    });
  }

  render() {
    return (
      <button className="submit-button" type="submit" form="Assumed form ID here" onClick={this.trackSubmitButtonClick}>
        <SvgBrd width={64} height={64} />
      </button>
    );
  }
}

export default ParentComponent;