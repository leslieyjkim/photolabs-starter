import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({ photo, toggleFav, favoritePhotos, openModal}) => {
  console.log("openModal at PhotoListItem", openModal);
  return (
    <div className="photo-list__item" onClick={()=> openModal(photo)}>
      <div className="photo-list__image-container">
        <img className="photo-list__image" src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} />
        <PhotoFavButton toggleFav={toggleFav} favoritePhotos={favoritePhotos} photoId={photo.id}/>
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={photo.user.name} />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{photo.user.name}</span>
          <div className="photo-list__user-location">
            <span className="photo-list__user-city">{photo.location.city}</span>,
            <span className="photo-list__user-country">{photo.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
