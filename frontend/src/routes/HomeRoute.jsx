import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const [favorite, setFavorite] = useState([]);

  const toggleFav = (photoId) => {
    setFavorite((previousFavorite) => {
      const isFavorite = previousFavorite.includes(photoId);
      if (isFavorite) {
        return previousFavorite.filter((id) => id !== photoId);
      } else {
        return [...previousFavorite, photoId];
      }
    });
  };
 
  const isFavPhotoExist = favorite.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } isFavoriteExist={ isFavPhotoExist }/>
      <PhotoList photos={props.photos} toggleFav={ toggleFav } favorite={ favorite }/>
    </div>
  );
};

export default HomeRoute;
