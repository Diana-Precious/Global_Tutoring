import React from 'react';
import { Search, UserCheck, BookOpen, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find Your Tutor',
      description: 'Browse our extensive database of qualified tutors by subject, experience, location, and availability.',
      details: ['Filter by subject and level', 'Read reviews and ratings', 'Compare tutor profiles', 'Check real-time availability']
    },
    {
      icon: UserCheck,
      title: 'Book a Session',
      description: 'Schedule your first session with your chosen tutor at a time and location that works for you.',
      details: ['Choose in-home or online', 'Select date and time', 'Confirm booking instantly', 'Receive confirmation details']
    },
    {
      icon: BookOpen,
      title: 'Start Learning',
      description: 'Join your session and begin your personalized learning journey with expert guidance and support.',
      details: ['Interactive learning experience', 'Personalized lesson plans', 'Real-time collaboration', 'Session recordings available']
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed progress reports, assessments, and personalized feedback.',
      details: ['Performance analytics', 'Progress tracking dashboard', 'Goal setting and milestones', 'Regular assessments']
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How it
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with LearnConnect is simple. Follow these four easy steps to begin your learning journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;