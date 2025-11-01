import FeaturesCarousel from '@/components/FeaturesCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/khaataicon.png"
                alt="Khaatawise Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Khaatawise</span>
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
              Experience Khaatawise
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              See how Khaatawise welcomes you with a beautiful splash screen
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
                      Khaatawise
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

      {/* Download App Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-4">
              Download our APP
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - App Description and Download Buttons */}
            <div className="order-2 lg:order-1">
              <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg">
                Get started with Khaatawise today and take control of your finances. Manage expenses, split bills, track mess attendance, and get detailed analytics - all in one powerful app.
              </p>
              
              {/* Two Buttons Side by Side */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
                {/* Android/Google Play Button */}
                <a
                  href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/065f6591-044f-491a-b812-e8d837024a8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center bg-white border-2 border-gray-200 hover:border-[#20B2AA] rounded-2xl p-6 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#20B2AA] transition-colors">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Get it on</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#20B2AA] transition-colors">Google Play</div>
                  </div>
                </a>

                {/* iOS/App Store Button */}
                <a
                  href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/065f6591-044f-491a-b812-e8d837024a8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center bg-white border-2 border-gray-200 hover:border-[#20B2AA] rounded-2xl p-6 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#20B2AA] transition-colors">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05,20.28C16.29,20.64 15.43,20.64 14.67,20.28L5.57,15.81C4.81,15.45 4.22,14.69 4.22,13.81V10.19C4.22,9.31 4.81,8.55 5.57,8.19L14.67,3.72C15.43,3.36 16.29,3.36 17.05,3.72L23.63,7.06C24.39,7.42 25,8.18 25,9.06V14.94C25,15.82 24.39,16.58 23.63,16.94L17.05,20.28M16.54,18.56C16.95,18.74 17.41,18.74 17.82,18.56L22.27,16.28C22.68,16.1 23,15.7 23,15.24V8.76C23,8.3 22.68,7.9 22.27,7.72L17.82,5.44C17.41,5.26 16.95,5.26 16.54,5.44L7.44,9.91C7.03,10.09 6.63,10.54 6.63,11V13C6.63,13.46 7.03,13.91 7.44,14.09L16.54,18.56Z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Download on the</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#20B2AA] transition-colors">App Store</div>
                  </div>
                </a>
              </div>

              {/* QR Code Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Or scan to download</p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#20B2AA] transition-all">
                    <Image
                      src="/qr.png"
                      alt="QR Code to download Khaatawise"
                      width={200}
                      height={200}
                      className="w-48 h-48"
                    />
                    <p className="text-xs text-gray-500 text-center mt-3 max-w-[200px]">
                      Scan with your phone camera to download
                    </p>
                  </div>
                </div>
              </div>

              {/* Compatibility Info */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA] font-bold">✓</span>
                  <span>Android 5.0+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA] font-bold">✓</span>
                  <span>iOS 12.0+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#20B2AA] font-bold">✓</span>
                  <span>Free Download</span>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup with App Info Screen */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#20B2AA] to-[#4dccc4] rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-[#20B2AA] px-6 py-3 flex justify-between items-center text-white text-xs shadow-sm">
                      <span className="font-medium">8:37</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App Info Screen */}
                    <div className="bg-white p-6 min-h-[600px]">
                      {/* App Logo & Name */}
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg p-2">
                          <Image
                            src="/khaataicon.png"
                            alt="Khaatawise Logo"
                            width={80}
                            height={80}
                            className="w-full h-full rounded-xl"
                          />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Khaatawise</h2>
                        <p className="text-[#20B2AA] font-semibold text-lg">Your Finance Manager</p>
                      </div>
                      
                      {/* Stats Cards */}
                      <div className="flex gap-3 mb-6">
                        <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                          <div className="text-2xl mb-2 text-center">📊</div>
                          <div className="text-2xl font-bold text-gray-900 text-center mb-1">9+</div>
                          <div className="text-xs text-gray-500 text-center">Features</div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                          <div className="text-2xl mb-2 text-center">⭐</div>
                          <div className="text-2xl font-bold text-gray-900 text-center mb-1">4.8</div>
                          <div className="text-xs text-gray-500 text-center">Rating</div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                          <div className="text-2xl mb-2 text-center">👥</div>
                          <div className="text-2xl font-bold text-gray-900 text-center mb-1">1K+</div>
                          <div className="text-xs text-gray-500 text-center">Users</div>
                        </div>
                      </div>
                      
                      {/* Total Saved Section */}
                      <div className="bg-[#20B2AA] rounded-xl p-5 mb-6 shadow-lg">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-white font-semibold">Total Saved</span>
                          <span className="text-white text-2xl font-bold">₹12,450</span>
                        </div>
                        <div className="w-full h-2 bg-white/20 rounded-full mb-2">
                          <div className="w-[65%] h-full bg-white rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-white text-sm">
                          <span>Receivables</span>
                          <span>Payables</span>
                        </div>
                      </div>
                      
                      {/* Key Features */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl">⭐</span>
                          <h3 className="text-lg font-bold text-gray-900">Key Features</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">💰</span>
                              <span className="text-gray-700 text-sm">Track Income & Expenses</span>
                            </div>
                            <span className="text-[#20B2AA] text-lg">✓</span>
                          </div>
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">👥</span>
                              <span className="text-gray-700 text-sm">Split Bills with Friends</span>
                            </div>
                            <span className="text-[#20B2AA] text-lg">✓</span>
                          </div>
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">🚪</span>
                              <span className="text-gray-700 text-sm">Mess Attendance Tracking</span>
                            </div>
                            <span className="text-[#20B2AA] text-lg">✓</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">📊</span>
                              <span className="text-gray-700 text-sm">Detailed Analytics</span>
                            </div>
                            <span className="text-[#20B2AA] text-lg">✓</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Why Choose Us */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">?</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">Why Choose Us?</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#20B2AA] rounded-full"></div>
                            <span className="text-gray-600 text-sm">100% Free - No Hidden Charges</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#20B2AA] rounded-full"></div>
                            <span className="text-gray-600 text-sm">Secure & Encrypted Data</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#20B2AA] rounded-full"></div>
                            <span className="text-gray-600 text-sm">No Ads - Clean Experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#20B2AA] rounded-full"></div>
                            <span className="text-gray-600 text-sm">Offline Support Available</span>
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

      {/* Features Section with Auto-Sliding Carousel */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your finances effectively
            </p>
          </div>

          {/* Auto-Sliding Carousel */}
          <FeaturesCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Khaatawise?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for complete financial management, all in one powerful app
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-[#20B2AA]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">No hidden charges, no subscriptions, completely free forever</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-[#16a085]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Encrypted</h3>
              <p className="text-gray-600 text-sm">Your financial data is encrypted and stored securely with biometric protection</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-[#9b59b6]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Ads</h3>
              <p className="text-gray-600 text-sm">Clean, ad-free experience focused on your financial management</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-[#f39c12]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Offline Support</h3>
              <p className="text-gray-600 text-sm">Works seamlessly offline, sync when you're back online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#20B2AA] via-[#1a9b94] to-[#16a085]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm p-3">
              <Image
                src="/khaataicon.png"
                alt="Khaatawise Logo"
                width={96}
                height={96}
                className="w-full h-full rounded-xl"
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Take Control?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users managing their finances effortlessly with Khaatawise
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/065f6591-044f-491a-b812-e8d837024a8f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#20B2AA] rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/065f6591-044f-491a-b812-e8d837024a8f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05,20.28C16.29,20.64 15.43,20.64 14.67,20.28L5.57,15.81C4.81,15.45 4.22,14.69 4.22,13.81V10.19C4.22,9.31 4.81,8.55 5.57,8.19L14.67,3.72C15.43,3.36 16.29,3.36 17.05,3.72L23.63,7.06C24.39,7.42 25,8.18 25,9.06V14.94C25,15.82 24.39,16.58 23.63,16.94L17.05,20.28Z"/>
              </svg>
              Download on App Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/khaataicon.png"
                  alt="Khaatawise Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-xl font-bold text-white">Khaatawise</span>
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
            <p>&copy; {new Date().getFullYear()} Khaatawise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
