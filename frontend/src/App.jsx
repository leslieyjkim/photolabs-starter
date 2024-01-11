import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';



const App = () => {
  // Create an array with 3 elements, all of them are sampleDataForPhotoListItem
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);
  // const photos = [...Array(3)].map(() => sampleDataForPhotoListItem);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
