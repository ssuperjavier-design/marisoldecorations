import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-black/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-pink-500 mr-2" />
            <h1 className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } transition-colors duration-300`}>
              Marisol <span className="text-pink-500">Decorations</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              About
            </a>
            <a href="#services" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Services
            </a>
            <a href="#rentals" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Rentals
            </a>
            <a href="#gallery" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Gallery
            </a>
            <a href="#testimonials" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Reviews
            </a>
            <a href="#contact" className={`hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Contact
            </a>
            <div className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-pink-200'}`}>
              Se habla español
            </div>
            <a href="tel:(650) 669-1092" className={`flex items-center space-x-2 hover:text-pink-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span>(650) 669-1092</span>
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-pink-500 transition-colors">
              About
            </a>
            <a href="#services" className="block text-gray-700 hover:text-pink-500 transition-colors">
              Services
            </a>
            <a href="#rentals" className="block text-gray-700 hover:text-pink-500 transition-colors">
              Rentals
            </a>
            <a href="#gallery" className="block text-gray-700 hover:text-pink-500 transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-pink-500 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </a>
            <div className="text-sm text-pink-600 font-medium">Se habla español</div>
            <a href="tel:(650) 669-1092" className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(650) 669-1092</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}