
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { loginWithGoogle, isLoading } = useAuth();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to EcoVista</DialogTitle>
          <DialogDescription>
            Join our community of eco-heroes making a difference for our planet.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-8">
          <div className="h-24 w-24 rounded-full bg-eco-gradient-subtle flex items-center justify-center p-2">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
              alt="Nature" 
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <p className="text-center text-muted-foreground">
            Log in to report waste, earn rewards, and track your environmental impact.
          </p>
          <Button 
            onClick={handleGoogleLogin} 
            className="w-full flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            {isLoading ? 'Logging in...' : 'Continue with Google'}
          </Button>
        </div>
        <div className="text-xs text-center text-muted-foreground">
          By continuing, you agree to EcoVista's Terms of Service and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
