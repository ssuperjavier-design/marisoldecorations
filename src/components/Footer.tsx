import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-pink-500 mr-2" />
              <h3 className="text-2xl font-bold">
                Marisol<span className="text-pink-400"> Decorations</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Creando celebraciones inolvidables y dignas de revista para la comunidad multicultural de San José. Desde quinceañeras hasta bodas, honramos las tradiciones mientras ofrecemos experiencias de lujo.</p>

              <p className="text-gray-300 leading-relaxed mb-4">Creating unforgettable, magazine-worthy celebrations for San Jose's multicultural community. From quinceañeras to weddings, we honor traditions while delivering luxury experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400 whitespace-pre-line">Servicios / Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="whitespace-pre-line">Quinceañeras</li>
              <li className="whitespace-pre-line">Bodas / Weddings</li>
              <li className="whitespace-pre-line">Alquiler de Fiestas / Party Rentals</li>
              <li className="whitespace-pre-line">Casas Inflables / Bounce Houses</li>
              <li className="whitespace-pre-line">Fiestas de Cumpleaños / Birthday Parties</li>
              <li className="whitespace-pre-line">Eventos Corporativos / Corporate Events</li>
              <li className="whitespace-pre-line">Celebraciones de Aniversario / Anniversary Celebrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400 whitespace-pre-line">Contacto / Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>(650) 669-1092</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>marisol5arias@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="whitespace-pre-line">San José, CA y Área de la Bahía
San Jose, CA & Bay Area</span>
              </div>
              <div className="text-pink-300 font-medium text-sm">
                Se habla español
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Marisol Decorations. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 whitespace-pre-line text-center">
              Orgullosamente sirviendo a la comunidad multicultural de San José
              Proudly serving San Jose's multicultural community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}