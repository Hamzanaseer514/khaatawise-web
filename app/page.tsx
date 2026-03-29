'use client';

import Navbar from '@/components/Navbar';
import FeaturesCarousel from '@/components/FeaturesCarousel';
import Testimonials from '@/components/Testimonials';
import StatsCounter from '@/components/StatsCounter';
import AllFeatures from '@/components/AllFeatures';
import HowItWorks from '@/components/HowItWorks';
import AppScreenshots from '@/components/AppScreenshots';
import SplashPhone from '@/components/SplashPhone';
import useScrollReveal from '@/components/useScrollReveal';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import {
  IoSettingsOutline, IoPeopleOutline, IoHome, IoRestaurantOutline,
  IoWalletOutline, IoNotificationsOutline, IoDocumentTextOutline,
  IoGitNetworkOutline,
} from 'react-icons/io5';

export default function Home() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg';
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0c] transition-colors duration-300">
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] dark:bg-[#0a0a0c] overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0ea5e9]/5 dark:bg-[#25d1f4]/5 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8b5cf6]/5 dark:bg-[#a855f7]/5 rounded-full blur-[100px] animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Text */}
            <div className="max-w-xl animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0ea5e9]/10 dark:bg-[#25d1f4]/10 border border-[#0ea5e9]/20 dark:border-[#25d1f4]/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-[#0ea5e9] dark:text-[#25d1f4]">Now Available on Android &amp; iOS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white leading-[1.1] mb-5">
                Track Your
                <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent animate-gradient-text"> Expenses</span>
                <br />
                Like Never Before
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#64748b] dark:text-[#94a3b8] mb-8 leading-relaxed">
                Manage personal finances, split bills with friends, track mess attendance, earn reward coins, and get detailed analytics &mdash; all in one powerful app with <strong>12+ features</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/cd4add38-8b3e-4101-9c1a-fef918f46fb7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#0ea5e9] dark:bg-[#25d1f4] text-white rounded-2xl hover:opacity-90 transition-all font-bold text-lg shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#25d1f4]/25 hover:-translate-y-0.5 transform text-center">
                  Download Now
                </a>
                <a href="#features" className="px-8 py-4 bg-white dark:bg-white/5 text-[#0ea5e9] dark:text-[#25d1f4] rounded-2xl border-2 border-[#0ea5e9]/25 dark:border-[#25d1f4]/25 hover:bg-[#0ea5e9]/5 dark:hover:bg-[#25d1f4]/10 transition-all font-bold text-lg text-center">
                  Explore Features
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-[#64748b] dark:text-[#94a3b8]">
                {['Free to Use', 'Secure & Private', 'No Ads', 'Offline Support'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">&#10003;</span>
                    </div>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - PHONE MOCKUP */}
            <div className="relative order-first lg:order-last flex justify-center animate-fade-in-right">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[520px] bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/15 dark:from-[#25d1f4]/15 dark:to-[#a855f7]/10 rounded-full blur-[80px] -z-10"></div>

              <div className="w-[300px] sm:w-[330px] md:w-[360px] animate-float">
                <div className="bg-[#1a1a2e] rounded-[2.5rem] p-[4px] phone-shadow">
                  <div className="rounded-[2.3rem] overflow-hidden bg-[#f8f9fa] dark:bg-[#0a0a0c]">
                    {/* Statusbar */}
                    <div className="flex items-center justify-between px-6 pt-2 pb-1 relative">
                      <span className="text-[10px] font-semibold text-[#0f172a] dark:text-white">9:41</span>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#1a1a2e] rounded-b-2xl"></div>
                      <div className="flex items-center gap-1 text-[10px] text-[#0f172a] dark:text-white">
                        <span>5G</span>
                      </div>
                    </div>
                    {/* Dashboard Header */}
                    <div className="px-5 pt-1 pb-3">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-full border-2 border-[#0ea5e9]/25 dark:border-[#25d1f4]/40 bg-gradient-to-br from-[#0ea5e9]/10 to-[#8b5cf6]/10 flex items-center justify-center">
                          <span className="text-sm font-black text-[#0ea5e9] dark:text-[#25d1f4]">U</span>
                        </div>
                        <div className="text-center flex-1 mx-3">
                          <div className="flex items-center justify-center gap-1.5 mb-0.5">
                            <span className="px-2 py-0.5 bg-[#fef3c7] dark:bg-amber-400/15 border border-[#fcd34d] dark:border-amber-400/30 rounded-md text-[7px] font-black tracking-wide text-[#b45309] dark:text-amber-400">PREMIUM</span>
                            <span className="px-2 py-0.5 bg-[#e0f2fe] dark:bg-[#0ea5e9]/10 border border-[#bae6fd] dark:border-[#0ea5e9]/25 rounded-md text-[7px] font-black tracking-wide text-[#0369a1] dark:text-[#25d1f4]">1250</span>
                          </div>
                          <div className="text-[13px] font-black text-[#0f172a] dark:text-white">Usman Khan</div>
                        </div>
                        <div className="relative w-10 h-10 rounded-full border border-black/8 dark:border-white/10 flex items-center justify-center bg-white dark:bg-white/5">
                          <IoNotificationsOutline size={18} className="text-[#64748b] dark:text-[#94a3b8]" />
                          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#ef4444] rounded-full border-2 border-[#f8f9fa] dark:border-[#0a0a0c] flex items-center justify-center">
                            <span className="text-[7px] font-bold text-white">3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Glass Card */}
                    <div className="mx-4 mb-4">
                      <div className="relative bg-white/80 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.06] rounded-[20px] p-5 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#0ea5e9] dark:bg-[#25d1f4] rounded-full opacity-[0.08] blur-2xl"></div>
                        <div className="text-[9px] font-bold tracking-[1.5px] text-[#0ea5e9] dark:text-[#25d1f4] mb-1.5">TOTAL OUTSTANDING</div>
                        <div className="text-[28px] font-black text-[#0f172a] dark:text-white leading-none mb-3">Rs24,234<span className="text-lg">.50</span></div>
                        <div className="flex justify-between border-t border-black/5 dark:border-white/5 pt-3">
                          <div>
                            <div className="text-[8px] font-medium text-[#64748b] dark:text-[#94a3b8] mb-0.5">Receivable</div>
                            <div className="text-sm font-extrabold text-[#10b981]">Rs24,234</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[8px] font-medium text-[#64748b] dark:text-[#94a3b8] mb-0.5">Payable</div>
                            <div className="text-sm font-extrabold text-[#ef4444]">Rs0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Quick Access */}
                    <div className="px-5 mb-2.5">
                      <div className="text-[13px] font-bold text-[#0f172a] dark:text-white">Quick Access</div>
                    </div>
                    {/* Module Grid */}
                    <div className="px-4 pb-3 grid grid-cols-2 gap-2.5">
                      {[
                        { name: 'Contacts', sub: 'Manage debt', color: '#0ea5e9', Icon: IoPeopleOutline },
                        { name: 'Personal', sub: 'Expenses', color: '#10b981', Icon: IoWalletOutline },
                        { name: 'Group', sub: 'Split bills', color: '#8b5cf6', Icon: IoGitNetworkOutline },
                        { name: 'Mess', sub: 'Daily meals', color: '#f59e0b', Icon: IoRestaurantOutline },
                        { name: 'Alerts', sub: 'Stay updated', color: '#3b82f6', Icon: IoNotificationsOutline },
                        { name: 'Reports', sub: 'Export data', color: '#ef4444', Icon: IoDocumentTextOutline },
                      ].map((m) => (
                        <div key={m.name} className="bg-white dark:bg-[#16161a] rounded-2xl p-3 shadow-sm dark:shadow-none" style={{ borderLeft: `3px solid ${m.color}` }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1.5" style={{ backgroundColor: m.color + '15' }}>
                            <m.Icon size={20} color={m.color} />
                          </div>
                          <div className="text-[11px] font-bold text-[#0f172a] dark:text-white">{m.name}</div>
                          <div className="text-[8px] text-[#64748b] dark:text-[#94a3b8]">{m.sub}</div>
                        </div>
                      ))}
                    </div>
                    {/* Bottom Nav */}
                    <div className="px-3 pb-3 pt-1">
                      <div className="bg-white/95 dark:bg-[#16161a]/95 border border-black/[0.04] dark:border-white/[0.06] rounded-[26px] h-[58px] flex items-center justify-around px-3 shadow-xl shadow-black/10 dark:shadow-black/40">
                        <div className="flex flex-col items-center gap-0.5">
                          <IoSettingsOutline size={20} className="text-[#94a3b8]" />
                          <span className="text-[8px] font-semibold text-[#94a3b8]">Settings</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <IoPeopleOutline size={20} className="text-[#94a3b8]" />
                          <span className="text-[8px] font-semibold text-[#94a3b8]">Contacts</span>
                        </div>
                        <div className="flex flex-col items-center -mt-7">
                          <div className="w-[52px] h-[52px] bg-[#0ea5e9] dark:bg-[#25d1f4] rounded-full flex items-center justify-center shadow-lg shadow-[#0ea5e9]/40 dark:shadow-[#25d1f4]/40">
                            <IoHome size={24} className="text-white" />
                          </div>
                          <span className="text-[8px] font-semibold text-[#0ea5e9] dark:text-[#25d1f4] mt-0.5">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <IoRestaurantOutline size={20} className="text-[#94a3b8]" />
                          <span className="text-[8px] font-semibold text-[#94a3b8]">Mess</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <IoWalletOutline size={20} className="text-[#94a3b8]" />
                          <span className="text-[8px] font-semibold text-[#94a3b8]">Khaata</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center pb-2">
                      <div className="w-[100px] h-[4px] bg-[#0f172a]/20 dark:bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS COUNTER ══════════ */}
      <StatsCounter />

      {/* ══════════ FEATURES CAROUSEL (Quick Preview) ══════════ */}
      <section className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] dark:bg-[#0a0a0c] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] dark:text-white mb-3">Powerful Features</h2>
            <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-lg mx-auto">Everything you need to manage your finances effectively</p>
          </div>
          <FeaturesCarousel />
        </div>
      </section>

      {/* ══════════ ALL FEATURES GRID ══════════ */}
      <AllFeatures />

      {/* ══════════ APP SCREENSHOTS ══════════ */}
      <AppScreenshots />

      {/* ══════════ HOW IT WORKS ══════════ */}
      <HowItWorks />

      {/* ══════════ SPLASH & UX ══════════ */}
      <SplashPhone />

      {/* ══════════ REWARD SYSTEM ══════════ */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0c] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24]/5 dark:bg-[#fbbf24]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0ea5e9]/5 dark:bg-[#25d1f4]/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fbbf24]/10 border border-[#fbbf24]/20 rounded-full mb-5">
              <span className="text-sm">🏆</span>
              <span className="text-xs font-bold text-[#b45309] dark:text-[#fbbf24] tracking-wide">KHAATA COINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-4">Reward System</h2>
            <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-xl mx-auto">Earn coins with every transaction. Level up from Silver to Gold to Platinum!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Reward Info */}
            <div className="reveal-left">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#fbbf24]/10 dark:bg-[#fbbf24]/20 rounded-full blur-xl scale-125"></div>
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#fbbf24]/15 to-[#f59e0b]/5 dark:from-[#fbbf24]/20 dark:to-[#f59e0b]/10 border-2 border-[#fbbf24]/30 flex flex-col items-center justify-center animate-float-slow">
                    <span className="text-5xl sm:text-6xl mb-1">🏆</span>
                    <div className="text-3xl sm:text-4xl font-black text-[#0f172a] dark:text-white">1250</div>
                    <div className="text-[10px] sm:text-xs font-bold text-[#b45309] dark:text-[#fbbf24] tracking-widest mt-0.5">KHAATA COINS</div>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(251,191,36,0.1)" strokeWidth="3" />
                      <circle cx="50" cy="50" r="46" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="289" strokeDashoffset="72" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tier Steps */}
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#94a3b8]/15 border-2 border-[#94a3b8] flex items-center justify-center"><span className="text-lg">🥈</span></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center border-2 border-white dark:border-[#0a0a0c]"><span className="text-[8px] text-white font-bold">&#10003;</span></div>
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#94a3b8]/30"></div>
                  </div>
                  <div className="flex-1 bg-[#f8f9fa] dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div><div className="text-sm font-bold text-[#64748b] dark:text-[#94a3b8]">SILVER</div><div className="text-[11px] text-[#94a3b8]">0 - 499 coins</div></div>
                      <span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full">COMPLETED</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#fbbf24]/15 border-2 border-[#fbbf24] flex items-center justify-center shadow-lg shadow-[#fbbf24]/20"><span className="text-lg">🥇</span></div>
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#fbbf24] rounded-full animate-pulse"></div>
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#fbbf24]/30"></div>
                  </div>
                  <div className="flex-1 bg-[#fbbf24]/5 border border-[#fbbf24]/20 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div><div className="text-sm font-bold text-[#b45309] dark:text-[#fbbf24]">GOLD</div><div className="text-[11px] text-[#94a3b8]">500 - 999 coins</div></div>
                      <span className="text-[10px] font-bold text-[#b45309] dark:text-[#fbbf24] bg-[#fbbf24]/10 px-2 py-0.5 rounded-full">CURRENT</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#fbbf24] rounded-full" style={{ width: '75%' }}></div></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center opacity-60"><span className="text-lg">💎</span></div>
                  <div className="flex-1 bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-xl p-3 opacity-60">
                    <div className="flex items-center justify-between">
                      <div><div className="text-sm font-bold text-[#94a3b8]">PLATINUM</div><div className="text-[11px] text-gray-400">1000+ coins</div></div>
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full">LOCKED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - How to Earn */}
            <div className="reveal-right">
              <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-6">How to Earn Coins</h3>
              <div className="space-y-3">
                {[
                  { emoji: '➕', title: 'Add Transaction', desc: 'Earn +10 coins per transaction', coins: '+10' },
                  { emoji: '👥', title: 'Add Contact', desc: 'Earn +5 coins per new contact', coins: '+5' },
                  { emoji: '👨‍👩‍👧‍👦', title: 'Group Transaction', desc: 'Earn +15 coins for group splits', coins: '+15' },
                  { emoji: '🍽️', title: 'Mess Record', desc: 'Earn +10 coins per mess entry', coins: '+10' },
                  { emoji: '🎯', title: 'Daily Goal (5 txns)', desc: 'Bonus +50 coins for 5 daily transactions', coins: '+50' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 bg-[#f8f9fa] dark:bg-white/5 border border-gray-200 dark:border-white/[0.06] rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all hover:-translate-y-0.5">
                    <div className="w-11 h-11 rounded-xl bg-[#0ea5e9]/10 dark:bg-[#25d1f4]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[#0f172a] dark:text-white">{item.title}</div>
                      <div className="text-[11px] text-[#64748b] dark:text-[#94a3b8]">{item.desc}</div>
                    </div>
                    <div className="text-base font-black text-[#b45309] dark:text-[#fbbf24] flex-shrink-0">{item.coins}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gradient-to-r from-[#0ea5e9]/10 to-[#8b5cf6]/10 dark:from-[#25d1f4]/10 dark:to-[#a855f7]/10 border border-[#0ea5e9]/20 dark:border-[#25d1f4]/20 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm font-bold text-[#0f172a] dark:text-white">Daily Milestone</div>
                    <div className="text-[11px] text-[#64748b] dark:text-[#94a3b8]">Complete 5 transactions today</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#0ea5e9] dark:text-[#25d1f4]">3/5</div>
                    <div className="text-[8px] font-bold text-[#0ea5e9] dark:text-[#25d1f4] tracking-wider">IN PROGRESS</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] dark:from-[#25d1f4] dark:to-[#a855f7] rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#16161a]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full mb-5">
              <span className="text-sm">💬</span>
              <span className="text-xs font-bold text-[#f59e0b] tracking-wide">TESTIMONIALS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] dark:text-white mb-3">What Our Users Say</h2>
            <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-lg mx-auto">Join thousands of satisfied users</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] dark:bg-[#0a0a0c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-3">Why Choose Khaatawise?</h2>
            <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-lg mx-auto">Everything you need for complete financial management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '💰', title: '100% Free', desc: 'No hidden charges, completely free forever', color: '#0ea5e9' },
              { emoji: '🔒', title: 'Secure & Encrypted', desc: 'Biometric protection & encrypted storage', color: '#10b981' },
              { emoji: '✨', title: 'No Ads', desc: 'Clean, ad-free experience', color: '#8b5cf6' },
              { emoji: '📱', title: 'Offline Support', desc: 'Works seamlessly without internet', color: '#f59e0b' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal bg-white dark:bg-[#16161a] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.color + '15' }}>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DOWNLOAD ══════════ */}
      <section id="download" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#3b82f6] dark:from-[#25d1f4] dark:via-[#8b5cf6] dark:to-[#7c3aed] relative overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-[80px] animate-float-delay"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="reveal">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm animate-bounce-soft">
              <Image src="/logo_dark.svg" alt="Khaatawise" width={80} height={80} className="w-full h-full rounded-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">Ready to Take Control?</h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto">Join thousands of users managing their finances effortlessly with 12+ powerful features</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/cd4add38-8b3e-4101-9c1a-fef918f46fb7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#0ea5e9] dark:text-[#7c3aed] rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-all flex items-center justify-center gap-2">
                ▶️ Google Play
              </a>
              <a href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/cd4add38-8b3e-4101-9c1a-fef918f46fb7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/25 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                🍎 App Store
              </a>
            </div>
            <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-sm font-semibold text-white mb-3">Scan to download</p>
              <Image src="/qr1.png" alt="QR Code" width={140} height={140} className="w-36 h-36 rounded-lg" priority />
              <p className="text-[10px] text-white/60 mt-2">Use your phone camera</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#0f172a] dark:bg-[#0a0a0c] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src={logoSrc} alt="Khaatawise" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold text-white">Khaatawise</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Your complete financial management solution with 12+ powerful features.</p>
              <div className="flex gap-2">
                {['📊', '💰', '👥', '🍽️', '🏆'].map((e) => (
                  <span key={e} className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">{e}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                {['Dashboard & Analytics', 'Personal Khaata', 'Group Khaata', 'Mess Attendance', 'Reward System'].map((l) => (
                  <li key={l}><a href="#features" className="text-gray-400 hover:text-[#25d1f4] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">More Features</h4>
              <ul className="space-y-2 text-sm">
                {['Contacts', 'Reports & Export', 'Notifications', 'Visiting Card', 'Admin Panel'].map((l) => (
                  <li key={l}><a href="#features" className="text-gray-400 hover:text-[#25d1f4] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#25d1f4] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-[#25d1f4] transition-colors">Terms of Service</a></li>
                <li><a href="/contact-support" className="text-gray-400 hover:text-[#25d1f4] transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <a href="mailto:khaataapp.co@gmail.com" className="text-gray-400 hover:text-[#25d1f4] transition-colors text-sm flex items-center gap-2 mb-3">khaataapp.co@gmail.com</a>
              <div className="flex flex-wrap gap-2 text-xs mt-3">
                <span className="px-2 py-1 bg-white/5 rounded-md text-gray-500">React Native</span>
                <span className="px-2 py-1 bg-white/5 rounded-md text-gray-500">Node.js</span>
                <span className="px-2 py-1 bg-white/5 rounded-md text-gray-500">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-1">&copy; {new Date().getFullYear()} Khaatawise. All rights reserved.</p>
            <p className="text-gray-500 text-xs">Developed by <span className="text-[#25d1f4] font-semibold">Ameer Hamza</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
