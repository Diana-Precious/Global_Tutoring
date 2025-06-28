import React from 'react';
import { Shield, Star, Clock, Globe2, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified & Trusted Tutors',
      description: 'All tutors undergo comprehensive background checks and credential verification',
      stats: '100% verified'
    },
    {
      icon: Star,
      title: 'Exceptional Quality',
      description: 'Consistently high ratings from students and parents across the globe',
      stats: '4.9/5 rating'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule across all time zones worldwide',
      stats: '24/7 available'
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Access to tutors from around the world in multiple languages',
      stats: '75+ countries'
    },
    {
      icon: Users,
      title: 'Smart Matching',
      description: 'AI-powered system matches you with the perfect tutor for your needs',
      stats: '98% match rate'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of improving grades and academic performance',
      stats: '96% improvement'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why choose
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> LearnConnect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality tutoring experience with features designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-emerald-600">{feature.stats}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;