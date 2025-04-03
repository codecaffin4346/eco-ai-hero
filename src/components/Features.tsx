
import React from 'react';
import { Camera, Award, BarChart3, Check, CameraIcon, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-eco-green" />,
      title: "AI Waste Verification",
      description: "Google's Gemini AI automatically verifies waste reports with image recognition technology."
    },
    {
      icon: <Award className="h-8 w-8 text-eco-blue" />,
      title: "Earn Eco Rewards",
      description: "Get rewarded with tokens for every verified waste collection and reporting action."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-eco-dark-green" />,
      title: "Community Leaderboard",
      description: "Compete with others in your community and climb the ranks of eco-heroes."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block eco-badge mb-4">Why EcoVista?</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turning Waste Management into a <span className="bg-eco-gradient text-transparent bg-clip-text">Rewarding Experience</span>
          </h2>
          <p className="text-gray-600">
            Our platform combines cutting-edge AI technology with community engagement to create a powerful waste management solution that benefits both people and the planet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="eco-card hover:border-eco-green transition-all hover:shadow-lg transform hover:-translate-y-1">
              <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block eco-badge mb-4">How It Works</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Simple 4-Step Process to Make an Impact
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-eco-green flex items-center justify-center text-white font-medium shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Take a Photo</h4>
                    <p className="text-gray-600">Snap a picture of waste that needs to be collected or that you've collected.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-eco-blue flex items-center justify-center text-white font-medium shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">AI Verification</h4>
                    <p className="text-gray-600">Our AI analyzes the image to verify the waste type and quantity.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-eco-light-green flex items-center justify-center text-white font-medium shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Earn Rewards</h4>
                    <p className="text-gray-600">Receive tokens based on your contribution to the ecosystem.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-eco-dark-green flex items-center justify-center text-white font-medium shrink-0">4</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Track Your Impact</h4>
                    <p className="text-gray-600">Monitor your progress and compete on the community leaderboard.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-eco-gradient opacity-5 rounded-2xl transform rotate-3"></div>
              <div className="bg-white rounded-xl border overflow-hidden shadow-md group hover:shadow-xl transition-all">
                <div className="bg-eco-gradient text-white p-3 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  <span className="font-medium">AI-Powered Verification</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="border rounded-lg p-4 flex gap-4">
                    <div className="h-24 w-24 rounded-lg bg-gray-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" 
                        alt="Waste sample" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">Image Analysis</h5>
                      <p className="text-sm text-gray-600">AI analyzing waste image...</p>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-eco-gradient rounded-full w-[80%] group-hover:animate-pulse-gentle"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium">Verification Results:</span>
                      <span className="text-eco-green font-medium flex items-center">
                        <Check className="h-4 w-4 mr-1" /> Verified
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Waste Type:</span>
                        <span className="font-medium">Plastic Bottles (4)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Weight:</span>
                        <span className="font-medium">0.8 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reward Points:</span>
                        <span className="font-medium text-eco-blue">+24 points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
