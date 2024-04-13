import React from 'react';
import GasSettingsRenderer from './GasSettingsRenderer';
import mixpanel from 'mixpanel-browser';

type State = {
  visible: boolean,
};

type Props = {
  gas: string,
  requiredGas: string,
  gasPrice: string,
  handleChange: (SyntheticInputEvent<>) => void,
};

class GasSettings extends React.PureComponent<Props, State> {
  state = {
    visible: false
  };

  toggleVisible = e => {
    const newVisibility = !this.state.visible;
    this.setState({ visible: newVisibility });
    // Mixpanel event tracking for visibility toggle
    mixpanel.track("Toggle Gas Settings Visibility", {
      "Visible": newVisibility ? "True" : "False"
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let eventName = '';
    let eventProperties = {};
    switch(name) {
      case 'gasInput':
        eventName = 'Gas Input Changed';
        eventProperties = { "New Gas Value": value };
        break;
      case 'gasPriceInput':
        eventName = 'Gas Price Input Changed';
        eventProperties = { "New Gas Price": value };
        break;
      case 'requiredGasInput':
        eventName = 'Required Gas Input Changed';
        eventProperties = { "New Required Gas": value };
        break;
      default:
        // Handle unexpected inputs gracefully
        return;
    }
    // Mixpanel event tracking for input changes
    mixpanel.track(eventName, eventProperties);
  };

  render() {
    const { visible } = this.state;
    const { gas, gasPrice, requiredGas, handleChange } = this.props;
    return (
      <GasSettingsRenderer
        visible={visible}
        gas={gas}
        gasPrice={gasPrice}
        requiredGas={requiredGas}
        handleChange={this.handleInputChange}
        toggleVisible={this.toggleVisible}
      />
    );
  }
}

export default GasSettings;