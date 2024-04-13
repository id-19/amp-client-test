import React from 'react';
import SvgClam from './SvgClam'; // Adjust the import path as necessary
import mixpanel from 'mixpanel-browser'; // Assuming mixpanel is initialized elsewhere in the application

// Example Button Component that uses SvgClam and tracks clicks
const FavoriteButton = () => {
  const trackFavorite = () => {
    mixpanel.track('Favorite Added', {
      Item: 'Clam Icon',
      Action: 'Add to Favorites'
    });
  };

  return (
    <button type="button" onClick={trackFavorite}>
      <SvgClam />
    </button>
  );
};

export default FavoriteButton;