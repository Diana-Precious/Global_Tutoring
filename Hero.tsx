import React, { useState } from 'react';
import { Search, Play, Star, Users, Globe2, Clock, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Languages', 'Programming',
    'Chemistry', 'Physics', 'Biology', 'Economics', 'Art', 'Music', 'Business'
  ];

  const levels = [
    'Elementary School', 'Middle School', 'High School', 'College/University', 'Adult Learning'
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Connecting 250,000+ students globally</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            World-class tutoring
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> delivered</span>
            <br />to your door
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Connect with certified tutors worldwide for personalized learning experiences. 
            From elementary to graduate level, we bring expert education to your home or online.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 from 25k+ reviews</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <span className="font-medium">Expert Tutors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe2 className="h-5 w-5 text-teal-600" />
                <span className="font-medium">Global Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Ideal Tutor</h3>
              <p className="text-gray-600">Search by subject, academic level, or learning preferences</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What subject do you need help with?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                  />
                </div>
                
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                >
                  <option value="">Select Subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                >
                  <option value="">Select Level</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Find Tutors</span>
                </button>
                
                <button className="sm:w-auto bg-white text-gray-700 py-4 px-8 rounded-xl font-semibold border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-center md:text-left text-gray-600 mb-4">Popular subjects:</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['Mathematics', 'Science', 'English', 'Programming', 'Languages'].map(subject => (
                      <button
                        key={subject}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors text-sm font-medium"
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-center md:text-left text-gray-600 mb-4">Learning options:</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>In-Home</span>
                    </span>
                    <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Globe2 className="h-3 w-3" />
                      <span>Online</span>
                    </span>
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>Group Sessions</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;