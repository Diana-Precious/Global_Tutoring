import React from 'react';
import { Star, MapPin, Clock, CheckCircle, Award, Globe } from 'lucide-react';

const TutorProfiles = () => {
  const tutors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 234,
      subjects: ['Mathematics', 'Physics', 'Calculus'],
      experience: '12 years',
      education: 'PhD Mathematics, MIT',
      location: 'Boston, MA, USA',
      price: 75,
      languages: ['English', 'Spanish'],
      availability: 'Available today',
      verified: true,
      specialties: ['AP Calculus', 'SAT Math', 'College Prep'],
      sessionType: 'In-home & Online'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 189,
      subjects: ['Computer Science', 'Programming', 'Data Science'],
      experience: '8 years',
      education: 'MS Computer Science, Stanford',
      location: 'San Francisco, CA, USA',
      price: 85,
      languages: ['English', 'Mandarin'],
      availability: 'Available now',
      verified: true,
      specialties: ['Python', 'Machine Learning', 'Web Development'],
      sessionType: 'Online preferred'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 156,
      subjects: ['English Literature', 'Writing', 'Essay Prep'],
      experience: '10 years',
      education: 'PhD English Literature, Harvard',
      location: 'New York, NY, USA',
      price: 65,
      languages: ['English', 'French'],
      availability: 'Available tomorrow',
      verified: true,
      specialties: ['College Essays', 'Creative Writing', 'Literary Analysis'],
      sessionType: 'In-home & Online'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 203,
      subjects: ['Biology', 'Chemistry', 'Medical Sciences'],
      experience: '15 years',
      education: 'MD, Johns Hopkins',
      location: 'Baltimore, MD, USA',
      price: 90,
      languages: ['English'],
      availability: 'Available now',
      verified: true,
      specialties: ['MCAT Prep', 'Pre-Med', 'Advanced Biology'],
      sessionType: 'In-home & Online'
    },
    {
      id: 5,
      name: 'Prof. Lisa Thompson',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 94,
      subjects: ['Economics', 'Business', 'Statistics'],
      experience: '7 years',
      education: 'MBA Finance, Wharton',
      location: 'Philadelphia, PA, USA',
      price: 70,
      languages: ['English', 'German'],
      availability: 'Available today',
      verified: true,
      specialties: ['Business Strategy', 'Financial Analysis', 'Market Research'],
      sessionType: 'Online preferred'
    },
    {
      id: 6,
      name: 'Dr. Ahmed Hassan',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 167,
      subjects: ['Languages', 'Arabic', 'Middle Eastern Studies'],
      experience: '9 years',
      education: 'PhD Linguistics, Oxford',
      location: 'London, UK',
      price: 60,
      languages: ['English', 'Arabic', 'French'],
      availability: 'Available now',
      verified: true,
      specialties: ['Language Immersion', 'Cultural Studies', 'Translation'],
      sessionType: 'Online only'
    }
  ];

  return (
    <section id="tutors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> expert tutors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our carefully vetted tutors are professionals with proven track records and expertise in their respective fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    {tutor.verified && (
                      <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tutor.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{tutor.education}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tutor.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Experience:</span>
                      <div className="font-medium text-gray-900">{tutor.experience}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Session Type:</span>
                      <div className="font-medium text-gray-900">{tutor.sessionType}</div>
                    </div>
                  </div>

                  <div className="text-sm">
                    <span className="text-gray-500">Languages:</span>
                    <div className="font-medium text-gray-900">{tutor.languages.join(', ')}</div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium">{tutor.availability}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">${tutor.price}</div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium">
                      Book Session
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-2xl mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">1,000+ Expert Tutors</div>
              <div className="text-gray-600">All verified and background-checked</div>
            </div>
          </div>
          <br />
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            Browse All Tutors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorProfiles;