//@flow
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Spinner } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser';

type Props = {
  visible: boolean,
  transparent: boolean,
};

const SpinnerContainer = ({ transparent, visible }: Props) => {
  useEffect(() => {
    // Only track the event when the spinner is visible
    if (visible) {
      mixpanel.track("Spinner Displayed", {
        "Transparent": transparent ? "Yes" : "No", // Convert boolean to a more readable format
        "Context": "Loading"
      });
    }
  }, [visible, transparent]); // This effect depends on changes to visible and transparent props

  return (
    <Wrapper visible={visible} transparent={transparent}>
      <Spinner large intent="primary" />
    </Wrapper>
  );
};

// height, width, top, left have slightly fixed values to cover dark lines
// that appear on the edges.
const Wrapper = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')}
  opacity: ${props => (props.transparent ? 0.95 : 1)};
  background-color: ${Colors.DARK_GRAY4};
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  z-index: 100;
`;

export default SpinnerContainer;