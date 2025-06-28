import React from 'react';
import { Home, BookOpen, Target, Users, Globe2, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'In-Home Tutoring',
      description: 'Certified tutors come to your home for personalized, face-to-face learning sessions',
      features: ['Background-verified tutors', 'Flexible scheduling', 'All subjects & levels', 'Progress monitoring'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BookOpen,
      title: 'Homework & Assignment Support',
      description: 'Expert guidance with daily homework, projects, and challenging assignments',
      features: ['Step-by-step assistance', 'Subject expertise', 'Deadline management', 'Quality review'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for standardized tests, entrance exams, and certifications',
      features: ['SAT/ACT/GRE/GMAT prep', 'College entrance exams', 'Professional certifications', 'Practice tests'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe2,
      title: 'Online Learning Sessions',
      description: 'Connect with tutors worldwide through our interactive virtual classroom',
      features: ['HD video conferencing', 'Interactive whiteboard', 'Screen sharing', 'Session recordings'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Group Learning',
      description: 'Cost-effective group sessions with peers at similar academic levels',
      features: ['Small groups (2-4 students)', 'Peer collaboration', 'Shared costs', 'Social learning'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: '24/7 Academic Support',
      description: 'Round-the-clock academic assistance whenever you need help',
      features: ['Instant help available', 'Global time zones', 'Emergency sessions', 'Always-on support'],
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive learning
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From elementary to graduate level, we provide personalized tutoring services 
            that adapt to your learning style and academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;