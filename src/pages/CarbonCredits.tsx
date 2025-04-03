
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
  BadgePlus,
  TrendingUp
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
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Solar Energy Initiative',
      location: 'California, USA',
      creditCost: 250,
      impact: 'Offsets 2 tons CO₂',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Ocean Plastic Cleanup',
      location: 'Pacific Ocean',
      creditCost: 75,
      impact: 'Removes 5kg of plastic',
      image: 'https://images.unsplash.com/photo-1621451693589-115f7c29ced9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Wind Farm Support',
      location: 'Scotland, UK',
      creditCost: 150,
      impact: 'Produces 500 kWh clean energy',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block eco-badge mb-4">Carbon Credits</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-eco-dark-green">
                Make Your <span className="bg-eco-gradient text-transparent bg-clip-text">Impact Count</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Convert your waste reduction efforts into tangible environmental action. 
                Trade carbon credits to support green initiatives worldwide.
              </p>
            </div>
            
            {/* Credit Balance Card - Enhanced with better visuals */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/80 to-blue-100/80 rounded-lg -z-10"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="h-20 w-20 bg-eco-gradient rounded-full flex items-center justify-center animate-pulse">
                        <Coins className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Your Credit Balance</p>
                        <h3 className="text-4xl font-bold text-eco-dark-green">{creditBalance} <span className="text-base font-medium">Credits</span></h3>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-eco-gradient hover:shadow-md transition-all" onClick={() => {
                        document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                        <CirclePlus className="h-4 w-4 mr-2" /> Earn More Credits
                      </Button>
                      <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10">
                        <Recycle className="h-4 w-4 mr-2" /> Trade Credits
                      </Button>
                    </div>
                  </div>
                  
                  {/* Added a small stats display */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-eco-blue font-medium">
                        <TrendingUp className="h-4 w-4" /> +210
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Credits this month</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-eco-green font-medium">
                        <Recycle className="h-4 w-4" /> 4.2
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Tons CO₂ offset</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-eco-dark-green font-medium">
                        <BadgePlus className="h-4 w-4" /> 8
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Projects supported</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Carbon Offset Projects - Enhanced with better cards */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center text-eco-dark-green">Support Carbon Offset Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {offsetProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5 flex-grow">
                      <h4 className="font-bold text-eco-dark-green text-lg mb-1">{project.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          <Recycle className="h-3 w-3" /> {project.impact}
                        </div>
                        <div className="font-medium text-eco-blue">{project.creditCost} credits</div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 pb-5 px-5">
                      <Button 
                        className={`w-full ${creditBalance >= project.creditCost ? 'bg-eco-gradient hover:brightness-105' : 'bg-gray-300'}`}
                        disabled={creditBalance < project.creditCost}
                        onClick={() => handleOffsetPurchase(project.id)}
                      >
                        Support Project
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Transaction History - Enhanced with better styling */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-eco-dark-green">Transaction History</h3>
                <Button variant="outline" className="text-eco-blue border-eco-blue hover:bg-eco-blue/10">
                  View All <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <Card className="border-0 shadow-md overflow-hidden">
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
                      <TableRow key={transaction.id} className="hover:bg-gray-50/80 transition-colors">
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
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works - Enhanced with better cards and imagery */}
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-eco-dark-green">How EcoVista Carbon Credits Work</h3>
              <p className="text-gray-600">
                Our carbon credit system helps you convert your waste reduction efforts into 
                meaningful environmental action through a simple process.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all text-center overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-eco-green"></div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="h-16 w-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BadgePlus className="h-8 w-8 text-eco-green" />
                    </div>
                    <CardTitle className="text-xl font-medium mb-2">Earn Credits</CardTitle>
                    <CardDescription className="text-gray-600">
                      Report and verify waste collection, participate in clean-up events, or recycle 
                      to earn carbon credits.
                    </CardDescription>
                  </CardContent>
                  <div className="h-32 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="People recycling" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all text-center overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-eco-blue"></div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="h-16 w-16 bg-eco-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BadgePercent className="h-8 w-8 text-eco-blue" />
                    </div>
                    <CardTitle className="text-xl font-medium mb-2">Trade & Transfer</CardTitle>
                    <CardDescription className="text-gray-600">
                      Trade your credits with others in the community or transfer them to support 
                      friends' environmental goals.
                    </CardDescription>
                  </CardContent>
                  <div className="h-32 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Trading" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all text-center overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-eco-dark-green"></div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="h-16 w-16 bg-eco-dark-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CircleDollarSign className="h-8 w-8 text-eco-dark-green" />
                    </div>
                    <CardTitle className="text-xl font-medium mb-2">Redeem & Offset</CardTitle>
                    <CardDescription className="text-gray-600">
                      Use your credits to support verified carbon offset projects or redeem for 
                      eco-friendly rewards.
                    </CardDescription>
                  </CardContent>
                  <div className="h-32 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Forest preservation" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
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
