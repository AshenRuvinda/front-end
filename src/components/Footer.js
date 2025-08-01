import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    const element = document.querySelector('.footer-section');
    if (element) observer.observe(element);
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer className={`footer-section mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 p-8">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-1 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Premium Quality</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  Handcrafted furniture combining timeless design with modern functionality using sustainable materials.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone size={14} />
                    <span>+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={14} />
                    <span>New York, NY 10001</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Social */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white relative">
                  Stay Connected
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </h4>
                
                {/* Newsletter */}
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                  />
                  <button className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    >
                      <social.icon size={16} className="text-gray-400 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-6">
              <button className="group bg-gradient-to-r from-white to-gray-100 text-gray-800 px-8 py-3 rounded-full hover:from-gray-100 hover:to-gray-200 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto">
                <span>Explore Collection</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-sm">
                <div className="text-gray-400">
                  <p>&copy; 2024 <span className="text-white font-medium">Premium Furniture</span>. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
};

export default Footer;