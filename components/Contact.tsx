import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { content } from '../content';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { contact, global } = content;

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = `Solicitud de Cotización - ${formData.company || formData.name}`;
    const body = `Nombre: ${formData.name}%0D%0A` +
                 `Empresa: ${formData.company}%0D%0A` +
                 `Email: ${formData.email}%0D%0A%0D%0A` +
                 `Mensaje:%0D%0A${formData.message}`;
    
    // Open mail client
    window.location.href = `mailto:${global.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Show success message and reset form
    setShowSuccess(true);
    setFormData({ name: '', company: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 8000);
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `*Solicitud de Cotización*%0A%0A` +
                 `*Nombre:* ${formData.name}%0A` +
                 `*Empresa:* ${formData.company}%0A` +
                 `*Email:* ${formData.email}%0A%0A` +
                 `*Mensaje:*%0A${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${global.contact.whatsapp}?text=${text}`, '_blank');

    // Show success message and reset form
    setShowSuccess(true);
    setFormData({ name: '', company: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 8000);
  };

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B1D21] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Text & Info - Slides in from Left */}
          <div className={`space-y-8 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{contact.title}</h2>
              <p className="text-slate-300 text-lg">
                {contact.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm group-hover:bg-[#8B1D21] transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Correo Electrónico</h4>
                  <a href={`mailto:${global.contact.email}`} className="text-slate-300 hover:text-white transition-colors">{global.contact.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm group-hover:bg-[#8B1D21] transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Llámenos</h4>
                  <div className="flex items-center gap-3">
                    <p className="text-slate-300">{global.contact.phone}</p>
                    <a 
                      href={`https://wa.me/${global.contact.whatsapp}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 bg-[#25D366] rounded-full text-white hover:bg-[#128C7E] transition-all hover:scale-110 animate-bounce shadow-lg"
                      title="Chat en WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm group-hover:bg-[#8B1D21] transition-colors">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Oficina Central</h4>
                  <p className="text-slate-300">{global.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form - Pop-in Animation */}
          <div className={`bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border-t-8 border-[#8B1D21] transform transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
            <h3 className="text-2xl font-bold mb-6">{contact.formTitle}</h3>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 text-sm">¡Solicitud Iniciada!</h4>
                  <p className="text-sm text-green-700">Se ha abierto su aplicación para completar el envío. Gracias por contactarnos.</p>
                </div>
              </div>
            )}

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#8B1D21] focus:border-transparent outline-none transition-all bg-slate-50" 
                    placeholder="Su nombre" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#8B1D21] focus:border-transparent outline-none transition-all bg-slate-50" 
                    placeholder="Nombre de empresa" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#8B1D21] focus:border-transparent outline-none transition-all bg-slate-50" 
                  placeholder="correo@empresa.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Detalles del Proyecto</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#8B1D21] focus:border-transparent outline-none transition-all bg-slate-50" 
                  placeholder="Tipo de estudio, público objetivo, muestra estimada..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="button" 
                  onClick={handleEmailSubmit}
                  className="w-full py-4 bg-[#8B1D21] text-white font-bold rounded-lg hover:bg-[#681518] transition-colors shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
                >
                  Enviar por Correo <Mail className="h-4 w-4" />
                </button>
                
                <button 
                  type="button" 
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
                >
                  Enviar por WhatsApp 
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;