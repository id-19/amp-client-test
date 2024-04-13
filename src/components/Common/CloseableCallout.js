//@flow
import React from 'react';
import styled from 'styled-components';
import { Callout, Button, H4 } from '@blueprintjs/core';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is already installed and configured

type Props = {
  title: string,
  message: string,
  intent: string,
  icon: string,
  visible: boolean,
  handleClose: void => void
}

const CloseableCallout = (props: Props) => {
  const { title, message, intent, icon, visible, handleClose } = props;

  // Modified onClick handler to include Mixpanel event tracking
  const handleButtonClick = () => {
    handleClose();
    Mixpanel.track("Close Callout Clicked", {
      "Intent": intent,
      "Title": title
    });
  }

  return (
    <CalloutBox intent={intent} icon={icon} visible={visible}>
      <H4>
        <TitleBox>
          <H4>{title}</H4>
          <Button minimal icon='cross' onClick={handleButtonClick} className="close-button"/>
          {/* Added className for tracking */}
        </TitleBox>
      </H4>
      {message}
    </CalloutBox>
  )
}

const CalloutBox = styled(Callout)`
  display: ${props => props.visible ? 'block' : 'none'};
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default CloseableCallout