
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'tracking' | 'services' | 'enterprise') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-left"
        >
          <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center font-black text-black text-xl italic skew-x-[-12deg]">
            C
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase leading-none">CoreNav</h1>
            <p className="text-[10px] tracking-[0.2em] text-yellow-500 uppercase font-bold">PVT LTD</p>
          </div>
        </button>
        
        <div className="hidden md:flex space-x-12 text-sm font-bold uppercase tracking-widest">
          <button 
            onClick={() => onNavigate('home')} 
            className={`${currentView === 'home' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors`}
          >
            Vau Air
          </button>
          <button 
            onClick={() => onNavigate('tracking')} 
            className={`${currentView === 'tracking' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors`}
          >
            Live Tracking
          </button>
          <button 
            onClick={() => onNavigate('services')} 
            className={`${currentView === 'services' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors`}
          >
            Services
          </button>
          <button 
            onClick={() => onNavigate('enterprise')} 
            className={`${currentView === 'enterprise' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors`}
          >
            Enterprise
          </button>
        </div>

        <button className="px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs">
          Pre-Order
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
