import React from 'react';
import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary

// Define the data array for the gallery
const imageListForApp = [
  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013626/24_dgojke.jpg', },
  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013572/16_xshwzq.jpg', },
  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013572/17_unbjna.jpg', },
  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013573/18_c1jqas.jpg', },
  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013619/19_cdx61p.jpg', },
  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013620/20_f92rzr.jpg', },
  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013622/21_ts4cop.jpg', },
  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013623/22_vhfalx.jpg', },
  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013624/23_daclji.jpg', },
  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013627/26_aorsbb.jpg', },
];

const App = () => {
  return (
    <div className="App">
      {/* 💡 Pass the data array to the component via the 'images' prop */}
      <VerticalGallery images={imageListForApp} />
    </div>
  );
};

export default App;         