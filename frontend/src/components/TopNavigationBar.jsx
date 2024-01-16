import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({
  topics,
  isFavPhotoExist,
  onLoadTopic,
  onLoadFavourites,
  onRefetchAllPhotos,
}) => {
  const handleClick = () => {
    onRefetchAllPhotos();//ref.useApplicationData.js
  };

  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo' onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
        onLoadFavourites={onLoadFavourites}
      />
    </div>
  );
};

export default TopNavigationBar;