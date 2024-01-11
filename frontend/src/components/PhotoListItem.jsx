import React from "react";
import "../styles/PhotoListItem.scss";

//it appears that the class names defined in your Sass file are not matching the class names used in your JSX.
//To apply the Sass styles correctly, you need to ensure that the class names in your JSX match the BEM (Block, Element, Modifier) structured class names in your Sass file.
// Here's how you can update the PhotoListItem.jsx to use the class names defined in the PhotoListItem.scss file:

const PhotoListItem = ({data}) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={data.imageSource} alt="Sample Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.profile} alt={data.username} />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{data.username}</span>
          <div className="photo-list__user-location">
            <span className="photo-list__user-city">{data.location.city}</span>,
            <span className="photo-list__user-country">{data.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
