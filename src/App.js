import React, { useState } from 'react';
import './App.css';
import { Calendar, Clock, DollarSign, FileText, Users, CreditCard, Calculator, PieChart, Target, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react';

const FinancialCoachingApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({});

  // Sample available times
  const availableTimes = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];
  
  const services = [
    { name: 'Initial Consultation', price: 'FREE', duration: '60 min', description: 'Comprehensive financial assessment and goal setting' },
    { name: '1-Time Coaching Session', price: '$150', duration: '90 min', description: 'Single focused session on your specific financial challenge' },
    { name: '1-on-1 Coaching Package', price: '$750', duration: '6 sessions', description: 'Complete financial transformation with personalized guidance' },
    { name: 'Monthly Subscription', price: '$200/mo', duration: 'Ongoing', description: 'Continuous support with monthly sessions and unlimited email access' }
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Helped me pay off $45,000 in debt in 18 months!', rating: 5 },
    { name: 'Mike R.', text: 'Finally have a budget that actually works for our family.', rating: 5 },
    { name: 'Jennifer L.', text: 'Built our full emergency fund in just 8 months.', rating: 5 }
  ];

  const HomePage = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Transform Your Financial Future</h1>
        <p className="text-xl mb-6">David Gaitan - certified through Dave Ramsey's Financial Coach Master Training</p>
        <p className="text-lg mb-8">Take control of your money, eliminate debt, and build wealth using proven strategies</p>
<a 
  href="https://calendar.app.google/oKVjpGsn6LxBcMNG8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
>
  Schedule FREE Consultation
