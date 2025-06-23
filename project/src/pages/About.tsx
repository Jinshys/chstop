import React from 'react';
import { Award, Users, Globe, Shield, Factory, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Established as a leading aramid fiber supplier' },
    { year: '2020', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 quality management certification' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded to serve customers in 30+ countries' },
    { year: '2022', title: 'Technology Upgrade', description: 'Invested in advanced manufacturing equipment' },
    { year: '2023', title: 'Strategic Partnerships', description: 'Formed alliances with major Chinese manufacturers' },
    { year: '2024', title: 'Innovation Leader', description: 'Leading provider of aramid composite solutions' }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Occupational Health & Safety',
    'GB/T 19001 Chinese National Standard',
    'CE Marking Compliance',
    'RoHS Compliance'
  ];

  const partners = [
    'China National Chemical Corporation',
    'Sinopec Shanghai Petrochemical',
    'DuPont China Holdings',
    'Teijin Aramid (China)',
    'SGL Carbon China',
    'Toray Industries China'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CHSMART TOP</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Your trusted source for high-quality aramid fiber materials from China. 
              We are the main source and ultimate partner for aramid fiber from China.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of Aramid Materials
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2019, CHSMART TOP has been at the forefront of aramid fiber innovation in China. 
                We specialize in providing comprehensive solutions for aramid composite materials, 
                serving customers worldwide with unmatched quality and reliability.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Backed by leading Chinese state-owned companies and multiple cutting-edge material 
                manufacturers, we maintain the highest standards of quality and service. Our commitment 
                to excellence is reflected in our ISO certifications and GBJ qualifications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing Facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and drive our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Quality First',
                description: 'Uncompromising commitment to delivering the highest quality aramid materials with rigorous testing and certification.'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Customer Focus',
                description: 'Building long-term partnerships through exceptional service, technical support, and customized solutions.'
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: 'Global Reach',
                description: 'Serving customers worldwide with reliable supply chains and comprehensive logistics support.'
              },
              {
                icon: <Factory className="w-8 h-8 text-blue-600" />,
                title: 'Innovation',
                description: 'Continuously investing in R&D and advanced manufacturing technologies to stay ahead of industry trends.'
              },
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: 'Reliability',
                description: 'Consistent delivery performance and product quality that our customers can depend on.'
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: 'Excellence',
                description: 'Pursuing excellence in every aspect of our business, from manufacturing to customer service.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding in 2019 to becoming a leading aramid fiber supplier
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Certifications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality is validated through multiple international and national certifications, 
                ensuring that our products meet the highest standards of performance and safety.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Strategic Partners
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Backed by leading Chinese state-owned companies and multiple cutting-edge material manufacturers, 
                we leverage strong partnerships to deliver superior products and services.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers worldwide who trust CHSMART TOP for their aramid fiber needs. 
            Let's discuss how we can support your next project.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Partnership
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;