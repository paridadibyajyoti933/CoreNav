
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-yellow-500/5 diagonal-bg transform rotate-3 scale-110" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none italic">
            DEPLOY THE <span className="text-yellow-500">FUTURE</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Launching Soon for Content Creators, Wildlife Photographers, and Filmmakers worldwide. 
            Join the waitlist for exclusive early access and limited launch pricing.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input 
              type="email" 
              placeholder="ENTER ENCRYPTION EMAIL..." 
              className="w-full md:w-96 px-6 py-5 bg-white/5 border border-white/10 text-white font-mono uppercase focus:border-yellow-500 outline-none transition-colors"
            />
            <button className="w-full md:w-auto px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
              SECURE ACCESS
            </button>
          </div>
          
          <p className="mt-8 text-xs text-gray-600 uppercase tracking-[0.3em]">
            Zero Spam • End-to-End Encrypted Notifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
