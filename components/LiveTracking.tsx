
import React, { useState, useEffect } from 'react';
import { generateTrackingFrame } from '../services/geminiService';

const LiveTracking: React.FC = () => {
  const [frame, setFrame] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchFrame = async () => {
      setLoading(true);
      const url = await generateTrackingFrame();
      setFrame(url);
      setLoading(false);
    };
    fetchFrame();

    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black pt-24 pb-12 overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-4xl font-black text-yellow-500 uppercase tracking-tighter italic">MISSION: FOREST SURVEILLANCE</h2>
            <p className="text-gray-400 font-mono text-sm">[ STATUS: ACTIVE_TRACKING ] [ SECTOR: 04B_JUNGLE ]</p>
          </div>
          <div className="flex items-center space-x-8 font-mono text-xs text-yellow-500/70">
            <div className="flex flex-col items-end">
              <span>ALTITUDE: 142M</span>
              <span>BATTERY: 74%</span>
            </div>
            <div className="flex flex-col items-end">
              <span>SIGNAL: STRONG</span>
              <span>TIME: {timestamp}</span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video border-2 border-yellow-500/30 overflow-hidden hud-border shadow-[0_0_50px_rgba(234,179,8,0.1)]">
          {loading ? (
            <div className="absolute inset-0 bg-zinc-900 flex flex-center items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin mb-4 mx-auto" />
                <p className="text-yellow-500 font-mono text-sm tracking-widest animate-pulse">ESTABLISHING SATLINK...</p>
              </div>
            </div>
          ) : (
            <>
              <img src={frame} alt="Tracking Feed" className="w-full h-full object-cover" />
              {/* HUD OVERLAY */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner Brackets */}
                <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-yellow-500/50" />
                <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-yellow-500/50" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-yellow-500/50" />
                <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-yellow-500/50" />
                
                {/* Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                   <div className="w-4 h-4 border border-yellow-500/40 rounded-full" />
                   <div className="absolute w-32 h-px bg-yellow-500/20" />
                   <div className="absolute h-32 w-px bg-yellow-500/20" />
                </div>

                {/* Tracking Box (Mock) */}
                <div className="absolute top-[40%] left-[45%] w-32 h-32 border border-green-500/80 animate-pulse">
                  <div className="absolute -top-6 left-0 bg-green-500 text-black text-[10px] font-bold px-1 uppercase">TARGET: BENGAL_TIGER</div>
                  <div className="absolute -bottom-6 right-0 text-green-500 text-[10px] font-mono">CONFIDENCE: 99.4%</div>
                </div>

                {/* Scrolling Data */}
                <div className="absolute bottom-12 left-12 font-mono text-[10px] text-yellow-500/50 space-y-1 hidden md:block">
                  <div>SYS_TEMP: 32°C</div>
                  <div>GIMBAL_STAB: LOCKED</div>
                  <div>AUTO_EXPOSURE: ENABLED</div>
                  <div>MESH_LINK: NODE_07_PRIMARY</div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="glass-panel p-6 border border-white/5">
              <h3 className="text-yellow-500 font-bold text-sm mb-4 tracking-widest uppercase italic">AI Recognition</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Proprietary neural networks trained on thousands of wildlife species. Identify, tag, and track multiple subjects simultaneously even through dense canopy.
              </p>
           </div>
           <div className="glass-panel p-6 border border-white/5">
              <h3 className="text-yellow-500 font-bold text-sm mb-4 tracking-widest uppercase italic">Stealth Profile</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Low-frequency noise signature ensures minimal disturbance to wildlife habitats. Fly closer than ever before without alerting the subject.
              </p>
           </div>
           <div className="glass-panel p-6 border border-white/5">
              <h3 className="text-yellow-500 font-bold text-sm mb-4 tracking-widest uppercase italic">Geo-Fencing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Define restricted zones with centimeter accuracy. VAU Air maintains mesh-link surveillance to prevent encroachment in sensitive areas.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTracking;
