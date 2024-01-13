import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photo, closeModal, photoListInfo}) => {
  console.log('photo', photo);
  console.log('photoListInfo', photoListInfo);  // do not place console.log at the return part.
  if (!photo) return null;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={ photo.urls.regular }></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={ photo.user.profile }></img>
          <div className="photo-list__user-info">
            <span>{ photo.user.name }</span>
            <div className="photo-list__user-location">
              { photo.location.city }, { photo.location.country }
            </div>
          </div>
          <PhotoList photos={ Object.values(photo.similarPhotos) } toggleFav={ photoListInfo.toggleFav } favoritePhotos={ photoListInfo.favoritePhotos } setSelectedPhoto={ photoListInfo.setSelectedPhoto } openModal={ photoListInfo.openModal }/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
