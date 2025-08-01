import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.footer-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`footer-section mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Content Side */}
            <div className="flex-1 text-white space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Calidad superior</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+1 234 567 8900</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Nueva York, NY</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button className="group bg-white text-gray-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <span>Conoce más</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-500 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-gray-400 text-sm">
              <div>
                <p>&copy; 2024 Logo. Todos los derechos reservados.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;