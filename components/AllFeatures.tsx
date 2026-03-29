'use client';

import {
  IoStatsChartOutline, IoWalletOutline, IoGitNetworkOutline,
  IoPeopleOutline, IoDocumentTextOutline, IoNotificationsOutline,
  IoRestaurantOutline, IoBarChartOutline, IoSparklesSharp,
} from 'react-icons/io5';

export default function AllFeatures() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f0f4f8] dark:bg-[#0b1120] relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0ea5e9]/10 dark:bg-white/5 border border-[#0ea5e9]/20 dark:border-white/10 rounded-full mb-5">
            <span className="text-xs font-bold text-[#0ea5e9] dark:text-[#25d1f4] tracking-wide">ALL FEATURES</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] dark:text-white mb-4">
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">All In One App</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-2xl mx-auto">
            From personal budgeting to group bill splitting, mess management to reward coins — Khaatawise has 12+ powerful modules
          </p>
        </div>

        {/* ═══ BENTO GRID ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {/* ── ROW 1: Smart Dashboard (2col) + Reports & Export (2col) ── */}
          <div className="reveal col-span-2 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-[#0ea5e9]/30 dark:hover:border-[#0ea5e9]/20 transition-all duration-300">
            <div className="absolute top-4 right-4 opacity-[0.04] dark:opacity-[0.03]">
              <IoSparklesSharp size={100} className="text-[#0ea5e9]" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center mb-4">
                <IoStatsChartOutline size={20} className="text-[#0ea5e9]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-2">Smart Dashboard</h3>
              <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-5 max-w-sm">
                Real-time visualization of your outstanding balance, monthly trends, and financial allocation across all contacts and transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Live Feed', 'Balance Buckets', 'Monthly Charts'].map((t) => (
                  <span key={t} className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[#64748b] dark:text-[#94a3b8] border border-gray-200 dark:border-white/[0.06]">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal col-span-2 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-[#ec4899]/30 dark:hover:border-[#ec4899]/20 transition-all duration-300" style={{ transitionDelay: '80ms' }}>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#ec4899]/10 border border-[#ec4899]/20 flex items-center justify-center mb-4">
                <IoDocumentTextOutline size={20} className="text-[#ec4899]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-2">Reports &amp; Export</h3>
              <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-5 max-w-sm">
                Generate professional financial reports and export statements in seconds.
              </p>
              <div className="space-y-2">
                {['PDF & CSV Support', 'Automated Delivery'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ec4899]"></div>
                    <span className="text-xs font-medium text-[#64748b] dark:text-[#94a3b8]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── ROW 2: Personal Khaata + Group Khaata + Contacts ── */}
          <div className="reveal col-span-2 md:col-span-1 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 group hover:border-[#10b981]/30 dark:hover:border-[#10b981]/20 transition-all duration-300" style={{ transitionDelay: '100ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-4">
              <IoWalletOutline size={20} className="text-[#10b981]" />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-2">Personal Khaata</h3>
            <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-4">
              Precision bookkeeping for individuals. Track every transaction with automated categorization.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Ledger Sync', 'Tax Prep'].map((t) => (
                <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-[#64748b] dark:text-[#94a3b8] border border-gray-200 dark:border-white/[0.06]">{t}</span>
              ))}
            </div>
          </div>

          <div className="reveal col-span-2 md:col-span-1 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 group hover:border-[#8b5cf6]/30 dark:hover:border-[#8b5cf6]/20 transition-all duration-300" style={{ transitionDelay: '150ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-4">
              <IoGitNetworkOutline size={20} className="text-[#8b5cf6]" />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-2">Group Khaata</h3>
            <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-4">
              Collaborative expense management for friends, family, and roommates.
            </p>
            {/* Member avatars */}
            <div className="flex -space-x-2">
              {['bg-[#8b5cf6]', 'bg-[#0ea5e9]', 'bg-[#10b981]'].map((bg, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white dark:border-[#131b2e] flex items-center justify-center`}>
                  <span className="text-[10px] font-bold text-white">{['A', 'B', 'C'][i]}</span>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 border-2 border-white dark:border-[#131b2e] flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#64748b] dark:text-[#94a3b8]">+4</span>
              </div>
            </div>
          </div>

          <div className="reveal col-span-2 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 group hover:border-[#3b82f6]/30 dark:hover:border-[#3b82f6]/20 transition-all duration-300" style={{ transitionDelay: '200ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-4">
              <IoPeopleOutline size={20} className="text-[#3b82f6]" />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-2">Contacts</h3>
            <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-4">
              Manage all your financial contacts and track encrypted transaction histories.
            </p>
            {/* Contact preview */}
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-xl px-3 py-2.5">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-[#3b82f6]">AH</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-[#0f172a] dark:text-white">Ameer Hamza</div>
                <div className="text-[9px] text-[#94a3b8]">Priority Contact</div>
              </div>
            </div>
          </div>

          {/* ── ROW 3: Mess Analytics (large) + Mess Attendance + Smart Notifications ── */}
          <div className="reveal col-span-2 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-7 group hover:border-[#ef4444]/30 dark:hover:border-[#ef4444]/20 transition-all duration-300" style={{ transitionDelay: '250ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center mb-4">
              <IoBarChartOutline size={20} className="text-[#ef4444]" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-2">Mess Analytics</h3>
            <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-5">
              Advanced consumption analytics for hostel and shared living. Track spending patterns and meal costs over time.
            </p>
            {/* Mini bar chart visual */}
            <div className="flex items-end gap-2 h-16">
              {[40, 65, 50, 80, 55, 70, 45].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md transition-all duration-300" style={{ height: `${h}%`, backgroundColor: i === 3 ? '#ef4444' : (i % 2 === 0 ? '#cbd5e1' : '#94a3b8'), opacity: i === 3 ? 1 : 0.3 }}></div>
              ))}
            </div>
          </div>

          <div className="reveal bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 group hover:border-[#f59e0b]/30 dark:hover:border-[#f59e0b]/20 transition-all duration-300" style={{ transitionDelay: '300ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-4">
              <IoRestaurantOutline size={20} className="text-[#f59e0b]" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">Mess Attendance</h3>
            <p className="text-xs text-[#64748b] dark:text-[#7a8ba3] leading-relaxed mb-4">
              Integrated attendance and meal cost tracking for shared dining.
            </p>
            <a href="#" className="text-xs font-semibold text-[#f59e0b] flex items-center gap-1">
              Breakfast / Lunch / Dinner &rarr;
            </a>
          </div>

          <div className="reveal bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 group hover:border-[#14b8a6]/30 dark:hover:border-[#14b8a6]/20 transition-all duration-300" style={{ transitionDelay: '350ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20 flex items-center justify-center mb-4">
              <IoNotificationsOutline size={20} className="text-[#14b8a6]" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">Smart Notifications</h3>
            <p className="text-xs text-[#64748b] dark:text-[#7a8ba3] leading-relaxed">
              Context-aware alerts triggered by transaction updates or balance changes.
            </p>
          </div>

          {/* ── BOTTOM CTA BAR ── */}
          <div className="reveal col-span-2 md:col-span-4 bg-gradient-to-r from-white to-gray-50 dark:from-[#131b2e] dark:to-[#0f1829] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ transitionDelay: '400ms' }}>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] dark:text-white mb-1">Ready to manage your finances?</h3>
              <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#7a8ba3]">Download Khaatawise across Android &amp; iOS — completely free.</p>
            </div>
            <a href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/2c8bd8ce-c5bf-4855-9447-7f0c412e3d06" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0ea5e9] dark:bg-[#25d1f4] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-[#0ea5e9]/20 dark:shadow-[#25d1f4]/20 hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap">
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
