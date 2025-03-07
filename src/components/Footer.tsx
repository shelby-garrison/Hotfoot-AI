
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and description */}
          <div className="mb-10 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">M</span>
              </div>
              <h2 className="text-white text-xl font-bold">Magic UI</h2>
            </div>
            <p className="text-white/60 max-w-xs mt-3 mb-4">
              UI Library for Design Engineers
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-white/90 font-semibold mb-4 uppercase text-sm tracking-wider">PRODUCT</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Email Collection</Link></li>
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white/90 font-semibold mb-4 uppercase text-sm tracking-wider">COMMUNITY</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Discord</Link></li>
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Twitter</Link></li>
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Email</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white/90 font-semibold mb-4 uppercase text-sm tracking-wider">LEGAL</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Magic UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
