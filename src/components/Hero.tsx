
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block eco-badge">AI-Powered Waste Management</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-eco-dark-green">Turn Trash into</span>
              <br />
              <span className="bg-eco-gradient text-transparent bg-clip-text">Rewards & Impact</span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-10">
              Join the Zero2Hero community and be rewarded for your waste management efforts. 
              Report, collect, and earn while making our planet cleaner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-eco-gradient hover:opacity-90 text-white h-12 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10 h-12 px-8">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-eco-blue"></div>
                <div className="h-8 w-8 rounded-full bg-eco-green"></div>
                <div className="h-8 w-8 rounded-full bg-eco-light-blue"></div>
              </div>
              <span>Join <b>1,240+</b> eco-heroes making a difference</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-16 -left-16 h-64 w-64 bg-eco-green/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 h-48 w-48 bg-eco-blue/20 rounded-full filter blur-3xl"></div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative z-10">
              <div className="bg-eco-gradient p-2 text-white text-center font-medium">
                Live Impact Dashboard
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Waste Reported</p>
                    <p className="text-3xl font-bold text-eco-dark-green">12.4K</p>
                    <p className="text-xs text-green-600">+24% this month</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Rewards Earned</p>
                    <p className="text-3xl font-bold text-eco-blue">8.7K</p>
                    <p className="text-xs text-green-600">+18% this month</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Monthly Goal</span>
                    <span className="text-eco-dark-green font-medium">68%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-eco-gradient rounded-full w-[68%]"></div>
                  </div>
                  <p className="text-xs text-gray-500">12 days remaining to reach monthly goal</p>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-sm font-medium">Your Rank</p>
                    <p className="text-eco-dark-green font-bold">#42 of 1,240</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-eco-blue text-eco-blue">
                    View Leaderboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20 md:mt-32 animate-bounce">
          <a href="#features" className="inline-flex flex-col items-center text-gray-500 hover:text-eco-green transition-colors">
            <span className="text-sm font-medium mb-1">Discover More</span>
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
