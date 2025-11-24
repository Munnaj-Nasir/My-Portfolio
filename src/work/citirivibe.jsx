import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013747/8_infwga.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013774/9_zdq6hq.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013771/11_rqn3m7.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013773/12_fnrhsx.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013777/15_c2cktg.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013776/14_vxie8e.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013774/13_rzhn8a.jpg', },

  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013779/16_jlbnwc.jpg', },

  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013780/17_ku7jpe.jpg', },

  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013781/18_pxvtty.jpg', },

  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013782/19_ehswtg.jpg', },

  { id: 13, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013784/20_a8wzvz.jpg', },

  { id: 14, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013785/21_a3xjzr.jpg', },

  { id: 15, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013786/22_b5ake0.jpg', },

  { id: 16, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013789/25_yiwc9w.jpg', },

  { id: 17, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013791/26_l7ez8h.jpg', },
  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013788/23_vxaffk.jpg', },




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