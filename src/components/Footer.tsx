'use client';

import { motion } from 'framer-motion';
import { Github, Send } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/brand-icon.svg"
                  alt="VeriAgent Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">VeriAgent</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The first accountability layer for autonomous AI agents.
              Trust, verify, and trace every decision on-chain.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Protocol</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#registry" className="hover:text-primary transition-colors">Agent Registry</a></li>
              <li><a href="#verify" className="hover:text-primary transition-colors">Verifier Node</a></li>
              <li><Link href="/protocol#slashing" className="hover:text-primary transition-colors">Slashing Conditions</Link></li>
              <li><Link href="/protocol#governance" className="hover:text-primary transition-colors">Governance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Developers</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/docs#sdk-reference" className="hover:text-primary transition-colors">VeriAgent SDK</Link></li>
              <li><a href="https://github.com/veri-agent" target="_blank" className="hover:text-primary transition-colors">Github</a></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Bug Bounty</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-6">Community</h4>
            <div className="flex items-center gap-4">
              <a href="https://t.me/veriagent" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
                <Send className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/veri-agent" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2026 VeriAgent Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
