
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="relative w-full bg-[#0A0A0A] py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-5 relative">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 42.5L7.5 26C3.5 22 3.5 15.5 7.5 11.5C11.5 7.5 18 7.5 22 11.5L24 13.5L26 11.5C30 7.5 36.5 7.5 40.5 11.5C44.5 15.5 44.5 22 40.5 26L24 42.5Z" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Stop wasting time on design.
        </h2>
        
        <p className="text-lg text-white/70 mb-8">
          Start your 7-day free trial. No credit card required.
        </p>
        
        <Button className="bg-white text-black px-6 py-6 rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 duration-300 transform h-auto">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
