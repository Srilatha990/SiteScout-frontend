import React from 'react';
import HeroSection from './hero';
import InfoSection from './info';
import ServicesSection from './services';
import FeaturesSection from './features';
import Rank from './rank';
import Testimonial from './review';
import Contact from './contact';

function Home() {
  return (
    <div>

    <HeroSection/>
      <div style={{ backgroundColor: '#e8ecf1', width: '100%' }}>
        <InfoSection />
        <ServicesSection/>
      </div>
      <FeaturesSection/>
      <Rank/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Home