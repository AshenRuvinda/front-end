import React, { useState, useEffect } from 'react';
import { Wrench, Truck, Palette, Home, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Diseño Interior',
      description: 'Transformamos tus espacios con diseños únicos y funcionales que reflejan tu personalidad.',
      features: ['Consulta personalizada', 'Planos 3D', 'Selección de materiales', 'Coordinación de colores'],
      price: 'Desde $500',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Wrench,
      title: 'Ensamblaje',
      description: 'Servicio profesional de montaje y ensamblaje de todos nuestros muebles en tu hogar.',
      features: ['Montaje profesional', 'Herramientas incluidas', 'Limpieza post-instalación', 'Garantía de servicio'],
      price: 'Desde $80',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: Truck,
      title: 'Entrega Express',
      description: 'Entrega rápida y segura de tus muebles directamente en la puerta de tu hogar.',
      features: ['Entrega en 24-48h', 'Seguimiento en tiempo real', 'Manejo cuidadoso', 'Servicio asegurado'],
      price: 'Desde $50',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 4,
      icon: Home,
      title: 'Consultoría',
      description: 'Asesoramiento experto para optimizar tus espacios y seleccionar los muebles perfectos.',
      features: ['Evaluación del espacio', 'Recomendaciones personalizadas', 'Presupuesto detallado', 'Seguimiento post-venta'],
      price: 'Gratuita',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Contacto Inicial',
      description: 'Nos pones en contacto y agendamos una cita para conocer tus necesidades.'
    },
    {
      step: 2,
      title: 'Evaluación',
      description: 'Visitamos tu espacio y realizamos un análisis detallado de tus requerimientos.'
    },
    {
      step: 3,
      title: 'Propuesta',
      description: 'Creamos una propuesta personalizada con diseños, productos y presupuesto.'
    },
    {
      step: 4,
      title: 'Ejecución',
      description: 'Implementamos la solución con nuestro equipo de profesionales especializados.'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Wrench className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Nuestros Servicios</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Ofrecemos servicios integrales para hacer realidad tus proyectos de decoración y amueblamiento
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <IconComponent size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-lg">{service.price}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="group w-full mt-6 bg-gray-100 hover:bg-amber-600 text-gray-800 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                  <span>{selectedService === service.id ? 'Ver menos' : 'Ver detalles'}</span>
                  <ArrowRight className={`transition-transform duration-300 ${selectedService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo Trabajamos?</h2>
          <p className="text-gray-600 text-lg">Nuestro proceso simple y efectivo en 4 pasos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div
              key={step.step}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                  {step.step}
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-600 to-transparent"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos transformar tu espacio
        </p>
        <button className="bg-white text-amber-700 px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          Solicitar Consulta Gratuita
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;