
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '@/services/auth';

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithGoogle: () => Promise<User | null>;
  logout: () => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const savedUser = authService.checkAuth();
      if (savedUser) {
        setUser(savedUser);
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    const user = await authService.loginWithGoogle();
    setUser(user);
    setIsAuthenticated(!!user);
    setIsLoading(false);
    return user;
  };

  const logout = async () => {
    setIsLoading(true);
    const success = await authService.logout();
    if (success) {
      setUser(null);
      setIsAuthenticated(false);
    }
    setIsLoading(false);
    return success;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
