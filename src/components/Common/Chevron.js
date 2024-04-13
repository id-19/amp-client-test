import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import Mixpanel from 'mixpanel';

const Chevron = styled(Icon).attrs({
  icon: props => (props.direction === `asc` ? `chevron-up` : `chevron-down`),
})`
  cursor: pointer;
`;

const TrackedChevron = ({ direction, ...props }) => {
  const handleClick = () => {
    const eventProperties = {
      Direction: direction,
      Context: "Sorting",
    };
    Mixpanel.track("Chevron Clicked", eventProperties);
  };

  return <Chevron direction={direction} onClick={handleClick} {...props} />;
};

export default TrackedChevron;