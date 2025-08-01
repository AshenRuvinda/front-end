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

  const products = [
    // Chairs
    {
      id: 1,
      name: 'Modern Ergonomic Office Chair',
      category: 'chairs',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
      badge: 'Bestseller',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Premium Executive Chair',
      category: 'chairs',
      price: 449,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=300&h=300&fit=crop',
      badge: 'Popular',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Scandinavian Dining Chair',
      category: 'chairs',
      price: 129,
      originalPrice: 169,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: '-24%',
      badgeColor: 'bg-red-500'
    },
    {
      id: 4,
      name: 'Vintage Leather Armchair',
      category: 'chairs',
      price: 699,
      originalPrice: 899,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: 'Limited',
      badgeColor: 'bg-amber-600'
    },
    {
      id: 5,
      name: 'Gaming Chair Pro',
      category: 'chairs',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 6,
      name: 'Minimalist Accent Chair',
      category: 'chairs',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Eco',
      badgeColor: 'bg-green-600'
    },
    // Tables
    {
      id: 7,
      name: 'Oak Dining Table',
      category: 'tables',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 8,
      name: 'Nordic Side Table',
      category: 'tables',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: 'Eco',
      badgeColor: 'bg-green-600'
    },
    {
      id: 9,
      name: 'Glass Coffee Table',
      category: 'tables',
      price: 449,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Modern',
      badgeColor: 'bg-indigo-500'
    },
    {
      id: 10,
      name: 'Industrial Desk',
      category: 'tables',
      price: 329,
      originalPrice: 429,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Sale',
      badgeColor: 'bg-red-500'
    },
    {
      id: 11,
      name: 'Marble Console Table',
      category: 'tables',
      price: 799,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Luxury',
      badgeColor: 'bg-purple-600'
    },
    // Sofas
    {
      id: 12,
      name: 'Minimalist 3-Seat Sofa',
      category: 'sofas',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: '-25%',
      badgeColor: 'bg-red-500'
    },
    {
      id: 13,
      name: 'L-Shaped Sectional',
      category: 'sofas',
      price: 1899,
      originalPrice: 2399,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Popular',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 14,
      name: 'Velvet Loveseat',
      category: 'sofas',
      price: 799,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Luxury',
      badgeColor: 'bg-amber-600'
    },
    {
      id: 15,
      name: 'Reclining Sofa',
      category: 'sofas',
      price: 1599,
      originalPrice: 1999,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Comfort',
      badgeColor: 'bg-blue-600'
    },
    // Storage
    {
      id: 16,
      name: 'Industrial Bookshelf',
      category: 'storage',
      price: 549,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Sale',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 17,
      name: 'Modular Storage Unit',
      category: 'storage',
      price: 399,
      originalPrice: 499,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Versatile',
      badgeColor: 'bg-green-500'
    },
    {
      id: 18,
      name: 'Floating Wall Shelves',
      category: 'storage',
      price: 89,
      originalPrice: 119,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Space-Saver',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 19,
      name: 'Wooden Storage Cabinet',
      category: 'storage',
      price: 329,
      originalPrice: 429,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: 'Classic',
      badgeColor: 'bg-brown-600'
    },
    {
      id: 20,
      name: 'Media Console',
      category: 'storage',
      price: 449,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Modern',
      badgeColor: 'bg-indigo-500'
    },
    {
      id: 21,
      name: 'Walk-in Wardrobe System',
      category: 'storage',
      price: 1299,
      originalPrice: 1699,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Premium',
      badgeColor: 'bg-purple-600'
    },
    // Lighting
    {
      id: 22,
      name: 'Modern Floor Lamp',
      category: 'lighting',
      price: 179,
      originalPrice: 229,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Stylish',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 23,
      name: 'Crystal Chandelier',
      category: 'lighting',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: 'Elegant',
      badgeColor: 'bg-purple-600'
    },
    {
      id: 24,
      name: 'Industrial Pendant Light',
      category: 'lighting',
      price: 149,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Trendy',
      badgeColor: 'bg-gray-600'
    },
    {
      id: 25,
      name: 'LED Desk Lamp',
      category: 'lighting',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Energy-Efficient',
      badgeColor: 'bg-green-500'
    },
    // Decor
    {
      id: 26,
      name: 'Abstract Wall Art Set',
      category: 'decor',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Artistic',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 27,
      name: 'Decorative Mirrors',
      category: 'decor',
      price: 129,
      originalPrice: 169,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      badge: 'Elegant',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 28,
      name: 'Indoor Plant Collection',
      category: 'decor',
      price: 89,
      originalPrice: 119,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      badge: 'Fresh',
      badgeColor: 'bg-green-600'
    },
    {
      id: 29,
      name: 'Luxury Throw Pillows',
      category: 'decor',
      price: 59,
      originalPrice: 79,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      badge: 'Comfort',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 30,
      name: 'Ceramic Vase Set',
      category: 'decor',
      price: 99,
      originalPrice: 129,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
      badge: 'Handmade',
      badgeColor: 'bg-amber-600'
    }
  ];

  // Calculate actual category counts
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return products.length;
    return products.filter(product => product.category === categoryId).length;
  };

  const categories = [
    { id: 'all', name: 'All', count: getCategoryCount('all') },
    { id: 'chairs', name: 'Chairs', count: getCategoryCount('chairs') },
    { id: 'tables', name: 'Tables', count: getCategoryCount('tables') },
    { id: 'sofas', name: 'Sofas', count: getCategoryCount('sofas') },
    { id: 'storage', name: 'Storage', count: getCategoryCount('storage') },
    { id: 'lighting', name: 'Lighting', count: getCategoryCount('lighting') },
    { id: 'decor', name: 'Decor', count: getCategoryCount('decor') }
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
          <h1 className="text-4xl font-bold text-gray-800">Product Catalog</h1>
        </div>
        <p className="text-gray-600 text-lg">Discover our complete collection of high-quality furniture and home decor</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
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
            style={{ transitionDelay: `${index * 50}ms` }}
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
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;