
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="font-serif text-2xl font-bold mb-4 block">Keith Zenda</Link>
            <p className="text-earth-300 mb-6">
              Zimbabwean artist exploring humanity, heritage, and the natural beauty of Africa through vibrant artwork.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-earth-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#gallery" className="text-earth-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-earth-300 hover:text-white transition-colors">Exhibitions</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-earth-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-earth-300 hover:text-white transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-earth-300 hover:text-white transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-earth-300 hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-earth-300 mb-4">
              Sign up to receive updates on new artwork and upcoming exhibitions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-earth-800 text-white border border-earth-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-terracotta-500"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-terracotta-600 text-white rounded-r-md hover:bg-terracotta-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-earth-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Keith Zenda. All rights reserved.
          </p>
          <div className="text-earth-400 text-sm">
            <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
