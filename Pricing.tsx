import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      price: 35,
      description: 'Perfect for occasional tutoring needs',
      features: [
        'Elementary to High School',
        'Online sessions only',
        'Email support',
        'Basic progress tracking',
        'Standard tutors',
        '1-on-1 sessions'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: 55,
      description: 'Most popular for regular students',
      features: [
        'All academic levels',
        'Online + In-home options',
        'Priority support',
        'Detailed progress reports',
        'Expert tutors',
        'Flexible scheduling',
        'Test prep included',
        'Group session discounts'
      ],
      popular: true,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Premium',
      price: 85,
      description: 'For serious academic goals',
      features: [
        'All features included',
        'Top-tier tutors only',
        '24/7 priority support',
        'College prep specialists',
        'Unlimited session changes',
        'Personal learning plan',
        'Parent progress meetings',
        'Satisfaction guarantee',
        'Advanced analytics'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent"> pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your learning needs. All plans include our satisfaction guarantee and flexible scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden ${
                plan.popular ? 'transform scale-105 border-emerald-300' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/hour</span>
                  </div>
                  <p className="text-sm text-gray-500">Starting from</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-6">
              Start with a free consultation to discuss your learning goals and find the perfect tutor match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Free Consultation
              </button>
              <button className="bg-white text-gray-700 py-3 px-8 rounded-xl font-semibold border-2 border-gray-200 hover:border-emerald-300 transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;