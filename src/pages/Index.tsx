
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ReportWaste from '@/components/ReportWaste';
import Leaderboard from '@/components/Leaderboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ReportWaste />
      <Leaderboard />
      <Footer />
    </div>
  );
};

export default Index;
