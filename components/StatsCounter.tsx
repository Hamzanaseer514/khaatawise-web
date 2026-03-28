'use client';

import { useEffect, useRef, useState } from 'react';
import { IoSparklesSharp, IoGridOutline, IoWalletOutline, IoGlobeOutline, IoTrophyOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f0f4f8] dark:bg-[#0b1120] relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0ea5e9]/10 dark:bg-white/5 border border-[#0ea5e9]/20 dark:border-white/10 rounded-full mb-5">
            <span className="text-xs font-bold text-[#0ea5e9] dark:text-[#25d1f4] tracking-wide">APP AT A GLANCE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-3">Khaatawise By The Numbers</h2>
          <p className="text-base sm:text-lg text-[#64748b] dark:text-gray-400 max-w-lg mx-auto">A complete financial ecosystem packed into one powerful app</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {/* ── 12+ Powerful Features (large - spans 2 cols) ── */}
          <div className="reveal col-span-2 row-span-2 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#0ea5e9]/30 dark:hover:border-[#0ea5e9]/20 transition-all duration-300">
            {/* Decorative sparkle icon top-right */}
            <div className="absolute top-5 right-5 opacity-10 dark:opacity-[0.06]">
              <IoSparklesSharp size={80} className="text-[#0ea5e9]" />
            </div>
            <div className="relative z-10">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0ea5e9] mb-2 leading-none">
                <AnimatedNumber value={12} suffix="+" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-3">Powerful Features</h3>
              <p className="text-sm text-[#64748b] dark:text-[#7a8ba3] leading-relaxed max-w-xs">
                From personal expense tracking to group bill splitting, manage every aspect of your finances with precision.
              </p>
            </div>
          </div>

          {/* ── 9+ Expense Categories ── */}
          <div className="reveal col-span-2 md:col-span-1 bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#10b981]/30 dark:hover:border-[#10b981]/20 transition-all duration-300" style={{ transitionDelay: '100ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-4">
              <IoGridOutline size={20} className="text-[#10b981]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#10b981] mb-1 leading-none">
              <AnimatedNumber value={9} suffix="+" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-1.5">Expense Categories</h3>
            <p className="text-xs text-[#64748b] dark:text-[#7a8ba3] leading-relaxed">
              Smart categorization that learns your spending habits automatically.
            </p>
          </div>

          {/* ── 6+ Income Sources ── */}
          <div className="reveal bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#f59e0b]/30 dark:hover:border-[#f59e0b]/20 transition-all duration-300" style={{ transitionDelay: '200ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-4">
              <IoWalletOutline size={20} className="text-[#f59e0b]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#f59e0b] mb-1 leading-none">
              <AnimatedNumber value={6} suffix="+" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-1.5">Income Sources</h3>
          </div>

          {/* ── 2 Primary Languages ── */}
          <div className="reveal bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#8b5cf6]/30 dark:hover:border-[#8b5cf6]/20 transition-all duration-300" style={{ transitionDelay: '250ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-4">
              <IoGlobeOutline size={20} className="text-[#8b5cf6]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#8b5cf6] mb-1 leading-none">
              <AnimatedNumber value={2} suffix="" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-1.5">Primary Languages</h3>
          </div>

          {/* ── 3 Reward Tiers ── */}
          <div className="reveal bg-white dark:bg-[#131b2e] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#ef4444]/30 dark:hover:border-[#ef4444]/20 transition-all duration-300" style={{ transitionDelay: '300ms' }}>
            <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center mb-4">
              <IoTrophyOutline size={20} className="text-[#ef4444]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#ef4444] mb-1 leading-none">
              <AnimatedNumber value={3} suffix="" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-1.5">Reward Tiers</h3>
          </div>

          {/* ── 100% Free Forever (full width bottom banner) ── */}
          <div className="reveal col-span-2 md:col-span-4 bg-gradient-to-r from-white to-gray-50 dark:from-[#131b2e] dark:to-[#0f1829] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 flex items-center justify-between group hover:border-[#3b82f6]/30 dark:hover:border-[#3b82f6]/20 transition-all duration-300" style={{ transitionDelay: '350ms' }}>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white leading-none mb-1">
                <AnimatedNumber value={100} suffix="%" /> Free Forever
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#7a8ba3] tracking-wide font-medium">NO HIDDEN FEES. NO PREMIUM WALLS. JUST SECURITY.</p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center flex-shrink-0 ml-4">
              <IoShieldCheckmarkOutline size={26} className="text-[#3b82f6]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
