import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sandra Martinez",
      role: "Quinceañera Mother",
      content: "Marisol Decorations made my daughter's quinceañera absolutely magical! They understood our cultural traditions and created something that was both elegant and meaningful. Every detail was perfect, and I didn't have to stress about anything.",
      rating: 5,
      event: "Quinceañera"
    },
    {
      name: "Carmen Rodriguez",
      role: "Bride",
      content: "From our first consultation to the wedding day, the team was incredible. They spoke Spanish with my family, honored our traditions, and created the most beautiful romantic atmosphere. Our guests are still talking about it!",
      rating: 5,
      event: "Wedding"
    },
    {
      name: "Isabella Chen",
      role: "Event Host",
      content: "I wanted something sophisticated and unique for my anniversary party. Marisol Decorations exceeded every expectation. The attention to detail and luxury feel made it feel like a magazine shoot. Absolutely worth every penny!",
      rating: 5,
      event: "Anniversary"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            Qué Dicen Nuestros Clientes <br></br>
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 whitespace-pre-line">
            Historias reales de familias que confiaron en nosotros para realizar su evento especial <br></br>
            Real stories from families who trusted us with their special moments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 left-6">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.event}
                </div>
              </div>
              
              <Quote className="w-8 h-8 text-pink-500 mb-4 mt-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-pink-100 px-8 py-4 rounded-full border border-pink-200">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-900 whitespace-pre-line">Calificación Promedio 4.9/5
4.9/5 Average Rating</span>
            <span className="text-gray-600 whitespace-pre-line">• Más de 200 Familias Satisfechas
• 200+ Happy Families</span>
          </div>
        </div>
      </div>
    </section>
  );
}