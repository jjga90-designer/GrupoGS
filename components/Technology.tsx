import React, { useRef, useState, useEffect } from 'react';
import { Map, Smartphone, Database, Lock, Server, Wifi } from 'lucide-react';
import { content } from '../content';

const iconMap = {
  "Map": <Map className="h-8 w-8" />,
  "Smartphone": <Smartphone className="h-8 w-8" />,
  "Database": <Database className="h-8 w-8" />,
  "Lock": <Lock className="h-8 w-8" />
};

const Technology: React.FC = () => {
  const { technology } = content;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#8B1D21] opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-white/10 border border-white/20 text-slate-200 font-bold uppercase tracking-widest text-xs mb-3">
            {technology.title}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            {technology.subtitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {technology.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technology.features.map((feature, idx) => (
            <div 
              key={idx}
              className={`
                group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 
                hover:bg-white/10 hover:border-[#8B1D21]/50 transition-all duration-500
                transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-6 p-4 rounded-xl bg-[#8B1D21]/20 text-[#8B1D21] inline-flex group-hover:bg-[#8B1D21] group-hover:text-white transition-colors duration-300 shadow-lg shadow-red-900/20">
                {iconMap[feature.icon as keyof typeof iconMap] || <Server className="h-8 w-8" />}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Tech Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
           <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
             <Wifi className="h-4 w-4" /> Sync 4G LTE
           </div>
           <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
             <Server className="h-4 w-4" /> Cloud Storage
           </div>
           <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
             <Lock className="h-4 w-4" /> SSL Encryption
           </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;