</a>
      </div>

      {/* About Me Section */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">About David Gaitan</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
              DG
            </div>
            <div className="text-yellow-400 font-semibold">Certified Financial Coach</div>
          </div>
          <div className="md:col-span-2">
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  Hi, I'm David Gaitan, a Senior Supplier Quality Engineer Supervisor with over 10 years of experience, and I'm passionate about helping people discover their financial potential. Growing up in poverty taught me the value of every dollar, and finding my faith gave me purpose to help others break free from financial bondage.
</p>
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  My own journey from credit card debt, car payments, and student loans to complete financial freedom drives everything I do. The same year I decided to eliminate my debt, I started coaching others - leading Dave Ramsey Financial Peace University classes and Legacy Journey programs as a lead coach in my church. I'm officially certified through Dave Ramsey's Financial Coach Master Training program and bring 11 years of coaching experience to every session.
</p>
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  What makes my approach unique is combining my engineering background with proven financial principles. I bring technology and budgeting together, helping clients set up systems and tools that make managing money smoother and more efficient. Whether you're a family, individual, or even a company wanting to help employees achieve financial wellness, I use practical methods like the debt snowball, high-yield money markets, and plain common sense.
</p>
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  As a runner and hiker, I understand that financial freedom is like a marathon - it requires discipline, endurance, and celebrating milestones along the way. My passion comes from seeing people who doubt themselves realize they're more than capable of succeeding. My job is simply to bring out what's already in them.
</p>
          </div>
        </div>
      </div>

      {/* Services */}
<div>
  <h2 className="text-3xl font-bold text-center mb-8 text-white">Coaching Services</h2>
  <div className="text-center mb-8">
    <p className="text-lg text-gray-300 bg-gray-700 rounded-lg p-4 border-l-4 border-green-400">
      📍 All coaching sessions are available both virtually and in-person to accommodate your preferences and schedule.
    </p>
  </div>
  <div className="grid md:grid-cols-2 gap-6">
    {services.map((service, idx) => (
      <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
          <span className="text-2xl font-bold text-green-400">{service.price}</span>
        </div>
        <p className="text-gray-300 mb-4">{service.description}</p>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4 mr-1" />
          {service.duration}
        </div>
        
        {/* Add payment buttons for paid services */}
        {service.name === 'Initial Consultation' ? (
          <a 
            href="https://calendar.app.google/oKVjpGsn6LxBcMNG8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Consultation
          </a>
        ) : service.name === '1-Time Coaching Session' ? (
          <a 
            href="https://buy.stripe.com/8x200j3wVbpbfvZb8c9AA00"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Select Package
          </a>
        ) : service.name === '1-on-1 Coaching Package' ? (
          <a 
            href="https://buy.stripe.com/9B600j1oNctf0B5dgk9AA01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Select Package
          </a>
        ) : service.name === 'Monthly Subscription' ? (
          <a 
            href="https://buy.stripe.com/cNiaEX2sRal70B5dgk9AA02"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Select Package
          </a>
        ) : null}
        
      </div>
    ))}
  </div>
</div>

      {/* Testimonials */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Client Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SchedulePage = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Schedule Your Free Consultation</h2>
      
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-4 text-white">Book Your 60-Minute Initial Consultation</h3>
        <p className="text-gray-300 mb-6">
          Ready to take the first step toward financial freedom? Schedule your free consultation and let's discuss your financial goals and challenges.
        </p>
        
        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">What to Expect:</h4>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Comprehensive financial assessment</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Personalized action plan</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Debt elimination strategy</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Q&A about your situation</span>
            </div>
          </div>
        </div>

        <a 
          href="https://calendar.app.google/oKVjpGsn6LxBcMNG8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
        >
          <Calendar className="w-5 h-5 inline mr-2" />
          Schedule Free Consultation
        </a>
        
        <p className="text-gray-400 text-sm mt-4">
          * No credit card required • 100% Free • 60 minutes
        </p>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-white">Prefer to Call?</h3>
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            If you'd rather speak directly, feel free to give me a call to schedule your consultation.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Phone className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">(805) 862-9604</span>
          </div>
        </div>
      </div>
    </div>
  );

  const FormsPage = () => (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">Pre-Consultation Forms</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Financial Assessment Questionnaire</h3>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income</label>
              <input
                type="number"
                placeholder="$0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Expenses</label>
              <input
                type="number"
                placeholder="$0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Debt</label>
              <input
                type="number"
                placeholder="$0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Fund</label>
              <input
                type="number"
                placeholder="$0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which Dave Ramsey Baby Step are you currently on?
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select Baby Step</option>
              <option value="0">Just getting started</option>
              <option value="1">Baby Step 1: $1,000 Emergency Fund</option>
              <option value="2">Baby Step 2: Debt Snowball</option>
              <option value="3">Baby Step 3: Full Emergency Fund</option>
              <option value="4">Baby Step 4: Invest 15% for Retirement</option>
              <option value="5">Baby Step 5: Kids' College Fund</option>
              <option value="6">Baby Step 6: Pay Off Home Early</option>
              <option value="7">Baby Step 7: Build Wealth & Give</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What are your top 3 financial goals?
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="1. Get out of debt&#10;2. Build emergency fund&#10;3. Save for retirement"
            />
          </div>

          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">I agree to the coaching terms and privacy policy</span>
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit Assessment
          </button>
        </div>
      </div>
    </div>
  );

  const PaymentPage = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Package</h2>
      
      <div className="grid gap-6">
        {services.filter(s => s.price !== 'FREE').map((service, idx) => (
          <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.duration}
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-green-600">{service.price}</span>
              </div>
            </div>
            
            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
  <CreditCard className="w-5 h-5 mr-2" />
  Select Package
</button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Payment Methods Accepted</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>💳 Credit/Debit Cards</span>
          <span>🏦 Bank Transfer</span>
          <span>💰 PayPal</span>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          All payments are secure and encrypted. 30-day money-back guarantee.
        </p>
      </div>
    </div>
  );

  const ToolsPage = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Financial Coaching Tools</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <Calculator className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Debt Snowball Calculator</h3>
          <p className="text-gray-600 mb-4">Calculate your debt payoff timeline using the Dave Ramsey method</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Launch Tool →</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <PieChart className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">EveryDollar Budgeting</h3>
          <p className="text-gray-600 mb-4">Dave Ramsey's official budgeting app for zero-based budgeting</p>
          <a 
            href="https://www.everydollar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Go to EveryDollar →
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <Target className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Emergency Fund Tracker</h3>
          <p className="text-gray-600 mb-4">Track progress toward your $1,000 starter emergency fund</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Launch Tool →</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <DollarSign className="w-8 h-8 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Retirement Calculator</h3>
          <p className="text-gray-600 mb-4">Plan your 15% retirement investment strategy</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Launch Tool →</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <FileText className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Baby Steps Tracker</h3>
          <p className="text-gray-600 mb-4">Monitor your progress through all 7 baby steps</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Launch Tool →</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <CheckCircle className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Goal Setting Worksheet</h3>
          <p className="text-gray-600 mb-4">Set and track your SMART financial goals</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Launch Tool →</button>
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Join Our Financial Community</h2>
      
      <div className="text-center mb-8">
        <p className="text-xl text-gray-300 mb-4">
          Connect with like-minded individuals on their journey to financial freedom
        </p>
        <p className="text-gray-400">
          Get daily motivation, tips, and support from our growing community of debt-free dreamers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Discord Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg p-8 text-white text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
          <p className="text-lg mb-6 opacity-90">
            Join our active Discord server for real-time chat, daily check-ins, and peer support on your debt-free journey.
          </p>
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Daily motivation and accountability</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Live Q&A sessions with David</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Debt payoff celebrations</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Budget tips and tricks</span>
            </div>
          </div>
          <a 
            href="https://discord.gg/97EcpXcB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Join Discord Server
          </a>
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Instagram</h3>
          <p className="text-lg mb-6 opacity-90">
            Follow for daily financial tips, success stories, and behind-the-scenes content from coaching sessions.
          </p>
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Daily financial tips and quotes</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Client success story highlights</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Live coaching insights</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span>Interactive stories and polls</span>
            </div>
          </div>
          <a 
            href="https://instagram.com/davidgaitancoach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-white">Community Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h4 className="font-semibold text-white mb-2">✅ Do:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Share your wins and celebrate others</li>
              <li>• Ask questions and seek advice</li>
              <li>• Be respectful and supportive</li>
              <li>• Share helpful resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">❌ Don't:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Share personal financial details publicly</li>
              <li>• Promote other financial services</li>
              <li>• Use inappropriate language</li>
              <li>• Spam or self-promote excessively</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">(805) 862-9604</p>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">coach.d.gaitan.com@gmail.com</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">Indianapolis, IN</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={5}
          />
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'home', label: 'Home', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
   // { id: 'forms', label: 'Forms', icon: FileText },
    { id: 'payment', label: 'Packages', icon: CreditCard },
    { id: 'tools', label: 'Tools', icon: Calculator },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <HomePage />;
      case 'schedule': return <SchedulePage />;
      case 'forms': return <FormsPage />;
      case 'payment': return <PaymentPage />;
      case 'tools': return <ToolsPage />;
      case 'community': return <CommunityPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-white">
              💰 David Gaitan Financial Coaching
            </div>
            <div className="hidden md:flex space-x-8">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Ready to Take Control of Your Finances?</p>
          <p className="text-gray-300 mb-4">David Gaitan - Certified through Dave Ramsey's Financial Coach Master Training</p>
         <a 
  href="https://calendar.app.google/oKVjpGsn6LxBcMNG8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
>
  Schedule Your Free Consultation Today
</a>
        </div>
      </footer>
    </div>
  );
};

export default FinancialCoachingApp;