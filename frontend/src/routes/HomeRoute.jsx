import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]); //ARRAY

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
 
  const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } isFavPhotoExist={ isFavPhotoExist }/>
      <PhotoList photos={props.photos} toggleFav={ toggleFav } favoritePhotos={ favoritePhotos }/>
    </div>
  );
};

export default HomeRoute;
