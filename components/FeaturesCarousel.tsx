'use client';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    icon: '📊',
    title: 'Dashboard & Analytics',
    description: 'Get a comprehensive overview with outstanding summary, monthly transactions, balance buckets, and detailed analytics at your fingertips.',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    id: 'personal',
    icon: '📝',
    title: 'Personal Khaata',
    description: 'Track your income and expenses with categories. Filter by month/year, view summaries, and manage your personal finances efficiently.',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    id: 'group',
    icon: '👨‍👩‍👧‍👦',
    title: 'Group Khaata',
    description: 'Split bills with friends effortlessly. Create group transactions, track who paid what, and settle balances easily.',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'mess',
    icon: '🍽️',
    title: 'Mess Attendance',
    description: 'Track daily meals (Breakfast, Lunch, Dinner) with pricing and person count. Filter by month/year and manage mess records easily.',
    gradient: 'from-orange-500 to-amber-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500'
  },
  {
    id: 'mess-analytics',
    icon: '📊',
    title: 'Mess Analytics',
    description: 'View detailed analytics and insights for your mess records. Track spending patterns and meal trends over time.',
    gradient: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    id: 'contacts',
    icon: '👥',
    title: 'Contacts Management',
    description: 'Manage your contacts and track balances with friends. See who owes you and who you owe at a glance.',
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500'
  },
  {
    id: 'reports',
    icon: '📄',
    title: 'Reports & Export',
    description: 'Export your transactions and reports in various formats. Keep detailed records for your financial planning.',
    gradient: 'from-red-500 to-rose-500',
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-500'
  },
  {
    id: 'notifications',
    icon: '📧',
    title: 'Notifications',
    description: 'Get email notifications and alerts for important transactions, balances, and updates. Stay informed always.',
    gradient: 'from-teal-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500'
  },
  {
    id: 'secure',
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. Biometric authentication and secure storage ensure your financial information stays private.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500'
  }
];

export default function FeaturesCarousel() {
  // Duplicate features for seamless infinite scroll
  const duplicatedFeatures = [...features, ...features, ...features];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 animate-scroll">
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={`${feature.id}-${index}`}
            className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent group"
          >
            {/* Icon with gradient background */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${feature.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{feature.icon}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#20B2AA] transition-colors">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            
            {/* Decorative gradient line */}
            <div className={`mt-3 sm:mt-4 md:mt-5 h-0.5 sm:h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

