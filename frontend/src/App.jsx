import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import {photos} from './mocks/photos';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const photoListInfo = { toggleFav:updateToFavPhotoIds, favoritePhotos:state.favoritePhotos, openModal:setPhotoSelected};

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} photoListInfo={photoListInfo} />
      {state.displayModal && <PhotoDetailsModal photo={state.selectedPhoto} closeModal={onClosePhotoDetailsModal} photoListInfo={photoListInfo} />}
    </div>
  );
};

export default App;