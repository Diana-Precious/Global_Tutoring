import React, { useState } from 'react';
import { Menu, X, BookOpen, ChevronDown, Globe2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                LearnConnect
              </span>
              <div className="text-xs text-gray-500 font-medium flex items-center space-x-1">
                <Globe2 className="h-3 w-3" />
                <span>Global Learning Network</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                <span>Find Tutors</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Mathematics & Sciences</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Languages & Literature</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Test Preparation</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Technology & Programming</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Arts & Music</a>
                </div>
              )}
            </div>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Become a Tutor</a>
            <div className="flex items-center space-x-3">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                Get Started
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Find Tutors</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Become a Tutor</a>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;