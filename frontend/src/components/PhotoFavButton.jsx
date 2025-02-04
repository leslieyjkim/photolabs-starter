import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//prevIsFavorited는 이전의 isFavorited 상태 값을 나타냅니다.
// !prevIsFavorited는 이전 상태의 부정(not)을 의미합니다.
// 즉, isFavorited가 true였다면 false로, false였다면 true로 바꾸는 것입니다.
// setIsFavorited 함수에 이러한 콜백 함수를 전달함으로써, 상태를 안전하게 업데이트합니다.
// 이 방법은 현재 상태에 기반하여 다음 상태를 결정할 때 유용합니다.

const PhotoFavButton = ({ isFavourite, updateToFavPhotoIds }) => {
  return (
    <div className='photo-list__fav-icon' onClick={updateToFavPhotoIds}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};
  
export default PhotoFavButton;