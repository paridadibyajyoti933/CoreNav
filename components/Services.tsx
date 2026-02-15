
import React from 'react';

const ServiceItem: React.FC<{ title: string; category: string; description: string; features: string[] }> = ({ title, category, description, features }) => (
  <div className="group glass-panel border border-white/5 p-8 hover:border-yellow-500/30 transition-all duration-500">
    <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block opacity-60">{category}</span>
    <h3 className="text-2xl font-black uppercase mb-4 tracking-tight group-hover:text-yellow-500 transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
      {description}
    </p>
    <div className="space-y-2">
      {features.map((f, i) => (
        <div key={i} className="flex items-center space-x-2 text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          <span className="w-1 h-1 bg-yellow-500 rounded-full" />
          <span>{f}</span>
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
  return (
    <section id="services" className={`py-24 bg-zinc-950 relative border-t border-white/5 ${isPage ? 'min-h-screen' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-4 mb-4">
             <div className="w-12 h-1 bg-yellow-500" />
             <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">Mission Solutions</span>
          </div>
          <h2 className={`font-black uppercase mb-6 italic ${isPage ? 'text-6xl md:text-8xl' : 'text-5xl'}`}>
            CORE <span className="text-yellow-500">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            CoreNav provides mission-critical services using proprietary Mesh-Connectivity and Automated Surveillance algorithms. We deliver intelligence where human access is compromised.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceItem 
            category="Events & Entertainment"
            title="Swan Drone Show"
            description="Luminescent aerial choreography with precision timing. CoreNav Swan drones move with organic fluidity using advanced mesh swarm logic."
            features={["Dynamic Path Planning", "5000+ Unit Sync", "High-Intensity RGB"]}
          />
          <ServiceItem 
            category="Precision Farming"
            title="VAU Agri-Tech"
            description="Automated crop analysis and variable rate application. Increase yield with AI-driven multispectral terrain mapping."
            features={["Smart Spraying Nodes", "Soil Health AI", "Autonomous Refueling"]}
          />
          <ServiceItem 
            category="National Security"
            title="Tactical Defence"
            description="Persistent surveillance using automated mesh loops. Maintain 24/7 visibility over sensitive borders with zero human oversight."
            features={["Anti-Jamming Link", "Mesh Connectivity", "Thermal Heat Mapping"]}
          />
          <ServiceItem 
            category="Industrial"
            title="Enterprise Mapping"
            description="Capture high-accuracy 3D digital twins. VAIU MOVER utilizes LIDAR to measure distances and precise LAT/LONG coordinates in hazardous zones."
            features={["3D Building Sculpting", "LIDAR Distance Data", "Remote Zone Access"]}
          />
        </div>

        {isPage && (
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
            <div className="glass-panel p-10 border-l-4 border-yellow-500">
               <h3 className="text-2xl font-black uppercase mb-4">Global Deployment</h3>
               <p className="text-gray-400 leading-relaxed">
                  Our services are available globally with local support hubs in New Delhi, Singapore, and Berlin. We provide end-to-end mission planning and real-time monitoring through the CoreNav Command Center.
               </p>
            </div>
            <div className="glass-panel p-10 border-l-4 border-yellow-500">
               <h3 className="text-2xl font-black uppercase mb-4">API & Mesh Integration</h3>
               <p className="text-gray-400 leading-relaxed">
                  Integrate your existing infrastructure with our Mesh-Net. Our drones act as roaming nodes, providing persistent Wi-Fi 6E and 5G relay in dead zones.
               </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
