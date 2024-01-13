import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal}) => {
  if (!photo) return null;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-content">
        <img src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
