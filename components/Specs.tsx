
import React from 'react';

const SpecRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between border-b border-white/5 py-4 group hover:bg-white/5 px-2 transition-colors">
    <span className="text-gray-500 uppercase tracking-widest text-xs font-bold font-mono">{label}</span>
    <span className="text-white font-heading text-sm group-hover:text-yellow-500 transition-colors">{value}</span>
  </div>
);

const Specs: React.FC<{ enterpriseImage: string; isPage?: boolean }> = ({ enterpriseImage, isPage = false }) => {
  return (
    <section id="enterprise" className={`py-24 bg-black relative ${isPage ? 'min-h-screen' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -top-10 -left-10 text-9xl font-black text-white/5 font-heading select-none">VAIU</div>
             <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-1 bg-yellow-500" />
                <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">Heavy Industrial Division</span>
             </div>
             <h2 className={`font-black uppercase mb-4 border-l-8 border-yellow-500 pl-6 ${isPage ? 'text-6xl md:text-7xl' : 'text-4xl'}`}>
                ENTERPRISE: <span className="text-yellow-500">VAIU MOVER</span>
             </h2>
             <p className="text-gray-400 mb-8 italic font-medium text-xl">The yellow-jacket heavy lifter for industrial 3D digital twins.</p>
             
             <div className="grid grid-cols-2 gap-x-12 mb-10">
                <div className="space-y-1">
                    <SpecRow label="Power Output" value="High Energy Backup" />
                    <SpecRow label="Mapping Tech" value="LIDAR 3D Sculpting" />
                    <SpecRow label="Precision" value="Centimeter Level" />
                    <SpecRow label="Payload" value="Up to 12.5KG" />
                </div>
                <div className="space-y-1">
                    <SpecRow label="Body" value="Reinforced Yellow ABS" />
                    <SpecRow label="Arms" value="Stealth Black Carbon" />
                    <SpecRow label="Propellers" value="Aero-Black Carbon" />
                    <SpecRow label="Autonomy" value="Level 4 Mesh AI" />
                </div>
             </div>

             <div className="glass-panel p-6 border border-yellow-500/20 mb-8">
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-3">Hazardous Access Protocol</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                   Specifically engineered for areas with limited human access. The VAIU MOVER autonomously captures high-fidelity 3D models of structures using distance-locked LiDAR and persistent mesh connectivity. Capture building sculpts and area distances with exact LAT and LONG values in real-time.
                </p>
             </div>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="hud-border p-2">
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900">
                    {enterpriseImage ? (
                      <img 
                          src={enterpriseImage} 
                          alt="VAIU MOVER Enterprise Drone" 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-yellow-500 animate-pulse font-mono uppercase tracking-[0.5em]">Syncing 3D Sculpt...</span>
                      </div>
                    )}
                    
                    {/* Real-time Data Overlays */}
                    <div className="absolute top-4 left-4 font-mono text-[9px] text-yellow-500 bg-black/60 p-2 backdrop-blur-md border border-white/5">
                        <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                            <span>LIVE DATA STREAMING</span>
                        </div>
                        <div className="mt-1">LAT: 28.61393 N</div>
                        <div>LONG: 77.20902 E</div>
                        <div>DIST: 452.88m</div>
                        <div className="mt-2 text-[8px] opacity-60">LIDAR: LOCKING_TARGET...</div>
                    </div>

                    <div className="absolute bottom-4 right-4 text-right font-mono text-[9px] text-yellow-500 bg-black/60 p-2 backdrop-blur-md border border-white/5">
                        <div>MESH_STATUS: CONNECTED</div>
                        <div>NODES: 04/04</div>
                        <div>SIGNAL: 120ms LATENCY</div>
                        <div>SCULPT_RES: 0.2mm</div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div className="w-48 h-48 border border-yellow-500/10 rounded-full flex items-center justify-center animate-spin-slow" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-32 bg-yellow-500/20 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex justify-between font-mono text-[10px] text-yellow-500/50">
                <div>[ SCAN_AREA: 2500m² ]</div>
                <div>[ SCULPTING_3D_MODEL_V2.OBJ ]</div>
                <div>[ LIDAR_BEAMS: ACTIVE ]</div>
            </div>
          </div>
        </div>

        {isPage && (
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="hud-border glass-panel p-8">
                <h3 className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-4">Accuracy</h3>
                <h4 className="text-2xl font-black uppercase mb-4">LIDAR Distance</h4>
                <p className="text-gray-500 text-sm">Measure volumetric data and structural integrity with sub-centimeter accuracy for construction monitoring.</p>
             </div>
             <div className="hud-border glass-panel p-8 border-yellow-500/30">
                <h3 className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-4">Data</h3>
                <h4 className="text-2xl font-black uppercase mb-4">Precision GPS</h4>
                <p className="text-gray-500 text-sm">Every data point is timestamped and geotagged with precise LAT/LONG values for integration with GIS software.</p>
             </div>
             <div className="hud-border glass-panel p-8">
                <h3 className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-4">Power</h3>
                <h4 className="text-2xl font-black uppercase mb-4">Hot-Swap Backup</h4>
                <p className="text-gray-500 text-sm">Industry-leading backup systems and hot-swappable batteries for near-zero downtime in the field.</p>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specs;
