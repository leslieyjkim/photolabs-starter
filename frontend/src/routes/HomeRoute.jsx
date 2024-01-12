import React, {useState} from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({ topics, photos }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]); //ARRAY
  // console.log("favoritePhotos:", favoritePhotos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFav = (photoId) => {
    setFavoritePhotos((previousFavorite) => {
      console.log("previousFavorite:", previousFavorite);
      const isFavorite = previousFavorite.includes(photoId);
      if (isFavorite) {
        return previousFavorite.filter((id) => id !== photoId);
      } else {
        return [...previousFavorite, photoId];
      }
    });
  };

  const isFavPhotoExist = favoritePhotos.length > 0;

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = (photo) => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };


  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist }/>
      <PhotoList photos={ photos } toggleFav={ toggleFav } favoritePhotos={ favoritePhotos } openModal={ openModal }/>
      { isModalOpen && <PhotoDetailsModal photo={ selectedPhoto } closeModal={ closeModal }/>}
    </div>
  );
};

export default HomeRoute;
