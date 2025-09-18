import React from 'react';
import { ChevronRight, Clock, Globe, Zap, Shield, Star, Users, MapPin, CreditCard, Headphones, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState({});

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all sections with animation classes
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-purple-600 animate-spin-slow" />
              <span className="ml-2 text-2xl font-bold text-gray-900">VoyageAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Reviews</a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95">
                Get Started
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 animate-fadeIn" />
                ) : (
                  <Menu className="h-6 w-6 animate-fadeIn" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <a
                  href="#features"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300 hover:translate-x-2"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300 hover:translate-x-2"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300 hover:translate-x-2"
                >
                  Reviews
                </a>
                <button
                  onClick={closeMobileMenu}
                  className="w-full text-left px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300 hover:scale-105 mt-2"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-100 py-20" data-animate id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible.hero ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Your Personal AI Travel Agent
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Skip the endless research and overwhelming options. VoyageAI crafts personalized travel experiences in seconds, 
              books everything instantly, and saves you both time and money on every trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl transform active:scale-95 group">
                Plan My Dream Trip
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 animate-fadeInUp animation-delay-600">Free 7-day trial • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-100" data-animate id="trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-gray-500 text-sm mb-6 transition-all duration-800 ${isVisible.trust ? 'animate-fadeInUp' : 'opacity-0 translate-y-5'}`}>Trusted by 50,000+ travelers worldwide</p>
          <div className={`flex items-center justify-center space-x-8 opacity-60 transition-all duration-1000 ${isVisible.trust ? 'animate-fadeInUp animation-delay-200' : 'opacity-0 translate-y-5'}`}>
            <Shield className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">256-bit SSL</span>
            <div className="w-px h-8 bg-gray-300"></div>
            <Star className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">4.9/5 Rating</span>
            <div className="w-px h-8 bg-gray-300"></div>
            <Users className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VoyageAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of travel planning with AI that understands your preferences better than you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-200' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 AI Assistant</h3>
              <p className="text-gray-600">
                Get instant travel recommendations, bookings, and support any time of day. No waiting for business hours or human agents.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-400' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-violet-100 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning-Fast Planning</h3>
              <p className="text-gray-600">
                Complete travel itineraries created in under 60 seconds. From flights to hotels to activities - all perfectly coordinated.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-600' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hyper-Personalized</h3>
              <p className="text-gray-600">
                AI learns from your preferences, past trips, and behavior to suggest destinations and experiences you'll absolutely love.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-800' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-purple-200 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Guaranteed Best Prices</h3>
              <p className="text-gray-600">
                Our AI compares millions of options in real-time to find deals you'd never discover on your own. Save up to 40% on every trip.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-1000' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-violet-200 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-violet-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Trip Protection</h3>
              <p className="text-gray-600">
                Automatic rebooking for cancellations, real-time alerts for delays, and instant support when travel plans change.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.features ? 'animate-fadeInUp animation-delay-1200' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-purple-300 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-8 w-8 text-purple-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Human + AI Support</h3>
              <p className="text-gray-600">
                When you need human touch, our travel experts are available 24/7 to handle complex requests and special circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['how-it-works'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How VoyageAI Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From dream to departure in three simple steps. No research, no overwhelm, no stress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className={`text-center transition-all duration-800 ${isVisible['how-it-works'] ? 'animate-fadeInUp animation-delay-200' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tell Us Your Vision</h3>
              <p className="text-gray-600 text-lg">
                Simply describe your ideal trip in natural language. "Romantic weekend in Paris" or "Adventure trip to Costa Rica with kids" - we understand it all.
              </p>
            </div>

            <div className={`text-center transition-all duration-800 ${isVisible['how-it-works'] ? 'animate-fadeInUp animation-delay-400' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-violet-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Creates Your Itinerary</h3>
              <p className="text-gray-600 text-lg">
                Our AI analyzes millions of options, considers your preferences, and creates a perfect itinerary with flights, hotels, and activities in under 60 seconds.
              </p>
            </div>

            <div className={`text-center transition-all duration-800 ${isVisible['how-it-works'] ? 'animate-fadeInUp animation-delay-600' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-indigo-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book & Go</h3>
              <p className="text-gray-600 text-lg">
                Review, customize if needed, and book everything with one click. Your confirmations, boarding passes, and trip details arrive instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.testimonials ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied travelers who've discovered the future of trip planning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.testimonials ? 'animate-fadeInUp animation-delay-200' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "VoyageAI planned our entire European honeymoon in 2 minutes. Every restaurant, hotel, and activity was absolutely perfect. I can't imagine planning travel any other way now."
              </p>
              <div className="flex items-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-600">Marketing Director, San Francisco</p>
                </div>
              </div>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.testimonials ? 'animate-fadeInUp animation-delay-400' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "As a busy CEO, I need travel planning to be effortless. VoyageAI saved me 15+ hours and found deals I never would have discovered. The ROI is incredible."
              </p>
              <div className="flex items-center">
                <div className="bg-violet-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-violet-600 font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Rodriguez</p>
                  <p className="text-gray-600">CEO, Austin Tech Startup</p>
                </div>
              </div>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible.testimonials ? 'animate-fadeInUp animation-delay-600' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "Planning family trips with three kids used to be a nightmare. VoyageAI found kid-friendly activities I never knew existed and hotels with perfect amenities. Game changer!"
              </p>
              <div className="flex items-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">JC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Chen</p>
                  <p className="text-gray-600">Mother of 3, Denver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-800" data-animate id="cta">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible.cta ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform How You Travel?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ travelers who've discovered the future of trip planning. Start your free trial today.
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 inline-flex items-center hover:scale-105 hover:shadow-xl transform active:scale-95 group">
            Start Free 7-Day Trial
            <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-purple-100 text-sm mt-4">No credit card required • Cancel anytime • Full refund guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-2xl font-bold">VoyageAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The world's most intelligent travel planning platform. Powered by AI, designed for modern travelers.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-sm text-gray-400">SOC 2 Type II Certified</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 VoyageAI. All rights reserved. Making travel planning effortless, one trip at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;