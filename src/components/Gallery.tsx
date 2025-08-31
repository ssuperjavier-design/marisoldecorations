import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/490272378_1352694242938795_813680526126366644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9A2tBqxDV4oQ7kNvwHGHmhq&_nc_oc=AdlLpIsqXw9YR7gMVl9mKcLVv6FTUeTdU84jOiYJPqLLccxCSwkv2_RwKt5NWaqrRpdwu0Qe-3ubDE_RJdfoOhvI&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=tpwqeNIbefzxewkRg06h7w&oh=00_AfW17E9aCkSd1zQYfYHwMC0CRFl7qdhTrk5AB05_Li2SOA&oe=68AC3225',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/482221177_1322893545918865_240192932793445185_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0ZhakmUsYdEQ7kNvwGLRGk7&_nc_oc=Adm65AHPKyMPcSZSUpqOcJclSVUA7ia1RQt_dhf4w3ByfkEF4wlO3sGj9eHtMsFanY4cNtEFERqfwPhcesqULOCS&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=4f1ZGbGat9dgkAhqsACXJw&oh=00_AfWWGuSpVoFJ_FakGsP_jXldEwWvIqCwGV_ziU3EXsrVcQ&oe=68AC05DB',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/125776193_3389242214486722_2427128299466808949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VW2bHE3wgzkQ7kNvwFyPgv5&_nc_oc=Adkaxytl1xRD3Lc2XFt8m2RAazZbEhSQGs_c949hWxqMO_yI_1CX_AMkEOK9JLX1jyg444kROQZABP2RzuhgFjiS&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=Sew36fp0AQuxtmbf85Mk0A&oh=00_AfXAPF3j0bCTLmFLsV0jYo4MDXtS6ddjM_IufdjOZdj9Aw&oe=68CDD734',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/482206810_1324717662403120_8626764170607093601_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fpKC7X91eMcQ7kNvwHqMGrk&_nc_oc=Adlym6-XDidVRIOn9OG8iEp9RiSaqrEJR6IMot84wVOPXbWsldBdJcWtGO6xGpg5dI8I8s_0zNvqdZph6UnvazvJ&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=Y-VA-X-g3FEOb4c-XgdxeA&oh=00_AfW9NKPvj7yaDYZx4rRkzFlaxbNe9Qw2-YOF5J7hInKrOw&oe=68AC0630',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/509576860_9945499838860894_483000244043863548_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uVmDRmumm9QQ7kNvwFlw6F-&_nc_oc=Admx2kZPoLkS5JcdCmxtZ4myJlDafSN00ZIl96IxNDYwSd6q3qefE33FM5wKr08S5SAxtPvLLGHptw1cJ900VC4T&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=FrCzrXzFgAgiHTMmpeywGw&oh=00_AfU-aV6DJuLqaxHHfuAhN83h2KJHcUD_sKvrIarPJf7irA&oe=68AEC353',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/36420329_1700257680051859_1611261782867836928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2h5Iu7wrg_wQ7kNvwEbVql3&_nc_oc=AdkSVSio3fcMwqhsK_RczYrUr2a9wi4hAXez-5nAY8OpdVDAcq3g0xGBJeX3dwmBkneBHlS6B85FYVH2MKGhB_Ff&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=XpVyXf5_K-QPQ2x6aMH9sw&oh=00_AfVuIpdNng7XXS5xwfVITu0UjeftsE0lzFVuYfpXKoCrtA&oe=68CDDB20'
  ];

  const slideshowImages = [
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/516921143_3485490998249346_8688105354515231004_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DsyTwVOFuH0Q7kNvwEGM5_Q&_nc_oc=Adm3pqWTRQ47oGWn2ouO3G2oYo6abx8Kxl6lqMzU_SgcmqtYD_1mwVXtE0cSYaEsk2GYzM8HH31w8OHKDBnnZvXR&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=SQ3QgqQedq7wrK8U9nsRKg&oh=00_AfWe0nZFMvfwoB4TA0VhXQFw5bAKzrRZ6duo-egkSmhk4g&oe=68AD3453',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/31949245_1638689592875335_5762281948567306240_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kmb_jHiCeAMQ7kNvwFgzDkv&_nc_oc=AdnzVfEbq3FtEQ0vKG079pcwMtHg3WaOTMq0i_Lb8fLOFV7z31asft6Owmn6GWko7_yjgw0Y9LVKJ1yIV4lSRYV8&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=YdVO8PsGbCrhc70hCHOP9A&oh=00_AfWCBRmnN8aG-WgbM1kXO-CWNInoYfTlTjMKG2oEz8wrsw&oe=68CDAE06',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/488903680_1349232583284961_2461398651234030434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3IiJ8Zyl6AsQ7kNvwGcDNzT&_nc_oc=AdkSrbXIgPHqJNVbaR2bS4Hi2dceppQ-MaausSqOeobxP0p9hl4U0fDmV4H7VmyDf32m0TszlbJyatjfYL-0DbCS&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=TaOhJLVrS6Zc1GyIWZzI1A&oh=00_AfWtLCH7Gog69trQ7f3V6NlRpel-hkhJ7GlVV15RW3mTmg&oe=68AC06BD',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/492484849_1362022362005983_1366296930265224261_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SaSwdWkd0cwQ7kNvwF62tYQ&_nc_oc=Adluu953fytZ9B8LHMtIK_zK1B32NRua0WdorLHxp-LXxVK-nXXslTSoP1zgDpndEaCqfgO91t6mc5bMjzW0YHTQ&_nc_zt=23&se=-1&_nc_ht=scontent-sjc6-1.xx&_nc_gid=SiM0K1MwwJF3sIKyKml2MQ&oh=00_AfVJC420OVkvb14N49yej0MYzf_iK9fh2dCHNMXY2iAv7w&oe=68AC0646',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/493970157_3395396067258840_4995764588489362896_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QX02YOq0dqEQ7kNvwEREdUm&_nc_oc=AdnMYqkzx5AGB0QlwGx7MyNr2O1zpsHwq8dQHvTVdihYV16FuJjvslK3j0a0G9a6DtJ_6v5O7XyArHhqOUFDg3Wu&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=wI2huYDt_KpXjnW9BrfWqQ&oh=00_AfXxoPS83FpBKqjOD4-tIlbKZIBXUE2LpXgpYmL5_-wMUA&oe=68AC1107',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/508176849_3458276877637425_5540101965195222350_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qpa5lSXfa8wQ7kNvwFuJOT8&_nc_oc=AdmaCvIL1T4oGgLvxk498loBDI_Ntf71lQtE_26KnK2F6LHzwkr5CvbbMrTpKtqYpfOaPtLqlrm6Sgzl63zGbVAC&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=qajlyFdc9RIuYZDbTo5vMQ&oh=00_AfVsgPeSqz3ITrjI-A6ssMuLrROVsfuoX_CteUtw4hTtwA&oe=68AC2B42',
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/508351346_3458276840970762_8364627534634122473_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5ZeAuSkNxLEQ7kNvwFJIGBd&_nc_oc=Admo8ISUI4wQZAN_E2-TSJQXhIfhnnJbRbxTol6PAmigbmQKYXxiA9P1iIPGHrZMUYsS5O98Utz7TqR3viMSWA5u&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=uFc1gecdomGCxmXckiFzVg&oh=00_AfVq2V9qcIjVqI3PWXr9wefN1e-mzOYV1w3aChuaBHRB3g&oe=68AC2CA3'
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            Nuestras Transformaciones Exclusivas
            Our Signature Transformations
          </h2>
          <p className="text-lg text-gray-600 whitespace-pre-line">
            Mira cómo convertimos sueños en realidad impresionante
            See how we turn dreams into breathtaking reality
          </p>
        </div>

        {/* Static Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={image} 
                alt={`Event decoration ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold whitespace-pre-line">Diseño de Eventos de Lujo
Luxury Event Design</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Slideshow */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center whitespace-pre-line">Celebraciones Destacadas
Featured Celebrations</h3>
          
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              {slideshowImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Featured event ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 shadow-sm ${
                    index === currentSlide ? 'bg-pink-500' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg text-center leading-tight">
            <span className="block sm:inline">Reserva tu Consulta de Estilo Gratuita</span>
            <span className="block sm:inline sm:before:content-['/'] sm:before:mx-2">Book Your Free Style Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}