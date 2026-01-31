import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AnalysisView from './components/AnalysisView';
import { analyzeWebsite } from './services/geminiService';
import { AnalysisResult } from './types';
import { BarChart3, Linkedin, Facebook, Twitter, Mail, MapPin, Phone, Search, Loader2, AlertCircle } from 'lucide-react';
import { content } from './content';

const App: React.FC = () => {
  const { global } = content;
  const [analysisUrl, setAnalysisUrl] = useState('www.grupogs.com.pe');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!analysisUrl) return;

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeWebsite(analysisUrl);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError("No se pudo completar el análisis. Verifique su conexión o intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        
        {/* New Analysis Section */}
        <section id="demo" className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-blue-700 font-bold uppercase tracking-widest text-xs mb-3">
                Tecnología GS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Análisis de Inteligencia Comercial</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Utilice nuestra herramienta potenciada por IA para obtener un perfil instantáneo de cualquier entidad pública o privada.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <form onSubmit={handleAnalyze} className="relative flex items-center">
                <div className="absolute left-4 text-slate-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={analysisUrl}
                  onChange={(e) => setAnalysisUrl(e.target.value)}
                  placeholder="Ingrese URL (ej: www.grupogs.com.pe)"
                  className="w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Analizar'}
                </button>
              </form>
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-fade-in">
                  <AlertCircle className="h-5 w-5" />
                  {error}
                </div>
              )}
            </div>

            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Analizando huella digital y estructura de datos...</p>
              </div>
            )}

            {analysisResult && (
              <div className="animate-fade-in-up">
                <AnalysisView result={analysisResult} />
              </div>
            )}
          </div>
        </section>

        <Services />
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