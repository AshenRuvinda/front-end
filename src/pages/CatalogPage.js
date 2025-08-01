import React, { useState, useEffect } from 'react';
import { Package, Search, Filter, ShoppingCart, Heart, Eye } from 'lucide-react';

const CatalogPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Todo', count: 69 },
    { id: 'chairs', name: 'Sillas', count: 24 },
    { id: 'tables', name: 'Mesas', count: 18 },
    { id: 'sofas', name: 'Sofás', count: 12 },
    { id: 'storage', name: 'Almacenamiento', count: 15 }
  ];

  const products = [
    {
      id: 1,
      name: 'Silla Moderna Ergonómica',
      category: 'chairs',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
      badge: 'Bestseller',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Mesa de Comedor Roble',
      category: 'tables',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Nuevo',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Sofá Minimalista 3 Plazas',
      category: 'sofas',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: '-25%',
      badgeColor: 'bg-red-500'
    },
    {
      id: 4,
      name: 'Estantería Industrial',
      category: 'storage',
      price: 549,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Oferta',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'Silla de Oficina Premium',
      category: 'chairs',
      price: 449,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
      badge: 'Popular',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 6,
      name: 'Mesa Lateral Nórdica',
      category: 'tables',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Eco',
      badgeColor: 'bg-green-600'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Package className="text-amber-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Catálogo</h1>
        </div>
        <p className="text-gray-600 text-lg">Descubre nuestra colección completa de muebles de alta calidad</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400" size={20} />
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
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badge */}
              <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                {product.badge}
              </div>

              {/* Action Buttons */}
              <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg group">
                  <Heart size={16} className="text-gray-700 group-hover:text-red-500 transition-colors" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
                  <Eye size={16} className="text-gray-700" />
                </button>
              </div>

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="text-sm text-green-600 font-semibold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <button className="group w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <ShoppingCart size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron productos</h3>
          <p className="text-gray-500">Intenta ajustar tus filtros o término de búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;