import React from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 whitespace-pre-line">
              Creamos Momentos Inolvidables <br></br>
              Creating Unforgettable Moments
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
              En Marisol Decorations, nos especializamos en transformar tu visión en una realidad impresionante. Con más de una década de experiencia en diseño de eventos de lujo, entendemos que cada celebración cuenta una historia única.</p>

              <p className="text-m text-gray-600 mb-6 leading-relaxed whitespace-pre-line"> Desde quinceañeras íntimas hasta bodas grandiosas, honramos las tradiciones culturales mientras creamos diseños modernos y elegantes que dejan impresiones duraderas en ti y tus invitados.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
              At Marisol Decorations, we specialize in transforming your vision into breathtaking reality. With over a decade of experience in luxury event design, we understand that every celebration tells a unique story.</p>

             <p className="text-m text-gray-600 mb-8 leading-relaxed whitespace-pre-line"> From intimate quinceañeras to grand weddings, we honor cultural traditions while creating modern, elegant designs that leave lasting impressions on you and your guests.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 whitespace-pre-line">Celebración Cultural /
Cultural Celebration</h4>
                  <p className="text-gray-600 whitespace-pre-line">Honrando tradiciones con elegancia moderna /
Honoring traditions with modern elegance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 whitespace-pre-line">Diseño de Lujo /
Luxury Design</h4>
                  <p className="text-gray-600 whitespace-pre-line">Eventos dignos de revista que superan expectativas /
Magazine-worthy events that exceed expectations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 whitespace-pre-line">Experiencia Sin Estrés /
Stress-Free Experience</h4>
                  <p className="text-gray-600 whitespace-pre-line">Planificación y ejecución completa de principio a fin /
Complete planning and execution from start to finish</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <p className="text-pink-800 font-medium text-center whitespace-pre-line">
                "Se habla español - Orgullosamente sirviendo a la comunidad multicultural de San José" /
                "Proudly serving San Jose's multicultural community"
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/29468597_1591937864217175_2170968237116751872_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RAFBmZQOsTIQ7kNvwFni03S&_nc_oc=Adl0J2q6W_2IRl8nzAeKzepgVcysAQg1D_CQ9zTD3JbjFfPOUf_KECT8r4getREr7tycP_8dUF391ePmXOLS6nvI&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=2laRIAab5P2pR_oHPNee0g&oh=00_AfYdrTnBj1ASAVQqQ_uNfN787bi6Tek3q_LYsRRDP-2sLQ&oe=68EBECF3" 
              alt="Luxury event decoration"
              className="rounded-2xl shadow-xl w-full h-auto object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm whitespace-pre-line">Eventos de Ensueño</div>
  <div className="text-sm whitespace-pre-line"> Dream Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}