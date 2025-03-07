
import React, { useState } from 'react';

import '../styles/comet.css';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import IconsAnimation from '@/components/IconsAnimation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <div className="min-h-screen bg-dark text-dark-foreground">
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
        
        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto relative">
          <div className="bg-white/10 text-white/80 px-4 py-1.5 rounded-full inline-block mb-4 animate-fade-in">
            ✨ Introducing Magic UI Template →
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            Magic UI is the new way
            <br />
            to build landing pages.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto animate-fade-in-delayed">
            Beautifully designed, animated components and templates built with
            Tailwind CSS, React, and Framer Motion.
          </p>
          
          <div className="pt-4 animate-fade-in-delayed relative">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105 duration-300 transform">
              Get Started for free →
            </button>
            {/* Add golden glow effect */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-gradient-to-t from-transparent via-[#FEF7CD]/20 to-transparent -z-10" />
          </div>
        </div>
        
        {/* Email Interface Mockup */}
        <div className="w-full max-w-5xl mx-auto mt-32 mb-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-delayed relative">
  {/* Comet Effect */}
  <div className="comet-trail"></div>
  
  <div className="bg-[#0F0F10] text-white">
    {/* Email Header */}
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium">Inbox</div>
      </div>
      <div className="flex space-x-2">
        <div className="bg-[#222] px-3 py-1 rounded-md text-sm">All mail</div>
        <div className="bg-[#333] px-3 py-1 rounded-md text-sm">Unread</div>
      </div>
    </div>
    
    {/* Email Sidebar and Content */}
    <div className="flex">
      {/* Sidebar */}
      <div className="w-48 border-r border-white/10 p-3 hidden md:block">
        <div className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-md">
          <span>Inbox</span>
          <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">128</span>
        </div>
        <div className="flex items-center justify-between py-2 px-3 mt-1">
          <span>Drafts</span>
          <span className="text-xs">9</span>
        </div>
        <div className="flex items-center justify-between py-2 px-3">
          <span>Sent</span>
        </div>
        <div className="flex items-center justify-between py-2 px-3">
          <span>Junk</span>
          <span className="text-xs">23</span>
        </div>
        <div className="flex items-center justify-between py-2 px-3">
          <span>Trash</span>
        </div>
      </div>
      
      {/* Email List */}
      <div className="flex-1 border-r border-white/10">
        {/* Search */}
        <div className="p-3 border-b border-white/10">
          <div className="bg-[#222] rounded-md flex items-center px-3">
            <span className="text-white/40">🔍</span>
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none py-2 px-2 w-full text-sm"
            />
          </div>
        </div>
        
        {/* Email Items */}
        <div className="divide-y divide-white/10">
          {/* Email 1 */}
          <div className="p-4 hover:bg-white/5 cursor-pointer">
            <div className="flex justify-between">
              <div className="font-medium">William Smith</div>
              <div className="text-xs text-white/40">4 months ago</div>
            </div>
            <div className="text-sm font-medium">Meeting Tomorrow</div>
            <div className="text-xs text-white/60 truncate mt-1">
              Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-[#333] px-2 py-0.5 rounded">meeting</span>
              <span className="text-xs bg-[#333] px-2 py-0.5 rounded">work</span>
              <span className="text-xs bg-[#333] px-2 py-0.5 rounded">important</span>
            </div>
          </div>
          
          {/* Email 2 */}
          <div className="p-4 hover:bg-white/5 cursor-pointer">
            <div className="flex justify-between">
              <div className="font-medium">Alice Smith</div>
              <div className="text-xs text-white/40">4 months ago</div>
            </div>
            <div className="text-sm font-medium">Re: Project Update</div>
            <div className="text-xs text-white/60 truncate mt-1">
              Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive.
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-[#333] px-2 py-0.5 rounded">work</span>
              <span className="text-xs bg-[#333] px-2 py-0.5 rounded">important</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Email Content */}
      <div className="w-1/2 p-4 hidden lg:block">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-xs">WS</span>
          </div>
          <div>
            <div className="font-medium">William Smith</div>
            <div className="text-xs text-white/40">williamsmith@example.com</div>
          </div>
          <div className="ml-auto text-xs text-white/40">Oct 22, 2023, 9:00:00 AM</div>
        </div>
        
        <div className="text-sm space-y-4">
          <p>Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.</p>
          <p>Please come prepared with any questions or insights you may have. Looking forward to our meeting!</p>
          <p>Best regards, William</p>
        </div>
      </div>
    </div>
  </div>
</div>
        
        {/* Pricing Plans Section */}
        <div className="w-full max-w-6xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              No hidden fees, no surprise charges. Choose the plan that works best for you.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10"
              >
                <span className="sr-only">Toggle billing period</span>
                <span 
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} 
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-white/60'}`}>
                Annual <span className="text-xs text-green-400 ml-1">Save 20%</span>
              </span>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-sm text-white/60">Essential features for small projects</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${isAnnual ? '9.60' : '12'}</span>
                  <span className="text-white/60 ml-1 text-sm">/month</span>
                </div>
                {isAnnual && <p className="text-xs text-white/60 mt-1">Billed annually (${9.60 * 12})</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>10 projects</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>50 components</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Basic support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  <span>Custom domains</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  <span>Analytics</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-4 -right-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold py-1 px-12 transform rotate-45">
                Popular
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-sm text-white/60">Perfect for growing businesses</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${isAnnual ? '24' : '30'}</span>
                  <span className="text-white/60 ml-1 text-sm">/month</span>
                </div>
                {isAnnual && <p className="text-xs text-white/60 mt-1">Billed annually (${24 * 12})</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Unlimited components</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Custom domains</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-white/60">Advanced features for larger teams</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${isAnnual ? '48' : '60'}</span>
                  <span className="text-white/60 ml-1 text-sm">/month</span>
                </div>
                {isAnnual && <p className="text-xs text-white/60 mt-1">Billed annually (${48 * 12})</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>SSO Authentication</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Ultimate Plan */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                <p className="text-sm text-white/60">Maximum power and customization</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${isAnnual ? '96' : '120'}</span>
                  <span className="text-white/60 ml-1 text-sm">/month</span>
                </div>
                {isAnnual && <p className="text-xs text-white/60 mt-1">Billed annually (${96 * 12})</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Everything in Enterprise</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>24/7 VIP support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Unlimited API calls</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Enterprise SLAs</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Dedicated success manager</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <div className="w-full text-center mb-20">
          <div className="text-white/50 text-sm mb-10">TRUSTED BY TEAMS FROM AROUND THE WORLD</div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
  {/* Google Logo */}
  <div className="h-7 opacity-60 hover:opacity-100 transition-opacity">
    <img src="/logos/google.svg" alt="Google" className="h-full" />
  </div>

  {/* Microsoft Logo */}
  <div className="h-7 opacity-60 hover:opacity-100 transition-opacity">
    <img src="/logos/microsoft.svg" alt="Microsoft" className="h-full" />
  </div>

  {/* GitHub Logo */}
  <div className="h-7 opacity-60 hover:opacity-100 transition-opacity">
    <img src="/logos/github.svg" alt="GitHub" className="h-full" />
  </div>

  {/* Uber Logo */}
  <div className="h-7 opacity-60 hover:opacity-100 transition-opacity">
    <img src="/logos/uber.svg" alt="Uber" className="h-full" />
  </div>

  {/* Notion Logo */}
  <div className="h-7 opacity-60 hover:opacity-100 transition-opacity">
    <img src="/logos/notion.svg" alt="Notion" className="h-full" />
  </div>
</div>

        </div>
        
        {/* Icons Animation Section */}
        <IconsAnimation />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
