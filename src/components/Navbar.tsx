
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };
  
  const handleLogoutClick = async () => {
    await logout();
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Carbon Credits', path: '/carbon-credits' },
    { name: 'Report Waste', path: isHomePage ? '#report' : '/#report' },
    { name: 'Upcycling Hub', path: isHomePage ? '#upcycling' : '/#upcycling' },
    { name: 'Leaderboard', path: isHomePage ? '#leaderboard' : '/#leaderboard' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-eco-gradient flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-eco-dark-green' : 'text-white'}`}>
              EcoVista
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <a 
                      href={item.path} 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-eco-green' : 'text-white hover:text-eco-light-green'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-eco-green' : 'text-white hover:text-eco-light-green'
                      } ${location.pathname === item.path ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {isAuthenticated ? (
              <div className="flex items-center ml-4">
                <div className="flex items-center">
                  <img 
                    src={user?.image || "https://source.unsplash.com/random/100x100/?portrait"} 
                    alt="User" 
                    className="h-8 w-8 rounded-full object-cover border-2 border-eco-light-green"
                  />
                  <span className={`ml-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    {user?.name?.split(' ')[0] || "User"}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogoutClick}
                  className={`ml-2 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
                >
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleLoginClick}
                className={`ml-4 ${isScrolled ? 'bg-eco-gradient text-white' : 'bg-white text-eco-green hover:bg-eco-light-green hover:text-white'}`}
              >
                Sign In
              </Button>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <a 
                      href={item.path} 
                      className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100 ${
                        location.pathname === item.path ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t">
              {isAuthenticated ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={user?.image || "https://source.unsplash.com/random/100x100/?portrait"} 
                      alt="User" 
                      className="h-8 w-8 rounded-full object-cover border-2 border-eco-light-green"
                    />
                    <span className="ml-2 font-medium text-gray-700">
                      {user?.name?.split(' ')[0] || "User"}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLogoutClick}
                    className="text-gray-700"
                  >
                    <LogOut className="h-4 w-4 mr-1" /> Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={handleLoginClick}
                  className="w-full bg-eco-gradient text-white"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Navbar;
