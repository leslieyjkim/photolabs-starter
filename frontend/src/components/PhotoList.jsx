import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => (<PhotoListItem key={photo.id + index} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
