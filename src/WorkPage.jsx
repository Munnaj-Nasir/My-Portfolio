import React from 'react';
// ⚠️ Assuming FlowingMenu uses React Router's <Link> internally
import FlowingMenu from './components/FlowingMenu.jsx';
import FooterSection from './components/FooterSection.jsx';

// 🛠️ FIX 1: Import the SplitText component
import SplitText from "./components/SplitText.jsx";
// 🛠️ FIX 2: Import the project data (assuming you named the file projectData.js)
// import './WorkPage.css'; // Don't forget to create this CSS file!

// 🛠️ FIX 3: Define the missing function
const handleAnimationComplete = () => {
  console.log('SplitText animation complete on Works Page!');
};

// 🌟 FIX APPLIED: Changed the first link from relative ('./') to absolute ('/').
const demoItems = [
  { link: '/work/social-media-posts', text: 'Social Media Posts', }, // <-- FIX IS HERE
  { link: '/work/ayre', text: 'Ayre', },
  { link: '/work/finvare', text: 'Finvare', },
  { link: '/work/accesstoria', text: 'Accesstoria', },
  { link: '/work/aerowave', text: 'Aerowave', },
  { link: '/work/elara-bloom', text: 'Elara Bloom', },
  { link: '/work/citirivibe', text: 'Citirivibe', },
  { link: '/work/thumbnails', text: 'Thumbnails', },
  { link: '/work/corepeak', text: 'Corepeak', },
  { link: '/work/nova-and-co', text: 'Nova & Co', },
  { link: '/work/lumera-skin', text: 'Lumera Skin', },
  { link: '/work/modbyte', text: 'ModByte', },
  { link: '/work/24-7-sports', text: '24/7 Sports', },
];

function WorksPage() {

  return (
    <div className="WorksPage" >
<div className="centered-content-wrapper">
      <div className='Margin-giver1'  >
        <SplitText
          text="MY WORK"
          className="large-split-text"
          delay={100} duration={0.6} ease="power3.out" splitType="chars"
          from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
          threshold={0.1} rootMargin="-100px" textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      <div style={{ height: '1600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
</div>
      {/* FooterSection doesn't need an ID here */}
      <FooterSection />

    </div>
    
  );
}

export default WorksPage;