import { useState } from 'react'
import ReactPlayer from 'react-player'

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-primary">
              VideoLoop Pro
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">How it works</a>
            <a
              href="https://chromewebstore.google.com/detail/videoloop-pro-youtube-oth/abkpcchojmbflfpibononimknbccmhgp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Add to Chrome</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button 
              className="text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-primary transition-colors font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-primary transition-colors font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="https://chromewebstore.google.com/detail/videoloop-pro-youtube-oth/abkpcchojmbflfpibononimknbccmhgp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Add to Chrome</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-20">
            <div className="inline-block mb-4 sm:mb-6 animate-float">
              <span className="bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-sm font-medium">
                ✨ The Ultimate Video Looping Tool
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-primary relative">
                Loop Videos Like a Pro
                <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 text-3xl sm:text-4xl">🎥</span>
                <span className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-3xl sm:text-4xl">✨</span>
                <span className="absolute top-1/2 -right-8 sm:-right-10 transform -translate-y-1/2 text-3xl sm:text-4xl">😉</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Create perfect video loops across multiple platforms. Set precise start and end times to repeat any section automatically. No cap fr fr 🚀
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://chromewebstore.google.com/detail/videoloop-pro-youtube-oth/abkpcchojmbflfpibononimknbccmhgp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 group flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Add to Chrome - It's Free</span>
                <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">✨</span>
              </a>
            </div>
          </div>

          {/* How it Works Video */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-[#232323] flex items-center justify-center p-2 sm:p-4">
              <div className="aspect-video w-full">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Xrjsy1kUzWs"
                  width="100%"
                  height="100%"
                  controls
                  style={{ borderRadius: '0.75rem', overflow: 'hidden', background: '#232323' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-medium">FEATURES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6">
              Everything you need to master video loops
              <span className="inline-block ml-2">🔥</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make video looping simple and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Precise Loop Control ⚡️</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Set custom loop points with precise timing for perfect repetition. No more manual seeking.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Seamless Playback 🎯</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Zero buffering between loops for smooth, uninterrupted playback. Perfect for practice and learning.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Multiple Platforms 🌐</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Currently supports YouTube, with more platforms coming soon! Expand your learning possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to master video loops?
              <span className="inline-block ml-2 animate-float">🚀</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-white/90">
              Join thousands of users who are already using VideoLoop Pro to enhance their video watching experience. It's bussin' fr fr! 💯
            </p>
            <a
              href="https://chromewebstore.google.com/detail/videoloop-pro-youtube-oth/abkpcchojmbflfpibononimknbccmhgp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Add to Chrome - It's Free
              <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">✨</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">V</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold">VideoLoop Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Create perfect video loops across multiple platforms, starting with YouTube! 🎥
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Product</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Legal</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="mailto:smith.sese@ssaapps.com" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 VideoLoop Pro. All rights reserved. ✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
