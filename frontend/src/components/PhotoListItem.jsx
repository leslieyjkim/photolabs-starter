import React from "react";
import "../styles/PhotoListItem.scss";




const PhotoListItem = ({data}) => {
  return (
    <div className="photo-list-item">
      <img className="photo" src={data.imageSource} alt="Sample Photo" />
      <div className="user-info">
        <img src={data.profile} alt={data.username} />
        <span className="username">{data.username}</span>
      </div>
      <div className="location-info">
        <span className="city">{data.location.city}</span>,
        <span className="country">{data.location.country}</span>
      </div>
    </div>
  );
};

export default PhotoListItem;
