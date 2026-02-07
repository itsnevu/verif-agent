'use client';

import Link from 'next/link';
import { SearchX, ArrowLeft, Map } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
                <div className="w-24 h-24 bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-black/50">
                    <SearchX className="w-10 h-10 text-gray-500" />
                </div>

                <h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl font-bold text-white mb-4">Block Not Found</h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                    The transaction hash you are looking for does not exist in this chain.
                    You may have ventured too deep into the dark forest.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Genesis
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white/5 text-gray-300 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <Map className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-xs text-gray-600 font-mono">VeriAgent Protocol v1.0 • Consensus Layer</p>
            </div>
        </main>
    );
}
