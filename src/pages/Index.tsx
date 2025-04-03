
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ReportWaste from '@/components/ReportWaste';
import UpcyclingHub from '@/components/UpcyclingHub';
import Leaderboard from '@/components/Leaderboard';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <ReportWaste />
        <UpcyclingHub />
        <Leaderboard />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;
