import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="text-xl font-bold">CHSMART TOP</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for high-quality aramid fiber materials from China since 2019. 
              We provide comprehensive solutions for aramid composite materials worldwide.
            </p>
            <div className="flex space-x-4">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">info@chsmartlife.top</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">+86 138 0013 8000</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Shanghai, China</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Aramid Filament</li>
              <li>Aramid Paper</li>
              <li>Aramid Fabric</li>
              <li>Aramid Ropes</li>
              <li>Composite Parts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CHSMART TOP. All rights reserved. | ISO 9001:2015 Certified
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;