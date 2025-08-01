import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import CollectionSection from './components/CollectionSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection />;
      case 'featured':
        return <FeaturedSection />;
      case 'collections':
        return <CollectionSection />;
      case 'about':
        return <AboutSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;