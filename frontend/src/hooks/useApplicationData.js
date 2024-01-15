// ref : https://web.compass.lighthouselabs.ca/p/4/days/w07d5/activities/2724
// background: by using custom hook concept, separate hook generation from App.jsx
// expected outcome:
// 1. implement major 4 outputs : state(objec), updateToFavPhotoIds(action), setPhotoSelected(action), onClosePhotoDetailsModal(action)
// 2. at the App.jsx, use this implementation -> const {xxx,xxx} = useApplicationData();
// 3. from this file, export default useApplicationData

import {photo2, photo3, photo4, photo5} from '../mocks/photos';
import { useState } from "react";

const useApplicationData = function() {

  const dummyPhotos = {photo2, photo3, photo4, photo5}; // TODO : later remove this, without this user cannot select photo from Modal window.

  const [displayModal, setDisplayModal] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const state = {"displayModal":displayModal, "favoritePhotos":favoritePhotos, "selectedPhoto":selectedPhoto};

  const updateToFavPhotoIds = (photoId) => {
    setFavoritePhotos((previousFavorite) => {
      const isFavorite = previousFavorite.includes(photoId);
      if (isFavorite) {
        return previousFavorite.filter((id) => id !== photoId);
      } else {
        return [...previousFavorite, photoId];
      }
    });
  };

  const setPhotoSelected = (photo) =>{
    // same function as openModal
    setSelectedPhoto(photo);
    setDisplayModal(true);
    if (!('similarPhotos' in photo)) {
      photo['similarPhotos'] = dummyPhotos;
    }
  };

  const onClosePhotoDetailsModal = () => {
    // same function as closeModal
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;