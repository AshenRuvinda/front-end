import React, { useState, useEffect } from 'react';
import { Package } from 'lucide-react';

const CatalogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { name: 'Sillas', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=200&fit=crop', count: 24 },
    { name: 'Mesas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop', count: 18 },
    { name: 'Sofás', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop', count: 12 },
    { name: 'Almacenamiento', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop', count: 15 }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Package className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Catálogo</h1>
        </div>
        <p className="text-gray-600 text-lg">Descubre nuestra colección completa de muebles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {category.count}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
              <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Ver productos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;