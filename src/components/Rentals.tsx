import React from 'react';
import { Tent, Users, Armchair, Sparkles } from 'lucide-react';

export default function Rentals() {
  const rentalItems = [
    {
      icon: Tent,
      title: "Brincolines / Bounce Houses & Jumpers",
      description: "Casas inflables seguras, limpias y coloridas perfectas para fiestas infantiles y celebraciones familiares. Varios temas y tamaños disponibles.\n\nSafe, clean, and colorful bounce houses perfect for kids' parties and family celebrations. Various themes and sizes available.",
      features: [
        "Castillos de princesas\nPrincess castles", 
        "Temas de superhéroes\nSuperhero themes", 
        "Toboganes de agua\nWater slides", 
        "Unidades combinadas\nCombo units", 
        "Certificado de seguridad\nSafety certified"
      ],
      popular: true
    },
    {
      icon: Users,
      title: "Mesas y Manteles / Tables & Linens",
      description: "Mesas elegantes en varios tamaños con manteles premium para combinar con el tema y la paleta de colores de tu evento.\n\nElegant tables in various sizes with premium linens to match your event theme and color palette.",
      features: [
        "Mesas redondas y rectangulares\nRound & rectangular tables", 
        "Manteles premium\nPremium linens", 
        "Colores personalizados\nCustom colors", 
        "Mesas de cóctel\nCocktail tables", 
        "Mesas para niños\nKids tables"
      ],
    },
    {
      icon: Armchair,
      title: "Sillas y Asientos / Chairs & Seating",
      description: "Opciones de asientos cómodas y elegantes desde casuales hasta formales, asegurando que tus invitados estén cómodos durante todo tu evento.\n\nComfortable and stylish seating options from casual to formal, ensuring your guests are comfortable throughout your event.",
      features: [
        "Sillas Chiavari\nChiavari chairs", 
        "Sillas plegables\nFolding chairs", 
        "Muebles de salón\nLounge furniture", 
        "Sillas para niños\nKids chairs", 
        "Cojines disponibles\nCushions available"
      ],
    }
  ];

  return (
    <section id="rentals" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            Alquiler de Fiestas y Equipos <br></br>
            Party Rentals & Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            Completa tu celebración con nuestra colección premium de alquiler<br></br>
            Complete your celebration with our premium rental collection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rentalItems.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
              item.popular ? 'ring-2 ring-purple-200' : ''
            }`}>
              {item.popular && (
                <div className="absolute -top-2 left-1/6 transform -translate-x-1/6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-semibold text-center leading-tight max-w-[140px] sm:max-w-none block">
                    <span className="block sm:inline">Favorito de los Niños</span>
                    <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">Kids Favorite</span>
                  </span>
                </div>
              )}
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 mb-6 text-center whitespace-pre-line">{item.description}</p>
              
              <ul className="space-y-2 mb-6">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 whitespace-pre-line">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a href="#contact" className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-full font-semibold transition-all duration-300 text-center">
                  <span className="block sm:inline text-sm px-2">Obtener Cotización de Alquiler</span>
                  <span className="block sm:inline sm:before:content-['•'] sm:before:mx-2 text-sm">Get Rental Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Sparkles className="w-6 h-6" />
            <Tent className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4 whitespace-pre-line">Paquetes Completos de Eventos Disponibles
Complete Event Packages Available</h3>
          <p className="text-purple-100 mb-6 whitespace-pre-line">
            Combina decoraciones con alquileres para la experiencia de celebración definitiva. Nos encargamos de la entrega, instalación y recogida para que puedas concentrarte en disfrutar tu día especial.

            Combine decorations with rentals for the ultimate celebration experience. We handle delivery, setup, and pickup so you can focus on enjoying your special day.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">
                <span className="block sm:inline">🎪 Paquete de Fiesta Infantil</span>
                <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">Kids Party Package</span>
              </h4>
              <p className="text-sm text-purple-100">
                <span className="block sm:inline">Casa inflable + mesas + sillas + decoraciones</span>
                <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">Bounce house + tables + chairs + decorations</span>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">
                <span className="block sm:inline">✨ Paquete de Evento Elegante</span>
                <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">Elegant Event Package</span>
              </h4>
              <p className="text-sm text-purple-100">
                <span className="block sm:inline">Mobiliario premium + manteles + servicio completo de decoración</span>
                <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">Premium furniture + linens + full decor service</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}