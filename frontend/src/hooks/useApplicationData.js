import { useReducer, useEffect } from 'react';

const initialState = {
  displayModal: false,
  favoritePhotos: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
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