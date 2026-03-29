'use client';

import { motion } from 'framer-motion';
import { Activity, Server, Database, Shield, Zap } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import HubNavigator from '@/components/HubNavigator';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md bg-black/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-black rounded-sm italic">404</div>
          <span className="text-xl font-bold tracking-tighter">NOTFOUND<span className="text-purple-500">LABS</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Validator</a>
          <a href="#" className="hover:text-white transition-colors">RPC Nodes</a>
          <a href="#" className="hover:text-white transition-colors">Indexers</a>
          <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
        </div>
        
        {/* RainbowKit Connect Button */}
        <ConnectButton showBalance={false} chainStatus="name" />
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 pt-32 pb-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Foundational Node Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 italic">
            THE ALPHA <br />
            <span className="text-purple-500">INFRASTRUCTURE</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl font-light">
            NotFoundLabs provides professional Validator, RPC, and Indexer operations. 
            Built for the Agentic Economy. Infrastructure that works when everything else is 404.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-sm hover:bg-purple-700 transition-all flex items-center gap-2 italic">
              <Shield size={20} /> STAKE WITH US
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all flex items-center gap-2 italic">
              EXPLORE HUB
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-10 px-8 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<Zap className="text-yellow-400" />}
            label="Average Uptime"
            value="100.00%"
            sub="Global Clusters"
          />
          <StatCard 
            icon={<Activity className="text-green-400" />}
            label="Total Delegation"
            value="$4.2M+"
            sub="Community Trust"
          />
          <StatCard 
            icon={<Database className="text-blue-400" />}
            label="Active Chains"
            value="3"
            sub="Monad, Solana, Bera"
          />
        </div>
      </section>

      {/* Hub Navigator Section */}
      <HubNavigator />

      {/* Footer */}
      <footer className="relative z-10 px-8 py-20 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 opacity-50 text-sm">
          <div>
            <p className="font-bold mb-4 italic uppercase">NotFoundLabs</p>
            <p className="font-light">The infrastructure layer for the next generation <br /> of autonomous economic agents.</p>
          </div>
          <div className="flex gap-20 font-bold uppercase tracking-tighter">
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-[10px]">Ecosystem</span>
              <a href="#">Monad</a>
              <a href="#">Solana</a>
              <a href="#">Berachain</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-[10px]">Resources</span>
              <a href="#">Docs</a>
              <a href="#">Support</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-sm bg-white/5 border border-white/10">
          {icon}
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{label}</span>
      </div>
      <div className="text-3xl font-black italic tracking-tight mb-1">{value}</div>
      <div className="text-xs text-white/40 font-medium">{sub}</div>
    </motion.div>
  );
}
