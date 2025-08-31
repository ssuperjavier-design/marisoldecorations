import React from 'react';
import { Calendar, Download, Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-500 to-purple-600">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Plan Your Special Event?
        </h2>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and let's create something beautiful together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300">
            Call Now
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>(650) 669-1092</span>
          </div>
          <div className="hidden sm:block text-white/50">•</div>
          <span className="font-semibold">Se habla español</span>
        </div>
      </div>
    </section>
  );
}