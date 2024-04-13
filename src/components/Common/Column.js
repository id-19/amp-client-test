import React from 'react';
import styled from 'styled-components';
import mixpanel from 'mixpanel-browser';

export default styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ColumnSpaceAround = styled.div`
  display: flex;
  flex-direction: column;
`;

// Assuming the interactive elements are part of a React component
const InteractiveElements = () => {
  const handleFormSubmission = () => {
    mixpanel.track("Form Submission", {
      "Form Type": "Registration",
      "Success": "True"
    });
  };

  const handlePromoVideoClick = () => {
    mixpanel.track("Promo Video Click", {
      "Video Title": "Summer Sale",
      "Clicked From": "HomePage"
    });
  };

  return (
    <div>
      <button className="submit-button" type="button" action="submit" onClick={handleFormSubmission}>
        Submit
      </button>
      <img className="promo-video-thumbnail" src="url-to-thumbnail" alt="Promotional Video Thumbnail" onClick={handlePromoVideoClick} />
    </div>
  );
};

export default InteractiveElements;