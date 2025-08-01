import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'catalog', label: 'Catálogo' },
    { id: 'services', label: 'Servicios' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md p-4 shadow-lg rounded-lg mb-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-amber-700 cursor-pointer hover:text-amber-800 transition-colors"
          onClick={() => handleNavClick('home')}
        >
          Logo
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium ${
                currentPage === item.id ? 'text-amber-700' : ''
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-700 rounded-full"></div>
              )}
            </button>
          ))}
          <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Solicitar consulta
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-amber-700 transition-colors ${
                currentPage === item.id ? 'text-amber-700 bg-amber-50' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="w-full mt-4 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
            Solicitar consulta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;