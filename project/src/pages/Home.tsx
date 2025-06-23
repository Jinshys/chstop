import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Superior Quality',
      description: 'ISO 9001:2015 certified with rigorous quality control standards'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Industry Experience',
      description: 'Over 5 years of expertise in aramid fiber manufacturing and supply'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable shipping and support'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Trusted Partners',
      description: 'Backed by leading Chinese state-owned companies and manufacturers'
    }
  ];

  const products = [
    {
      title: 'Aramid Filament',
      description: 'High-strength continuous fibers for demanding applications',
      image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Aramid Paper',
      description: 'Electrical insulation materials with excellent thermal properties',
      image: 'https://images.pexels.com/photos/3846134/pexels-photo-3846134.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Aramid Fabric',
      description: 'Protective textiles for safety and industrial applications',
      image: 'https://images.pexels.com/photos/6069096/pexels-photo-6069096.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Composite Parts',
      description: 'Custom-engineered components for aerospace and automotive',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-orange-400 font-semibold text-lg">We are China UD Fiber Supplier Since 2019</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your One-Stop <span className="text-orange-400">Aramid</span> Composite Materials Solution Provider
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl">
                  Leading supplier of high-quality aramid fiber materials from China. 
                  Trusted by manufacturers worldwide for superior performance and reliability.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center"
                >
                  GET FREE SAMPLES
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aramid Fiber Filament"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CHSMART TOP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven manufacturing expertise to deliver 
              the highest quality aramid fiber solutions for your applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw materials to finished components, we offer comprehensive aramid fiber solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to="/products"
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our expert team to discuss your aramid fiber requirements. 
            We offer free samples and technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;