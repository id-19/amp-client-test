import React from 'react';
import { AutoSizer } from 'react-virtualized';
import mixpanel from 'mixpanel-browser';

function AutoScaler({ minHeight, minWidth, ratio, children }) {
  return (
    <AutoSizer>
      {({ width, height }) => {
        // Trigger Mixpanel event tracking
        mixpanel.track("AutoScaler Rendered", {
          "Width": width,
          "Height": height,
          "Device Pixel Ratio": window.devicePixelRatio || 1,
        });
        return children({ width, height, ratio });
      }}
    </AutoSizer>
  );
}

AutoScaler.defaultProps = {
  minHeight: 1,
  minWidth: 1,
  ratio: window.devicePixelRatio || 1,
};

export default AutoScaler;