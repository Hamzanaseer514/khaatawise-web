import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#20B2AA] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Khaata App</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium">Features</a>
              <a href="#download" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium">Download</a>
              <a href="#about" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium">About</a>
            </div>
            <a
              href="#download"
              className="px-4 sm:px-6 py-2 bg-[#20B2AA] text-white rounded-lg hover:bg-[#1a9b94] transition-colors font-semibold text-sm sm:text-base shadow-md"
            >
              Download App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Track Your
                <span className="text-[#20B2AA]"> Expenses</span>
                <br />
                Like Never Before
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manage personal finances, split bills with friends, track mess attendance, and get detailed analytics - all in one powerful app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#download"
                  className="px-8 py-4 bg-[#20B2AA] text-white rounded-lg hover:bg-[#1a9b94] transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Download Now
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white text-[#20B2AA] rounded-lg border-2 border-[#20B2AA] hover:bg-[#20B2AA]/5 transition-all font-semibold text-lg text-center"
                >
                  Explore Features
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Free to Use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>No Ads</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Full Mobile View with Dashboard */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#20B2AA] to-[#4dccc4] rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-[#20B2AA] px-6 py-3 flex justify-between items-center text-white text-xs">
                      <span>8:37</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Dashboard Screen - Full Mobile View */}
                    <div className="bg-white p-6 min-h-[600px]">
                      {/* Welcome Section */}
                      <div className="mb-4">
                        <div className="text-gray-400 text-sm mb-1">Welcome back,</div>
                        <div className="text-gray-900 font-bold text-xl">Usman!</div>
                        <button className="mt-2 px-4 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold">
                          Logout
                        </button>
                      </div>
                      
                      {/* Dashboard Title */}
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h2>
                        <p className="text-sm text-gray-500">Choose a module to get started</p>
                      </div>
                      
                      {/* Module Cards */}
                      <div className="space-y-3">
                        {/* Contacts Card */}
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">👥</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">Contacts</div>
                            <div className="text-sm text-gray-500">Manage your contacts</div>
                          </div>
                          <span className="text-gray-400 text-xl">›</span>
                        </div>
                        
                        {/* Personal Khaata Card */}
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-green-500 shadow-sm">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📝</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">Personal Khaata</div>
                            <div className="text-sm text-gray-500">Track your income & expenses</div>
                          </div>
                          <span className="text-gray-400 text-xl">›</span>
                        </div>
                        
                        {/* Group Khaata Card */}
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-purple-500 shadow-sm">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">👨‍👩‍👧‍👦</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">Group Khaata</div>
                            <div className="text-sm text-gray-500">Split bills with friends</div>
                          </div>
                          <span className="text-gray-400 text-xl">›</span>
                        </div>
                        
                        {/* Mess Attendance Card */}
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-orange-500 shadow-sm">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🍽️</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">Mess Attendance</div>
                            <div className="text-sm text-gray-500">Track daily meals & billing</div>
                          </div>
                          <span className="text-gray-400 text-xl">›</span>
                        </div>
                        
                        {/* Mess Analytics Card */}
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-[#20B2AA] shadow-sm">
                          <div className="w-12 h-12 bg-[#20B2AA]/10 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📊</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">Mess Analytics</div>
                            <div className="text-sm text-gray-500">View detailed analytics</div>
                          </div>
                          <span className="text-gray-400 text-xl">›</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#20B2AA]/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#20B2AA]/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-gray-600">
              Beautiful, intuitive interface designed for ease of use
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dashboard Screenshot */}
            <div className="relative">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-[#20B2AA] px-4 py-2 flex justify-between items-center text-white text-xs">
                    <span>8:37</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard Screen */}
                  <div className="bg-white p-4">
                    <div className="mb-4">
                      <div className="text-gray-400 text-xs mb-1">Welcome back,</div>
                      <div className="text-gray-900 font-bold text-lg">Usman!</div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">Dashboard</h2>
                      <p className="text-xs text-gray-500">Choose a module to get started</p>
                    </div>
                    
                    {/* Module Cards */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">👥</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm">Contacts</div>
                          <div className="text-xs text-gray-500">Manage your contacts</div>
                        </div>
                        <span className="text-gray-400">›</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">📝</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm">Personal Khaata</div>
                          <div className="text-xs text-gray-500">Track your income & expenses</div>
                        </div>
                        <span className="text-gray-400">›</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">👨‍👩‍👧‍👦</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm">Group Khaata</div>
                          <div className="text-xs text-gray-500">Split bills with friends</div>
                        </div>
                        <span className="text-gray-400">›</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">🍽️</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm">Mess Attendance</div>
                          <div className="text-xs text-gray-500">Track daily meals & billing</div>
                        </div>
                        <span className="text-gray-400">›</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">Dashboard View</h3>
                <p className="text-sm text-gray-500">Quick access to all modules</p>
              </div>
            </div>

            {/* Personal Khaata Screenshot */}
            <div className="relative">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-[#20B2AA] px-4 py-2 flex justify-between items-center text-white text-xs">
                    <span>8:39</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Personal Khaata Screen */}
                  <div className="bg-white p-4">
                    <div className="mb-3">
                      <div className="text-white text-xs mb-1">← Back</div>
                      <div className="text-white font-bold text-base mb-1">📝 Personal Khaata</div>
                      <div className="text-white/90 text-xs">Track your income & expenses</div>
                    </div>
                    
                    {/* Year/Month Selectors */}
                    <div className="flex gap-2 mb-3">
                      <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">Year</div>
                        <div className="text-sm font-medium text-gray-900">2025</div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">Month</div>
                        <div className="text-sm font-medium text-gray-900">November</div>
                      </div>
                    </div>
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-green-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-600 mb-1">Total Income</div>
                        <div className="text-sm font-bold text-green-600">+₹45000</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-600 mb-1">Total Expense</div>
                        <div className="text-sm font-bold text-red-600">-₹2000</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-600 mb-1">Net Balance</div>
                        <div className="text-sm font-bold text-green-600">+₹43000</div>
                      </div>
                    </div>
                    
                    {/* Filter Buttons */}
                    <div className="flex gap-2 mb-3">
                      <button className="flex-1 bg-[#20B2AA] text-white text-xs py-2 rounded-lg font-medium">All</button>
                      <button className="flex-1 bg-white text-gray-700 text-xs py-2 rounded-lg border border-gray-200">💰 Income</button>
                      <button className="flex-1 bg-white text-gray-700 text-xs py-2 rounded-lg border border-gray-200">💸 Expense</button>
                    </div>
                    
                    {/* Transaction Card */}
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">💸 Expense</span>
                          <span className="text-xs text-gray-500">Nov 1, 2025</span>
                        </div>
                        <div className="text-sm font-bold text-red-600">-₹2000.00</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">Category: Rent</div>
                      <div className="text-xs text-gray-500">Rent paid 😭</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">Personal Khaata</h3>
                <p className="text-sm text-gray-500">Track income & expenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome/Splash Screen Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#20B2AA] to-[#16a085]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience Khaata App
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              See how Khaata App welcomes you with a beautiful splash screen
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-sm mx-auto">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-white/10 rounded-[3rem] blur-3xl -z-10"></div>
              
              {/* Phone Frame with Splash Screen */}
              <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-[#20B2AA] rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="px-6 py-3 flex justify-between items-center text-white text-xs">
                    <span>1:07</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">4.00 KB/S</span>
                      <span className="text-xs ml-1">VoD</span>
                      <span className="text-xs ml-1">LTE</span>
                      <div className="w-6 h-3 border border-white rounded-sm ml-1 flex items-center justify-end pr-0.5">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-xs ml-1">64</span>
                    </div>
                  </div>
                  
                  {/* Splash Screen Content */}
                  <div className="bg-[#20B2AA] p-8 min-h-[600px] flex flex-col items-center justify-center">
                    {/* Central Graphic Container */}
                    <div className="bg-blue-400/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-6">
                        {/* Money Bag Icon */}
                        <div className="bg-yellow-400 rounded-xl p-4 shadow-lg">
                          <div className="text-4xl font-bold text-gray-900">$</div>
                        </div>
                        
                        {/* Bar Chart */}
                        <div className="bg-white/90 rounded-lg p-4 shadow-lg">
                          <div className="flex items-end gap-2 h-16">
                            <div className="w-6 bg-green-500 rounded-t" style={{ height: '40%' }}></div>
                            <div className="w-6 bg-red-500 rounded-t" style={{ height: '60%' }}></div>
                            <div className="w-6 bg-blue-500 rounded-t" style={{ height: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Title */}
                    <h1 className="text-4xl font-bold text-white mb-3">
                      Khaata App
                    </h1>
                    
                    {/* Tagline */}
                    <p className="text-lg text-white/90 mb-12 text-center">
                      Manage your finances with ease
                    </p>
                    
                    {/* Loading Indicator */}
                    <div className="mt-auto mb-8">
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                      </div>
                      <p className="text-sm text-white/70 mt-3 text-center">
                        Getting started...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section - Left: Download Options, Right: Phone Mockup */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Download Options */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Download Khaata App
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Get started with Khaata App today and take control of your finances. Available for Android and iOS.
              </p>
              
              <div className="space-y-4 mb-8">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.khaata.app"
            target="_blank"
            rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gray-900 hover:bg-gray-800 rounded-xl p-4 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Get it on</div>
                    <div className="text-xl font-bold text-white">Google Play</div>
                  </div>
                  <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/app/khaata-app/id123456789"
            target="_blank"
            rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gray-900 hover:bg-gray-800 rounded-xl p-4 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05,20.28C16.29,20.64 15.43,20.64 14.67,20.28L5.57,15.81C4.81,15.45 4.22,14.69 4.22,13.81V10.19C4.22,9.31 4.81,8.55 5.57,8.19L14.67,3.72C15.43,3.36 16.29,3.36 17.05,3.72L23.63,7.06C24.39,7.42 25,8.18 25,9.06V14.94C25,15.82 24.39,16.58 23.63,16.94L17.05,20.28M16.54,18.56C16.95,18.74 17.41,18.74 17.82,18.56L22.27,16.28C22.68,16.1 23,15.7 23,15.24V8.76C23,8.3 22.68,7.9 22.27,7.72L17.82,5.44C17.41,5.26 16.95,5.26 16.54,5.44L7.44,9.91C7.03,10.09 6.63,10.54 6.63,11V13C6.63,13.46 7.03,13.91 7.44,14.09L16.54,18.56Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Download on the</div>
                    <div className="text-xl font-bold text-white">App Store</div>
                  </div>
                  <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA]">✓</span>
                  <span>Android 5.0+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA]">✓</span>
                  <span>iOS 12.0+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA]">✓</span>
                  <span>Free Download</span>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Mobile View with App Highlights */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#20B2AA] to-[#4dccc4] rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-[#20B2AA] px-6 py-3 flex justify-between items-center text-white text-xs shadow-sm">
                      <span className="font-medium">8:37</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced App Screen with Highlights */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 min-h-[700px]">
                      {/* App Header with Logo */}
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20B2AA] rounded-2xl shadow-lg mb-3">
                          <span className="text-3xl font-bold text-white">K</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Khaata App</h2>
                        <p className="text-sm text-[#20B2AA] font-medium">Your Finance Manager</p>
                      </div>

                      {/* Quick Stats Cards */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                          <div className="text-xl mb-1">📊</div>
                          <div className="text-xs font-bold text-gray-900">9+</div>
                          <div className="text-[10px] text-gray-500">Features</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                          <div className="text-xl mb-1">⭐</div>
                          <div className="text-xs font-bold text-gray-900">4.8</div>
                          <div className="text-[10px] text-gray-500">Rating</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                          <div className="text-xl mb-1">👥</div>
                          <div className="text-xs font-bold text-gray-900">1K+</div>
                          <div className="text-[10px] text-gray-500">Users</div>
                        </div>
                      </div>

                      {/* App Highlights Banner */}
                      <div className="bg-gradient-to-r from-[#20B2AA] to-[#16a085] rounded-xl p-4 mb-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold">Total Saved</span>
                          <span className="text-lg font-bold">₹12,450</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-2 text-white/80">
                          <span>Receivables</span>
                          <span>Payables</span>
                        </div>
                      </div>

                      {/* Key Features Showcase */}
                      <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-[#20B2AA]">✨</span>
                          Key Features
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                            <span className="text-lg">💰</span>
                            <span className="text-xs font-medium text-gray-700 flex-1">Track Income & Expenses</span>
                            <span className="text-green-500 text-xs">✓</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                            <span className="text-lg">👥</span>
                            <span className="text-xs font-medium text-gray-700 flex-1">Split Bills with Friends</span>
                            <span className="text-green-500 text-xs">✓</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                            <span className="text-lg">🍽️</span>
                            <span className="text-xs font-medium text-gray-700 flex-1">Mess Attendance Tracking</span>
                            <span className="text-green-500 text-xs">✓</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                            <span className="text-lg">📊</span>
                            <span className="text-xs font-medium text-gray-700 flex-1">Detailed Analytics</span>
                            <span className="text-green-500 text-xs">✓</span>
                          </div>
                        </div>
                      </div>

                      {/* App Benefits */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-[#20B2AA]">🎯</span>
                          Why Choose Us?
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-[#20B2AA] text-xs mt-0.5">•</span>
                            <span className="text-xs text-gray-600 flex-1">100% Free - No Hidden Charges</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[#20B2AA] text-xs mt-0.5">•</span>
                            <span className="text-xs text-gray-600 flex-1">Secure & Encrypted Data</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[#20B2AA] text-xs mt-0.5">•</span>
                            <span className="text-xs text-gray-600 flex-1">No Ads - Clean Experience</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[#20B2AA] text-xs mt-0.5">•</span>
                            <span className="text-xs text-gray-600 flex-1">Offline Support Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#20B2AA]/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#20B2AA]/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your finances effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Dashboard */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#20B2AA]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dashboard & Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a comprehensive overview with outstanding summary, monthly transactions, balance buckets, and detailed analytics at your fingertips.
              </p>
            </div>

            {/* Feature 2: Personal Khaata */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#16a085]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Personal Khaata</h3>
              <p className="text-gray-600 leading-relaxed">
                Track your income and expenses with categories. Filter by month/year, view summaries, and manage your personal finances efficiently.
              </p>
            </div>

            {/* Feature 3: Group Khaata */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#9b59b6]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Group Khaata</h3>
              <p className="text-gray-600 leading-relaxed">
                Split bills with friends effortlessly. Create group transactions, track who paid what, and settle balances easily.
              </p>
            </div>

            {/* Feature 4: Mess Attendance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#f39c12]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mess Attendance</h3>
              <p className="text-gray-600 leading-relaxed">
                Track daily meals (Breakfast, Lunch, Dinner) with pricing and person count. Filter by month/year and manage mess records easily.
              </p>
            </div>

            {/* Feature 5: Mess Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#f39c12]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mess Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                View detailed analytics and insights for your mess records. Track spending patterns and meal trends over time.
              </p>
            </div>

            {/* Feature 6: Contacts */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#3498db]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contacts Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage your contacts and track balances with friends. See who owes you and who you owe at a glance.
              </p>
            </div>

            {/* Feature 7: Reports */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#e74c3c]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reports & Export</h3>
              <p className="text-gray-600 leading-relaxed">
                Export your transactions and reports in various formats. Keep detailed records for your financial planning.
              </p>
            </div>

            {/* Feature 8: Notifications */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#20B2AA]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Get email notifications and alerts for important transactions, balances, and updates. Stay informed always.
              </p>
            </div>

            {/* Feature 9: Secure & Private */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#16a085]/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is encrypted and secure. Biometric authentication and secure storage ensure your financial information stays private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Khaata App?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Khaata App is designed to simplify your financial management. Whether you're tracking personal expenses, splitting bills with friends, or managing mess attendance, we've got you covered. Our intuitive interface and powerful features make it easy to stay on top of your finances.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface that anyone can use</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Lightning-fast performance and reliable sync</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Completely Free</h3>
              <p className="text-gray-600">No hidden charges, no ads, completely free</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Download Khaata App today and take control of your finances
          </p>
          <a
            href="#download"
            className="inline-block px-10 py-5 bg-[#20B2AA] text-white rounded-lg hover:bg-[#1a9b94] transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Download App Now →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#20B2AA] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">K</span>
                </div>
                <span className="text-xl font-bold text-white">Khaata App</span>
              </div>
              <p className="text-gray-400">
                Your complete financial management solution.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Dashboard</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Personal Khaata</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Group Khaata</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Mess Attendance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Download</h4>
              <ul className="space-y-2">
                <li><a href="#download" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Android</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-[#20B2AA] transition-colors">iOS</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Terms of Service</a></li>
                <li><a href="/contact-support" className="text-gray-400 hover:text-[#20B2AA] transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Khaata App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
