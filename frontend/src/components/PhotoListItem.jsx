import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//it appears that the class names defined in your Sass file are not matching the class names used in your JSX.
//To apply the Sass styles correctly, you need to ensure that the class names in your JSX match the BEM (Block, Element, Modifier) structured class names in your Sass file.
// Here's how you can update the PhotoListItem.jsx to use the class names defined in the PhotoListItem.scss file:



const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img className="photo-list__image" src={props.photo.urls.regular} alt={`Photo by ${props.photo.user.name}`} />
        <PhotoFavButton />
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
