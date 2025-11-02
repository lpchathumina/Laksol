// pages/index.js
import Link from 'next/link';
import Layout from '../components/Layout';

const featuredProducts = [
  {
    id: 1,
    name: 'Dish Wash Liquid',
    description: 'Tough on grease, gentle on hands',
    image: '/images/dish-wash.jpg',
    category: 'Kitchen'
  },
  {
    id: 2,
    name: 'Car Wash Shampoo',
    description: 'Professional grade car cleaning',
    image: '/images/car-wash.jpg',
    category: 'Automotive'
  },
  {
    id: 3,
    name: 'Bathroom Cleaner',
    description: 'Eliminates germs and odors',
    image: '/images/bathroom-cleaner.jpg',
    category: 'Bathroom'
  },
  {
    id: 4,
    name: 'Hand Sanitizer',
    description: '99.9% germ protection',
    image: '/images/hand-sanitizer.jpg',
    category: 'Personal Care'
  }
];

const stats = [
  { number: '50+', label: 'Products' },
  { number: '10K+', label: 'Happy Customers' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Support' }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning
              <span className="block text-blue-200">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover our range of eco-friendly cleaning products for home, car, and workplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors hover-scale"
              >
                Shop Products
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors hover-scale"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="hover-scale">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular cleaning solutions trusted by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🧼</div>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    href={`/products/${product.id}`}
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Cleaner Spaces?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust CleanPro for their cleaning needs
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block hover-scale"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}