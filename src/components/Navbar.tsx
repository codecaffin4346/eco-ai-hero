
import React from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, LogOut, Leaf } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <nav className="w-full backdrop-blur-sm bg-white/80 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-eco-gradient flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <h1 className="font-bold text-xl">
            <span className="text-eco-green">Eco</span>
            <span className="text-eco-blue">Vista</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Features</a>
          <a href="#report" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Report Waste</a>
          <a href="#leaderboard" className="text-gray-700 hover:text-eco-green font-medium transition-colors">Leaderboard</a>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <img 
                    src={user?.image || "https://source.unsplash.com/random/100x100/?portrait"} 
                    alt="User" 
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={() => logout()}>
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="bg-eco-gradient hover:opacity-90" onClick={handleLoginClick}>
              Sign In
            </Button>
          )}
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
        <div className="md:hidden bg-white border-t absolute w-full animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Features</a>
            <a href="#report" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Report Waste</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-eco-green font-medium transition-colors py-2">Leaderboard</a>
            
            {isAuthenticated ? (
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <img 
                    src={user?.image || "https://source.unsplash.com/random/100x100/?portrait"} 
                    alt="User" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{user?.name}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => logout()}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button className="bg-eco-gradient hover:opacity-90 w-full" onClick={handleLoginClick}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
