import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <FeaturedSection />
      <StoriesSection />
      <Footer />
    </div>
  );
}

export default App;
