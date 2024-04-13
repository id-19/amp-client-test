import React, { Component } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN");

class App extends Component {
  trackEvent = (eventName, properties) => {
    mixpanel.track(eventName, properties);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" onClick={() => this.trackEvent("Logo Interaction", {Action: "Viewed or Clicked"})} />
          <h1 className="App-title" onMouseEnter={() => this.trackEvent("Title Interaction", {Action: "Viewed"})}>
            <FormattedMessage {...messages.title} />
          </h1>
        </header>
        <p className="App-intro" onClick={() => this.trackEvent("Intro Text Interaction", {Action: "Read or Clicked"})} onMouseEnter={() => this.trackEvent("Intro Text Interaction", {Action: "Read or Clicked"})}>
          <FormattedMessage {...messages.introduction} values={{ code: <code>src/App.js</code> }} />
        </p>
      </div>
    );
  }
}

export default App;

const messages = defineMessages({
  title: {
    id: 'app.title',
    description: 'Title of the Application',
    defaultMessage: 'Welcome to React',
  },
  introduction: {
    id: 'app.introduction',
    description: 'Description of the Application',
    defaultMessage: 'To get started, edit {code} and save to reload.',
  },
});