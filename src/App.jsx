import './App.css'
import { Routes, Route } from 'react-router-dom'; // Import Routes/Route

import NavBar from './components/Navigation.jsx'
import ClickSpark from './components/ClickSpark';
import HeroSection from './components/HeroSection.jsx';
import SplitText from "./components/SplitText.jsx";
import AboutSection from './components/AbouMe.jsx'
import ServicesSection from './components/ServiceSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import FooterSection from './components/FooterSection.jsx';
import FlowingMenu from './components/FlowingMenu.jsx';

import WorksPage from './WorkPage.jsx'; // Import the Works Page

// 🛑 FIX: Import all your individual project pages 
// Ensure these files exist in your src/work/ directory!
import SocialMediaPostsPage from './work/social-media-posts.jsx';
import AyrePage from './work/ayre.jsx';
import FinvarePage from './work/finvare.jsx';
import AccesstoriaPage from './work/accesstoria.jsx';
import AerowavePage from './work/aerowave.jsx';
import ElaraBloomPage from './work/elara-bloom.jsx';
import CitirivibePage from './work/citirivibe.jsx';
import ThumbnailsPage from './work/thumbnails.jsx';
import CorepeakPage from './work/corepeak.jsx';
import NovaAndCoPage from './work/nova-and-co.jsx';
import LumeraSkinPage from './work/lumera-skin.jsx';
import ModBytePage from './work/modbyte.jsx';
import Sports247Page from './work/24-7-sports.jsx';


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const demoItems = [
  { link: '/work/social-media-posts', text: 'Social Media Post', image: 'https://res.cloudinary.com/diaszaste/image/upload/v1764011550/ThumbSocial_hkoerp.png' },
  { link: '/work/ayre', text: 'Ayre', image: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013626/24_dgojke.jpg' },
  { link: '/work/24-7-sports', text: '24/7 Sports', image: 'https://res.cloudinary.com/diaszaste/image/upload/v1764012498/1_eamag0.jpg' },
  { link: '/work/accesstoria', text: 'Accesstoria', image: 'https://res.cloudinary.com/diaszaste/image/upload/v1764013009/8_rj2k1q.jpg' }
];


function App() {
  return (
    <div className='App'>
      <ClickSpark
        sparkColor='#000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NavBar />

        <Routes>
          {/* Route 1: Home Page Content */}
          <Route path="/" element={
            <>
              <HeroSection />
              <div className="centered-content-wrapper">
                <SplitText
                  text="ABOUT ME"
                  className="large-split-text"
                  delay={100} duration={0.6} ease="power3.out" splitType="chars"
                  from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                  threshold={0.1} rootMargin="-100px" textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <AboutSection id="about-me" />

                <div className='Margin-giver'>
                  <SplitText
                    text="MY WORK"
                    className="large-split-text"
                    delay={100} duration={0.6} ease="power3.out" splitType="chars"
                    from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                    threshold={0.1} rootMargin="-100px" textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </div>

                <div style={{ height: '600px', position: 'relative' }}>
                  <FlowingMenu items={demoItems} />

                  <ServicesSection id="services" />
                  <ProcessSection />

                  <FooterSection id="connect" />
                </div>
              </div>
            </>
          } />

          {/* Route 2: Main Works Page (Index of all projects) */}
          <Route path="/works" element={<WorksPage />} />

          {/* 🛑 FIX: INDIVIDUAL PROJECT ROUTES ADDED 🛑 */}
          {/* These paths match the 'link' values you defined in WorksPage.jsx's demoItems. 
              If the links in WorksPage.jsx are correct, these routes will now work. */}
          <Route path="/work/social-media-posts" element={<SocialMediaPostsPage />} />
          <Route path="/work/ayre" element={<AyrePage />} />
          <Route path="/work/finvare" element={<FinvarePage />} />
          <Route path="/work/accesstoria" element={<AccesstoriaPage />} />
          <Route path="/work/aerowave" element={<AerowavePage />} />
          <Route path="/work/elara-bloom" element={<ElaraBloomPage />} />
          <Route path="/work/citirivibe" element={<CitirivibePage />} />
          <Route path="/work/thumbnails" element={<ThumbnailsPage />} />
          <Route path="/work/corepeak" element={<CorepeakPage />} />
          <Route path="/work/nova-and-co" element={<NovaAndCoPage />} />
          <Route path="/work/lumera-skin" element={<LumeraSkinPage />} />
          <Route path="/work/modbyte" element={<ModBytePage />} />
          <Route path="/work/24-7-sports" element={<Sports247Page />} />


          {/* Catch-all 404 */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>

      </ClickSpark>
    </div>
  )
}

export default App
