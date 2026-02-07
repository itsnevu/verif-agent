'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Lock, FileCode } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-3000" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-8 hover:border-primary/50 transition-colors cursor-default backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-700 font-medium tracking-wide font-sans">0xVRA Mainnet Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500 mb-6 tracking-tight leading-[1.1]">
            Trustless AI,<br />
            <span className="text-black">Cryptographically Verified.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            The accountability layer for autonomous agents. We provide <span className="text-primary font-medium">zk-SNARK</span> proofs for every AI inference, ensuring agents act exactly as programmed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#registry" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--primary)] active:scale-95 flex items-center gap-2">
              Deploy Agent
              <Activity className="w-5 h-5" />
            </a>
            <a href="#verify" className="px-8 py-4 bg-white text-black border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-black/20 active:scale-95 flex items-center gap-2 shadow-lg shadow-gray-200/50">
              Verify Proof
              <FileCode className="w-5 h-5 text-secondary" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to Verify</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
