import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavourite, updateToFavPhotoIds }) => {
  return (
    <div className='photo-list__fav-icon' onClick={updateToFavPhotoIds}>
      <FavIcon selected={isFavourite} />
    </div>
  );
};

export default PhotoFavButton;