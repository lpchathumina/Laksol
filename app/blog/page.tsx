// pages/blog.js
import Layout from '../components/Layout';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Eco-Friendly Cleaning',
    excerpt: 'Discover how to maintain a clean home while being kind to the environment with our expert tips and product recommendations.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Eco-Friendly',
    image: '/images/blog-eco-friendly.jpg'
  },
  {
    id: 2,
    title: '5 Common Car Wash Mistakes You Should Avoid',
    excerpt: 'Learn about the most common car washing mistakes and how our professional car wash shampoo can help you achieve showroom shine.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    category: 'Automotive',
    image: '/images/blog-car-wash.jpg'
  },
  {
    id: 3,
    title: 'Kitchen Hygiene: Beyond Basic Cleaning',
    excerpt: 'Explore advanced kitchen cleaning techniques and learn why our dish wash liquid is formulated for maximum hygiene and safety.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Kitchen',
    image: '/images/blog-kitchen.jpg'
  },
  {
    id: 4,
    title: 'The Science Behind Effective Hand Sanitizers',
    excerpt: 'Understand what makes a hand sanitizer truly effective and how our formula provides superior protection while being gentle on skin.',
    date: 'February 28, 2024',
    readTime: '3 min read',
    category: 'Health',
    image: '/images/blog-sanitizer.jpg'
  },
  {
    id: 5,
    title: 'Bathroom Cleaning: Tips for Sparkling Results',
    excerpt: 'Professional tips for maintaining a clean, fresh bathroom using our specialized bathroom cleaner and disinfectant.',
    date: 'February 20, 2024',
    readTime: '4 min read',
    category: 'Bathroom',
    image: '/images/blog-bathroom.jpg'
  },
  {
    id: 6,
    title: 'Why Choose Concentrated Cleaning Products?',
    excerpt: 'Learn about the benefits of concentrated cleaning formulas for your wallet and the environment.',
    date: 'February 15, 2024',
    readTime: '5 min read',
    category: 'Tips',
    image: '/images/blog-concentrated.jpg'
  }
];

const categories = [
  'All',
  'Eco-Friendly',
  'Automotive',
  'Kitchen',
  'Health',
  'Bathroom',
  'Tips'
];

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">CleanPro Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, cleaning guides, and industry insights to help you maintain a cleaner, healthier space
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium shadow-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">
                      Featured
                    </span>
                    <div className="text-6xl mb-4">🌟</div>
                    <p className="text-blue-100">In-depth guides and expert advice</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span className="mx-2">•</span>
                    <span className="text-blue-600 font-medium">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link 
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Full Article
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
                  >
                    Read More
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Get the latest cleaning tips, product updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}