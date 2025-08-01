import React, { useEffect, useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const CollectionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "Diseño de vanguardia",
      discount: "Hasta 50% de descuento",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      bgColor: "from-yellow-200 to-yellow-300",
      price: "$899",
      originalPrice: "$1,799"
    },
    {
      id: 2,
      name: "Silla nueva",
      discount: "Hasta 50% de descuento",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      bgColor: "from-orange-200 to-orange-300",
      price: "$599",
      originalPrice: "$1,199"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.collection-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`collection-section mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Collection</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-gradient-to-br ${product.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="p-6">
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${hoveredItem === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Heart size={16} className="text-gray-700" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Eye size={16} className="text-gray-700" />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -50%
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.discount}</p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  <button className="group w-full bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                    <ShoppingCart size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Comprar ahora</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;