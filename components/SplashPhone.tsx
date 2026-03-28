'use client';

export default function SplashPhone() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] dark:from-[#0f172a] dark:to-[#0f172a] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#25d1f4] rounded-full opacity-[0.07] blur-[100px] hidden dark:block"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#a855f7] rounded-full opacity-[0.07] blur-[100px] hidden dark:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="reveal-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-sm">✨</span>
              <span className="text-xs font-bold text-white tracking-wide">BEAUTIFUL EXPERIENCE</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">Experience the
              <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent"> Premium </span>
              Feel
            </h2>
            <p className="text-base sm:text-lg text-white/80 dark:text-[#94a3b8] mb-8 leading-relaxed">
              From the moment you open Khaatawise, every detail is crafted for a premium experience. Smooth animations, clean typography, and a thoughtfully designed dark mode.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎨', title: 'Dark & Light Theme', desc: 'Automatically adapts or toggle manually' },
                { icon: '🌐', title: 'Multi-Language', desc: 'Full support for English & Urdu' },
                { icon: '💱', title: 'Multi-Currency', desc: 'Choose your preferred currency' },
                { icon: '👆', title: 'Haptic Feedback', desc: 'Satisfying tactile responses on every action' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 dark:border-white/[0.06]">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-white/70 dark:text-[#94a3b8]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Splash Phone */}
          <div className="flex justify-center reveal-right">
            <div className="w-[310px] sm:w-[340px] md:w-[370px]">
              <div className="bg-[#1a1a2e] rounded-[3rem] p-[5px] phone-shadow">
                <div className="rounded-[2.8rem] overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a2e] rounded-b-xl z-20"></div>
                  <div className="h-[24px]"></div>
                  <div className="relative h-[520px] sm:h-[560px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute top-8 -left-16 w-56 h-56 bg-[#25d1f4] rounded-full opacity-[0.08] dark:opacity-[0.15] blur-[60px]"></div>
                    <div className="absolute bottom-8 -right-16 w-64 h-64 bg-[#38bdf8] dark:bg-[#c084fc] rounded-full opacity-[0.08] dark:opacity-[0.15] blur-[60px]"></div>
                    <div className="mb-8">
                      <div className="w-28 h-28 bg-[#25d1f4]/10 dark:bg-[#25d1f4]/15 border border-[#25d1f4]/30 rounded-[32px] flex items-center justify-center shadow-[0_0_50px_rgba(37,209,244,0.15)] dark:shadow-[0_0_50px_rgba(37,209,244,0.4)] animate-float">
                        <div className="w-24 h-24 bg-[#25d1f4] rounded-[28px] flex items-center justify-center">
                          <span className="text-[48px]">👛</span>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-[46px] font-black text-[#0f172a] dark:text-white tracking-[6px] leading-none mb-1">KHAATA</h1>
                    <div className="text-[16px] font-extrabold text-[#25d1f4] tracking-[18px] mb-4 ml-[18px]">WISE</div>
                    <div className="w-12 h-[2px] bg-[#25d1f4] rounded-full mb-5 shadow-[0_0_8px_#25d1f4]"></div>
                    <p className="text-sm font-semibold text-[#0f172a]/50 dark:text-white/50">Smart Ledger. Clear Records.</p>
                    <div className="mt-auto mb-10">
                      <div className="bg-black/[0.02] dark:bg-white/[0.03] rounded-2xl px-6 py-3">
                        <div className="flex items-center gap-2 mb-1.5 justify-center">
                          <div className="w-2 h-2 bg-[#25d1f4] rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-[#25d1f4] rounded-full animate-pulse delay-75"></div>
                          <div className="w-2 h-2 bg-[#25d1f4] rounded-full animate-pulse delay-150"></div>
                        </div>
                        <p className="text-[10px] font-bold text-[#0f172a]/40 dark:text-white/35 tracking-wider text-center">Opening Ledger...</p>
                      </div>
                    </div>
                    <p className="absolute bottom-5 text-[7px] font-extrabold tracking-[2px] text-[#0f172a]/15 dark:text-white/15 uppercase">Version 2.0 &bull; Premium Experience</p>
                  </div>
                  <div className="flex justify-center pb-2"><div className="w-[80px] h-[3px] bg-black/15 dark:bg-white/15 rounded-full"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
