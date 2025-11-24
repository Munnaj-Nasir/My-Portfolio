import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014041/8_hwgxju.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014046/9_kpnfjx.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014044/10_yxxlzn.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014046/11_xcszw0.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014063/24_mkzr6c.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014060/21_jvoerh.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014048/12_v1rjpr.jpg', },

  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014050/13_leolfy.jpg', },

  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014051/14_wqfn0b.jpg', },

  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014053/15_tsvgp5.jpg', },

  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014054/16_hcxicm.jpg', },

  { id: 13, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014055/17_tcdw9o.jpg', },

  { id: 14, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014056/18_zugj7m.jpg', },
  { id: 15, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014059/19_zigjpe.jpg', },

  { id: 16, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014068/23_wjs8fg.jpg', },

  { id: 17, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014069/20_rzrbmz.jpg', },


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