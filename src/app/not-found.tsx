'use client';

import Link from 'next/link';
import { SearchX, ArrowLeft, Map } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
                <div className="w-24 h-24 bg-gray-50 rounded-3xl border border-gray-200 flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <SearchX className="w-10 h-10 text-gray-400" />
                </div>

                <h1 className="text-6xl font-bold text-black mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl font-bold text-black mb-4">Block Not Found</h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    The transaction hash you are looking for does not exist in this chain.
                    You may have ventured too deep into the dark forest.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Genesis
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
                    >
                        <Map className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-xs text-gray-400 font-mono">0xVRE Protocol v1.0 • Consensus Layer</p>
            </div>
        </main>
    );
}
