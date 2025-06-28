import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import TutorShowcase from './components/TutorShowcase';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <TutorShowcase />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;