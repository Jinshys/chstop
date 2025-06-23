import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog content - in a real app, this would be fetched based on the slug
  const post = {
    title: 'Aramid Fiber Applications in Aerospace Industry: Revolutionizing Flight',
    author: 'Dr. Chen Wei',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Aerospace',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p>The aerospace industry has always been at the forefront of materials innovation, constantly seeking lighter, stronger, and more durable materials to improve aircraft performance and safety. Among the revolutionary materials transforming modern aviation, aramid fibers stand out as game-changers in aerospace engineering.</p>

      <h2>What Makes Aramid Fibers Perfect for Aerospace?</h2>
      
      <p>Aramid fibers possess a unique combination of properties that make them ideal for aerospace applications:</p>
      
      <ul>
        <li><strong>Exceptional Strength-to-Weight Ratio:</strong> Aramid fibers are up to 5 times stronger than steel while being significantly lighter, making them perfect for weight-critical aerospace applications.</li>
        <li><strong>High Temperature Resistance:</strong> With thermal stability up to 400°C, aramid materials can withstand the extreme temperatures encountered in aerospace environments.</li>
        <li><strong>Chemical Resistance:</strong> Excellent resistance to aviation fuels, hydraulic fluids, and other chemicals commonly used in aircraft.</li>
        <li><strong>Fatigue Resistance:</strong> Superior resistance to cyclic loading, crucial for aircraft components subjected to repeated stress cycles.</li>
      </ul>

      <h2>Key Aerospace Applications</h2>

      <h3>1. Aircraft Structural Components</h3>
      <p>Aramid fiber reinforced composites are extensively used in aircraft fuselage panels, wing structures, and control surfaces. These components benefit from the material's high strength and low weight, contributing to improved fuel efficiency and performance.</p>

      <h3>2. Interior Components</h3>
      <p>Aramid papers and fabrics are used in aircraft interiors for their fire resistance properties. From seat covers to cabin panels, these materials help meet stringent aviation safety standards while maintaining low weight.</p>

      <h3>3. Engine Components</h3>
      <p>High-temperature aramid materials are used in engine nacelles, thrust reversers, and other components exposed to extreme heat and mechanical stress.</p>

      <h3>4. Safety Equipment</h3>
      <p>Aramid fabrics are essential in manufacturing pilot flight suits, protective gear, and emergency equipment due to their flame-resistant properties and durability.</p>

      <h2>The Future of Aramid in Aerospace</h2>

      <p>As the aerospace industry continues to evolve toward more sustainable and efficient aircraft, aramid fibers are positioned to play an even more critical role. Emerging applications include:</p>

      <ul>
        <li>Next-generation composite structures for electric and hybrid aircraft</li>
        <li>Advanced thermal protection systems for hypersonic vehicles</li>
        <li>Lightweight cable and wire management systems</li>
        <li>Enhanced ballistic protection for military aircraft</li>
      </ul>

      <h2>Quality and Certification</h2>

      <p>In aerospace applications, quality is paramount. At CHSMART TOP, we ensure all our aramid products meet or exceed international aerospace standards, including:</p>

      <ul>
        <li>AS9100 aerospace quality management</li>
        <li>NADCAP special process certifications</li>
        <li>FAA and EASA material approvals</li>
        <li>Military specifications compliance</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Aramid fibers continue to revolutionize the aerospace industry by enabling the development of lighter, stronger, and more efficient aircraft. As technology advances and new applications emerge, these remarkable materials will undoubtedly play an increasingly important role in shaping the future of flight.</p>

      <p>For aerospace manufacturers looking to leverage the benefits of high-quality aramid materials, partnering with experienced suppliers like CHSMART TOP ensures access to certified products and technical expertise necessary for success in this demanding industry.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-gray-600 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Aerospace-Grade Aramid Materials?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our technical team can help you select the right aramid fiber solutions for your aerospace applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Our Experts
            </Link>
            <Link
              to="/products"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${2166711 + i}/pexels-photo-${2166711 + i}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Related Article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Related Article Title {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the related article content...
                  </p>
                  <Link
                    to="/blog"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;