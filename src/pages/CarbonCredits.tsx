
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Recycle,
  CircleDollarSign,
  BadgePercent,
  Coins,
  CirclePlus,
  ArrowRight,
  BadgePlus
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { toast } from '@/components/ui/use-toast';
import LoginModal from '@/components/LoginModal';

const CarbonCredits = () => {
  const { isAuthenticated, user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [creditBalance, setCreditBalance] = useState(135);
  const [transactionHistory] = useState([
    { id: 1, date: '2025-04-02', type: 'Earned', amount: 35, source: 'Waste Report', status: 'Completed' },
    { id: 2, date: '2025-03-28', type: 'Redeemed', amount: -50, source: 'Tree Planting', status: 'Completed' },
    { id: 3, date: '2025-03-15', type: 'Earned', amount: 75, source: 'Beach Cleanup', status: 'Completed' },
    { id: 4, date: '2025-03-10', type: 'Transferred', amount: -25, source: 'To @GreenHero', status: 'Completed' },
    { id: 5, date: '2025-03-05', type: 'Earned', amount: 100, source: 'Recycling Drive', status: 'Completed' },
  ]);
  
  const offsetProjects = [
    {
      id: 1,
      name: 'Reforestation Project',
      location: 'Amazon Rainforest',
      creditCost: 100,
      impact: 'Plants 10 trees',
      image: 'https://source.unsplash.com/random/300x200/?forest'
    },
    {
      id: 2,
      name: 'Solar Energy Initiative',
      location: 'California, USA',
      creditCost: 250,
      impact: 'Offsets 2 tons CO₂',
      image: 'https://source.unsplash.com/random/300x200/?solar'
    },
    {
      id: 3,
      name: 'Ocean Plastic Cleanup',
      location: 'Pacific Ocean',
      creditCost: 75,
      impact: 'Removes 5kg of plastic',
      image: 'https://source.unsplash.com/random/300x200/?ocean,plastic'
    },
    {
      id: 4,
      name: 'Wind Farm Support',
      location: 'Scotland, UK',
      creditCost: 150,
      impact: 'Produces 500 kWh clean energy',
      image: 'https://source.unsplash.com/random/300x200/?wind,farm'
    }
  ];
  
  const handleOffsetPurchase = (projectId: number) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    const project = offsetProjects.find(p => p.id === projectId);
    if (!project) return;
    
    if (creditBalance < project.creditCost) {
      toast({
        title: "Insufficient Credits",
        description: "You don't have enough carbon credits for this project.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would call an API to process the transaction
    setCreditBalance(prev => prev - project.creditCost);
    
    toast({
      title: "Offset Purchase Successful",
      description: `You've contributed to the ${project.name}!`,
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block eco-badge mb-4">Carbon Credits</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trade Your <span className="bg-eco-gradient text-transparent bg-clip-text">Environmental Impact</span>
              </h2>
              <p className="text-gray-600">
                Convert your waste reduction efforts into tangible environmental action. 
                Trade carbon credits to support green initiatives worldwide.
              </p>
            </div>
            
            {/* Credit Balance Card */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-lg border p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-eco-gradient rounded-full flex items-center justify-center">
                      <Coins className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Your Credit Balance</p>
                      <h3 className="text-3xl font-bold text-eco-dark-green">{creditBalance} <span className="text-base font-medium">Credits</span></h3>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-eco-gradient" onClick={() => {
                      document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      <CirclePlus className="h-4 w-4 mr-2" /> Earn More Credits
                    </Button>
                    <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10">
                      <Recycle className="h-4 w-4 mr-2" /> Trade Credits
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carbon Offset Projects */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Support Carbon Offset Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {offsetProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-eco-dark-green mb-1">{project.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          <Recycle className="h-3 w-3" /> {project.impact}
                        </div>
                        <div className="font-medium text-eco-blue">{project.creditCost} credits</div>
                      </div>
                      <Button 
                        className={`w-full ${creditBalance >= project.creditCost ? 'bg-eco-gradient' : 'bg-gray-300'}`}
                        disabled={creditBalance < project.creditCost}
                        onClick={() => handleOffsetPurchase(project.id)}
                      >
                        Support Project
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Transaction History */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8">Transaction History</h3>
              
              <div className="bg-white rounded-xl shadow border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionHistory.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <span className={transaction.type === 'Earned' ? 'text-green-600' : 'text-blue-600'}>
                            {transaction.type}
                          </span>
                        </TableCell>
                        <TableCell className={transaction.amount > 0 ? 'text-green-600 font-medium' : 'text-blue-600 font-medium'}>
                          {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
                        </TableCell>
                        <TableCell>{transaction.source}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {transaction.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How EcoVista Carbon Credits Work</h3>
              <p className="text-gray-600">
                Our carbon credit system helps you convert your waste reduction efforts into 
                meaningful environmental action through a simple process.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="h-16 w-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgePlus className="h-8 w-8 text-eco-green" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Earn Credits</h4>
                  <p className="text-gray-600">
                    Report and verify waste collection, participate in clean-up events, or recycle 
                    to earn carbon credits.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="h-16 w-16 bg-eco-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgePercent className="h-8 w-8 text-eco-blue" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Trade & Transfer</h4>
                  <p className="text-gray-600">
                    Trade your credits with others in the community or transfer them to support 
                    friends' environmental goals.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="h-16 w-16 bg-eco-dark-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CircleDollarSign className="h-8 w-8 text-eco-dark-green" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Redeem & Offset</h4>
                  <p className="text-gray-600">
                    Use your credits to support verified carbon offset projects or redeem for 
                    eco-friendly rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

const CarbonCreditsPage = () => {
  return (
    <AuthProvider>
      <CarbonCredits />
    </AuthProvider>
  );
};

export default CarbonCreditsPage;
