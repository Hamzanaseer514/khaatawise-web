'use client';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Usman Khan',
    role: 'Student',
    image: '👤',
    rating: 5,
    text: 'Khaatawise has completely transformed how I manage my expenses. The split bill feature is a lifesaver when dining out with friends. Highly recommended!'
  },
  {
    id: '2',
    name: 'Ayesha Ahmed',
    role: 'Software Engineer',
    image: '👩',
    rating: 5,
    text: 'The analytics dashboard is incredible. I can see exactly where my money goes. The mess attendance tracking is perfect for my hostel life. Best finance app!'
  },
  {
    id: '3',
    name: 'Ahmed Ali',
    role: 'Freelancer',
    image: '👨',
    rating: 5,
    text: 'As a freelancer, tracking income and expenses was always a hassle. Khaatawise made it so simple. The export feature is amazing for tax filing. Love it!'
  },
  {
    id: '4',
    name: 'Fatima Sheikh',
    role: 'Housewife',
    image: '👩',
    rating: 5,
    text: 'Perfect app for managing household expenses. I can track daily spending, manage group expenses with family, and the interface is so easy to use. Wonderful!'
  },
  {
    id: '5',
    name: 'Bilal Hassan',
    role: 'College Student',
    image: '👨',
    rating: 5,
    text: 'The mess attendance feature saved me so much time calculating meal costs. Plus tracking who owes me money has never been easier. Great app for students!'
  },
  {
    id: '6',
    name: 'Zara Malik',
    role: 'Entrepreneur',
    image: '👩',
    rating: 5,
    text: 'I use Khaatawise for both personal and business expenses. The detailed reports help me make better financial decisions. Clean UI and powerful features!'
  }
];

export default function Testimonials() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20B2AA] group"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4 sm:mb-5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-base sm:text-lg md:text-xl">⭐</span>
              ))}
            </div>
            
            {/* Quote Icon */}
            <div className="mb-3 sm:mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#20B2AA]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            {/* Testimonial Text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6">
              {testimonial.text}
            </p>
            
            {/* User Info */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#20B2AA] to-[#16a085] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">
                {testimonial.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

