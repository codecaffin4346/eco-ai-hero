
import React from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="w-full backdrop-blur-sm bg-white/80 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-eco-gradient flex items-center justify-center">
            <span className="font-bold text-white text-lg">Z2H</span>
          </div>
          <h1 className="font-bold text-xl">
            <span className="text-eco-green">Zero</span>
            <span className="text-eco-blue">2</span>
            <span className="text-eco-dark-green">Hero</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Features</a>
          <a href="#report" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Report Waste</a>
          <a href="#leaderboard" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Leaderboard</a>
          <Button className="bg-eco-gradient hover:opacity-90">Connect Wallet</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full animated-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Features</a>
            <a href="#report" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Report Waste</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Leaderboard</a>
            <Button className="bg-eco-gradient hover:opacity-90 w-full">Connect Wallet</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
