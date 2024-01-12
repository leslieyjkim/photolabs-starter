import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, setDisplayModal }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(false)}>
        <img src={closeSymbol} alt="Close symbol" />
      </button>
      <div className="photo-details-content">
        <img src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} />
        {/* Add more photo details here as needed */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;