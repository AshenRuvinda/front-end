import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedSection = () => {
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

    const element = document.querySelector('.featured-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`featured-section mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Content Side */}
          <div className="lg:w-1/2 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Simplicidad en cada detalle
              </h2>
              <p className="text-amber-100 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <button className="group inline-flex items-center bg-white text-amber-700 px-8 py-3 rounded-full hover:bg-amber-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Explorar colección
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
              alt="Featured Furniture"
              className="w-full h-64 lg:h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 z-20">
              Nuevo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;