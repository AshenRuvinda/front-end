import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Diseño Interior',
    'Ensamblaje de Muebles',
    'Entrega Express',
    'Consultoría',
    'Proyecto Completo',
    'Otro'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+56 2 2345 6789', '+56 9 8765 4321'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@furniture.cl', 'ventas@furniture.cl'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Av. Providencia 1234', 'Santiago, Chile'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lun - Vie: 9:00 - 18:00', 'Sáb: 10:00 - 16:00'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const faqs = [
    {
      question: '¿Ofrecen servicio de entrega?',
      answer: 'Sí, ofrecemos servicio de entrega en toda la Región Metropolitana. Para otras regiones, consulta disponibilidad.'
    },
    {
      question: '¿Cuánto tiempo toma el ensamblaje?',
      answer: 'El tiempo de ensamblaje varía según el tipo de mueble. Generalmente, entre 1-3 horas por pieza.'
    },
    {
      question: '¿Tienen garantía los muebles?',
      answer: 'Todos nuestros muebles incluyen garantía de 2 años contra defectos de fabricación.'
    },
    {
      question: '¿Hacen diseños personalizados?',
      answer: 'Sí, ofrecemos servicios de diseño personalizado según tus necesidades y espacios específicos.'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <MessageCircle className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Contacto</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos y hagamos realidad el espacio de tus sueños
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="text-amber-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Envíanos un mensaje</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${info.color} p-4 text-white`}>
                  <div className="flex items-center space-x-3">
                    <IconComponent size={24} />
                    <h3 className="text-lg font-bold">{info.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl shadow-lg p-6 text-white text-center">
            <Calendar className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">¿Necesitas asesoría urgente?</h3>
            <p className="text-amber-100 mb-4">Agenda una videollamada gratuita</p>
            <button className="bg-white text-amber-700 px-6 py-2 rounded-full hover:bg-amber-50 transition-colors font-semibold">
              Agendar consulta
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra ubicación</h2>
          <p className="text-gray-600 mb-6">
            Visítanos en nuestro showroom y descubre toda nuestra colección
          </p>
        </div>
        <div className="h-80 bg-gray-200 relative overflow-hidden">
          {/* Placeholder for map - in a real application, you'd integrate with Google Maps or similar */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 font-semibold">Av. Providencia 1234</p>
              <p className="text-gray-500">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;