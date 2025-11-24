import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014904/1_jdba3o.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014910/2_cf7n5u.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014913/3_il2g2e.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014925/4_krfwlu.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014927/5_gbbimc.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014933/6_m1ukq0.jpg', },


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