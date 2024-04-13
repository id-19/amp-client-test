import styled from 'styled-components';
import { space, width, height, } from 'styled-system';
import Colors from './Colors';
import { Button } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser';

mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

// Higher-order component to wrap the Button component for event tracking
const withTracking = (WrappedComponent, eventName, eventProperties) => props => {
  const handleClick = () => {
    // Track the event using Mixpanel
    mixpanel.track(eventName, eventProperties);
    // If there's an onClick prop already, call it
    if (props.onClick) {
      props.onClick();
    }
  };
  return <WrappedComponent {...props} onClick={handleClick} />;
};

export const BlueGlowingButton = styled(withTracking(Button, "Primary Action", { "Button Color": "Blue", "Action": "Submit" }))`
  ${space}
  ${width}
  ${height}
  box-shadow: ${"0 3px 20px " + Colors.BLUE1 + "!important;"}
  &:hover {
    background-color: ${Colors.BLUE5}
    box-shadow: ${"0 3px 20px " + Colors.BLUE5 + "!important;"}
  }
`;

export const GreenGlowingButton = styled(withTracking(Button, "Success Action", { "Button Color": "Green", "Action": "Success" }))`
  ${space}
  ${width}
  ${height}
  box-shadow: ${"0 3px 20px " + Colors.GREEN1 + "!important;"}
  &:hover {
    background-color: ${Colors.GREEN5}
    box-shadow: ${"0 3px 20px " + Colors.GREEN5 + "!important;"}
  }
`;

export const RedGlowingButton = styled(withTracking(Button, "Danger Action", { "Button Color": "Red", "Action": "Delete" }))`
  ${space}
  ${width}
  ${height}
  box-shadow: ${"0 3px 20px " + Colors.RED1 + "!important;"}
  &:hover {
    background-color: ${Colors.RED5}
    box-shadow: ${"0 3px 20px " + Colors.RED5 + "!important;"}
  }
`;