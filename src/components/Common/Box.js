import styled from 'styled-components';
import { space, width, fontSize, color, textAlign, lineHeight, fontWeight, letterSpacing, alignItems, alignContent, justifyContent, flexBasis, flexDirection, flex, flexWrap, justifyItems, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, border, justifySelf, alignSelf, textColor, bgColor, fontFamily, fontStyle, height, maxHeight, minHeight, sizeHeight, display, size, verticalAlign, } from 'styled-system';
import { Divider } from '@blueprintjs/core';
import { Devices } from './Variables';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_TOKEN"); // Initialize Mixpanel with your project token

export const Box = styled.div.attrs(props => ({
  onClick: () => {
    mixpanel.track("Content Interaction", {
      "Type": "Click",
      "Component": "Box",
      "Responsive State": props.hideOnMobile ? "Mobile" : props.hideOnTablet ? "Tablet" : "Desktop",
    });
  }
}))`
  ${space}
  ${width}
  ${height}
  ${color}
  @media ${Devices.mobileS} {
    ${props => props.hideOnMobileS && "display: none !important;"}
  }
  @media ${Devices.mobileM} {
    ${props => props.hideOnMobileM && "display: none !important;"}
  }
  @media ${Devices.mobileL} {
    ${props => props.hideOnMobile && "display: none !important;"}
  }
  @media ${Devices.tablet} {
    ${props => props.hideOnTablet && "display: none !important;"}
  }
`;

export const FlexItem = styled.div.attrs(props => ({
  onClick: () => {
    mixpanel.track("Content Interaction", {
      "Type": "Click",
      "Component": "FlexItem",
      "Responsive State": props.hideOnMobile ? "Mobile" : props.hideOnTablet ? "Tablet" : "Desktop",
    });
  }
}))`
  ${flex}
  ${justifySelf}
  ${alignSelf}
`;

export const DividerBox = styled(Divider).attrs({
  onClick: () => {
    mixpanel.track("Divider Interaction", {
      "Type": "Click",
      "Purpose": "Navigation or Aesthetic",
      "Location": "Between specific content sections",
    });
  }
})`
  ${space}
  ${width}
  ${height}
  ${color}
`;
// Other components remain unchanged