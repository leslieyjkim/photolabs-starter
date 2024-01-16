import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, onLoadFavourites }) => { //isFavPhotoExist - Indicates if any favourited photos exist
  const handleClick = () => {
    onLoadFavourites(isFavPhotoExist); //onLoadFavourites - Function triggered when the favourite badge is clicked
  };

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;