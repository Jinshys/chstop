import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      slug: 'aramid-fiber-aerospace-applications',
      title: 'Aramid Fiber Applications in Aerospace Industry: Revolutionizing Flight',
      excerpt: 'Explore how aramid fibers are transforming aerospace manufacturing with their exceptional strength-to-weight ratio and thermal stability.',
      author: 'Dr. Chen Wei',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Aerospace',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      slug: 'automotive-aramid-composites-future',
      title: 'The Future of Automotive Industry: Aramid Composites for Lightweight Vehicles',
      excerpt: 'Discover how aramid composite materials are enabling the development of lighter, stronger, and more fuel-efficient vehicles.',
      author: 'Engineering Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Automotive',
      image: 'https://images.pexels.com/photos/3846134/pexels-photo-3846134.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      slug: 'aramid-paper-electrical-insulation',
      title: 'Aramid Paper in Electrical Insulation: Superior Performance Under Extreme Conditions',
      excerpt: 'Learn about the unique properties of aramid paper that make it ideal for high-voltage electrical insulation applications.',
      author: 'Technical Department',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Electrical',
      image: 'https://images.pexels.com/photos/6069096/pexels-photo-6069096.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      slug: 'ballistic-protection-aramid-fabrics',
      title: 'Advanced Ballistic Protection: How Aramid Fabrics Save Lives',
      excerpt: 'Understanding the science behind aramid fabric ballistic protection and its critical role in personal safety equipment.',
      author: 'Safety Research Team',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Defense',
      image: 'https://images.pexels.com/photos/4993739/pexels-photo-4993739.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      slug: 'aramid-manufacturing-quality-control',
      title: 'Quality Control in Aramid Fiber Manufacturing: Ensuring Consistent Excellence',
      excerpt: 'An inside look at the rigorous quality control processes that ensure every aramid fiber product meets international standards.',
      author: 'Quality Assurance Team',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Manufacturing',
      image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = ['All', 'Aerospace', 'Automotive', 'Electrical', 'Defense', 'Manufacturing'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert insights, industry trends, and technical knowledge about aramid fiber applications and innovations
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on aramid fiber technology and industry trends
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;