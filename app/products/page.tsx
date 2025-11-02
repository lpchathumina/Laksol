// pages/products.js
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Premium Dish Wash',
    description: 'Advanced formula that cuts through tough grease while being gentle on your hands.',
    price: '$4.99',
    category: 'kitchen',
    features: ['Removes tough grease', 'Gentle on hands', 'Pleasant lemon scent', 'Eco-friendly'],
    image: '/images/dish-wash.jpg'
  },
  {
    id: 2,
    name: 'Car Wash Shampoo',
    description: 'Professional-grade formula that safely cleans and protects your car paint.',
    price: '$12.99',
    category: 'automotive',
    features: ['Paint-safe formula', 'Removes dirt & grime', 'Adds shine', 'Water spots prevention'],
    image: '/images/car-wash.jpg'
  },
  {
    id: 3,
    name: 'Bathroom Cleaner',
    description: 'Powerful disinfectant that eliminates germs, mold, and unpleasant odors.',
    price: '$5.99',
    category: 'bathroom',
    features: ['Kills 99.9% germs', 'Removes mold & mildew', 'Fresh scent', 'No harsh chemicals'],
    image: '/images/bathroom-cleaner.jpg'
  },
  {
    id: 4,
    name: 'Hand Sanitizer',
    description: 'Quick-drying formula that provides 99.9% protection against germs.',
    price: '$3.99',
    category: 'personal',
    features: ['99.9% germ protection', 'Moisturizing', 'Quick drying', 'Pleasant fragrance'],
    image: '/images/hand-sanitizer.jpg'
  },
  {
    id: 5,
    name: 'Floor Cleaner',
    description: 'Multi-surface cleaner that leaves floors sparkling clean and streak-free.',
    price: '$6.99',
    category: 'home',
    features: ['Multi-surface', 'Streak-free', 'Quick drying', 'Wood-safe'],
    image: '/images/floor-cleaner.jpg'
  },
  {
    id: 6,
    name: 'Glass Cleaner',
    description: 'Crystal clear formula for streak-free windows and glass surfaces.',
    price: '$4.49',
    category: 'home',
    features: ['Streak-free', 'Ammonia-free', 'Fast acting', 'Pleasant scent'],
    image: '/images/glass-cleaner.jpg'
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'bathroom', name: 'Bathroom' },
  { id: 'automotive', name: 'Automotive' },
  { id: 'personal', name: 'Personal Care' },
  { id: 'home', name: 'Home Care' }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of professional cleaning solutions for every need
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">🧼</div>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      href={`/products/${product.id}`}
                      className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      View Details
                    </Link>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}