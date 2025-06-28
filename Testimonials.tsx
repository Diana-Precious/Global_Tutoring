import React from 'react';
import { Star, Quote, TrendingUp, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Parent of High School Student',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "LearnConnect transformed my daughter's approach to mathematics. Her grades improved from C to A+ in just 3 months. The tutor was patient, knowledgeable, and truly cared about her success. The progress tracking feature helped us see her improvement in real-time.",
      subject: 'Mathematics',
      improvement: '+2 letter grades',
      timeframe: '3 months'
    },
    {
      name: 'Robert Chen',
      role: 'College Student',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "As an international student, I struggled with English writing. My tutor helped me not only improve my grades but also gain confidence in expressing my ideas clearly. The flexible scheduling worked perfectly with my busy college schedule.",
      subject: 'English Writing',
      improvement: 'B- to A',
      timeframe: '4 months'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Working Professional',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "Learning programming while working full-time seemed impossible until I found LearnConnect. The online sessions fit perfectly into my schedule, and my tutor's expertise helped me transition to a tech career successfully.",
      subject: 'Programming',
      improvement: 'Career change',
      timeframe: '6 months'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Graduate Student',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "Preparing for my medical school entrance exam seemed overwhelming until I found the perfect test prep tutor. The personalized study plan and practice tests boosted my score significantly. I scored in the top 10%!",
      subject: 'MCAT Prep',
      improvement: '+15 points',
      timeframe: '5 months'
    },
    {
      name: 'Lisa Thompson',
      role: 'Parent of Elementary Student',
      location: 'Toronto, Canada',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "The convenience of home tutoring is incredible. My son feels comfortable learning in his own environment, and I can see his progress firsthand. The tutor makes learning fun and engaging for him.",
      subject: 'Elementary Math',
      improvement: 'Grade level ahead',
      timeframe: '4 months'
    },
    {
      name: 'David Kim',
      role: 'High School Student',
      location: 'Seoul, South Korea',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "SAT prep was stressing me out, but my tutor made it manageable. The personalized approach and regular practice tests helped me understand my weak areas and improve systematically. Got into my dream college!",
      subject: 'SAT Preparation',
      improvement: '+300 points',
      timeframe: '4 months'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students and parents worldwide who have achieved their learning goals with LearnConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative group"
            >
              <div className="absolute top-6 right-6 text-emerald-600 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {testimonial.subject}
                  </span>
                  <span className="text-sm text-gray-500">{testimonial.timeframe}</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Improvement: {testimonial.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">250,000+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">96%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Read More Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;