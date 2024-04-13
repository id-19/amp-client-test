import React, { useEffect } from 'react';
import { SvgIcon } from '../../components/Common';
import styled from 'styled-components';
import mixpanel from 'mixpanel-browser';

const ConnectionStatus = (props: Props) => {
  const { isConnected, isInitiated, } = props;

  useEffect(() => {
    mixpanel.track("Connection Status Change", {
      "Status": isConnected ? 'Connected' : isInitiated ? 'Disconnected' : 'Initializing',
      "Icon": "connect-signal",
      "Intent": isConnected ? 'success' : isInitiated ? 'error' : 'warning',
    });
  }, [isConnected, isInitiated]);

  return (
    <ConnectionStatusBox>
      <SvgIcon width="20px" icon="connect-signal" intent={isConnected ? 'success' : isInitiated ? 'error' : 'warning'} />
      <span>{isConnected ? 'Connected' : isInitiated ? 'Disconnected' : 'Initializing'}</span>
    </ConnectionStatusBox>
  )
}

const ConnectionStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    margin-left: 10px;
    margin-right: 30px;
  }
`

export default ConnectionStatus