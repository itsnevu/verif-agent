'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, CheckCircle, XCircle, AlertCircle, FileJson, BadgeCheck, Server, Activity, Database, Shield, Terminal, RefreshCw, Filter } from 'lucide-react';

// --- MOCK DATA GENERATOR ---
const AGENT_TYPES = ['DeFi Risk Manager', 'DAO Voting Advisor', 'Smart Contract Audit', 'Memecoin Sniper', 'Yield Optimizer', 'NFT Appraiser', 'Social Sentiment', 'MEV Protection'];
const STATUSES = ['Verified', 'Verified', 'Verified', 'Probation', 'Verified', 'Offline', 'Verified'];

const generateMockAgents = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
        const id = `AG-${Math.floor(Math.random() * 9000) + 1000}`;
        const type = AGENT_TYPES[Math.floor(Math.random() * AGENT_TYPES.length)];
        const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
        const reputation = Math.floor(Math.random() * 20) + 80; // 80-99
        const stake = (Math.floor(Math.random() * 500) * 100 + 1000).toLocaleString();

        return {
            id,
            name: `${type.split(' ')[0]} ${['Sentinel', 'Guardian', 'Oracle', 'Node', 'Agent', 'Bot', 'Runner'][Math.floor(Math.random() * 7)]} ${Math.floor(Math.random() * 99)}`,
            type,
            reputation,
            stake: `${stake} VERI`,
            status,
            uptime: `${(95 + Math.random() * 5).toFixed(2)}%`
        };
    });
};

const INITIAL_AGENTS = [
    { id: 'AG-8823', name: 'Alpha DeFi Sentinel', type: 'DeFi Risk Manager', reputation: 99, stake: '150,000 VERI', status: 'Verified', uptime: '99.99%' },
    { id: 'AG-1094', name: 'GovGuard V2', type: 'DAO Voting Advisor', reputation: 96, stake: '45,500 VERI', status: 'Verified', uptime: '98.50%' },
    { id: 'AG-4421', name: 'Nexus Auditor', type: 'Smart Contract Audit', reputation: 98, stake: '200,000 VERI', status: 'Verified', uptime: '100.00%' },
    { id: 'AG-0012', name: 'Degens Delight', type: 'Memecoin Sniper', reputation: 45, stake: '2,000 VERI', status: 'Probation', uptime: '82.10%' },
    ...generateMockAgents(46) // Total ~50 agents
];

const NODE_LOG_TEMPLATES = [
    "Syncing block #{block}...",
    "Verifying proof for Agent {agent}...",
    "Proof Validated. Gas used: {gas}",
    "New task submitted to mempool: Task-{task}",
    "Challenge period started for Task-{task}...",
    "Peer connected: {ip}",
    "Consensus reached on block #{block}",
    "Broadcasting state root update...",
    "Received ZK-SNARK proof from {agent}",
    "Indexing event logs..."
];

