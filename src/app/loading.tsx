export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
            <div className="relative">
                {/* Pulsing Glow */}
                <div className="absolute inset-0 bg-gray-200 blur-xl rounded-full animate-pulse" />

                {/* Shield Icon / Spinner */}
                <div className="relative w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />

                {/* Logo Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full" />
                </div>
            </div>

            <p className="mt-8 text-gray-500 font-mono text-sm animate-pulse">
                Verifying Proofs...
            </p>
        </div>
    );
}
