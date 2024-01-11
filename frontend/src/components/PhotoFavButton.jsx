import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavourite, onFavouriteClick }) => {
  return (
    <div className='photo-list__fav-icon' onClick={onFavouriteClick}>
      <FavIcon selected={isFavourite} />
    </div>
  );
};

export default PhotoFavButton;