export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
            <div className="relative">
                {/* Pulsing Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />

                {/* Shield Icon / Spinner */}
                <div className="relative w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin" />

                {/* Logo Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/10 rounded-full" />
                </div>
            </div>

            <p className="mt-8 text-gray-400 font-mono text-sm animate-pulse">
                Verifying Proofs...
            </p>
        </div>
    );
}
