'use client';



export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="pt-32 pb-16 px-6 text-center bg-gray-900 border-b border-white/5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Last Updated: February 7, 2026</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-a:text-primary">
                    <p>
                        VeriAgent values your privacy. As a decentralized protocol, we collect minimal personal data.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">1. Data Collection</h2>
                    <p>
                        We do not create user accounts or store personal identifiers. We may collect:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Public blockchain addresses interacting with the Protocol.</li>
                        <li>Transaction data publicly available on the blockchain.</li>
                        <li>Technical data (IP address, browser type) for analytics and security.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">2. Use of Data</h2>
                    <p>
                        We use collected data solely to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Maintain and improve the Protocol interface.</li>
                        <li>Monitor network health and security.</li>
                        <li>Detect and prevent malicious activity.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">3. Third-Party Services</h2>
                    <p>
                        We use RPC providers and other infrastructure partners (e.g., Infura, Alchemy) who may collect data according to their own privacy policies.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">4. Changes</h2>
                    <p>
                        We may update this policy periodically. Continued use of the Protocol constitutes acceptance of changes.
                    </p>
                </div>
            </div>
        </main>
    );
}
