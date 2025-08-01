import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'design', name: 'Diseño' },
    { id: 'trends', name: 'Tendencias' },
    { id: 'tips', name: 'Consejos' },
    { id: 'inspiration', name: 'Inspiración' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Tendencias en Muebles 2024: Minimalismo y Sostenibilidad',
      category: 'trends',
      author: 'María González',
      date: '15 Enero 2024',
      readTime: '5 min',
      excerpt: 'Descubre las últimas tendencias en mobiliario que están definiendo los espacios modernos este año.',
      content: 'El 2024 marca un punto de inflexión en el diseño de interiores, donde el minimalismo se encuentra con la sostenibilidad para crear espacios que no solo son estéticamente pleasing, sino también ambientalmente responsables...',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
      tags: ['minimalismo', 'sostenibilidad', 'tendencias']
    },
    {
      id: 2,
      title: 'Cómo Maximizar Espacios Pequeños con Muebles Inteligentes',
      category: 'tips',
      author: 'Carlos Ruiz',
      date: '12 Enero 2024',
      readTime: '7 min',
      excerpt: 'Estrategias efectivas para aprovechar cada centímetro de tu hogar sin sacrificar estilo ni funcionalidad.',
      content: 'Los espacios pequeños no tienen por qué significar menos comodidad. Con las estrategias correctas y la selección adecuada de muebles, puedes transformar incluso el apartamento más compacto en un hogar funcional y elegante...',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      tags: ['espacios pequeños', 'organización', 'funcionalidad']
    },
    {
      id: 3,
      title: 'Colores que Transforman: Psicología del Color en Interiores',
      category: 'design',
      author: 'Ana Martínez',
      date: '10 Enero 2024',
      readTime: '6 min',
      excerpt: 'Comprende cómo los colores influyen en nuestro estado de ánimo y aprende a usarlos estratégicamente.',
      content: 'El color es una herramienta poderosa en el diseño de interiores que va más allá de la estética. Cada tonalidad tiene la capacidad de influir en nuestras emociones, productividad y bienestar general...',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop',
      tags: ['colores', 'psicología', 'bienestar']
    },
    {
      id: 4,
      title: 'Muebles Vintage: Cómo Integrarlos en Espacios Modernos',
      category: 'inspiration',
      author: 'Roberto Silva',
      date: '8 Enero 2024',
      readTime: '4 min',
      excerpt: 'La clave está en el equilibrio: descubre cómo combinar lo vintage con lo contemporáneo.',
      content: 'La mezcla de muebles vintage con elementos modernos puede crear espacios únicos y llenos de personalidad. El secreto está en encontrar el equilibrio perfecto entre lo clásico y lo contemporáneo...',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
      tags: ['vintage', 'decoración', 'estilo']
    },
    {
      id: 5,
      title: 'Iluminación y Muebles: Una Relación Perfecta',
      category: 'design',
      author: 'Laura Thompson',
      date: '5 Enero 2024',
      readTime: '8 min',
      excerpt: 'Aprende a usar la iluminación para destacar tus muebles y crear atmósferas únicas.',
      content: 'La iluminación adecuada puede transformar completamente la percepción de un mueble y del espacio en general. Es el elemento que da vida a los objetos y crea la atmósfera deseada...',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      tags: ['iluminación', 'atmósfera', 'diseño']
    },
    {
      id: 6,
      title: 'Muebles Ergonómicos: Salud y Confort en Casa',
      category: 'tips',
      author: 'Dr. Patricia Vega',
      date: '2 Enero 2024',
      readTime: '6 min',
      excerpt: 'La importancia de elegir muebles que cuiden tu postura y bienestar físico.',
      content: 'En una era donde pasamos más tiempo en casa trabajando y descansando, la elección de muebles ergonómicos se vuelve crucial para nuestra salud y bienestar a largo plazo...',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop',
      tags: ['ergonomía', 'salud', 'confort']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <BookOpen className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubre consejos, tendencias e inspiración para crear los espacios de tus sueños
        </p>
      </div>

      {/* Featured Post */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{featuredPost.date}</span>
              </div>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">{featuredPost.readTime}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>
            <button 
              onClick={() => setSelectedPost(featuredPost)}
              className="group inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold w-fit"
            >
              Leer más
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filteredPosts.slice(1).map((post, index) => (
          <article
            key={post.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setSelectedPost(post)}
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800">
                {categories.find(cat => cat.id === post.category)?.name}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <User size={12} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                <span className="bg-gray-100 px-2 py-1 rounded">{post.readTime}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="group w-full bg-gray-100 hover:bg-amber-600 text-gray-800 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <span>Leer artículo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <User size={14} />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{selectedPost.date}</span>
                </div>
                <span className="bg-gray-100 px-2 py-1 rounded">{selectedPost.readTime}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                  Compartir artículo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Te gusta nuestro contenido?</h2>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          Suscríbete a nuestro newsletter y recibe los últimos consejos y tendencias directamente en tu email
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button className="bg-white text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-bold">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;