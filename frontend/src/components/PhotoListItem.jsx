import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({
  photo,
  name,
  imageSource,
  location,
  profile,
  isFavourite,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {
  const handleClick = () => {
    if (typeof setPhotoSelected === 'function') {
      setPhotoSelected(photo);
    }
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton isFavourite={isFavourite} updateToFavPhotoIds={updateToFavPhotoIds} />
      <img className='photo-list__image' src={imageSource} alt="selected photo" onClick={handleClick} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} alt="photographer's photo"/>
        <div className='photo-list__user-info'> {name}
          <div className='photo-list__user-location'> {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
