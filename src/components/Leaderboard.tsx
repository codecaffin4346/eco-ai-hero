
import React from 'react';
import { Button } from "@/components/ui/button";
import { Trophy, ChevronDown, ArrowRight } from 'lucide-react';

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "EcoWarrior", points: 1875, streak: 28, avatar: "bg-eco-green" },
    { rank: 2, name: "GreenHero", points: 1654, streak: 14, avatar: "bg-eco-blue" },
    { rank: 3, name: "EarthSaver", points: 1432, streak: 21, avatar: "bg-eco-dark-green" },
    { rank: 4, name: "RecyclePro", points: 1287, streak: 7, avatar: "bg-eco-light-green" },
    { rank: 5, name: "CleanUpChamp", points: 1156, streak: 12, avatar: "bg-eco-light-blue" },
  ];
  
  const currentUser = {
    rank: 42,
    name: "You",
    points: 378,
    streak: 5,
    avatar: "bg-gradient-to-r from-eco-green to-eco-blue"
  };
  
  return (
    <section id="leaderboard" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block eco-badge mb-4">Community Impact</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-eco-gradient text-transparent bg-clip-text">Leaderboard</span> of Eco Heroes
          </h2>
          <p className="text-gray-600">
            Join our eco-conscious community and compete to make the biggest positive impact on our planet.
            Every action counts towards a cleaner future!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">This Month's Top Heroes</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-500 px-4">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5">User</div>
                  <div className="col-span-3 text-right">Impact Points</div>
                  <div className="col-span-3 text-right">Streak</div>
                </div>
                
                <div className="space-y-3">
                  {topUsers.map((user) => (
                    <div 
                      key={user.rank} 
                      className={`grid grid-cols-12 items-center p-4 rounded-lg ${
                        user.rank === 1 ? 'bg-yellow-50 border border-yellow-100' : 'bg-gray-50'
                      }`}
                    >
                      <div className="col-span-1 font-bold text-gray-700">{user.rank}</div>
                      <div className="col-span-5 flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full ${user.avatar} flex items-center justify-center text-white font-medium`}>
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="col-span-3 text-right font-bold text-eco-dark-green">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="col-span-3 text-right">
                        <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {user.streak} days 🔥
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center px-4">
                      <div className="w-full border-t border-dashed border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-sm text-gray-500 flex items-center gap-1">
                        View More <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-12 items-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="col-span-1 font-bold text-gray-700">{currentUser.rank}</div>
                    <div className="col-span-5 flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full ${currentUser.avatar} flex items-center justify-center text-white font-medium`}>
                        {currentUser.name.charAt(0)}
                      </div>
                      <span className="font-medium">{currentUser.name}</span>
                    </div>
                    <div className="col-span-3 text-right font-bold text-eco-dark-green">
                      {currentUser.points.toLocaleString()}
                    </div>
                    <div className="col-span-3 text-right">
                      <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {currentUser.streak} days 🔥
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Points to next rank</p>
                    <div className="flex items-end gap-2">
                      <p className="text-lg font-bold text-eco-dark-green">106 points</p>
                      <p className="text-sm text-gray-500">to reach rank #41</p>
                    </div>
                  </div>
                  <Button className="bg-eco-gradient">
                    Report More Waste <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-eco-gradient rounded-full w-[35%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
