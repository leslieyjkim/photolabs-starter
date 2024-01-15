import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ photo, closeModal, photoListInfo}) => {
  console.log('photo', photo);
  console.log('photoListInfo', photoListInfo);
  if (!photo) return null;
  
  const selectedSimilar = function() {
    return (<PhotoList
      photos={ Object.values(photo.similarPhotos) }
      toggleFav={ photoListInfo.toggleFav }
      favoritePhotos={ photoListInfo.favoritePhotos }
      openModal={ photoListInfo.openModal }/>);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={ photo.urls.regular } alt="selected photo"></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={ photo.user.profile } alt="photographer's photo"></img>
          <div className="photo-list__user-info">
            <span>{ photo.user.name }</span>
            <div className="photo-list__user-location">
              { photo.location.city }, { photo.location.country }
            </div>
          </div>
        </div>
        <p className="photo-details-modal__related-title">Related Photos</p>
        <div className="photo-details-modal__similarphoto-list">{selectedSimilar()}</div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
