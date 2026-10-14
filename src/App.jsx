import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MakeupSection from './components/MakeupSection';
import PortfolioSection from './components/PortfolioSection';
import AlbumsSection from './components/AlbumsSection';
import PricingSection from './components/PricingSection';
import ReviewsSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  const [prefilledBooking, setPrefilledBooking] = useState(null);

  useEffect(() => {
    // Force scroll to top on initial mount & page refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSelectService = (serviceId) => {
    setPrefilledBooking((prev) => ({
      ...prev,
      serviceId
    }));
  };

  const handleSelectConcept = (conceptName) => {
    setPrefilledBooking((prev) => ({
      ...prev,
      serviceId: 'concept',
      concept: conceptName
    }));
  };

  return (
    <div className="animate-pageIn relative min-h-screen bg-cream text-charcoal font-sans selection:bg-taupe selection:text-ivory">
      <BackgroundBlobs />

      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MakeupSection onSelectService={handleSelectService} />
        <PortfolioSection onSelectService={handleSelectService} />
        <AlbumsSection onSelectConcept={handleSelectConcept} />
        <PricingSection />
        <ReviewsSection />
        <BookingSection prefilledData={prefilledBooking} />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar />
    </div>
  );
}
