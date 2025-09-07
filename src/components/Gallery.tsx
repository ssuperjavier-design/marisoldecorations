import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    `https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/490272378_1352694242938795_813680526126366644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lhsPkBS0Zi4Q7kNvwH2WFtk&_nc_oc=AdmRJFyQCFPUggxAc4-8xl9w05PH-RMQhYLu7vB_fyGywNHlFu2OTkCONfkb6chy09gwuzGgG2jfKQwPjJKQH1zX&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=P-RjA9EsbueTCdlXDHkp2Q&oh=00_AfYWqCJerPFlmb3DbKB2oVZW0OCZwZzMNjwlNUOeWl78bg&oe=68C3B4E5`,
    `https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/482987961_1321096529431900_3589312517943002998_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZjWUzfJ2A1YQ7kNvwFP72qK&_nc_oc=AdnKksYLsg2yEI3zOF-xWy_BfphOjy1x2ggSAGHxkQPauekQRr8NiO52PxFt15OSxwAnjaw3XyX1cgJmpjPqsEnc&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=2WChecCHZGGGMX--Fnnpiw&oh=00_AfZMw3gM_9ykALEVx5ZxNlrvMSdm88xRUSnGbo0zJDmZAg&oe=68C3CD2B`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/125776193_3389242214486722_2427128299466808949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VW2bHE3wgzkQ7kNvwFyPgv5&_nc_oc=Adkaxytl1xRD3Lc2XFt8m2RAazZbEhSQGs_c949hWxqMO_yI_1CX_AMkEOK9JLX1jyg444kROQZABP2RzuhgFjiS&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=Sew36fp0AQuxtmbf85Mk0A&oh=00_AfXAPF3j0bCTLmFLsV0jYo4MDXtS6ddjM_IufdjOZdj9Aw&oe=68CDD734`,
    `https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/482248049_1318479803026906_545408908461370292_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vcyufv2TwcUQ7kNvwGeNOr7&_nc_oc=AdkDJOrAVKr4gU80vyEpZ9iIvOMcym5ocqbjz9Xm4l6no4VwdQIcPZ9hk5kG0x3fzi1IverRy7v6ts3TqGVJFYMI&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=KS0_ch_s0rfrRzCkxjZxiw&oh=00_Afa8vKwRNyRA0DNHrXDo5eFz_jdIknw_pKvrN06SVu005g&oe=68C3B65D`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/481237184_9148961508514735_1761498316845622253_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V-AFOmO5JrMQ7kNvwECW7a2&_nc_oc=Adk5R0cCi9AZYV6ODGw_-JifM93gZQASU9_nVmsEDBorqvGmK7cSMiyDmplVG9U_ei-0nijFLO2f6_UVfB1hqIgC&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=xwf_ntMW5t2VYnq8JRe2Aw&oh=00_AfYTOIgdz0ew1a0ZSlQaZ7WhNEyP8K9s-VpNxwXLDYXQ5g&oe=68C3C3D0`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/36420329_1700257680051859_1611261782867836928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2h5Iu7wrg_wQ7kNvwEbVql3&_nc_oc=AdkSVSio3fcMwqhsK_RczYrUr2a9wi4hAXez-5nAY8OpdVDAcq3g0xGBJeX3dwmBkneBHlS6B85FYVH2MKGhB_Ff&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=XpVyXf5_K-QPQ2x6aMH9sw&oh=00_AfVuIpdNng7XXS5xwfVITu0UjeftsE0lzFVuYfpXKoCrtA&oe=68CDDB20`
  ];

  const slideshowImages = [
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/492484849_1362022362005983_1366296930265224261_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CNLQIY5ftloQ7kNvwHZsMx-&_nc_oc=AdkhLtIodcsG5jEvuzi4k1iu1DGkup3WjRL4RQx8E22cVzlvfEoQM-NycjgOBaJ9TxGP23d4FYBlpSOR4sjZNKZo&_nc_zt=23&se=-1&_nc_ht=scontent-sjc6-1.xx&_nc_gid=yj6-JCSjmF3CXHcVI2riTw&oh=00_AfZpU9vBw9iiK2yTsNJSKIEUCr2e0EkaJqQ7agWSdfOuHg&oe=68C3C146`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t1.6435-9/31949245_1638689592875335_5762281948567306240_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kmb_jHiCeAMQ7kNvwFgzDkv&_nc_oc=AdnzVfEbq3FtEQ0vKG079pcwMtHg3WaOTMq0i_Lb8fLOFV7z31asft6Owmn6GWko7_yjgw0Y9LVKJ1yIV4lSRYV8&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=YdVO8PsGbCrhc70hCHOP9A&oh=00_AfWCBRmnN8aG-WgbM1kXO-CWNInoYfTlTjMKG2oEz8wrsw&oe=68CDAE06`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/488908156_1349232623284957_1425209951867332862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1vKOBdDarOoQ7kNvwGWXnrq&_nc_oc=AdkXmHvWYso1DaOugb6owNd-jrz_NLs__k9HPagR5EO7_QkIXOe9VK2QgW1fX09wce7we-ehrjbg-nv4QjKjsl3O&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=JwVBV8lXsnlDmp40DTpvIQ&oh=00_AfYIaDvpXx40J2luKit88w02uRLOGengq9rkLGf7OUiV2Q&oe=68C3DEDA`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/492484849_1362022362005983_1366296930265224261_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SaSwdWkd0cwQ7kNvwF62tYQ&_nc_oc=Adluu953fytZ9B8LHMtIK_zK1B32NRua0WdorLHxp-LXxVK-nXXslTSoP1zgDpndEaCqfgO91t6mc5bMjzW0YHTQ&_nc_zt=23&se=-1&_nc_ht=scontent-sjc6-1.xx&_nc_gid=SiM0K1MwwJF3sIKyKml2MQ&oh=00_AfVJC420OVkvb14N49yej0MYzf_iK9fh2dCHNMXY2iAv7w&oe=68AC0646`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/493970157_3395396067258840_4995764588489362896_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QX02YOq0dqEQ7kNvwEREdUm&_nc_oc=AdnMYqkzx5AGB0QlwGx7MyNr2O1zpsHwq8dQHvTVdihYV16FuJjvslK3j0a0G9a6DtJ_6v5O7XyArHhqOUFDg3Wu&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=wI2huYDt_KpXjnW9BrfWqQ&oh=00_AfXxoPS83FpBKqjOD4-tIlbKZIBXUE2LpXgpYmL5_-wMUA&oe=68AC1107`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/508176849_3458276877637425_5540101965195222350_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qpa5lSXfa8wQ7kNvwFuJOT8&_nc_oc=AdmaCvIL1T4oGgLvxk498loBDI_Ntf71lQtE_26KnK2F6LHzwkr5CvbbMrTpKtqYpfOaPtLqlrm6Sgzl63zGbVAC&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=qajlyFdc9RIuYZDbTo5vMQ&oh=00_AfVsgPeSqz3ITrjI-A6ssMuLrROVsfuoX_CteUtw4hTtwA&oe=68AC2B42`,
    `https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/508351346_3458276840970762_8364627534634122473_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5ZeAuSkNxLEQ7kNvwFJIGBd&_nc_oc=Admo8ISUI4wQZAN_E2-TSJQXhIfhnnJbRbxTol6PAmigbmQKYXxiA9P1iIPGHrZMUYsS5O98Utz7TqR3viMSWA5u&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=uFc1gecdomGCxmXckiFzVg&oh=00_AfVq2V9qcIjVqI3PWXr9wefN1e-mzOYV1w3aChuaBHRB3g&oe=68AC2CA3`
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