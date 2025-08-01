import React, { useEffect, useState, useRef } from 'react';
import { ShoppingCart, Heart, Eye, Star, ArrowRight, Zap } from 'lucide-react';

const CollectionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState(new Set());
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Products', count: 6 },
    { id: 'furniture', name: 'Furniture', count: 4 },
    { id: 'decor', name: 'Home Decor', count: 2 }
  ];

  const products = [
    {
      id: 1,
      name: "Modern Luxury Chair",
      description: "Premium ergonomic design with leather finish",
      category: "furniture",
      discount: 50,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      bgColor: "from-amber-50 via-orange-50 to-yellow-50",
      accentColor: "amber",
      price: 899,
      originalPrice: 1799,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      features: ["Premium Leather", "Ergonomic Design", "5-Year Warranty"]
    },
    {
      id: 2,
      name: "Contemporary Office Chair",
      description: "Sleek design perfect for modern workspaces",
      category: "furniture",
      discount: 45,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      bgColor: "from-amber-100 via-yellow-100 to-orange-100",
      accentColor: "amber",
      price: 599,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 89,
      badge: "New Arrival",
      features: ["Adjustable Height", "Breathable Mesh", "360° Swivel"]
    },
    {
      id: 3,
      name: "Vintage Accent Chair",
      description: "Classic design with modern comfort",
      category: "furniture",
      discount: 35,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop",
      bgColor: "from-yellow-50 via-amber-50 to-orange-50",
      accentColor: "amber",
      price: 749,
      originalPrice: 1149,
      rating: 4.7,
      reviews: 156,
      badge: "Limited Edition",
      features: ["Vintage Style", "Solid Wood Frame", "Handcrafted"]
    },
    {
      id: 4,
      name: "Executive Leather Chair",
      description: "Ultimate luxury for professional environments",
      category: "furniture",
      discount: 40,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      bgColor: "from-orange-50 via-amber-50 to-yellow-50",
      accentColor: "amber",
      price: 1299,
      originalPrice: 2149,
      rating: 4.9,
      reviews: 203,
      badge: "Premium",
      features: ["Italian Leather", "Memory Foam", "Built-in Massage"]
    },
    {
      id: 5,
      name: "Modern Table Lamp",
      description: "Elegant lighting solution for any space",
      category: "decor",
      discount: 25,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      bgColor: "from-yellow-100 via-orange-100 to-amber-100",
      accentColor: "amber",
      price: 199,
      originalPrice: 265,
      rating: 4.5,
      reviews: 67,
      badge: "Eco-Friendly",
      features: ["LED Compatible", "Touch Control", "Dimmer Function"]
    },
    {
      id: 6,
      name: "Designer Wall Mirror",
      description: "Stylish mirror to enhance your space",
      category: "decor",
      discount: 30,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      bgColor: "from-orange-100 via-yellow-100 to-amber-100",
      accentColor: "amber",
      price: 349,
      originalPrice: 499,
      rating: 4.4,
      reviews: 92,
      badge: "Trending",
      features: ["Beveled Edge", "Easy Installation", "Moisture Resistant"]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const getAccentColor = (color) => {
    const colors = {
      amber: 'text-amber-700 border-amber-600 bg-amber-50',
    };
    return colors[color] || colors.amber;
  };

  return (
    <section 
      ref={sectionRef}
      className={`mt-8 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
            Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of exceptional furniture and decor pieces
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 rounded-full mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200 hover:border-amber-300'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Container Block Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`bg-gradient-to-r ${
                  product.badge === 'Best Seller' ? 'from-amber-500 to-orange-500' :
                  product.badge === 'New Arrival' ? 'from-blue-500 to-indigo-500' :
                  product.badge === 'Limited Edition' ? 'from-emerald-500 to-teal-500' :
                  product.badge === 'Premium' ? 'from-purple-500 to-pink-500' :
                  product.badge === 'Eco-Friendly' ? 'from-green-500 to-lime-500' :
                  'from-cyan-500 to-blue-500'
                } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {product.badge}
                </div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{product.discount}%
                </div>
              </div>

              {/* Image Container */}
              <div className={`relative bg-gradient-to-br ${product.bgColor} p-6`}>
                <div className="relative overflow-hidden rounded-2xl group/image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className={`absolute bottom-4 right-4 flex space-x-2 transition-all duration-500 ${
                    hoveredItem === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
                        wishlist.has(product.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart size={16} className={wishlist.has(product.id) ? 'fill-current' : ''} />
                    </button>
                    <button className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg text-gray-700">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border ${getAccentColor(product.accentColor)}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save ${product.originalPrice - product.price}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="group/btn w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-[1.02]">
                  <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                  <span>Add to Cart</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-200 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>View Complete Collection</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;