import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navigation';

function ThumbnailsPage() {
  return (
    <div className="project-page min-h-screen pt-20 text-center">
      <NavBar />
      <h1 className="text-4xl mt-12">Thumbnails Project: Coming Soon</h1>
      <p className="text-lg mt-4">This is the placeholder page for the Thumbnails project.</p>
      <Link to="/works" className="block mt-6 text-blue-600 hover:text-blue-800">&larr; Back to Works</Link>
    </div>
  );
}

export default ThumbnailsPage;