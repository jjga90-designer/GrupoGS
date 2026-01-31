import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Globe2, Users2 } from 'lucide-react';
import { content } from '../content';

const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden pt-28 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#0F172A] to-[#2b0a0d] z-10 opacity-95"></div>
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
          alt="Data Analysis Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Abstract Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B1D21] rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium backdrop-blur-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B1D21]"></span>
              </span>
              {hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
              {hero.title.main} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
                {hero.title.highlight}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-fade-in-up delay-300">
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-[#8B1D21] text-white font-bold rounded-lg hover:bg-[#681518] transition-all shadow-lg hover:shadow-red-900/40 group text-lg">
                {hero.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm text-lg">
                {hero.cta.secondary}
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400 font-medium animate-fade-in-up delay-500">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#8B1D21]" /> {stat.text}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Stats Card */}
          <div className="md:w-2/5 relative hidden md:block animate-fade-in delay-700">
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(139,29,33,0.5)] transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8B1D21] rounded-full opacity-40 blur-2xl"></div>
               
              <div className="space-y-8">
                 <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="h-12 w-12 rounded-full bg-[#8B1D21] flex items-center justify-center text-white font-bold shadow-lg shadow-red-900/50">GS</div>
                    <div>
                       <div className="text-white font-bold text-lg">{hero.floatingCard.title}</div>
                       <div className="text-slate-400 text-xs uppercase tracking-wider">{hero.floatingCard.status}</div>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg"><Users2 className="h-5 w-5 text-blue-400"/></div>
                        <div className="text-slate-200 text-sm">{hero.floatingCard.metrics[0].label}</div>
                      </div>
                      <span className="text-white font-mono font-bold">{hero.floatingCard.metrics[0].value}</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg"><Globe2 className="h-5 w-5 text-green-400"/></div>
                        <div className="text-slate-200 text-sm">{hero.floatingCard.metrics[1].label}</div>
                      </div>
                      <span className="text-white font-mono font-bold">{hero.floatingCard.metrics[1].value}</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg"><BarChart3 className="h-5 w-5 text-[#8B1D21]"/></div>
                        <div className="text-slate-200 text-sm">{hero.floatingCard.metrics[2].label}</div>
                      </div>
                      <span className="text-white font-mono font-bold">{hero.floatingCard.metrics[2].value}</span>
                   </div>
                 </div>

                 <div className="pt-4 border-t border-white/10">
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#8B1D21] to-red-600 w-[85%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>Meta mensual</span>
                      <span>85% Completado</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 animate-fade-in delay-700">
            {hero.footerStats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <h4 className="text-3xl font-extrabold text-white">{stat.value}</h4>
                <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;