import React, {useState} from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({ topics, photos, setDisplayModal, displayModal}) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]); //ARRAY
  // console.log("favoritePhotos:", favoritePhotos);

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
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  const photoListInfo = {'toggleFav':toggleFav, 'favoritePhotos':favoritePhotos, 'selectedPhoto':selectedPhoto, 'openModal':openModal};
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist }/>
      <PhotoList photos={ photos } toggleFav={ toggleFav } favoritePhotos={ favoritePhotos } setSelectedPhoto={ setSelectedPhoto } openModal={ openModal }/>
      { displayModal && <PhotoDetailsModal photo={ selectedPhoto } closeModal={ closeModal } photoListInfo={photoListInfo}/>}
    </div>
  );
};

export default HomeRoute;
