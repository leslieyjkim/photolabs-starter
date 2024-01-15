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
  case 'SET_PHOTO_DATA':
    return { ...state, photoData: action.payload };
  case 'SET_TOPIC_DATA':
    return { ...state, topicData: action.payload };
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

  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PHOTO_DATA', payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_TOPIC_DATA', payload: data }));
  }, []);



  const updateToFavPhotoIds = (photoId) => {
    try {
      const actionType = state.favoritePhotos.includes(photoId) ? 'REMOVE_FAVORITE_PHOTO' : 'ADD_FAVORITE_PHOTO';
      dispatch({ type: actionType, payload: photoId });
    } catch (error) {
      console.error('Error updating favorite photo IDs:', error);
    }
  };

  const setPhotoSelected = (photo) => {
    try {
      dispatch({ type: 'SELECT_PHOTO', payload: photo });
    } catch (error) {
      console.error('Error setting selected photo:', error);
    }
  };

  const onClosePhotoDetailsModal = () => {
    try {
      dispatch({ type: 'CLOSE_MODAL' });
    } catch (error) {
      console.error('Error closing photo details modal:', error);
    }
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;