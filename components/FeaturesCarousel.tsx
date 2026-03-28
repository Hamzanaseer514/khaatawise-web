'use client';

import { useRef, useState, useEffect } from 'react';
import {
  IoStatsChartOutline, IoWalletOutline, IoGitNetworkOutline,
  IoRestaurantOutline, IoBarChartOutline, IoPeopleOutline,
  IoDocumentTextOutline, IoNotificationsOutline, IoShieldCheckmarkOutline,
  IoChevronBack, IoChevronForward,
} from 'react-icons/io5';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  color: string;
  bgLight: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    icon: <IoStatsChartOutline size={22} color="#0ea5e9" />,
    title: 'Dashboard & Analytics',
    description: 'Visualize your net worth with stunning high-contrast charts and real-time data synchronization across all accounts.',
    cta: 'EXPLORE INSIGHTS',
    color: '#0ea5e9',
    bgLight: '#dbeafe',
  },
  {
    id: 'personal',
    icon: <IoWalletOutline size={22} color="#10b981" />,
    title: 'Personal Khaata',
    description: 'Maintain a digital ledger of your personal transactions with editorial precision and automated tagging.',
    cta: 'MANAGE WALLET',
    color: '#10b981',
    bgLight: '#d1fae5',
  },
  {
    id: 'group',
    icon: <IoGitNetworkOutline size={22} color="#8b5cf6" />,
    title: 'Group Khaata',
    description: 'Effortlessly split bills, manage shared expenses, and settle debts with friends through our intelligent ledger.',
    cta: 'VIEW GROUPS',
    color: '#8b5cf6',
    bgLight: '#ede9fe',
  },
  {
    id: 'mess',
    icon: <IoRestaurantOutline size={22} color="#f59e0b" />,
    title: 'Mess Attendance',
    description: 'Track daily meals with pricing and person count. Filter by meal type, month, or year for complete records.',
    cta: 'TRACK MEALS',
    color: '#f59e0b',
    bgLight: '#fef3c7',
  },
  {
    id: 'analytics',
    icon: <IoBarChartOutline size={22} color="#ef4444" />,
    title: 'Mess Analytics',
    description: 'Deep insights into spending patterns with monthly comparisons, meal trends, and budget optimization tools.',
    cta: 'VIEW ANALYTICS',
    color: '#ef4444',
    bgLight: '#fee2e2',
  },
  {
    id: 'contacts',
    icon: <IoPeopleOutline size={22} color="#3b82f6" />,
    title: 'Contacts Management',
    description: 'Manage financial contacts and track encrypted balances. Know exactly who owes whom at a glance.',
    cta: 'MANAGE CONTACTS',
    color: '#3b82f6',
    bgLight: '#dbeafe',
  },
  {
    id: 'reports',
    icon: <IoDocumentTextOutline size={22} color="#ec4899" />,
    title: 'Reports & Export',
    description: 'Generate audit-ready reports and export financial statements in CSV or PDF format instantly.',
    cta: 'EXPORT DATA',
    color: '#ec4899',
    bgLight: '#fce7f3',
  },
  {
    id: 'notifications',
    icon: <IoNotificationsOutline size={22} color="#14b8a6" />,
    title: 'Smart Notifications',
    description: 'Context-aware alerts triggered by transaction updates, balance changes, or admin broadcasts.',
    cta: 'VIEW ALERTS',
    color: '#14b8a6',
    bgLight: '#ccfbf1',
  },
  {
    id: 'secure',
    icon: <IoShieldCheckmarkOutline size={22} color="#10b981" />,
    title: 'Secure & Private',
    description: 'Bank-grade encryption with biometric authentication and secure credential storage for total privacy.',
    cta: 'LEARN MORE',
    color: '#10b981',
    bgLight: '#d1fae5',
  },
];

export default function FeaturesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => { if (el) el.removeEventListener('scroll', checkScroll); };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('div')?.offsetWidth || 350;
    el.scrollBy({ left: dir === 'left' ? -cardWidth - 20 : cardWidth + 20, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
            canScrollLeft
              ? 'border-gray-300 dark:border-white/20 text-[#0f172a] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer'
              : 'border-gray-200 dark:border-white/[0.06] text-gray-300 dark:text-white/20 cursor-not-allowed'
          }`}
        >
          <IoChevronBack size={18} />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            canScrollRight
              ? 'bg-[#0ea5e9] dark:bg-[#25d1f4] text-white hover:opacity-90 shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#25d1f4]/25 cursor-pointer'
              : 'bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-white/30 cursor-not-allowed'
          }`}
        >
          <IoChevronForward size={18} />
        </button>
      </div>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px] bg-white dark:bg-[#131b2e] rounded-2xl p-6 sm:p-7 border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300 group snap-start flex flex-col"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: feature.bgLight }}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-5 flex-1">
              {feature.description}
            </p>

            {/* CTA link */}
            <a
              href="#features"
              className="text-[11px] font-bold tracking-[1px] flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: feature.color }}
            >
              {feature.cta} <span className="text-sm">&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      {/* Fade overlays */}
      <div className="absolute left-0 top-[60px] bottom-0 w-8 bg-gradient-to-r from-[#f8f9fa] dark:from-[#0a0a0c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-[60px] bottom-0 w-8 bg-gradient-to-l from-[#f8f9fa] dark:from-[#0a0a0c] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
