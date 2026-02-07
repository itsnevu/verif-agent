'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-black text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Error Glow */}
            <div className="absolute inset-0 bg-red-950/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
                <div className="w-24 h-24 bg-red-950/30 rounded-3xl border border-red-500/20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-900/10">
                    <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
                </div>

                <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Consensus Failure</h1>
                <p className="text-gray-400 mb-2 font-mono text-sm text-red-400">Error Digest: {error.digest || 'UNKNOWN_HASH_COLLISION'}</p>
                <p className="text-gray-400 mb-10 leading-relaxed">
                    The protocol encountered a critical runtime error. State synchronization failed.
                    Please try re-broadcasting your request.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Retry Handshake
                    </button>
                    <Link
                        href="/"
                        className="px-8 py-3 bg-white/5 text-gray-300 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
