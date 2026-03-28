'use client';

import { IoPeopleOutline, IoWalletOutline, IoDownloadOutline, IoBarChartOutline } from 'react-icons/io5';

const steps = [
  {
    num: '01',
    Icon: IoDownloadOutline,
    title: 'Download & Register',
    description: 'Download Khaatawise on your mobile device. Sign up with email, verify via OTP, and set up biometric authentication for secure access.',
    tag: 'SECURE ACCESS',
    color: '#0ea5e9',
  },
  {
    num: '02',
    Icon: IoPeopleOutline,
    title: 'Add Your Contacts',
    description: 'Add friends, roommates, or family from your phonebook or manually. Each contact gets a dedicated ledger to track balances instantly.',
    tag: 'TRUSTED NETWORK',
    color: '#8b5cf6',
  },
  {
    num: '03',
    Icon: IoWalletOutline,
    title: 'Track Everything',
    description: 'Log personal income & expenses, create group bill splits, record daily mess attendance. All transactions auto-categorized and organized.',
    tag: 'ACTIVE TRACKING',
    color: '#10b981',
  },
  {
    num: '04',
    Icon: IoBarChartOutline,
    title: 'Analyze & Export',
    description: 'View detailed dashboards with charts and analytics. Generate professional reports, export to CSV/PDF for your financial records.',
    tag: 'DATA INSIGHTS',
    color: '#f59e0b',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f0f4f8] dark:bg-[#0b1120] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#10b981]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 lg:mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full mb-5">
            <span className="text-xs font-bold text-[#10b981] tracking-wide">GET STARTED</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-3">How It Works</h2>
          <p className="text-base sm:text-lg text-[#64748b] dark:text-[#64748b] max-w-lg mx-auto">Get up and running in minutes — it&apos;s that simple</p>
        </div>

        <div className="grid md:grid-cols-4 gap-0 relative bg-white dark:bg-white/[0.02] rounded-2xl border border-gray-200 dark:border-white/[0.06] overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal relative px-5 lg:px-7 py-8 lg:py-10 ${i < steps.length - 1 ? 'md:border-r border-b md:border-b-0 border-gray-200 dark:border-white/[0.06]' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Large faded step number */}
              <div className="text-[64px] sm:text-[72px] lg:text-[80px] font-black leading-none mb-5 select-none" style={{ color: step.color + '15' }}>
                {step.num}
              </div>

              {/* Icon box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: step.color + '10', borderColor: step.color + '25' }}
              >
                <step.Icon size={22} color={step.color} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-6">{step.description}</p>

              {/* Bottom tag with line */}
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-5 h-[2px] rounded-full" style={{ backgroundColor: step.color }}></div>
                <span className="text-[10px] font-bold tracking-[1.5px]" style={{ color: step.color }}>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
