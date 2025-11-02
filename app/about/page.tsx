// pages/about.js
import Layout from '../layout';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    description: 'With over 15 years in the cleaning industry, Sarah started CleanPro to bring professional-grade cleaning solutions to every home.',
    image: '/images/team1.jpg'
  },
  {
    name: 'Mike Chen',
    role: 'Head Chemist',
    description: 'Mike leads our R&D team, ensuring all products meet the highest standards of effectiveness and environmental safety.',
    image: '/images/team2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Success',
    description: 'Emily ensures every customer has the best experience with our products and services.',
    image: '/images/team3.jpg'
  }
];

const values = [
  {
    title: 'Quality',
    description: 'We never compromise on the quality of our ingredients or manufacturing processes.',
    icon: '🏆'
  },
  {
    title: 'Sustainability',
    description: 'Our products are eco-friendly and our packaging is recyclable whenever possible.',
    icon: '🌱'
  },
  {
    title: 'Innovation',
    description: 'We continuously research and develop new formulas to meet evolving cleaning needs.',
    icon: '💡'
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority. We listen and adapt to your needs.',
    icon: '❤️'
  }
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About CleanPro</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading the way in professional cleaning solutions since 2008
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Founded in 2008, CleanPro began with a simple mission: to create cleaning products 
                    that actually work while being safe for families and the environment.
                  </p>
                  <p>
                    What started as a small operation in a garage has grown into a trusted brand 
                    serving thousands of customers across the country. Our commitment to quality 
                    and innovation has remained unchanged.
                  </p>
                  <p>
                    Today, we continue to develop new formulas and expand our product line to meet 
                    the evolving needs of modern households and businesses.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <p className="text-xl font-semibold">15+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 hover-scale">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate people behind CleanPro's success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-2">👤</div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              "To provide effective, safe, and environmentally responsible cleaning solutions 
              that make everyday cleaning tasks easier while protecting our planet for future generations."
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}