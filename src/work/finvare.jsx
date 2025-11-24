import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014537/f2_x2bu2d.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014589/f11_k2xjsh.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014525/F1_usgvkh.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014547/f4_zp3cil.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014543/f3_ofjnya.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014565/f6_zm7zem.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014551/f5_uw49cy.jpg', },

  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014566/f7_vmkdbz.jpg', },

  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014572/f8_mg57yd.jpg', },

  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014577/f9_emfztn.jpg', },

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