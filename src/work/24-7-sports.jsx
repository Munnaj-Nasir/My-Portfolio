import React from 'react';
import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary

// Define the data array for the gallery
const imageListForApp = [
  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012498/1_eamag0.jpg', },
  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012498/3_tgwgtj.jpg', },
  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012498/2_tn1mxc.jpg', },
  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012499/5_mzklqa.jpg', },
  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012499/4_wvuoo0.jpg', },
  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012499/6_jjeyt4.jpg', },
  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012498/2_tn1mxc.jpg', },
  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012503/8_z8huuu.jpg', },
  { id: 9, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012506/9_d6wryq.jpg', },
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