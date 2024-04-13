import React from 'react';
import { Button, Collapse, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly installed and configured

type Props = {
  visible: boolean,
  gas: string,
  gasPrice: string,
  toggleVisible: (SyntheticEvent<>) => void,
  handleChange: (SyntheticInputEvent<>) => void,
};

const GasSettingsRenderer = (props: Props) => {
  const { visible, gas, gasPrice, handleChange, toggleVisible } = props;

  // Enhanced toggleVisible to include Mixpanel tracking
  const handleToggleVisible = (e) => {
    toggleVisible(e);
    Mixpanel.track("Gas Settings Visibility Toggled", {
      "Visible": !visible
    });
  };

  // Enhanced handleChange to include Mixpanel tracking, differentiated by name
  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    if (name === 'customGas') {
      Mixpanel.track("Gas Value Changed", {
        "Gas": value
      });
    } else if (name === 'customGasPrice') {
      Mixpanel.track("Gas Price Value Changed", {
        "Gas Price": value
      });
    }
  };

  return (
    <div>
      <Button minimal text="Show Gas Settings" onClick={handleToggleVisible} />
      <Collapse isOpen={visible}>
        <InputGroupBox>
          <InputGroup type="number" placeholder="Gas" name="customGas" value={gas || ''} onChange={handleInputChange} />
        </InputGroupBox>
        <InputGroupBox>
          <InputGroup type="number" placeholder="Gas Price" name="customGasPrice" value={gasPrice || ''} onChange={handleInputChange} />
        </InputGroupBox>
      </Collapse>
    </div>
  );
};

const InputGroupBox = styled.div`
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export default GasSettingsRenderer;