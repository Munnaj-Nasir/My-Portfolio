import React from 'react';

import VerticalGallery from './VerticalGallery.jsx'; // Adjust path if necessary



// Define the data array for the gallery

const imageListForApp = [

  { id: 1, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013009/8_rj2k1q.jpg', },

  { id: 13, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013008/9_uw9f3w.jpg', },

  { id: 3, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013012/10_yhwqdv.jpg', },

  { id: 4, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013009/11_ve08jk.jpg', },

  { id: 5, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013009/12_bkzjzu.jpg', },

  { id: 6, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013010/14_bffdre.jpg', },

  { id: 7, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013010/13_h8ezso.jpg', },

  { id: 8, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013013/15_sahukv.jpg', },

  { id: 10, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013019/17_p8mnyn.jpg', },

  { id: 11, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013020/18_vcsdzv.jpg', },

  { id: 12, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013021/21_aekddv.jpg', },

  { id: 2, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013021/19_khvr2r.jpg', },

  { id: 14, url: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013022/20_d4wnkb.jpg', },



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