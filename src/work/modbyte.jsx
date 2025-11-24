import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014831/6_feq494.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014834/7_eqrcns.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014840/12_wy4nlr.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014837/8_omoscj.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014839/11_ebufvg.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014847/13_m2abx7.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014852/14_havbog.jpg', },


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