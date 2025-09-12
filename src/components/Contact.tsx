import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Heart, Download, Eye } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            ¿Listo para Crear Algo Hermoso? <br></br>
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            Hablemos de tu visión y creemos juntos una celebración inolvidable<br></br>
            Let's discuss your vision and create an unforgettable celebration together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center whitespace-pre-line">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              Comienza tu Viaje
              Start Your Journey
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                    Nombre Completo / Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/50"
                    placeholder="Tu nombre completo / Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                    Número de Teléfono / Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                  Correo Electrónico / Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/50"
                  placeholder="tu.correo@ejemplo.com / your.email@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                    Tipo de Evento / Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/50"
                  >
                    <option value="">Selecciona tipo de evento / Select event type</option>
                    <option value="quinceanera">Quinceañera</option>
                    <option value="wedding">Boda / Wedding</option>
                    <option value="birthday">Fiesta de Cumpleaños / Birthday Party</option>
                    <option value="anniversary">Aniversario / Anniversary</option>
                    <option value="corporate">Evento Corporativo / Corporate Event</option>
                    <option value="other">Otro / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                    Fecha del Evento / Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 whitespace-pre-line">
                  Cuéntanos Sobre tu Visión / Tell Us About Your Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none bg-white/50"
                  placeholder="Describe tu evento soñado, preferencias de color, estilo y cualquier requisito especial... / Describe your dream event, color preferences, style, and any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje / Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 whitespace-pre-line">Ponte en Contacto
Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold whitespace-pre-line">Teléfono / Phone</h4>
                    <a href="tel:(650) 669-1092" className="text-pink-100 hover:text-white transition-colors">
                      (650) 669-1092
                    </a>
                    <p className="text-sm text-pink-100 mt-1">Se habla español</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold whitespace-pre-line">Correo / Email</h4>
                    <a href="mailto:marisol5arias@gmail.com" className="text-pink-100 hover:text-white transition-colors">
                      marisol5arias@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold whitespace-pre-line">Área de Servicio / Service Area</h4>
                    <p className="text-pink-100 whitespace-pre-line">San José y Área de la Bahía
San Jose & Bay Area</p>
                    <p className="text-sm text-pink-100">Santa Clara, Campbell, Cupertino</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold whitespace-pre-line">Horarios de Consulta / Consultation Hours</h4>
                    <p className="text-pink-100 whitespace-pre-line">Lun-Sáb: 9AM-7PM / Mon-Sat: 9AM-7PM
Domingo: Con Cita / Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 whitespace-pre-line">¿Listo para Comenzar a Planificar? <br></br>
Ready to Start Planning?</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                Llámanos directamente para consulta inmediata o para discutir la visión de tu evento
                Call us directly for immediate consultation or to discuss your event vision
              </p>
              
              {/* Event Lookbook Preview */}
              <div className="mb-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-100">
                <div className="flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-pink-500 mr-2" />
                  <h4 className="font-semibold text-gray-900 whitespace-pre-line">Vista Previa del Catálogo
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <img 
                    src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                    alt="Quinceañera decoration preview"
                    className="w-full h-16 object-cover rounded-lg shadow-sm"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                    alt="Wedding decoration preview"
                    className="w-full h-16 object-cover rounded-lg shadow-sm"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                    alt="Party decoration preview"
                    className="w-full h-16 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  Más de 50 páginas de inspiración y ideas para tu evento
                  50+ pages of inspiration and ideas for your event
                </p>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="tel:(650) 669-1092"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar Ahora / Call Now</span>
                </a>
                <div className="text-sm text-gray-500">o / or</div>
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="inline-flex items-center space-x-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Catálogo de Eventos / Download Event Lookbook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  )
}