import React, { useState, useEffect, useRef } from 'react';
import { Users, FileBarChart, Vote, Monitor, Tablet, Phone, UserCheck, Globe } from 'lucide-react';
import { content } from '../content';

const iconMap = {
  "Estudios Cualitativos": <Users className="h-10 w-10" />,
  "Estudios Cuantitativos": <FileBarChart className="h-10 w-10" />,
  "Estudios de Opinión Pública": <Vote className="h-10 w-10" />,
  "CATI": <Phone className="h-6 w-6" />,
  "CAPI": <Tablet className="h-6 w-6" />,
  "CAWI": <Globe className="h-6 w-6" />,
  "CASI": <Monitor className="h-6 w-6" />,
  "Híbrido": <UserCheck className="h-6 w-6" />
};

const Services: React.FC = () => {
  const [areMethodologiesVisible, setAreMethodologiesVisible] = useState(false);
  const methodologiesRef = useRef<HTMLDivElement>(null);

  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const { services } = content;

  useEffect(() => {
    // Observer for Methodologies
    const methodObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreMethodologiesVisible(true);
          methodObserver.disconnect(); // Run animation only once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (methodologiesRef.current) {
      methodObserver.observe(methodologiesRef.current);
    }

    // Observer for Main Services
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreServicesVisible(true);
          servicesObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => {
      methodObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#8B1D21] font-bold tracking-widest uppercase text-sm mb-3">{services.title}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{services.subtitle}</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {services.description}
          </p>
        </div>

        {/* Main Services Grid */}
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {services.items.map((service, idx) => (
            <div 
              key={idx} 
              className={`
                group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:ring-1 hover:ring-slate-900/5 
                border-t-4 border-[#8B1D21] relative overflow-hidden
                transform transition-all duration-700 ease-out
                ${areServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#8B1D21] transition-colors duration-500 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-[#8B1D21] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.title as keyof typeof iconMap] || <Users className="h-10 w-10"/>}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#8B1D21] transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8B1D21] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies Section */}
        <div id="metodologias" className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
             <div className="text-center mb-12">
               <h3 className="text-3xl font-bold mb-4">{services.methodologies.title}</h3>
               <p className="text-slate-300 max-w-2xl mx-auto italic">
                 {services.methodologies.quote}
               </p>
             </div>

             <div 
               ref={methodologiesRef}
               className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
             >
               {services.methodologies.items.map((method, idx) => (
                 <div 
                    key={idx} 
                    className={`
                      bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center 
                      hover:bg-white/10 group
                      transform transition-all duration-700 ease-out
                      ${areMethodologiesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                 >
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#8B1D21]/20 text-[#8B1D21] mb-4 group-hover:bg-[#8B1D21] group-hover:text-white transition-colors">
                      {iconMap[method.acronym as keyof typeof iconMap] || <Monitor className="h-6 w-6"/>}
                    </div>
                    <h4 className="text-xl font-extrabold text-white mb-1">{method.acronym}</h4>
                    <p className="text-xs text-red-200 mb-3 font-semibold uppercase tracking-wide">{method.name}</p>
                    <p className="text-xs text-slate-400">{method.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;