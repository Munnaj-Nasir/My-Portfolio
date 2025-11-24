import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014409/10_drliu1.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014288/9_kthaqj.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014413/12_uxfvfc.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014414/13_lxouzm.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014422/17_d1jeas.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014411/11_bpnx2t.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014415/14_kedkze.jpg', },

  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014417/15_jpxawt.jpg', },

  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014419/16_ctidlb.jpg', },

  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014421/18_rgjkwn.jpg', },

  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014422/19_zdvtyv.jpg', },

  { id: 13, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014424/20_ihezed.jpg', },

  { id: 14, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014425/21_ilwwyj.jpg', },
  { id: 15, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014427/22_dscyie.jpg', },
  { id: 16, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014431/24_aoukx6.jpg', },
  { id: 17, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014432/25_do2hb5.jpg', },
  { id: 18, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764014429/23_cb3msz.jpg', },





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