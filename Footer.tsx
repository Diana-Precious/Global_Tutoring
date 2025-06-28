import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Globe2 } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        'Find Tutors',
        'Become a Tutor',
        'How It Works',
        'Success Stories',
        'Mobile App',
        'API Access'
      ]
    },
    {
      title: 'Subjects',
      links: [
        'Mathematics',
        'Science & Physics',
        'Languages',
        'Programming',
        'Test Preparation',
        'Business & Economics'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Support',
        'Safety Guidelines',
        'Community Forum',
        'Live Chat',
        'Video Tutorials'
      ]
    },
    {
      title: 'Company',
      links: [
        'About LearnConnect',
        'Careers',
        'Press Kit',
        'Partnerships',
        'Investor Relations',
        'Blog'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">LearnConnect</span>
                <div className="text-sm text-gray-400 flex items-center space-x-1">
                  <Globe2 className="h-3 w-3" />
                  <span>Global Learning Network</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Connecting students with world-class tutors for personalized learning experiences. 
              From elementary to university level, we make quality education accessible globally through 
              both in-home and online tutoring services.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">support@learnconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Available in 75+ Countries</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                      {link}
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to get updates on new tutors, educational resources, and special offers.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Download Our App</h3>
              <p className="text-gray-300 mb-6">
                Get the LearnConnect mobile app for learning on the go.
              </p>
              <div className="flex space-x-3">
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-colors border border-gray-700">
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-colors border border-gray-700">
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 LearnConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;