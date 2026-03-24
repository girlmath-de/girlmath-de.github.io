import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Girl Math Logo" className="w-8 h-8 rounded-lg shadow-sm" referrerPolicy="no-referrer" />
            <span className="font-display font-extrabold text-xl tracking-tight text-primary">
              Girl Math
            </span>
          </Link>
          <p className="text-gray-500 leading-relaxed max-w-xs">
            The smart way to justify your lifestyle. Understand what's actually worth your money.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Product</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/data-policy" className="hover:text-primary transition-colors">Data Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Connect</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="mailto:contactgirlmath@gmail.com" className="hover:text-primary transition-colors">Email Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {currentYear} Girl Math. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-gray-600">Privacy</Link>
          <Link to="/terms-of-use" className="hover:text-gray-600">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
