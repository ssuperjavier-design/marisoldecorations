import React, { useState } from 'react';
import { ArrowLeft, Download, Heart, Crown, Sparkles, Camera, Filter } from 'lucide-react';

interface LookbookImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function Lookbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const lookbookImages: LookbookImage[] = [
    // Quinceañeras (15 images)
    { id: 1, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Princess Theme Quinceañera", category: "quinceanera", description: "Elegant pink and gold princess theme with royal decorations" },
    { id: 2, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Garden Party Quinceañera", category: "quinceanera", description: "Beautiful outdoor garden setting with floral arrangements" },
    { id: 3, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Vintage Quinceañera", category: "quinceanera", description: "Classic vintage theme with antique decorations" },
    { id: 4, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Modern Quinceañera", category: "quinceanera", description: "Contemporary design with sleek modern elements" },
    { id: 5, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Butterfly Theme", category: "quinceanera", description: "Whimsical butterfly decorations in pastel colors" },
    { id: 6, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Royal Blue Quinceañera", category: "quinceanera", description: "Elegant royal blue and silver theme" },
    { id: 7, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Rose Gold Elegance", category: "quinceanera", description: "Sophisticated rose gold and blush decorations" },
    { id: 8, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Masquerade Quinceañera", category: "quinceanera", description: "Mysterious masquerade theme with elegant masks" },
    { id: 9, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Fairy Tale Theme", category: "quinceanera", description: "Magical fairy tale setting with enchanted decorations" },
    { id: 10, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Tropical Quinceañera", category: "quinceanera", description: "Vibrant tropical theme with exotic flowers" },
    { id: 11, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Winter Wonderland", category: "quinceanera", description: "Elegant winter theme with white and silver" },
    { id: 12, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Bohemian Quinceañera", category: "quinceanera", description: "Boho chic style with natural elements" },
    { id: 13, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Hollywood Glamour", category: "quinceanera", description: "Glamorous Hollywood theme with gold accents" },
    { id: 14, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Mexican Traditional", category: "quinceanera", description: "Traditional Mexican cultural elements and colors" },
    { id: 15, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Starry Night Theme", category: "quinceanera", description: "Celestial theme with stars and midnight blue" },

    // Weddings (20 images)
    { id: 16, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Romantic Garden Wedding", category: "wedding", description: "Outdoor ceremony with lush floral arrangements" },
    { id: 17, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Beach Wedding Setup", category: "wedding", description: "Elegant beachside ceremony decorations" },
    { id: 18, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Rustic Barn Wedding", category: "wedding", description: "Charming rustic theme with natural elements" },
    { id: 19, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Classic Church Wedding", category: "wedding", description: "Traditional church ceremony decorations" },
    { id: 20, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Modern Minimalist Wedding", category: "wedding", description: "Clean, contemporary wedding design" },
    { id: 21, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Vintage Wedding Reception", category: "wedding", description: "Elegant vintage-inspired reception setup" },
    { id: 22, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Luxury Ballroom Wedding", category: "wedding", description: "Grand ballroom with crystal chandeliers" },
    { id: 23, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Outdoor Tent Wedding", category: "wedding", description: "Elegant tent reception with string lights" },
    { id: 24, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Cultural Wedding Ceremony", category: "wedding", description: "Traditional cultural wedding elements" },
    { id: 25, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Intimate Wedding Setup", category: "wedding", description: "Small, intimate ceremony decorations" },
    { id: 26, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Spring Wedding Theme", category: "wedding", description: "Fresh spring flowers and pastel colors" },
    { id: 27, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Fall Wedding Decorations", category: "wedding", description: "Autumn colors and seasonal elements" },
    { id: 28, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Winter Wedding Elegance", category: "wedding", description: "Sophisticated winter wedding theme" },
    { id: 29, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Destination Wedding", category: "wedding", description: "Exotic destination wedding setup" },
    { id: 30, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Rooftop Wedding", category: "wedding", description: "Urban rooftop ceremony with city views" },
    { id: 31, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Vineyard Wedding", category: "wedding", description: "Romantic vineyard setting with wine barrels" },
    { id: 32, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Industrial Wedding", category: "wedding", description: "Modern industrial venue decorations" },
    { id: 33, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Bohemian Wedding", category: "wedding", description: "Free-spirited boho wedding decorations" },
    { id: 34, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Glamorous Wedding", category: "wedding", description: "Luxurious glamorous wedding setup" },
    { id: 35, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Country Wedding", category: "wedding", description: "Charming country-style wedding decorations" },

    // Birthday Parties (10 images)
    { id: 36, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Kids Birthday Party", category: "birthday", description: "Colorful children's birthday celebration" },
    { id: 37, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Adult Birthday Celebration", category: "birthday", description: "Sophisticated adult birthday party" },
    { id: 38, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Milestone Birthday", category: "birthday", description: "Special milestone birthday decorations" },
    { id: 39, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Themed Birthday Party", category: "birthday", description: "Creative themed birthday celebration" },
    { id: 40, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Outdoor Birthday Party", category: "birthday", description: "Fun outdoor birthday celebration" },
    { id: 41, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Princess Birthday Party", category: "birthday", description: "Magical princess-themed birthday" },
    { id: 42, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Superhero Birthday", category: "birthday", description: "Action-packed superhero birthday theme" },
    { id: 43, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Garden Birthday Party", category: "birthday", description: "Beautiful garden birthday celebration" },
    { id: 44, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Pool Birthday Party", category: "birthday", description: "Fun poolside birthday celebration" },
    { id: 45, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Elegant Birthday Dinner", category: "birthday", description: "Sophisticated birthday dinner setup" },

    // Special Events (5 images)
    { id: 46, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Anniversary Celebration", category: "special", description: "Romantic anniversary party decorations" },
    { id: 47, src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Corporate Event", category: "special", description: "Professional corporate event setup" },
    { id: 48, src: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Graduation Party", category: "special", description: "Celebratory graduation decorations" },
    { id: 49, src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Baby Shower", category: "special", description: "Sweet baby shower decorations" },
    { id: 50, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Holiday Celebration", category: "special", description: "Festive holiday party decorations" }
  ];

  const categories = [
    { id: 'all', name: 'Todos / All', icon: Camera },
    { id: 'quinceanera', name: 'Quinceañeras', icon: Crown },
    { id: 'wedding', name: 'Bodas / Weddings', icon: Heart },
    { id: 'birthday', name: 'Cumpleaños / Birthdays', icon: Sparkles },
    { id: 'special', name: 'Eventos Especiales / Special Events', icon: Filter }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? lookbookImages 
    : lookbookImages.filter(img => img.category === selectedCategory);

  const handlePrint = () => {
    window.print();
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver / Back</span>
              </button>
              <div className="flex items-center space-x-2">
                <Heart className="w-8 h-8 text-pink-500" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Marisol <span className="text-pink-500">Decorations</span>
                </h1>
              </div>
            </div>
            <button 
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Imprimir / Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 whitespace-pre-line">
          Catálogo de Eventos Exclusivo
          Exclusive Event Lookbook
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-pre-line">
          Descubre más de 50 diseños únicos y transformaciones impresionantes que hemos creado para familias en San José y el Área de la Bahía

          Discover 50+ unique designs and stunning transformations we've created for families in San Jose and the Bay Area
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{image.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    image.category === 'quinceanera' ? 'bg-pink-100 text-pink-600' :
                    image.category === 'wedding' ? 'bg-red-100 text-red-600' :
                    image.category === 'birthday' ? 'bg-purple-100 text-purple-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {categories.find(cat => cat.id === image.category)?.name.split(' / ')[0]}
                  </span>
                  <div className="text-pink-500 text-sm font-medium">#{image.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4 whitespace-pre-line">
            ¿Te Inspiraste? ¡Creemos Algo Hermoso Juntos!
            Inspired? Let's Create Something Beautiful Together!
          </h3>
          <p className="text-pink-100 text-lg mb-8 whitespace-pre-line">
            Cada imagen representa una familia feliz y un momento inolvidable. Tu celebración puede ser la próxima.

            Every image represents a happy family and an unforgettable moment. Your celebration could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(650) 669-1092"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              Llamar Ahora / Call Now: (650) 669-1092
            </a>
            <a 
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Consulta Gratuita / Free Consultation
            </a>
          </div>
          <div className="mt-6 text-pink-200">
            <p>Se habla español • Serving San Jose & Bay Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}