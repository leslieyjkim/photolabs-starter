import React, { useState, useCallback } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//it appears that the class names defined in your Sass file are not matching the class names used in your JSX.
//To apply the Sass styles correctly, you need to ensure that the class names in your JSX match the BEM (Block, Element, Modifier) structured class names in your Sass file.
// Here's how you can update the PhotoListItem.jsx to use the class names defined in the PhotoListItem.scss file:

const PhotoListItem = ({ photoData }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Handler to toggle the favorite status
  const toggleFavoriteStatus = useCallback(() => {
    setIsFavorited(currentState => !currentState);
    // Here you can also perform additional tasks, such as updating the parent state or making an API call
  }, []);

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img className="photo-list__image" src={photoData.imageSource} alt="Sample Photo" />
        <PhotoFavButton isFavourite={isFavorited} updateToFavPhotoIds={toggleFavoriteStatus} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.profile} alt={photoData.username} />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{photoData.username}</span>
          <div className="photo-list__user-location">
            <span className="photo-list__user-city">{photoData.location.city}</span>,
            <span className="photo-list__user-country">{photoData.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
