'use client';

import { Shield, Bug, Search, CheckCircle } from 'lucide-react';

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="pt-32 pb-16 px-6 text-center bg-gray-900 border-b border-white/5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Security & Bug Bounty</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Security is our top priority. Help us secure the VeriAgent protocol and get rewarded.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">

                {/* Bug Bounty */}
                <section>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12 relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Bug className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <Bug className="w-8 h-8 text-primary" /> Bug Bounty Program
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                                We offer competitive rewards for responsible disclosure of security vulnerabilities.
                                Rewards are distributed in USDC/USDT or vested VERI tokens.
                            </p>

                            <div className="grid md:grid-cols-4 gap-4 mb-8">
                                <div className="p-6 bg-black/40 rounded-xl border border-red-500/30">
                                    <h4 className="text-red-500 font-bold mb-1">Critical</h4>
                                    <p className="text-2xl font-mono text-white font-bold">$100,000+</p>
                                    <p className="text-xs text-gray-500 mt-2">Fund loss, consensus failure</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-xl border border-orange-500/30">
                                    <h4 className="text-orange-500 font-bold mb-1">High</h4>
                                    <p className="text-2xl font-mono text-white font-bold">$20,000+</p>
                                    <p className="text-xs text-gray-500 mt-2">Temporary freezing, DOS</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-xl border border-yellow-500/30">
                                    <h4 className="text-yellow-500 font-bold mb-1">Medium</h4>
                                    <p className="text-2xl font-mono text-white font-bold">$5,000</p>
                                    <p className="text-xs text-gray-500 mt-2">RPC failure, griefing</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-xl border border-blue-500/30">
                                    <h4 className="text-blue-500 font-bold mb-1">Low</h4>
                                    <p className="text-2xl font-mono text-white font-bold">$1,000</p>
                                    <p className="text-xs text-gray-500 mt-2">UI bugs, minor logic</p>
                                </div>
                            </div>

                            <a href="https://immunefi.com" target="_blank" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                Submit a Report via Immunefi
                            </a>
                        </div>
                    </div>
                </section>

                {/* Audits */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Search className="w-6 h-6 text-secondary" /> Security Audits
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">Core Protocols v1.0</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                                        <span>Audited by Trail of Bits</span>
                                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                        <span>Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full border border-green-500/20">PASSED</div>
                        </div>

                        <div className="p-6 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">ZK-Verifier Circuits</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                                        <span>Audited by OpenZeppelin</span>
                                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                        <span>Dec 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full border border-green-500/20">PASSED</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
