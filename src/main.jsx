// index.js or main.jsx

import React, { StrictMode } from 'react'; // 1. Import StrictMode
import { createRoot } from 'react-dom/client'; // 1. Import createRoot
import App from './App.jsx';
// Import the necessary Router component
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// 2. Create the root and render the application
createRoot(rootElement).render(
  <StrictMode>
    {/* 👈 FIX: Wrap App inside BrowserRouter to provide routing context */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);