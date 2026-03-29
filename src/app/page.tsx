'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Database, Shield, Zap, Menu, X, Terminal, Globe, Cpu, ArrowRight, TrendingUp, Users, Percent } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import HubNavigator from '@/components/HubNavigator';
import NetworkHealth from '@/components/NetworkHealth';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stats, setStats] = useState({
    uptime: "100.00%",
    votingPower: "11M MON",
    estimatedAPY: "80.63%",
    commission: "0%",
    delegators: 2
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setStats({
            uptime: data.uptime,
            votingPower: data.votingPower.replace('000,000', 'M'),
            estimatedAPY: data.estimatedAPY,
            commission: data.commission,
            delegators: data.delegators
          });
        }
      });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Navigation */}
      <nav className={`relative z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 sticky top-0 ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 overflow-hidden rounded-sm shadow-[0_0_20px_rgba(3,251,173,0.2)]">
            <Image 
              src="/logo.png" 
              alt="404Labs Logo" 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase text-glow leading-none">NotFound<span className="text-primary italic">Labs</span></span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Systems Group</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#hub" className="hover:text-primary transition-all relative group py-2">
            Validator
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#hub" className="hover:text-primary transition-all relative group py-2">
            RPC Gateway
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#hub" className="hover:text-primary transition-all relative group py-2">
            Indexers
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#hub" className="hover:text-primary transition-all relative group py-2">
            Infrastructure
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block scale-90 origin-right">
            <ConnectButton showBalance={false} chainStatus="none" accountStatus="address" />
          </div>
          
          <button 
            className="lg:hidden p-2 text-primary hover:bg-white/5 rounded-sm transition-colors relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-dark flex flex-col pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-10 text-4xl font-black italic tracking-tighter text-light">
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="text-primary hover:pl-4 transition-all uppercase">Validator</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">RPC Nodes</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">Indexers</a>
              <a href="#hub" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">Infrastructure</a>
            </div>
            <div className="mt-auto mb-16 space-y-6 pt-10 border-t border-white/5">
               <ConnectButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-8 pt-16 md:pt-28 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-[0_0_15px_rgba(3,251,173,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise Node Infrastructure
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 italic uppercase text-light">
              THE <span className="text-primary not-italic text-glow">TITAN</span> <br />
              LAYER
            </h1>
            <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
              We operate mission-critical Validator, RPC, and Indexer clusters across the decentralized frontier. Built for sovereign agents.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-12 py-6 bg-primary text-dark font-black rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 italic uppercase tracking-tighter shadow-[0_15px_35px_-10px_rgba(3,251,173,0.4)] group">
                STAKE WITH US <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-12 py-6 border border-white/10 text-light font-black rounded-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3 italic uppercase tracking-tighter">
                <Terminal size={20} /> VIEW DOCS
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex flex-1 justify-center relative"
          >
            <div className="relative w-[400px] h-[400px]">
               <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
               <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                  <Cpu size={140} className="text-primary opacity-80" />
               </div>
               
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-8 text-center">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Scalability</span>
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-8 text-center">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Performance</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Validator Stats Section */}
      <section className="relative z-10 px-6 md:px-8 py-12 max-w-7xl mx-auto border-y border-white/5 bg-white/[0.01]">
        <div className="mb-10 text-center lg:text-left">
           <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-2 block">Live Validator Status</span>
           <h2 className="text-3xl font-black italic tracking-tighter text-light uppercase">Monad Testnet Metrics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<Shield size={20} />}
            label="Total Stake"
            value={stats.votingPower}
            sub="NET VOTING POWER"
          />
          <StatCard 
            icon={<TrendingUp size={20} />}
            label="Estimated APY"
            value={stats.estimatedAPY}
            sub="NETWORK REWARDS"
          />
          <StatCard 
            icon={<Users size={20} />}
            label="Delegators"
            value={stats.delegators.toString()}
            sub="ACTIVE BACKERS"
          />
          <StatCard 
            icon={<Percent size={20} />}
            label="Commission"
            value={stats.commission}
            sub="LOWEST FEE TIER"
          />
        </div>
      </section>

      {/* Hub Navigator Section */}
      <HubNavigator />

      {/* Network Health Section */}
      <NetworkHealth />

      {/* Trust Quote */}
      <section className="relative z-10 px-6 py-32 text-center max-w-4xl mx-auto">
          <p className="text-4xl md:text-5xl font-black italic tracking-tighter text-white/10 leading-tight uppercase">
            "Infrastructure so stable you'll forget it's there. Built for the <span className="text-white/20 text-glow">Agentic Economy</span>."
          </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-8 pt-24 pb-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">
          <div className="max-w-sm">
             <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 bg-white rounded-sm overflow-hidden shadow-xl text-dark">
                   <Image src="/logo.png" alt="404Labs Logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter uppercase text-light text-glow leading-none">NotFound<span className="text-primary italic">Labs</span></span>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Est. 2026</span>
                </div>
              </div>
            <p className="text-white/30 font-light text-base leading-relaxed">Operated by 404Agency. Providing high-performance systems for sovereign entities and autonomous agents across the web3 stack.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
            <div className="flex flex-col gap-6">
              <span className="text-primary text-[10px] font-black">Networks</span>
              <a href="#" className="hover:text-primary transition-colors">Monad</a>
              <a href="#" className="hover:text-primary transition-colors">Solana</a>
              <a href="#" className="hover:text-primary transition-colors">Berachain</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-primary text-[10px] font-black">Socials</span>
              <a href="https://x.com/NotFoundLabs" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Twitter / X</a>
              <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Discord</a>
              <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Github</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-primary text-[10px] font-black">Portal</span>
              <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Status</a>
              <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary w-fit">Privacy</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/10 flex flex-col md:flex-row justify-between gap-4">
          <span>© 2026 NotFoundLabs. All rights reserved.</span>
          <span className="italic">Powered by 404Agency Systems</span>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-sm border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group transition-all duration-300 hover:border-primary/30"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-black">{label}</span>
      </div>
      <div className="text-4xl font-black italic tracking-tighter text-light mb-2 group-hover:text-primary transition-colors uppercase leading-none">{value}</div>
      <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">{sub}</div>
    </motion.div>
  );
}
