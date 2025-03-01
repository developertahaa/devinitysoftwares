import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react"; // Import from lucide-react

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Devinity Softwares
            </h3>
            <p className="text-gray-400 text-sm">
              Crafting digital excellence since 2020. Transforming ideas into innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>support@devinitysoftwares.com</li>
              <li>+44 7476111698</li>
              <li>0318 8578807</li>
              <li>HeadQuarter: Karachi, Pakistan.</li>
              <li>Office: Londonderry, United Kingdom.</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-pink-500 pb-2">Stay Updated</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter size={24} aria-label="Twitter" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin size={24} aria-label="LinkedIn" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Github size={24} aria-label="GitHub" />
              </a>
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="mt-2 w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Devinity Softwares. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-500/10 rounded-full transform -translate-x-1/2"></div>
    </footer>
  );
};

export default Footer;