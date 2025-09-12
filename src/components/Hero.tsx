import React from 'react';
import { ChevronDown, Award, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/29468597_1591937864217175_2170968237116751872_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RAFBmZQOsTIQ7kNvwFni03S&_nc_oc=Adl0J2q6W_2IRl8nzAeKzepgVcysAQg1D_CQ9zTD3JbjFfPOUf_KECT8r4getREr7tycP_8dUF391ePmXOLS6nvI&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=2laRIAab5P2pR_oHPNee0g&oh=00_AfYdrTnBj1ASAVQqQ_uNfN787bi6Tek3q_LYsRRDP-2sLQ&oe=68EBECF3"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/70 via-black/50 to-pink-900/70"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
          <br></br>
         Decoración de Eventos de Lujo

        <span className="block text-pink-400">para los momentos mas importantes de la vida! </span>
        </h1>
        
        <p className="text-m md:text-m mb-8 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          Los estilistas de eventos más prestigiosos de San José creando celebraciones inolvidables y dignas de revista que honran tus tradiciones y superan tus sueños. </p>

          <p className="text-m md:text-m mb-8 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">San Jose's premier event stylists creating unforgettable, magazine-worthy celebrations that honor your traditions and exceed your dreams
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#contact" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg">
            Reserva Consulta Gratuita / Book Free Style Consultation
          </a>
          <a href="#gallery" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300">
            Ver Nuestras Transformaciones / See Our Transformations
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="w-6 h-6 text-pink-400" />
            <span className="font-medium whitespace-pre-line text-center">Diseños Premiados
Award-Winning Designs</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
            <Heart className="w-6 h-6 text-pink-400" />
            <span className="font-medium whitespace-pre-line text-center">Tradiciones Culturales
Cultural Traditions</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <span className="font-medium whitespace-pre-line text-center">Planificación Sin Estrés
Stress-Free Planning</span>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pink-400 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}