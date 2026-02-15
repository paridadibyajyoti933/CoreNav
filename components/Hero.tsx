
import React from 'react';

interface HeroProps {
  droneImage: string;
  loading: boolean;
}

const Hero: React.FC<HeroProps> = ({ droneImage, loading }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        {loading ? (
          <div className="w-full h-full bg-neutral-900 animate-pulse flex items-center justify-center">
            <div className="text-yellow-500 font-heading text-xl animate-bounce">INITIALIZING CORE...</div>
          </div>
        ) : (
          <>
            <img 
              src={droneImage} 
              alt="VAU Air Drone" 
              className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />
          </>
        )}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs">The Apex Predator of the Sky</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.8]">
            VAU <span className="text-yellow-500 text-glow">AIR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed border-l-4 border-yellow-500 pl-6">
            Engineered for the elite. 4K Precision. AI Tracking. 
            <span className="block font-bold text-white mt-2">Made in India for the World.</span>
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 flex items-center group">
              Explore Missions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 backdrop-blur-sm">
              Watch Film
            </button>
          </div>
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block border border-white/10 p-4 font-mono text-[10px] text-gray-500">
        <div className="flex justify-between space-x-8">
          <div>LAT: 28.6139° N</div>
          <div>LON: 77.2090° E</div>
        </div>
        <div className="mt-2 border-t border-white/10 pt-2 flex items-center justify-between">
          <span>SYSTEMS: ONLINE</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
