'use client';

import { useState } from 'react';
import {
  IoSettingsOutline, IoPeopleOutline, IoHome, IoRestaurantOutline,
  IoWalletOutline, IoNotificationsOutline, IoDocumentTextOutline,
  IoGitNetworkOutline, IoSearchOutline, IoChevronBack, IoAdd,
  IoFunnelOutline, IoEyeOutline, IoMoon, IoTrophyOutline,
  IoPersonOutline, IoStatsChartOutline, IoQrCodeOutline,
  IoShieldCheckmarkOutline, IoMailOutline, IoCalendarOutline,
  IoChevronForward, IoStarOutline, IoCardOutline, IoBarChartOutline,
} from 'react-icons/io5';

type Screen = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  hasColoredHeader: boolean;
  render: () => React.ReactNode;
};

function PhoneFrame({ children, hasColoredHeader = false }: { children: React.ReactNode; hasColoredHeader?: boolean }) {
  return (
    <div className="w-[280px] sm:w-[310px] md:w-[340px] flex-shrink-0">
      <div className="bg-[#1a1a2e] rounded-[2.8rem] p-[5px] phone-shadow">
        <div className="rounded-[2.6rem] overflow-hidden relative bg-[#1a1a2e]">
          <div className="bg-[#f8f9fa] dark:bg-[#0a0a0c] rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[18px] bg-[#1a1a2e] rounded-b-xl z-20"></div>
            {!hasColoredHeader && <div className="h-[22px]"></div>}
            {children}
            {/* Home indicator */}
            <div className="flex justify-center pb-3">
              <div className="w-[80px] h-[3px] bg-black/15 dark:bg-white/15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════ SCREEN RENDERERS ═══════════════════ */

function DashboardScreen() {
  return (
    <>
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
      {/* Outstanding Card */}
      <div className="mx-4 mb-3">
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
      {/* Quick Access Grid */}
      <div className="px-5 mb-2"><div className="text-[12px] font-bold text-[#0f172a] dark:text-white">Quick Access</div></div>
      <div className="px-4 pb-3 grid grid-cols-2 gap-2">
        {[
          { name: 'Contacts', sub: 'Manage debt', color: '#0ea5e9', Icon: IoPeopleOutline },
          { name: 'Personal', sub: 'Expenses', color: '#10b981', Icon: IoWalletOutline },
          { name: 'Group', sub: 'Split bills', color: '#8b5cf6', Icon: IoGitNetworkOutline },
          { name: 'Mess', sub: 'Daily meals', color: '#f59e0b', Icon: IoRestaurantOutline },
        ].map((m) => (
          <div key={m.name} className="bg-white dark:bg-[#16161a] rounded-2xl p-3 shadow-sm dark:shadow-none" style={{ borderLeft: `3px solid ${m.color}` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-1" style={{ backgroundColor: m.color + '15' }}>
              <m.Icon size={18} color={m.color} />
            </div>
            <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">{m.name}</div>
            <div className="text-[8px] text-[#64748b] dark:text-[#94a3b8]">{m.sub}</div>
          </div>
        ))}
      </div>
      {/* Bottom Nav */}
      <div className="px-3 pb-1 pt-1">
        <div className="bg-white/95 dark:bg-[#16161a]/95 border border-black/[0.04] dark:border-white/[0.06] rounded-[26px] h-[52px] flex items-center justify-around px-3 shadow-xl shadow-black/10 dark:shadow-black/40">
          <div className="flex flex-col items-center gap-0.5"><IoSettingsOutline size={18} className="text-[#94a3b8]" /><span className="text-[7px] font-semibold text-[#94a3b8]">Settings</span></div>
          <div className="flex flex-col items-center gap-0.5"><IoPeopleOutline size={18} className="text-[#94a3b8]" /><span className="text-[7px] font-semibold text-[#94a3b8]">Contacts</span></div>
          <div className="flex flex-col items-center -mt-6">
            <div className="w-[48px] h-[48px] bg-[#0ea5e9] dark:bg-[#25d1f4] rounded-full flex items-center justify-center shadow-lg shadow-[#0ea5e9]/40 dark:shadow-[#25d1f4]/40"><IoHome size={22} className="text-white" /></div>
            <span className="text-[7px] font-semibold text-[#0ea5e9] dark:text-[#25d1f4] mt-0.5">Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5"><IoRestaurantOutline size={18} className="text-[#94a3b8]" /><span className="text-[7px] font-semibold text-[#94a3b8]">Mess</span></div>
          <div className="flex flex-col items-center gap-0.5"><IoWalletOutline size={18} className="text-[#94a3b8]" /><span className="text-[7px] font-semibold text-[#94a3b8]">Khaata</span></div>
        </div>
      </div>
    </>
  );
}

function ContactsScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-4 pt-7 pb-4">
        <div className="flex items-center justify-between">
          <IoChevronBack size={20} className="text-white" />
          <span className="text-white font-bold text-sm">My Contacts</span>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><IoAdd size={20} className="text-white" /></div>
        </div>
      </div>
      <div className="px-3 py-2.5">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 bg-[#f1f5f9] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-3 py-2.5">
            <IoSearchOutline size={14} className="text-[#94a3b8]" />
            <span className="text-[10px] text-[#94a3b8]">Search contacts...</span>
          </div>
          <div className="w-10 h-10 bg-[#f1f5f9] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center"><IoFunnelOutline size={14} className="text-[#94a3b8]" /></div>
        </div>
      </div>
      <div className="px-3 pb-2 flex gap-1.5">
        <span className="px-3 py-1.5 bg-[#0a7ea4] dark:bg-[#22d3ee] text-white text-[9px] font-bold rounded-full">All</span>
        <span className="px-3 py-1.5 border border-[#ef4444]/30 text-[#ef4444] text-[9px] font-bold rounded-full">You&apos;ll Give</span>
        <span className="px-3 py-1.5 border border-[#10b981]/30 text-[#10b981] text-[9px] font-bold rounded-full">You&apos;ll Get</span>
      </div>
      <div className="px-3 pb-3 space-y-2">
        {[
          { init: 'AH', name: 'Ameer Hamza', time: '2h ago', amount: 'Rs6,070', type: 'get' },
          { init: 'AI', name: 'Abdullah Iftikhar', time: '1d ago', amount: 'Rs5,451', type: 'get' },
          { init: 'M', name: 'Mudassir', time: '3d ago', amount: 'Rs5,005', type: 'get' },
          { init: 'HM', name: 'Hamza Mushtaq', time: '5d ago', amount: 'Rs2,344', type: 'give' },
          { init: 'SA', name: 'Saad Ahmed', time: '1w ago', amount: 'Rs1,200', type: 'get' },
        ].map((c) => (
          <div key={c.init} className="bg-white dark:bg-[#1e293b]/50 border border-[#f1f5f9] dark:border-white/5 rounded-2xl px-3 py-2.5 flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 dark:bg-[#22d3ee]/10 border border-black/5 dark:border-white/5 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[10px] font-black text-[#0a7ea4] dark:text-[#22d3ee]">{c.init}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#0f172a] dark:text-white truncate">{c.name}</div>
              <div className="text-[8px] text-[#94a3b8]">Last: {c.time}</div>
            </div>
            <div className="text-right ml-2">
              <div className={`text-[11px] font-extrabold ${c.type === 'get' ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>{c.amount}</div>
              <div className={`text-[7px] font-extrabold ${c.type === 'get' ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>{c.type === 'get' ? "YOU'LL GET" : "YOU'LL GIVE"}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function PersonalKhaataScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-4 pt-7 pb-4">
        <div className="flex items-center justify-between mb-1">
          <IoChevronBack size={20} className="text-white" />
          <div className="flex items-center gap-1.5"><IoWalletOutline size={16} className="text-white" /><span className="text-white font-bold text-sm">Personal Khaata</span></div>
          <div className="w-5"></div>
        </div>
        <p className="text-white/70 text-[9px] text-center">Track your income & expenses</p>
      </div>
      <div className="px-3 pt-2.5 pb-1.5 flex gap-2">
        <div className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2">
          <div className="text-[8px] text-[#94a3b8] mb-0.5">Year</div>
          <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">2025</div>
        </div>
        <div className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2">
          <div className="text-[8px] text-[#94a3b8] mb-0.5">Month</div>
          <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">November</div>
        </div>
      </div>
      <div className="px-3 py-1.5 grid grid-cols-3 gap-1.5">
        <div className="bg-[#10b981]/10 rounded-xl p-2 text-center">
          <div className="text-[7px] text-[#64748b] dark:text-[#94a3b8]">Income</div>
          <div className="text-[11px] font-extrabold text-[#10b981]">+Rs45,000</div>
        </div>
        <div className="bg-[#ef4444]/10 rounded-xl p-2 text-center">
          <div className="text-[7px] text-[#64748b] dark:text-[#94a3b8]">Expense</div>
          <div className="text-[11px] font-extrabold text-[#ef4444]">-Rs2,000</div>
        </div>
        <div className="bg-[#3b82f6]/10 rounded-xl p-2 text-center">
          <div className="text-[7px] text-[#64748b] dark:text-[#94a3b8]">Net</div>
          <div className="text-[11px] font-extrabold text-[#10b981]">+Rs43,000</div>
        </div>
      </div>
      <div className="px-3 py-1.5 flex gap-1.5">
        <button className="flex-1 bg-[#0a7ea4] dark:bg-[#22d3ee] text-white text-[9px] py-2 rounded-xl font-bold">All</button>
        <button className="flex-1 bg-white dark:bg-white/5 text-[#0f172a] dark:text-white text-[9px] py-2 rounded-xl border border-gray-200 dark:border-white/10 font-medium">Income</button>
        <button className="flex-1 bg-white dark:bg-white/5 text-[#0f172a] dark:text-white text-[9px] py-2 rounded-xl border border-gray-200 dark:border-white/10 font-medium">Expense</button>
      </div>
      <div className="px-3 py-1.5 space-y-2">
        {[
          { emoji: '💵', cat: 'Salary', date: 'Nov 1', amt: '+Rs45,000', color: '#10b981' },
          { emoji: '🏠', cat: 'Rent', date: 'Nov 1', amt: '-Rs2,000', color: '#ef4444' },
          { emoji: '💻', cat: 'Freelance', date: 'Oct 28', amt: '+Rs15,000', color: '#8b5cf6' },
          { emoji: '🛒', cat: 'Shopping', date: 'Oct 25', amt: '-Rs3,500', color: '#f59e0b' },
        ].map((t) => (
          <div key={t.cat} className="bg-white dark:bg-[#1e293b]/50 border border-gray-100 dark:border-white/5 rounded-xl p-2.5 flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2.5 flex-shrink-0" style={{ backgroundColor: t.color + '15' }}>
              <span className="text-[14px]">{t.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">{t.cat}</div>
              <div className="text-[8px] text-[#94a3b8]">{t.date}</div>
            </div>
            <div className="text-[11px] font-extrabold" style={{ color: t.color }}>{t.amt}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end px-4 py-1.5">
        <div className="w-10 h-10 bg-[#0a7ea4] dark:bg-[#22d3ee] rounded-full flex items-center justify-center shadow-lg"><IoAdd size={20} className="text-white" /></div>
      </div>
    </>
  );
}

function MessScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-4 pt-7 pb-4">
        <div className="flex items-center justify-between">
          <IoChevronBack size={20} className="text-white" />
          <div className="flex items-center gap-1.5"><IoRestaurantOutline size={16} className="text-white" /><span className="text-white font-bold text-sm">Mess Attendance</span></div>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><IoBarChartOutline size={18} className="text-white" /></div>
        </div>
      </div>
      <div className="px-3 pt-2.5 pb-1.5 flex gap-2">
        <div className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2">
          <div className="text-[8px] text-[#94a3b8]">Month</div>
          <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">March 2026</div>
        </div>
        <div className="flex-1 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl px-3 py-2 text-center">
          <div className="text-[8px] text-[#94a3b8]">Total Spent</div>
          <div className="text-[12px] font-extrabold text-[#f59e0b]">Rs8,450</div>
        </div>
      </div>
      <div className="px-3 pb-2 flex gap-1.5">
        <span className="px-3 py-1.5 bg-[#0a7ea4] dark:bg-[#22d3ee] text-white text-[9px] font-bold rounded-full">All Meals</span>
        <span className="px-3 py-1.5 border border-[#f59e0b]/30 text-[#f59e0b] text-[9px] font-bold rounded-full">Breakfast</span>
        <span className="px-3 py-1.5 border border-[#10b981]/30 text-[#10b981] text-[9px] font-bold rounded-full">Lunch</span>
        <span className="px-3 py-1.5 border border-[#8b5cf6]/30 text-[#8b5cf6] text-[9px] font-bold rounded-full">Dinner</span>
      </div>
      <div className="px-3 pb-3 space-y-2">
        {[
          { meal: 'Lunch', date: 'Mar 28', price: 'Rs250', people: '4', emoji: '🍛', color: '#10b981' },
          { meal: 'Dinner', date: 'Mar 27', price: 'Rs300', people: '3', emoji: '🍲', color: '#8b5cf6' },
          { meal: 'Breakfast', date: 'Mar 27', price: 'Rs150', people: '4', emoji: '🍳', color: '#f59e0b' },
          { meal: 'Lunch', date: 'Mar 26', price: 'Rs280', people: '5', emoji: '🍛', color: '#10b981' },
          { meal: 'Dinner', date: 'Mar 26', price: 'Rs350', people: '4', emoji: '🍲', color: '#8b5cf6' },
          { meal: 'Breakfast', date: 'Mar 26', price: 'Rs120', people: '3', emoji: '🍳', color: '#f59e0b' },
        ].map((m, i) => (
          <div key={i} className="bg-white dark:bg-[#1e293b]/50 border border-gray-100 dark:border-white/5 rounded-xl p-2.5 flex items-center">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-2.5" style={{ backgroundColor: m.color + '15' }}>
              <span className="text-[16px]">{m.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">{m.meal}</div>
              <div className="text-[8px] text-[#94a3b8]">{m.date} &bull; {m.people} people</div>
            </div>
            <div className="text-[11px] font-extrabold" style={{ color: m.color }}>{m.price}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end px-4 pb-1">
        <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-lg"><IoAdd size={20} className="text-white" /></div>
      </div>
    </>
  );
}

function GroupKhaataScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-4 pt-7 pb-4">
        <div className="flex items-center justify-between">
          <IoChevronBack size={20} className="text-white" />
          <div className="flex items-center gap-1.5"><IoGitNetworkOutline size={16} className="text-white" /><span className="text-white font-bold text-sm">Group Khaata</span></div>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><IoAdd size={18} className="text-white" /></div>
        </div>
      </div>
      <div className="px-3 pt-3 pb-3 space-y-2.5">
        {[
          { title: 'Dinner at Cafe', date: 'Mar 28', total: 'Rs2,400', members: 4, paid: 'You', color: '#8b5cf6', settled: false },
          { title: 'Grocery Shopping', date: 'Mar 25', total: 'Rs1,800', members: 3, paid: 'Ahmed', color: '#10b981', settled: false },
          { title: 'Movie Night', date: 'Mar 20', total: 'Rs3,200', members: 5, paid: 'You', color: '#f59e0b', settled: true },
          { title: 'Road Trip Fuel', date: 'Mar 15', total: 'Rs4,500', members: 4, paid: 'Bilal', color: '#ef4444', settled: false },
          { title: 'Birthday Party', date: 'Mar 10', total: 'Rs6,000', members: 6, paid: 'You', color: '#0ea5e9', settled: true },
        ].map((g, i) => (
          <div key={i} className="bg-white dark:bg-[#1e293b]/50 border border-gray-100 dark:border-white/5 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: g.color + '15' }}>
                  <IoGitNetworkOutline size={18} color={g.color} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0f172a] dark:text-white">{g.title}</div>
                  <div className="text-[8px] text-[#94a3b8]">{g.date} &bull; {g.members} members</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[12px] font-extrabold text-[#0f172a] dark:text-white">{g.total}</div>
                {g.settled ? (
                  <span className="text-[7px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">SETTLED</span>
                ) : (
                  <span className="text-[7px] font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">PENDING</span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/5">
              <div className="text-[8px] text-[#94a3b8]">Paid by <span className="font-bold text-[#0f172a] dark:text-white">{g.paid}</span></div>
              <div className="text-[8px] font-bold" style={{ color: g.color }}>Rs{(parseInt(g.total.replace(/[^0-9]/g, '')) / g.members).toLocaleString()} / person</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function RewardsScreen() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] dark:from-[#1c1e1f] dark:to-[#1c1e1f] dark:border-b-2 dark:border-[#fbbf24]/30 px-4 pt-7 pb-6">
        <div className="flex items-center justify-between mb-4">
          <IoChevronBack size={20} className="text-white" />
          <span className="text-white font-bold text-sm">Rewards</span>
          <IoStarOutline size={20} className="text-white" />
        </div>
        <div className="text-center">
          <div className="text-[40px] mb-1">🏆</div>
          <div className="text-3xl font-black text-white">1,250</div>
          <div className="text-[10px] font-bold text-white/80 tracking-[3px]">KHAATA COINS</div>
          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden mx-8">
            <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="text-[9px] text-white/70 mt-1">Gold Tier &bull; 750 to Platinum</div>
        </div>
      </div>
      <div className="px-3 -mt-3 space-y-2 pb-3">
        {[
          { tier: 'Silver', range: '0-499', emoji: '🥈', done: true },
          { tier: 'Gold', range: '500-999', emoji: '🥇', done: false, current: true },
          { tier: 'Platinum', range: '1000+', emoji: '💎', done: false },
        ].map((t) => (
          <div key={t.tier} className={`bg-white dark:bg-[#1e293b]/50 border rounded-xl p-3 flex items-center gap-3 ${t.current ? 'border-[#fbbf24]/40' : 'border-gray-100 dark:border-white/5'} ${!t.done && !t.current ? 'opacity-50' : ''}`}>
            <div className="text-2xl">{t.emoji}</div>
            <div className="flex-1">
              <div className="text-[11px] font-bold text-[#0f172a] dark:text-white">{t.tier} Tier</div>
              <div className="text-[8px] text-[#94a3b8]">{t.range} coins</div>
            </div>
            {t.done && <span className="text-[8px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full">DONE</span>}
            {t.current && <span className="text-[8px] font-bold text-[#fbbf24] bg-[#fbbf24]/10 px-2 py-0.5 rounded-full">NOW</span>}
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <div className="text-[11px] font-bold text-[#0f172a] dark:text-white mb-2">Earn More</div>
        {[
          { act: 'Add Transaction', coins: '+10' },
          { act: 'Group Split', coins: '+15' },
          { act: 'Daily Goal (5)', coins: '+50' },
        ].map((e) => (
          <div key={e.act} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
            <span className="text-[10px] text-[#64748b] dark:text-[#94a3b8]">{e.act}</span>
            <span className="text-[10px] font-bold text-[#f59e0b]">{e.coins}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-4 pt-7 pb-4">
        <div className="flex items-center justify-between">
          <IoChevronBack size={20} className="text-white" />
          <span className="text-white font-bold text-sm">Settings</span>
          <div className="w-5"></div>
        </div>
      </div>
      <div className="px-3 pt-3 space-y-2 pb-3">
        {[
          { icon: <IoMoon size={18} className="text-[#f59e0b]" />, label: 'Dark Mode', sub: 'Toggle appearance', toggle: true },
          { icon: <span className="text-[16px]">🌐</span>, label: 'Language', sub: 'English / Urdu', val: 'English' },
          { icon: <span className="text-[16px]">💱</span>, label: 'Currency', sub: 'Select currency', val: 'PKR' },
          { icon: <IoNotificationsOutline size={18} className="text-[#3b82f6]" />, label: 'Notifications', sub: 'Manage alerts', toggle: true },
          { icon: <IoShieldCheckmarkOutline size={18} className="text-[#10b981]" />, label: 'Biometric Lock', sub: 'Face ID / Fingerprint', toggle: true },
          { icon: <IoPersonOutline size={18} className="text-[#8b5cf6]" />, label: 'Edit Profile', sub: 'Name, email, photo' },
          { icon: <IoCardOutline size={18} className="text-[#6366f1]" />, label: 'Visiting Card', sub: 'Your QR code' },
          { icon: <IoMailOutline size={18} className="text-[#14b8a6]" />, label: 'Contact Support', sub: 'Get help' },
          { icon: <IoDocumentTextOutline size={18} className="text-[#64748b]" />, label: 'Privacy Policy', sub: 'Read our policies' },
        ].map((s) => (
          <div key={s.label} className="bg-white dark:bg-[#1e293b]/50 border border-gray-100 dark:border-white/5 rounded-xl px-3 py-2.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0">{s.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#0f172a] dark:text-white">{s.label}</div>
              <div className="text-[8px] text-[#94a3b8]">{s.sub}</div>
            </div>
            {s.toggle ? (
              <div className="w-9 h-5 bg-[#0ea5e9] dark:bg-[#22d3ee] rounded-full flex items-center px-0.5">
                <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
              </div>
            ) : s.val ? (
              <span className="text-[9px] font-bold text-[#0ea5e9] dark:text-[#22d3ee]">{s.val}</span>
            ) : (
              <IoChevronForward size={14} className="text-[#94a3b8]" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function LoginScreen() {
  return (
    <>
      <div className="bg-[#0a7ea4] dark:bg-[#1c1e1f] dark:border-b-2 dark:border-[#22d3ee]/30 px-5 pt-8 pb-10 rounded-b-[40px]">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center"><span className="text-3xl">👛</span></div>
        </div>
        <div className="text-center text-[8px] font-extrabold text-white/80 tracking-[4px] mb-3">K H A A T A</div>
        <div className="text-center">
          <div className="text-[32px] font-light text-white leading-none">Welcome</div>
          <div className="text-[40px] font-extrabold text-white leading-none -mt-1">Back</div>
          <div className="w-12 h-1 bg-white rounded-full mx-auto mt-3"></div>
        </div>
      </div>
      <div className="px-5 pt-7 pb-4">
        <div className="mb-4">
          <label className="text-[10px] font-semibold text-[#64748b] dark:text-[#94a3b8] mb-1.5 block">Email</label>
          <div className="h-[46px] bg-[#f9fafb] dark:bg-white/5 border border-[#e5e7eb] dark:border-[#334155] rounded-[14px] px-4 flex items-center"><span className="text-[11px] text-[#94a3b8]">your@email.com</span></div>
        </div>
        <div className="mb-3">
          <label className="text-[10px] font-semibold text-[#64748b] dark:text-[#94a3b8] mb-1.5 block">Password</label>
          <div className="h-[46px] bg-[#f9fafb] dark:bg-white/5 border border-[#e5e7eb] dark:border-[#334155] rounded-[14px] px-4 flex items-center justify-between">
            <span className="text-[11px] text-[#94a3b8]">--------</span>
            <IoEyeOutline size={16} className="text-[#94a3b8]" />
          </div>
        </div>
        <div className="text-right mb-5"><span className="text-[10px] font-semibold text-[#0a7ea4] dark:text-[#22d3ee]">Forgot Password?</span></div>
        <div className="h-[48px] bg-[#0a7ea4] dark:bg-[#22d3ee] rounded-2xl flex items-center justify-center shadow-lg"><span className="text-white font-bold text-[15px]">Sign In</span></div>
        <div className="text-center mt-5">
          <span className="text-[11px] text-[#64748b] dark:text-[#94a3b8]">Don&apos;t have an account? </span>
          <span className="text-[11px] font-bold text-[#0a7ea4] dark:text-[#22d3ee]">Sign Up</span>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */

const screens: Screen[] = [
  { id: 'dashboard', title: 'Dashboard', subtitle: 'Your financial overview', color: '#0ea5e9', hasColoredHeader: false, render: DashboardScreen },
  { id: 'contacts', title: 'Contacts', subtitle: 'Track balances with friends', color: '#3b82f6', hasColoredHeader: true, render: ContactsScreen },
  { id: 'personal', title: 'Personal Khaata', subtitle: 'Income & expense tracking', color: '#10b981', hasColoredHeader: true, render: PersonalKhaataScreen },
  { id: 'group', title: 'Group Khaata', subtitle: 'Split bills easily', color: '#8b5cf6', hasColoredHeader: true, render: GroupKhaataScreen },
  { id: 'mess', title: 'Mess Attendance', subtitle: 'Daily meal tracking', color: '#f59e0b', hasColoredHeader: true, render: MessScreen },
  { id: 'rewards', title: 'Rewards', subtitle: 'Earn Khaata Coins', color: '#f59e0b', hasColoredHeader: true, render: RewardsScreen },
  { id: 'settings', title: 'Settings', subtitle: 'Customize your app', color: '#64748b', hasColoredHeader: true, render: SettingsScreen },
  { id: 'login', title: 'Login', subtitle: 'Secure authentication', color: '#0ea5e9', hasColoredHeader: true, render: LoginScreen },
];

export default function AppScreenshots() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#16161a]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full mb-4">
            <span className="text-sm">📱</span>
            <span className="text-xs font-bold text-[#8b5cf6] tracking-wide">APP PREVIEW</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-2">See Every Screen</h2>
          <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-xl mx-auto">Explore the beautiful and intuitive interface across all modules</p>
        </div>

        {/* Screen selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeScreen === i
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-white/5 text-[#64748b] dark:text-[#94a3b8] hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
              style={activeScreen === i ? { backgroundColor: screen.color, boxShadow: `0 8px 25px ${screen.color}40` } : {}}
            >
              {screen.title}
            </button>
          ))}
        </div>

        {/* Phone display */}
        <div className="flex justify-center items-start">
          <div>
            <PhoneFrame hasColoredHeader={screens[activeScreen].hasColoredHeader}>
              {screens[activeScreen].render()}
            </PhoneFrame>
            <div className="text-center mt-4">
              <h3 className="font-bold text-[#0f172a] dark:text-white text-lg">{screens[activeScreen].title}</h3>
              <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">{screens[activeScreen].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
