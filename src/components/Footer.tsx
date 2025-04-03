
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-eco-gradient flex items-center justify-center">
                <span className="font-bold text-white text-lg">Z2H</span>
              </div>
              <h1 className="font-bold text-xl">
                <span className="text-eco-green">Zero</span>
                <span className="text-eco-blue">2</span>
                <span className="text-eco-dark-green">Hero</span>
              </h1>
            </div>
            <p className="text-gray-600">
              AI-powered waste management platform designed to incentivize and streamline waste reporting and collection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-eco-green hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-eco-green hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-eco-green hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-eco-green hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-eco-green transition-colors">Features</a></li>
              <li><a href="#report" className="text-gray-600 hover:text-eco-green transition-colors">Report Waste</a></li>
              <li><a href="#leaderboard" className="text-gray-600 hover:text-eco-green transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-eco-green transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest news and features.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-eco-green flex-1" 
              />
              <button className="bg-eco-gradient text-white px-4 py-2 rounded-r-lg hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js 14 and Lovable
          </p>
          <p className="text-gray-500 text-sm mt-1">© 2025 Zero2Hero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
