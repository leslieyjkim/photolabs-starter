// expected outcome:
// 1. implement major 4 outputs : state(objec), updateToFavPhotoIds(action), setPhotoSelected(action), onClosePhotoDetailsModal(action)
// 2. at the App.jsx, use this implementation -> const {xxx,xxx} = useApplicationData();
// 3. from this file, export default useApplicationData

// import {photo2, photo3, photo4, photo5} from '../mocks/photos';
// import { useState } from "react";

// const useApplicationData = function() {

//   const dummyPhotos = {photo2, photo3, photo4, photo5};

//   const [displayModal, setDisplayModal] = useState(false);
//   const [favoritePhotos, setFavoritePhotos] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const state = {"displayModal":displayModal, "favoritePhotos":favoritePhotos, "selectedPhoto":selectedPhoto};

//   const updateToFavPhotoIds = (photoId) => {
//     setFavoritePhotos((previousFavorite) => {
//       const isFavorite = previousFavorite.includes(photoId);
//       if (isFavorite) {
//         return previousFavorite.filter((id) => id !== photoId);
//       } else {
//         return [...previousFavorite, photoId];
//       }
//     });
//   };

//   const setPhotoSelected = (photo) =>{
//     // same function as openModal
//     setSelectedPhoto(photo);
//     setDisplayModal(true);
//     if (!('similarPhotos' in photo)) {
//       photo['similarPhotos'] = dummyPhotos;
//     }
//   };

//   const onClosePhotoDetailsModal = () => {
//     // same function as closeModal
//     setSelectedPhoto(null);
//     setDisplayModal(false);
//   };

//   return {
//     state,
//     updateToFavPhotoIds,
//     setPhotoSelected,
//     onClosePhotoDetailsModal
//   };
// };

import { useReducer } from 'react';

const initialState = {
  displayModal: false,
  favoritePhotos: [],
  selectedPhoto: null,
};

const reducer = (state, action) =>  {
  switch (action.type) {
  case 'ADD_FAVORITE_PHOTO':
    return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload] };
  case 'REMOVE_FAVORITE_PHOTO':
    return { ...state, favoritePhotos: state.favoritePhotos.filter(photoId => photoId !== action.payload) };
  case 'SELECT_PHOTO':
    return { ...state, selectedPhoto: action.payload, displayModal: true };
  case 'CLOSE_MODAL':
    return { ...state, selectedPhoto: null, displayModal: false };
  default:
    return state;
  }
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    const actionType = state.favoritePhotos.includes(photoId) ? 'REMOVE_FAVORITE_PHOTO' : 'ADD_FAVORITE_PHOTO';
    dispatch({ type: actionType, payload: photoId });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;