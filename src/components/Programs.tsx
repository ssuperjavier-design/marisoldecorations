import React from 'react';
import { Heart, Crown, Sparkles, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Quinceañeras",
      description: "Crea memorias mágicas e inolvidables con decoraciones elegantes que hacen honor a tus tradiciones.\n\nCelebrate this milestone with elegant decor that honors tradition and creates magical memories.",
      features: [
        "Temas tradicionales y modernos\nTraditional & modern themes", 
        "Paletas de colores personalizadas\nCustom color palettes", 
        "Integración de elementos culturales\nCultural elements integration"
      ],
      popular: true
    },
    {
      icon: Heart,
      title: "Bodas / Weddings",
      description: "Desde ceremonias íntimas hasta grandes celebraciones, podemos crear la atmósfera romántica perfecta.\n\nFrom intimate ceremonies to grand receptions, we create the perfect romantic atmosphere.",
      features: [
        "Arreglos para ceremonia y recepción\nCeremony & reception decor", 
        "Coordinación del cortejo nupcial\nBridal party coordination", 
        "Tradiciones culturales de boda\nCultural wedding traditions"
      ],
    },
    {
      icon: Sparkles,
      title: "Eventos Especiales / Special Events",
      description: "Cumpleaños, aniversarios, eventos corporativos - todas las ocasiones merecen ser extraordinarias.\n\nBirthdays, anniversaries, corporate events - every occasion deserves to be extraordinary!",
      features: [
        "Temática personalizada\nCustom theme development", 
        "Transformación completa del lugar\nVenue transformation", 
        "Estilismo completo del evento\nComplete event styling"
      ],
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            Nuestros Servicios Exclusivos <br></br>
            Our Signature Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            Transformando tu visión en celebraciones inolvidables
            Transforming your vision into unforgettable celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
              service.popular ? 'ring-2 ring-pink-200' : ''
            }`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap text-center">
                    Más Popular • Most Popular
                  </span>
                </div>
              )}
              
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-pink-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center whitespace-pre-line">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 whitespace-pre-line">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a href="#contact" className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 rounded-full font-semibold transition-all duration-300 text-center">
                  Obtener Cotización Personalizada / Get Custom Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Calendar className="w-6 h-6" />
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2 whitespace-pre-line">¿Cómo Funciona? 3 Simples Pasos
How It Works - Simple 3-Step Process</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">1</div>
              <h4 className="font-semibold mb-1 whitespace-pre-line">Consulta Gratis
Free Consultation</h4>
              <p className="text-sm text-pink-100 whitespace-pre-line">Compártenos tu visión para entender tu estilo
Share your vision and let us understand your style</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">2</div>
              <h4 className="font-semibold mb-1 whitespace-pre-line">Diseño Personalizado
Custom Design</h4>
              <p className="text-sm text-pink-100 whitespace-pre-line">Creamos un plan personalizado a tu medida
We create a personalized decor plan just for you</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">3</div>
              <h4 className="font-semibold mb-1 whitespace-pre-line">Ejecución Perfecta
Perfect Execution</h4>
              <p className="text-sm text-pink-100 whitespace-pre-line">Relájate y disfruta de tu celebración sin preocuparte
Sit back and enjoy your stress-free celebration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}