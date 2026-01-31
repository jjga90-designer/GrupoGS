import React, { useState, useEffect, useRef } from 'react';
import { Target, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import { content } from '../content';

const iconMap = {
  "Calidad Auditada": <ShieldCheck className="w-6 h-6" />,
  "Cobertura Total": <Target className="w-6 h-6" />,
  "Tecnología Real": <Zap className="w-6 h-6" />,
  "Experiencia": <Briefcase className="w-6 h-6" />
};

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { about } = content;

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="nosotros" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          <div className={`lg:w-1/2 order-2 lg:order-1 relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipo Grupo GS" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-medium italic">"La calidad del dato es innegociable."</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-slate-100 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#8B1D21] rounded-full z-20 opacity-20"></div>
          </div>
          
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block py-1 px-3 rounded-md bg-red-50 text-[#8B1D21] font-bold uppercase tracking-widest text-xs mb-4">{about.badge}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {about.title.main}<br/><span className="text-[#8B1D21]">{about.title.highlight}</span>.
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                   <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace('Grupo GS', '<strong>Grupo GS</strong>').replace('trabajo de campo (Fieldwork)', '<strong>trabajo de campo (Fieldwork)</strong>') }} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {about.features.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-100 h-full">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-red-50 text-[#8B1D21] rounded-lg shadow-sm">
                        {iconMap[item.title as keyof typeof iconMap] || <ShieldCheck className="w-6 h-6"/>}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;