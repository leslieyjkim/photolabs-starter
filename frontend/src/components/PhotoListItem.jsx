import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img className="photo-list__image" src={props.photo.urls.regular} alt={`Photo by ${props.photo.user.name}`} />
        <PhotoFavButton toggleFav={props.toggleFav} favorite={props.favorite} photoId={props.photo.id}/>
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} alt={props.photo.user.name} />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{props.photo.user.name}</span>
          <div className="photo-list__user-location">
            <span className="photo-list__user-city">{props.photo.location.city}</span>,
            <span className="photo-list__user-country">{props.photo.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
