import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const FormattedNumber = () => {
  useEffect(() => {
    mixpanel.track("Formatted Number Viewed", {
      "Format Type": "currency",
      "Value": "100",
      "Location": "Product Detail Page"
    });
  }, []);

  return (
    <span className="formatted-number" data-format-type="currency" data-value="100" onClick={() => mixpanel.track("Formatted Number Viewed", { "Format Type": "currency", "Value": "100", "Location": "Product Detail Page" })}>
      {/* Content here */}
    </span>
  );
};

export default FormattedNumber;