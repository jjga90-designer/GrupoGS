import React, { useRef, useState, useEffect } from 'react';
import { Globe2, MapPin } from 'lucide-react';
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
    <section id="cobertura" ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className={`md:w-1/2 space-y-6 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Globe2 className="h-4 w-4" />
              Cobertura LATAM
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              {regional.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {regional.description}
            </p>
            <div className="pt-4">
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm inline-block">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="text-[#8B1D21] font-bold text-lg">100%</span> Supervisión Centralizada
                </p>
              </div>
            </div>
          </div>

          {/* Card with Countries */}
          <div className={`md:w-1/2 w-full transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
              {/* Decorative Header */}
              <div className="bg-[#0F172A] p-4 flex justify-between items-center">
                <span className="text-white font-bold text-sm">Red Operativa</span>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Map Background Hint */}
              <div className="absolute inset-0 top-16 opacity-5 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900">
                    <path d="M20,50 Q40,10 60,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
                 </svg>
              </div>

              {/* Country List - Updated Grid for more items */}
              <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                {regional.countries.map((country, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group cursor-pointer"
                  >
                    <div className="p-1.5 bg-slate-100 rounded-full text-slate-600 group-hover:bg-[#8B1D21] group-hover:text-white transition-colors flex-shrink-0">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-[13px] truncate group-hover:text-[#8B1D21] group-hover:translate-x-1 transition-all duration-300">
                        {country.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 truncate">{country.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer of Card */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[10px] text-slate-500 text-center uppercase tracking-wide">
                Estándares unificados en toda la región
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;