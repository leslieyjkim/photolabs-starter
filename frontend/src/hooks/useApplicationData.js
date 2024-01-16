import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  GET_PHOTOS_BY_FAVOURITED: 'GET_PHOTOS_BY_FAVOURITED',
  REFETCH_ALL_PHOTOS: 'REFETCH_ALL_PHOTOS',
};

const initialState = {
  displayModal: false,
  favourites: [],
  photoData: [],
  topicData: [],
  topicId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };

  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };

  case ACTIONS.FAV_PHOTO_TOGGLED:
    // eslint-disable-next-line no-case-declarations
    const { selectedPhotoId } = action.payload;
    if (state.favourites.includes(selectedPhotoId)) {
      return {
        ...state,
        favourites: state.favourites.filter(
          (alreadyFavouritedPhotoId) => alreadyFavouritedPhotoId !== selectedPhotoId),
      };
    }
    return { ...state, favourites: [...state.favourites, selectedPhotoId] };

  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    // eslint-disable-next-line no-case-declarations
    const { photo } = action.payload;
    return {
      ...state,
      displayModal: photo,
    };

  case ACTIONS.CLOSE_PHOTO_DETAILS:
    // eslint-disable-next-line no-case-declarations
    const { value } = action.payload;
    return {
      ...state,
      displayModal: value,
    };

  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return {
      ...state,
      photoData: action.payload,
      topicId: action.topicId,
    };

  case ACTIONS.GET_PHOTOS_BY_FAVOURITED:
    // eslint-disable-next-line no-case-declarations
    const favouritedPhotos = state.photoData.filter((photo) =>
      state.favourites.includes(photo.id)
    );
    return {
      ...state,
      photoData: favouritedPhotos,
    };

  case ACTIONS.REFETCH_ALL_PHOTOS:
    return {
      ...state,
    };

  default: throw new Error(`${action.type}`);
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);//
  //updateToFavPhotoIds - Function triggered when the favourite button is clicked.
  const updateToFavPhotoIds = (selectedPhotoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLED, payload: { selectedPhotoId } });
  };
  //setPhotoSelected - Function triggered to select a photo.
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo } });
  };
  //onClosePhotoDetailsModal - Function triggered when the X (close) button is clicked.
  const onClosePhotoDetailsModal = (value) => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, payload: { value } });
  };
  //onLoadTopic - Function triggered when a topic is selected.
  const onLoadTopic = (topicId, data, updateTopicId = true) => {
    if (updateTopicId && topicId !== state.topicId) {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data, topicId });
    }
  };
  //onLoadFavourites - Function triggered when the favourite badge is clicked.
  const onLoadFavourites = () => {
    if (state.favourites.length > 0) {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_FAVOURITED });
    }
  };
  //fetching photo data
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);
  //fetching topic data
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);
  //Make a request to the backend to fetch photos for the specific topic clicked.
  useEffect(() => {
    if (state.topicId === null) {
      fetch('/api/photos')
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        );
    } else {
      const url = `/api/topics/photos/${state.topicId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: ACTIONS.GET_PHOTOS_BY_TOPICS,
            payload: data,
            topicId: state.topicId,
          });
        });
    }
  }, [state.topicId]);


  //onRefetchAllPhotos - Function triggered when the app title is clicked.
  const onRefetchAllPhotos = () => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        const currentFavourites = state.favourites;//state.favourites is an array of photo IDs representing the user's favorite photos.
        const mergedPhotos = data.map((photo) => ({...photo, isFavourite: currentFavourites.includes(photo.id), }));//maps over each photo in the retrieved data array and creates a new array of photos (mergedPhotos)
        //adds an isFavourite property, which is set to true if the photo's id is found in the currentFavourites array (meaning it's a favorite), or false if not.
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: mergedPhotos }); //dispatches an action to update the application's state. It sends a payload of the mergedPhotos array, which includes the original photos from the API response
      });
  };

  return {
    state,
    updateToFavPhotoIds,
    onLoadTopic,
    onLoadFavourites,
    onRefetchAllPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;