import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import RegionalPresence from './components/RegionalPresence';
import Contact from './components/Contact';
import { BarChart3, Linkedin, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { content } from './content';

const App: React.FC = () => {
  const { global } = content;

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Technology />
        <RegionalPresence />
        <About />
        <Contact />
      </main>
      
      {/* Expanded Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <div className="bg-[#8B1D21] p-1.5 rounded-full">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span className="text-xl font-extrabold tracking-tight">{global.companyName}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                {global.tagline}. Somos especialistas en recolección de datos y trabajo de campo con cobertura en todo el Perú.
              </p>
              <div className="flex gap-4">
                <a href={global.socials.linkedin} className="bg-slate-900 p-2 rounded-lg hover:bg-[#8B1D21] hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href={global.socials.facebook} className="bg-slate-900 p-2 rounded-lg hover:bg-[#8B1D21] hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
                <a href={global.socials.twitter} className="bg-slate-900 p-2 rounded-lg hover:bg-[#8B1D21] hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#inicio" className="hover:text-[#8B1D21] transition-colors flex items-center gap-2">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-[#8B1D21] transition-colors flex items-center gap-2">Servicios</a></li>
                <li><a href="#metodologias" className="hover:text-[#8B1D21] transition-colors flex items-center gap-2">Metodologías</a></li>
                <li><a href="#nosotros" className="hover:text-[#8B1D21] transition-colors flex items-center gap-2">Nosotros</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Servicios Principales</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-white transition-colors">Estudios Cuantitativos</li>
                <li className="hover:text-white transition-colors">Estudios Cualitativos</li>
                <li className="hover:text-white transition-colors">Opinión Pública</li>
                <li className="hover:text-white transition-colors">Mystery Shopper</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#8B1D21] flex-shrink-0" />
                  <span>{global.contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#8B1D21] flex-shrink-0" />
                  <span>{global.contact.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#8B1D21] flex-shrink-0" />
                  <span>{global.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} {global.companyName}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-600">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;