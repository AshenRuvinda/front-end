import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
      title: "Diseño que transforma espacios,",
      subtitle: "Simplicidad y elegancia en cada pieza"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=400&fit=crop",
      title: "Muebles de calidad superior,",
      subtitle: "Creados para durar toda la vida"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="relative h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {slides[currentSlide].title}
              <br />
              <span className="text-amber-400">{slides[currentSlide].subtitle}</span>
            </h1>
            <button className="mt-6 bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-amber-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Catálogo
            </button>
            <p className="mt-4 text-gray-200 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;