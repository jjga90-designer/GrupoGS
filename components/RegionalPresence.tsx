import React, { useRef, useState, useEffect } from 'react';
import { Globe2, MapPin, Radio, Wifi } from 'lucide-react';
import { content } from '../content';

const RegionalPresence: React.FC = () => {
  const { regional } = content;
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cobertura" ref={sectionRef} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Radial glow only, grid removed */}
         <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Colors optimized for Light Background */}
          <div className={`md:w-5/12 space-y-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Globe2 className="h-4 w-4" />
              Cobertura LATAM
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                {regional.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-[#8B1D21] pl-6">
                {regional.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              {/* Dark Tech Card for Supervision */}
              <div className="p-5 bg-[#0F172A] border border-white/10 rounded-xl shadow-lg flex items-center gap-4 hover:border-[#8B1D21]/50 hover:shadow-red-900/20 transition-all group cursor-default">
                <div className="p-3 bg-white/5 rounded-full text-[#8B1D21] group-hover:bg-[#8B1D21] group-hover:text-white transition-colors duration-300">
                  <Radio className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Supervisión Centralizada</h4>
                  <p className="text-slate-400 text-sm">Control de calidad unificado desde Lima para toda la región.</p>
                </div>
              </div>
            </div>
          </div>

          {/* High-Tech Map Card - Updated to match Hero 'Panel de Campo' Style */}
          <div className={`md:w-7/12 w-full transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative group">
              
              {/* Main Container - Matching Hero Card Style (Shadow + Orb) */}
              <div className="relative bg-[#0b1121] bg-opacity-95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_25px_50px_-12px_rgba(139,29,33,0.5)] group-hover:shadow-[0_35px_60px_-15px_rgba(139,29,33,0.7)] transition-all duration-500">
                
                {/* Decorative Orb matching Hero style */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#8B1D21] rounded-full opacity-30 blur-3xl pointer-events-none group-hover:opacity-50 transition-opacity duration-700"></div>

                {/* Header of Command Center */}
                <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-black/20 relative z-10">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300 font-mono text-xs uppercase tracking-widest">Network Status: Online</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i===3 ? 'bg-red-500 animate-ping' : 'bg-slate-600'}`}></div>)}
                  </div>
                </div>

                {/* Country Grid */}
                <div className="p-6 lg:p-8 relative z-10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {regional.countries.map((country, idx) => (
                      <div 
                        key={idx}
                        className="
                          relative group/item overflow-hidden rounded-lg 
                          bg-slate-800/40 border border-white/5 
                          transition-all duration-300 
                          hover:bg-slate-800/90 
                          hover:border-[#8B1D21] 
                          hover:shadow-[0_0_20px_rgba(139,29,33,0.5),inset_0_0_10px_rgba(139,29,33,0.2)]
                        "
                      >
                        <div className="flex items-center gap-3 p-3">
                          <div className="flex-shrink-0">
                             <MapPin className={`h-4 w-4 ${country.active ? 'text-[#8B1D21]' : 'text-slate-600'} group-hover/item:scale-110 group-hover/item:text-[#ff4444] transition-all duration-300`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className="text-slate-200 font-bold text-sm truncate group-hover/item:text-white transition-all group-hover/item:translate-x-1">
                                {country.name}
                              </h4>
                              {country.status === "Sede Central" && (
                                <span className="h-1.5 w-1.5 rounded-full bg-[#8B1D21] animate-pulse shadow-[0_0_8px_#8B1D21]"></span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 font-mono uppercase truncate group-hover/item:text-slate-400">
                              {country.status === "Sede Central" ? "HQ LIMA" : "NODE ACTIVE"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Data Stream */}
                <div className="bg-black/40 px-6 py-3 border-t border-white/5 flex justify-between items-center text-[11px] font-mono text-slate-500 relative z-10">
                  <span>LATENCY: 24ms</span>
                  <span className="text-[#8B1D21]">SYNC: 100%</span>
                  <span>NODES: {regional.countries.length}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;