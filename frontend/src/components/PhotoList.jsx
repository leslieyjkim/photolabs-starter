import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFav, favoritePhotos, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleFav={toggleFav}
            favoritePhotos={favoritePhotos}
            openModal={openModal}/>);
      }
      )}
    </ul>
  );
};

export default PhotoList;
