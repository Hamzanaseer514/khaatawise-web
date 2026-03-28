'use client';

const techItems = [
  {
    category: 'Frontend',
    color: '#0ea5e9',
    items: [
      { name: 'React Native', desc: 'Cross-platform UI', icon: '⚛️' },
      { name: 'Expo', desc: 'Development framework', icon: '📦' },
      { name: 'TypeScript', desc: 'Type-safe code', icon: '🔷' },
      { name: 'TailwindCSS', desc: 'Utility-first CSS', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    color: '#10b981',
    items: [
      { name: 'Node.js', desc: 'Server runtime', icon: '🟢' },
      { name: 'Express', desc: 'API framework', icon: '🚀' },
      { name: 'MongoDB', desc: 'NoSQL database', icon: '🍃' },
      { name: 'JWT Auth', desc: 'Secure tokens', icon: '🔐' },
    ],
  },
  {
    category: 'Features',
    color: '#8b5cf6',
    items: [
      { name: 'Biometric', desc: 'Face ID & fingerprint', icon: '👆' },
      { name: 'i18n', desc: 'English & Urdu', icon: '🌐' },
      { name: 'Cloudinary', desc: 'Image uploads', icon: '☁️' },
      { name: 'PDF/CSV', desc: 'Report exports', icon: '📄' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] dark:bg-[#0a0a0c] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8b5cf6]/3 dark:bg-[#8b5cf6]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full mb-5">
            <span className="text-sm">🛠️</span>
            <span className="text-xs font-bold text-[#8b5cf6] tracking-wide">BUILT WITH</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white mb-3">Powered By Modern Tech</h2>
          <p className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8] max-w-lg mx-auto">Enterprise-grade stack for reliability, security, and performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {techItems.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal`}
              style={{ transitionDelay: `${gi * 150}ms` }}
            >
              <div className="text-center mb-5">
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: group.color }}
                >
                  {group.category}
                </span>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white dark:bg-[#16161a] border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex items-center gap-3 hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <div className="text-sm font-bold text-[#0f172a] dark:text-white">{item.name}</div>
                      <div className="text-xs text-[#64748b] dark:text-[#94a3b8]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
