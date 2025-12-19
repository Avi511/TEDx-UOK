// components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">TED</span>
              <span className="text-[#EB0028]">x</span>
              <span className="text-white">UOK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-[#EB0028] font-bold' : 'text-white hover:text-gray-300'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events') ? 'text-[#EB0028] font-bold' : 'text-white hover:text-gray-300'} transition-colors`}
            >
              Events
            </Link>
            <Link 
              to="/speakers" 
              className={`${isActive('/speakers') ? 'text-[#EB0028] font-bold' : 'text-white hover:text-gray-300'} transition-colors`}
            >
              Speakers
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') || location.pathname.startsWith('/about/') 
                ? 'text-[#EB0028] font-bold' 
                : 'text-white hover:text-gray-300'} transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-[#EB0028] font-bold' : 'text-white hover:text-gray-300'} transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-[#EB0028] bg-gray-900' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className={`${isActive('/events') ? 'text-[#EB0028] bg-gray-900' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/speakers" 
                className={`${isActive('/speakers') ? 'text-[#EB0028] bg-gray-900' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') || location.pathname.startsWith('/about/') 
                  ? 'text-[#EB0028] bg-gray-900' 
                  : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-[#EB0028] bg-gray-900' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;