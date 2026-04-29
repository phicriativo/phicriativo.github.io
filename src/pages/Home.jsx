import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TechSection from '@/components/home/TechSection';
import UseCasesSection from '@/components/home/UseCasesSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
}