'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Solution from '@/components/Solution';
import FAQ from '@/components/FAQ';
import AppErrorBoundary from '@/components/AppErrorBoundary';
import VeriAgentApp from '@/components/VeriAgentApp';


export default function Home() {
  useEffect(() => {
    let rafId = 0;
    let isDisposed = false;
    let lenisInstance: { raf: (time: number) => void; destroy?: () => void } | null = null;

    const startLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        if (isDisposed) return;

        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        const raf = (time: number) => {
          if (isDisposed || !lenisInstance) return;
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch (error) {
        console.error('Lenis initialization failed:', error);
      }
    };

    startLenis();

    return () => {
      isDisposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      try {
        lenisInstance?.destroy?.();
      } catch (error) {
        console.error('Lenis cleanup failed:', error);
      }
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Hero />
      <AppErrorBoundary fallbackTitle="Explorer Runtime Error">
        <VeriAgentApp />
      </AppErrorBoundary>
      <ProblemStatement />
      <Solution />
      <FAQ />
    </main>
  );
}
