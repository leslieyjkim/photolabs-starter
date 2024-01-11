import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};



const App = () => {
  // Create an array with 3 elements, all of them are sampleDataForPhotoListItem
  const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {photos.map((photoData, index) => (
        // Pass each item of the array to PhotoListItem as a prop
        <PhotoListItem key={index} data={photoData} />
      ))}
    </div>
  );
};

export default App;
