import React from 'react';
import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary

// Define the data array for the gallery
const imageListForApp = [
  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013254/8_ufck6r.jpg', },
  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013256/9_uwgh06.jpg', },
  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013254/11_qdpy1j.jpg', },
  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013253/10_v7etnk.jpg', },
  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013257/12_jizr2s.jpg', },
  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013257/13_xaay8v.jpg', },
  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013258/14_k2wir8.jpg', },
  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013259/15_alcqgf.jpg', },
  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013262/17_boqrld.jpg', },
  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013263/16_qjorr7.jpg', },
  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013264/18_xly4x9.jpg', },
  { id: 13, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013269/21_pbicy4.jpg', },
  { id: 14, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013273/22_cnezp7.jpg', },

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