import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import photos from './mocks/photos';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFav = (photoId) => {
    setFavoritePhotos((previousFavorite) => {
      const isFavorite = previousFavorite.includes(photoId);
      if (isFavorite) {
        return previousFavorite.filter((id) => id !== photoId);
      } else {
        return [...previousFavorite, photoId];
      }
    });
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  const photoListInfo = { toggleFav, favoritePhotos, setSelectedPhoto, openModal };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal} displayModal={displayModal} photoListInfo={photoListInfo} />
      {displayModal && <PhotoDetailsModal photo={selectedPhoto} closeModal={() => setDisplayModal(false)} photoListInfo={photoListInfo} />}
    </div>
  );
};

export default App;
