import React, { useEffect, useState } from 'react';
import { CheckCircle, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Counter animation
          const interval = setInterval(() => {
            setCounter((prev) => {
              if (prev < 150) {
                return prev + 5;
              } else {
                clearInterval(interval);
                return 150;
              }
            });
          }, 50);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about-section mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Stats Card */}
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <CheckCircle size={48} className="mx-auto mb-4 text-amber-200" />
              <div className="text-5xl font-bold mb-2">{counter}+</div>
              <p className="text-amber-100 font-medium">Proyectos completados</p>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 flex flex-col justify-center text-center relative">
            <div className="absolute top-4 right-4 opacity-10">
              <Users size={64} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                ¿Quiénes somos?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex justify-center mt-6">
                <Award className="text-amber-600" size={32} />
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
              alt="About Us"
              className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">Calidad Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;