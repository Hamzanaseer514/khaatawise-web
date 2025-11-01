'use client';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    icon: '📊',
    title: 'Dashboard & Analytics',
    description: 'Get a comprehensive overview with outstanding summary, monthly transactions, balance buckets, and detailed analytics at your fingertips.',
    bgColor: 'bg-[#20B2AA]/10'
  },
  {
    id: 'personal',
    icon: '📝',
    title: 'Personal Khaata',
    description: 'Track your income and expenses with categories. Filter by month/year, view summaries, and manage your personal finances efficiently.',
    bgColor: 'bg-[#16a085]/10'
  },
  {
    id: 'group',
    icon: '👨‍👩‍👧‍👦',
    title: 'Group Khaata',
    description: 'Split bills with friends effortlessly. Create group transactions, track who paid what, and settle balances easily.',
    bgColor: 'bg-[#9b59b6]/10'
  },
  {
    id: 'mess',
    icon: '🍽️',
    title: 'Mess Attendance',
    description: 'Track daily meals (Breakfast, Lunch, Dinner) with pricing and person count. Filter by month/year and manage mess records easily.',
    bgColor: 'bg-[#f39c12]/10'
  },
  {
    id: 'mess-analytics',
    icon: '📊',
    title: 'Mess Analytics',
    description: 'View detailed analytics and insights for your mess records. Track spending patterns and meal trends over time.',
    bgColor: 'bg-[#f39c12]/10'
  },
  {
    id: 'contacts',
    icon: '👥',
    title: 'Contacts Management',
    description: 'Manage your contacts and track balances with friends. See who owes you and who you owe at a glance.',
    bgColor: 'bg-[#3498db]/10'
  },
  {
    id: 'reports',
    icon: '📊',
    title: 'Reports & Export',
    description: 'Export your transactions and reports in various formats. Keep detailed records for your financial planning.',
    bgColor: 'bg-[#e74c3c]/10'
  },
  {
    id: 'notifications',
    icon: '📧',
    title: 'Notifications',
    description: 'Get email notifications and alerts for important transactions, balances, and updates. Stay informed always.',
    bgColor: 'bg-[#20B2AA]/10'
  },
  {
    id: 'secure',
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. Biometric authentication and secure storage ensure your financial information stays private.',
    bgColor: 'bg-[#16a085]/10'
  }
];

export default function FeaturesCarousel() {
  // Duplicate features for seamless infinite scroll
  const duplicatedFeatures = [...features, ...features, ...features];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex gap-8 animate-scroll">
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={`${feature.id}-${index}`}
            className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

