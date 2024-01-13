import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


const HomeRoute = ({ topics, photos, setDisplayModal, displayModal, photoListInfo }) => {

  const isFavPhotoExist = photoListInfo.favoritePhotos.length > 0;
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist }/>
      <PhotoList
        photos={ photos }
        toggleFav={ photoListInfo.toggleFav }
        favoritePhotos={ photoListInfo.favoritePhotos }
        setSelectedPhoto={ photoListInfo.setSelectedPhoto }
        openModal={ photoListInfo.openModal }/>
    </div>
  );
};

export default HomeRoute;
