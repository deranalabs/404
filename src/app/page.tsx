'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Database, Shield, Zap, Menu, X, Terminal, Globe } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import HubNavigator from '@/components/HubNavigator';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-xl bg-dark/80 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-black text-dark rounded-sm italic text-xl shadow-[0_0_15px_rgba(3,251,173,0.4)]">
            404
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tighter uppercase">NotFound<span className="text-primary italic">Labs</span></span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/40 font-bold">Infrastructure Hub</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <a href="#hub" className="hover:text-primary transition-all hover:tracking-[0.2em]">Validator</a>
          <a href="#hub" className="hover:text-primary transition-all hover:tracking-[0.2em]">RPC Nodes</a>
          <a href="#hub" className="hover:text-primary transition-all hover:tracking-[0.2em]">Indexers</a>
          <a href="#hub" className="hover:text-primary transition-all hover:tracking-[0.2em]">Infrastructure</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block scale-90 origin-right">
            <ConnectButton showBalance={false} chainStatus="none" accountStatus="address" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-dark pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-black italic tracking-tighter">
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="text-primary underline decoration-2 underline-offset-8">VALIDATOR</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">RPC NODES</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">INDEXERS</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">INFRASTRUCTURE</a>
              <div className="pt-8 border-t border-white/10">
                <ConnectButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-8 pt-20 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Monad Testnet Active
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 italic uppercase text-light">
              The Alpha <br />
              <span className="text-primary not-italic">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
              NotFoundLabs operates high-performance Validator, RPC, and Indexer clusters. 
              Built for the next phase of decentralized autonomous agents.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-10 py-5 bg-primary text-dark font-black rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 italic uppercase tracking-tighter shadow-[0_10px_30px_-10px_rgba(3,251,173,0.5)]">
                <Shield size={20} fill="currentColor" /> STAKE WITH US
              </button>
              <button className="px-10 py-5 border border-white/10 text-light font-black rounded-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3 italic uppercase tracking-tighter">
                <Terminal size={20} /> VIEW DOCUMENTATION
              </button>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="w-[450px] h-[450px] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
              <div className="w-[350px] h-[350px] border border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse] flex items-center justify-center border-dashed">
                <div className="w-[250px] h-[250px] bg-primary/10 rounded-full blur-[60px]" />
                <Globe size={120} className="absolute text-primary opacity-50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="relative z-10 px-6 md:px-8 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StatCard 
            icon={<Zap size={24} className="text-primary" />}
            label="Avg Uptime"
            value="100.00%"
            sub="Distributed Clusters"
          />
          <StatCard 
            icon={<Activity size={24} className="text-primary" />}
            label="Delegation"
            value="$4.2M+"
            sub="Network Weight"
          />
          <StatCard 
            icon={<Database size={24} className="text-primary" />}
            label="Ecosystems"
            value="3+"
            sub="Monad, Solana, Bera"
          />
        </div>
      </section>

      {/* Hub Navigator Section */}
      <HubNavigator />

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-8 py-20 border-t border-white/5 bg-darker">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-dark rounded-sm italic text-sm">404</div>
                <span className="text-lg font-black tracking-tighter uppercase text-light">NotFound<span className="text-primary italic">Labs</span></span>
              </div>
            <p className="text-white/30 font-light text-sm max-w-md">The infrastructure foundation for the autonomous economy. Reliable, fast, and secure node operations across the decentralized web.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            <div className="flex flex-col gap-4">
              <span className="text-primary">Ecosystem</span>
              <a href="#" className="hover:text-light transition-colors">Monad</a>
              <a href="#" className="hover:text-light transition-colors">Solana</a>
              <a href="#" className="hover:text-light transition-colors">Berachain</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary">Socials</span>
              <a href="https://x.com/NotFoundLabs" className="hover:text-light transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-light transition-colors">Discord</a>
              <a href="#" className="hover:text-light transition-colors">Github</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary">Support</span>
              <a href="#" className="hover:text-light transition-colors">Contact</a>
              <a href="#" className="hover:text-light transition-colors">Service Status</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 text-center">
          © 2026 NotFoundLabs. Distributed systems for sovereign agents.
        </div>
      </footer>
    </main>
  );
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group transition-all duration-300 hover:border-primary/30"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-sm bg-primary/10 border border-primary/20">
          {icon}
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">{label}</span>
      </div>
      <div className="text-4xl font-black italic tracking-tighter mb-1 text-light uppercase leading-none">{value}</div>
      <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{sub}</div>
    </motion.div>
  );
}
