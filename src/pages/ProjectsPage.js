import React, { useState, useEffect } from 'react';
import { FolderOpen, Calendar, MapPin, Eye, ArrowRight, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'residential', name: 'Residencial' },
    { id: 'commercial', name: 'Comercial' },
    { id: 'office', name: 'Oficinas' },
    { id: 'hospitality', name: 'Hotelería' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Casa Moderna en Las Condes',
      category: 'residential',
      location: 'Las Condes, Santiago',
      date: '2024',
      description: 'Proyecto integral de diseño interior para una casa moderna de 250m². Incorporamos muebles minimalistas y funcionales que maximizan los espacios y la luz natural.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop'
      ],
      client: 'Familia Rodriguez',
      duration: '3 meses',
      budget: '$25,000'
    },
    {
      id: 2,
      title: 'Oficinas Tech Company',
      category: 'office',
      location: 'Providencia, Santiago',
      date: '2024',
      description: 'Diseño de espacios de trabajo colaborativo para una empresa tecnológica. Se priorizó la flexibilidad, comodidad y productividad del equipo.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop'
      ],
      client: 'InnovaTech Solutions',
      duration: '2 meses',
      budget: '$40,000'
    },
    {
      id: 3,
      title: 'Restaurante Gourmet',
      category: 'commercial',
      location: 'Vitacura, Santiago',
      date: '2023',
      description: 'Diseño completo de restaurante de alta cocina. Creamos un ambiente elegante y acogedor que refleja la calidad de la propuesta gastronómica.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop'
      ],
      client: 'Bistro del Valle',
      duration: '4 meses',
      budget: '$60,000'
    },
    {
      id: 4,
      title: 'Apartamento Minimalista',
      category: 'residential',
      location: 'Ñuñoa, Santiago',
      date: '2023',
      description: 'Transformación completa de un apartamento de 80m² aplicando principios minimalistas. Cada mueble fue cuidadosamente seleccionado para maximizar funcionalidad.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'
      ],
      client: 'Ana Martinez',
      duration: '6 semanas',
      budget: '$18,000'
    },
    {
      id: 5,
      title: 'Hotel Boutique',
      category: 'hospitality',
      location: 'Valparaíso',
      date: '2023',
      description: 'Diseño interior completo para hotel boutique de 20 habitaciones. Combinamos confort moderno con elementos de la cultura local porteña.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop'
      ],
      client: 'Hotel Casa del Mar',
      duration: '5 meses',
      budget: '$85,000'
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <FolderOpen className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Nuestros Proyectos</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explora algunos de nuestros proyectos más destacados y descubre cómo transformamos espacios
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-center space-x-2">
          <Filter className="text-gray-400" size={20} />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.date}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{project.duration}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              <button className="group w-full bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <span>Ver Detalles</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>
                  
                  {/* Gallery */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedProject.gallery.slice(1).map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${selectedProject.title} ${idx + 2}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Detalles del Proyecto</h3>
                    
                    <div>
                      <span className="text-sm font-semibold text-gray-500">Cliente:</span>
                      <p className="text-gray-800">{selectedProject.client}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-gray-500">Ubicación:</span>
                      <p className="text-gray-800">{selectedProject.location}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-gray-500">Duración:</span>
                      <p className="text-gray-800">{selectedProject.duration}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-gray-500">Presupuesto:</span>
                      <p className="text-gray-800 text-lg font-bold text-amber-600">{selectedProject.budget}</p>
                    </div>

                    <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold mt-6">
                      Solicitar Presupuesto Similar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Te inspiraste con algún proyecto?</h2>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          Contáctanos para crear un proyecto único y personalizado para tu espacio
        </p>
        <button className="bg-white text-amber-700 px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          Iniciar Mi Proyecto
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;