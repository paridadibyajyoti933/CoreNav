
import React, { useState, useEffect } from 'react';
import { generateDroneImage, generateEnterpriseDroneImage } from './services/geminiService';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LiveTracking from './components/LiveTracking';
import Services from './components/Services';

type ViewState = 'home' | 'tracking' | 'services' | 'enterprise';

const App: React.FC = () => {
  const [droneImage, setDroneImage] = useState<string>('');
  const [enterpriseImage, setEnterpriseImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const [url, entUrl] = await Promise.all([
          generateDroneImage(),
          generateEnterpriseDroneImage()
        ]);
        setDroneImage(url);
        setEnterpriseImage(entUrl);
      } catch (err) {
        console.error("Failed to fetch cinematic assets", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (view) {
      case 'tracking':
        return <LiveTracking />;
      case 'services':
        return (
          <div className="pt-20">
            <Services isPage={true} />
            <CTA />
          </div>
        );
      case 'enterprise':
        return (
          <div className="pt-20">
            <Specs enterpriseImage={enterpriseImage} isPage={true} />
            <CTA />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero droneImage={droneImage} loading={loading} />
            
            <div className="relative z-10 -mt-20 px-4 md:px-0">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="hud-border glass-panel p-8 transform md:-translate-y-12">
                  <h3 className="text-yellow-500 font-bold mb-2 uppercase tracking-widest text-sm">Targeting</h3>
                  <p className="text-2xl font-heading mb-4">CONTENT CREATORS</p>
                  <p className="text-gray-400 text-sm">Unmatched 4K stability for cinematic vlogs and social media storytelling.</p>
                </div>
                <div className="hud-border glass-panel p-8 border-yellow-500/50">
                  <h3 className="text-yellow-500 font-bold mb-2 uppercase tracking-widest text-sm">Professional</h3>
                  <p className="text-2xl font-heading mb-4">FILM MAKERS</p>
                  <p className="text-gray-400 text-sm">Log recording and dynamic range designed for post-production mastery.</p>
                </div>
                <div className="hud-border glass-panel p-8 transform md:-translate-y-12">
                  <h3 className="text-yellow-500 font-bold mb-2 uppercase tracking-widest text-sm">Nature</h3>
                  <p className="text-2xl font-heading mb-4">WILDLIFE</p>
                  <p className="text-gray-400 text-sm">Whisper-quiet flight and AI animal tracking for the ultimate nature shots.</p>
                </div>
              </div>
            </div>

            <Features />
            <Services isPage={false} />
            <Specs enterpriseImage={enterpriseImage} isPage={false} />
            <CTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="transition-all duration-500">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
