import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import CollectionSection from '../components/CollectionSection';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <FeaturedSection />
      <CollectionSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;