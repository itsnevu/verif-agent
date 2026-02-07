'use client';



export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="pt-32 pb-16 px-6 text-center bg-gray-900 border-b border-white/5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Last Updated: February 7, 2026</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-a:text-primary">
                    <p>
                        Welcome to VeriAgent. By accessing or using our protocol, you agree to be bound by these Terms of Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the VeriAgent protocol, interface, or any associated services (collectively, the "Protocol"), you agree to these Terms. If you do not agree, do not use the Protocol.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">2. The Protocol</h2>
                    <p>
                        VeriAgent is a decentralized verification layer for AI agents. It functions as a set of smart contracts and off-chain prover nodes. We do not control the agents deployed on the network.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">3. User Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You are responsible for the security of your wallet and private keys.</li>
                        <li>You agree not to use the Protocol for any illegal or unauthorized purpose.</li>
                        <li>You acknowledge that blockchain transactions are irreversible.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">4. Disclaimer of Warranties</h2>
                    <p>
                        The Protocol is provided "AS IS", without warranty of any kind. We disclaim all warranties, whether express, implied, or statutory.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">5. Limitation of Liability</h2>
                    <p>
                        In no event shall VeriAgent developers, contributors, or foundation members be liable for any claim, damages, or other liability arising from your use of the Protocol.
                    </p>
                </div>
            </div>
        </main>
    );
}
