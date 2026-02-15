
import React from 'react';

const FeatureCard: React.FC<{ title: string; subtitle: string; desc: string; index: number }> = ({ title, subtitle, desc, index }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative glass-panel p-8 border-l-2 border-transparent group-hover:border-yellow-500 transition-all duration-500">
      <div className="text-yellow-500 font-black text-4xl mb-6 opacity-20 font-mono">0{index + 1}</div>
      <h3 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">{subtitle}</h3>
      <h2 className="text-3xl font-heading mb-4 text-white group-hover:text-yellow-500 transition-colors">{title}</h2>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "4K CINEMATIC RECORDING",
      subtitle: "Optical Masterpiece",
      desc: "Ultra-sharp 4K at 120fps with a 1-inch CMOS sensor. Capture every detail with HDR10+ support and a massive dynamic range."
    },
    {
      title: "OMNIDIRECTIONAL AVOIDANCE",
      subtitle: "Shield Protocol",
      desc: "7-way laser sensing system. Fly through dense forests or urban canyons with zero fear. VAU Air anticipates and evades."
    },
    {
      title: "AI BIOMETRIC TRACKING",
      subtitle: "Hunter Mode",
      desc: "Specialized for Animals and Humans. LOCK-ON technology ensures your subject stays centered regardless of speed or complex movement."
    },
    {
      title: "GPS RETURN TO BASE",
      subtitle: "Auto Extraction",
      desc: "Failsafe GPS integration. Even in signal-lost scenarios, VAU Air computes the fastest, safest trajectory back to its launch point."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative skewed background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase mb-6 leading-none italic">
              UNCOMPROMISED <span className="text-yellow-500">DOMINANCE</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We didn't just build a drone. We built an extension of your vision. 
              The VAU Air integrates state-of-the-art AI with Indian engineering excellence.
            </p>
          </div>
          <div className="text-right">
            <div className="text-6xl font-black text-white/5 font-heading select-none">FEATURES</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
