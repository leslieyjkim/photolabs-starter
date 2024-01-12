import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleFav={props.toggleFav}
            favorite={props.favorite} />);
      }
      )}
    </ul>
  );
};

export default PhotoList;