export default function VeriAgentApp() {
    const [activeTab, setActiveTab] = useState<'registry' | 'simulate' | 'node'>('registry');

    // -- REGISTRY STATE --
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All Statuses');
    const [sortBy, setSortBy] = useState('Reputation');
    const [agents, setAgents] = useState(INITIAL_AGENTS);
    const [visibleAgents, setVisibleAgents] = useState(12);

    // -- SIMULATOR STATE --
    const [simulationStep, setSimulationStep] = useState<'idle' | 'running' | 'verified'>('idle');
    const [prompt, setPrompt] = useState('Analyze the risk of Contract 0x123...abc based on liquidity depth and ownership renouncement.');
    const [simLogs, setSimLogs] = useState<string[]>([]);
    const simLogContainerRef = useRef<HTMLDivElement>(null);

    // -- NODE STATE --
    const [nodeLogs, setNodeLogs] = useState<string[]>([]);
    const [totalProofs, setTotalProofs] = useState(1248932);
    const nodeLogContainerRef = useRef<HTMLDivElement>(null);

    // Filter Logic
    const filteredAgents = agents
        .filter(a =>
            (filterStatus === 'All Statuses' || a.status === filterStatus) &&
            (a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                a.type.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === 'Reputation') return b.reputation - a.reputation;
            if (sortBy === 'Stake') return parseInt(b.stake.replace(/,/g, '')) - parseInt(a.stake.replace(/,/g, ''));
            return 0;
        });

    // Simulator Logic
    const runSimulation = () => {
        if (simulationStep === 'running') return;
        setSimulationStep('running');
        setSimLogs([]);

        const steps = [
            "Initializing secure enclave...",
            "Loading Agent AG-8823 context...",
            "Parsing prompt: 'Analyze risk of Contract 0x123...'",
            "Fetching on-chain data for 0x123... (Mainnet)",
            "> Found verified contract source code",
            "> Liquidity Pool Depth: $4.2M",
            "> Ownership: Renounced",
            "Running risk analysis model (v2.4)...",
            "Generating ZK-Reasoning Trace...",
            "Computing SHA-256 state root...",
            "Generating Halo2 Proof...",
            "Verifying constraints...",
            "Proof Validated! Output: RISK_SCORE_LOW (12/100)"
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < steps.length) {
                setSimLogs(prev => [...prev, steps[i]]);
                i++;
                // Auto scroll
                if (simLogContainerRef.current) {
                    simLogContainerRef.current.scrollTop = simLogContainerRef.current.scrollHeight;
                }
            } else {
                clearInterval(interval);
                setSimulationStep('verified');
            }
        }, 800);
    };

    // Node Live Feed Logic
    useEffect(() => {
        const interval = setInterval(() => {
            const template = NODE_LOG_TEMPLATES[Math.floor(Math.random() * NODE_LOG_TEMPLATES.length)];
            const log = template
                .replace("{block}", Math.floor(18239000 + Math.random() * 1000).toString())
                .replace("{agent}", `AG-${Math.floor(Math.random() * 9000) + 1000}`)
                .replace("{gas}", Math.floor(Math.random() * 50000 + 21000).toString())
                .replace("{task}", Math.floor(Math.random() * 9000).toString())
                .replace("{ip}", `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`);

            const time = new Date().toLocaleTimeString('en-US', { hour12: false });

            setNodeLogs(prev => [`[${time}] ${log}`, ...prev].slice(0, 50));

            // Randomly increment total proofs
            if (Math.random() > 0.5) {
                setTotalProofs(prev => prev + 1);
            }

        }, 2000); // New log every 2 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <section id="registry" className="py-24 bg-gray-900 min-h-screen scroll-mt-20">
            <div id="verify" className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2">0xVRA <span className="text-secondary font-light">Explorer</span></h2>
                        <p className="text-gray-400">Explore registered agents, verify proofs, and monitor network status.</p>
                    </div>

                    <div className="flex p-1 bg-gray-800 rounded-xl border border-white/10">
                        {['registry', 'simulate', 'node'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize ${activeTab === tab ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab === 'registry' ? 'Agent Registry' : tab === 'simulate' ? 'Task Simulator' : 'Node Status'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800 rounded-2xl border border-white/5 overflow-hidden min-h-[700px] shadow-2xl relative">
                    <AnimatePresence mode="wait">
                        {/* --- REGISTRY TAB --- */}
                        {activeTab === 'registry' && (
                            <motion.div key="registry" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="p-6 h-full flex flex-col">
                                <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between z-10 relative">
                                    <div className="relative flex-1 max-w-lg">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Search agents by ID, type, or name..."
                                            className="w-full bg-gray-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <select
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                            className="bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-primary/50"
                                        >
                                            <option>All Statuses</option>
                                            <option>Verified</option>
                                            <option>Probation</option>
                                            <option>Offline</option>
                                        </select>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-primary/50"
                                        >
                                            <option>Reputation</option>
                                            <option>Stake</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                                    {filteredAgents.slice(0, visibleAgents).map((agent) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={agent.id}
                                            className="p-5 bg-gray-900 rounded-xl border border-white/5 hover:border-primary/30 transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                        {agent.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors truncate max-w-[120px]">{agent.name}</h4>
                                                        <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                                                            <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded">{agent.id}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`px-2 py-0.5 rounded text-[10px] font-bold border ${agent.status === 'Verified' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                    agent.status === 'Probation' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                        'bg-red-500/10 text-red-500 border-red-500/20'
                                                    }`}>
                                                    {agent.status}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 bg-black/20 p-2 rounded-lg">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                {agent.type}
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                                                <div><div className="text-gray-500 text-[10px] mb-0.5">Reputation</div><div className="text-white font-mono font-bold text-sm">{agent.reputation}</div></div>
                                                <div><div className="text-gray-500 text-[10px] mb-0.5">Staked</div><div className="text-white font-mono font-bold text-sm">{agent.stake}</div></div>
                                                <div><div className="text-gray-500 text-[10px] mb-0.5">Uptime</div><div className="text-green-400 font-mono font-bold text-sm">{agent.uptime}</div></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {filteredAgents.length === 0 && (
                                        <div className="col-span-full text-center py-20 text-gray-500">
                                            No agents found matching your criteria.
                                        </div>
                                    )}
                                </div>

                                {filteredAgents.length > visibleAgents && (
                                    <div className="mt-6 text-center">
                                        <button
                                            onClick={() => setVisibleAgents(prev => prev + 12)}
                                            className="px-6 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm transition-colors"
                                        >
                                            Load More Agents
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* --- SIMULATOR TAB --- */}
                        {activeTab === 'simulate' && (
                            <motion.div key="simulate" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col h-full">
                                <div className="flex-1 grid md:grid-cols-2 h-full">
                                    <div className="p-8 border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-gray-800/50">
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <Play className="w-5 h-5 text-secondary" /> Task Simulator
                                        </h3>

                                        <div className="space-y-6 flex-1">
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-2">Select Agent</label>
                                                <select className="w-full bg-gray-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors">
                                                    {INITIAL_AGENTS.slice(0, 5).map(a => <option key={a.id}>{a.name} ({a.id})</option>)}
                                                </select>
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-sm text-gray-400 mb-2">Input Prompt / Task</label>
                                                <textarea
                                                    value={prompt}
                                                    onChange={(e) => setPrompt(e.target.value)}
                                                    className="w-full h-40 bg-gray-900 border border-white/10 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-secondary resize-none font-mono text-sm leading-relaxed"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            onClick={runSimulation}
                                            disabled={simulationStep === 'running'}
                                            className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 mt-8 ${simulationStep === 'running' ? 'bg-gray-700 cursor-not-allowed opacity-50' : 'bg-secondary hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20'}`}
                                        >
                                            {simulationStep === 'running' ? <><RefreshCw className="w-4 h-4 animate-spin" /> PROCESSING...</> : <><Play className="w-4 h-4 fill-current" /> RUN SIMULATION</>}
                                        </button>
                                    </div>

                                    <div className="p-8 bg-black relative overflow-hidden flex flex-col">
                                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                                            <Terminal className="w-5 h-5 text-primary" /> Live Reasoning Trace
                                        </h3>

                                        <div
                                            ref={simLogContainerRef}
                                            className="flex-1 bg-gray-900/50 rounded-xl border border-white/10 p-4 font-mono text-xs overflow-y-auto custom-scrollbar relative z-10"
                                        >
                                            {simLogs.length === 0 && simulationStep === 'idle' && (
                                                <div className="h-full flex items-center justify-center text-gray-600">
                                                    Waiting for task input...
                                                </div>
                                            )}
                                            {simLogs.map((log, i) => (
                                                <div key={i} className="mb-2 text-green-400">
                                                    <span className="text-gray-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                                    {log.startsWith('>') ? <span className="text-secondary font-bold">{log}</span> : log}
                                                </div>
                                            ))}
                                            {simulationStep === 'running' && (
                                                <div className="animate-pulse text-primary">_</div>
                                            )}
                                        </div>

                                        {simulationStep === 'verified' && (
                                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <BadgeCheck className="w-8 h-8 text-green-500" />
                                                    <div>
                                                        <h4 className="text-green-500 font-bold text-sm">Proof Verified</h4>
                                                        <p className="text-[10px] text-green-500/70">TxHash: 0x8a...33f1</p>
                                                    </div>
                                                </div>
                                                <button className="px-3 py-1.5 bg-green-500/20 text-green-500 text-xs rounded hover:bg-green-500/30 font-medium">
                                                    View On-Chain
                                                </button>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* --- NODE TAB --- */}
                        {activeTab === 'node' && (
                            <motion.div key="node" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 h-full bg-gray-900 flex flex-col">
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {/* Stats Cards */}
                                    <div className="bg-gray-800 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Activity className="w-16 h-16 text-primary" /></div>
                                        <div className="text-gray-400 text-sm mb-1">Node Status</div>
                                        <div className="text-2xl font-bold text-green-500 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Operational</div>
                                        <div className="mt-4 text-xs text-gray-500">Uptime: 14d 21h 12m</div>
                                    </div>
                                    <div className="bg-gray-800 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Database className="w-16 h-16 text-secondary" /></div>
                                        <div className="text-gray-400 text-sm mb-1">Total Proofs Verified</div>
                                        <div className="text-2xl font-bold text-white tabular-nums">{totalProofs.toLocaleString()}</div>
                                        <div className="mt-4 text-xs text-green-400 flex items-center gap-1"><Activity className="w-3 h-3" /> +12% activity</div>
                                    </div>
                                    <div className="bg-gray-800 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Shield className="w-16 h-16 text-white" /></div>
                                        <div className="text-gray-400 text-sm mb-1">Slash Events</div>
                                        <div className="text-2xl font-bold text-white">0</div>
                                        <div className="mt-4 text-xs text-gray-500">Network secure</div>
                                    </div>
                                </div>

                                <div className="bg-black/50 rounded-xl border border-white/10 flex-1 overflow-hidden flex flex-col">
                                    <div className="p-4 border-b border-white/10 bg-gray-900/50 flex justify-between items-center">
                                        <span className="font-mono text-sm text-gray-400 flex items-center gap-2"><Terminal className="w-4 h-4" /> Node Logs</span>
                                        <span className="text-[10px] text-primary flex items-center gap-1 bg-primary/10 px-2 py-1 rounded"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /> LIVE FEED</span>
                                    </div>
                                    <div ref={nodeLogContainerRef} className="flex-1 p-4 font-mono text-xs overflow-y-auto custom-scrollbar space-y-1.5">
                                        {nodeLogs.map((log, i) => (
                                            <div key={i} className={`flex gap-3 ${log.includes('Verified') ? 'text-green-400' : log.includes('Slash') ? 'text-red-400' : 'text-gray-400'}`}>
                                                <span className="opacity-50 flex-shrink-0">{log.split(']')[0]}]</span>
                                                <span>{log.split(']')[1]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
