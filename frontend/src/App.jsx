import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import photos from './mocks/photos';




const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default App;
