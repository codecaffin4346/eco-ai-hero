
import { toast } from "@/components/ui/use-toast";

// Mock authentication service for Google authentication
// In a real application, you would integrate with an actual auth provider
export const authService = {
  isAuthenticated: false,
  user: null,

  async loginWithGoogle() {
    try {
      // In a real implementation, this would redirect to Google OAuth
      // For now, we'll simulate a successful login
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.isAuthenticated = true;
      this.user = {
        id: "g-" + Math.random().toString(36).substring(2, 11),
        name: "EcoVista User",
        email: "user@example.com",
        image: "https://source.unsplash.com/random/100x100/?portrait"
      };
      
      toast({
        title: "Login Successful",
        description: "Welcome to EcoVista!",
        variant: "default",
      });
      
      localStorage.setItem("ecoVista-user", JSON.stringify(this.user));
      
      return this.user;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  },

  async logout() {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.isAuthenticated = false;
      this.user = null;
      
      localStorage.removeItem("ecoVista-user");
      
      toast({
        title: "Logout Successful",
        description: "You have been logged out.",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: "An error occurred during logout. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  },

  checkAuth() {
    const savedUser = localStorage.getItem("ecoVista-user");
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.isAuthenticated = true;
      return this.user;
    }
    return null;
  }
};
