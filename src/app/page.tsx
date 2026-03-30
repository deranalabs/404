'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Terminal, Cpu } from 'lucide-react';
import CorePillars from '@/components/CorePillars';
import HubNavigator from '@/components/HubNavigator';
import NetworkHealth from '@/components/NetworkHealth';
import VisionGrid from '@/components/VisionGrid';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <nav className={`relative z-50 flex justify-between items-center px-5 md:px-10 py-3.5 transition-all duration-300 sticky top-0 ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 overflow-hidden rounded-sm shadow-[0_0_20px_rgba(3,251,173,0.2)]">
            <Image
              src="/IMG_3653.PNG"
              alt="404Labs Logo"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase text-glow leading-none">404<span className="text-primary">Labs</span></span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Community Validator</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#pillars" className="hover:text-primary transition-all relative group py-2">
            Overview
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#proof" className="hover:text-primary transition-all relative group py-2">Proof</a>
          <a href="#roadmap" className="hover:text-primary transition-all relative group py-2">Roadmap</a>
          <a href="/docs" className="hover:text-primary transition-all relative group py-2">Docs</a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-primary border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 rounded-sm transition-all duration-200 relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[55] bg-dark/96 backdrop-blur-xl px-5 pt-20 pb-8 lg:hidden"
          >
            <div className="border border-white/8 bg-white/[0.02] rounded-sm p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]">
              <div className="flex flex-col">
                <a href="#pillars" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-white/6 text-primary text-sm font-black uppercase tracking-[0.18em]">
                  <span>Overview</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#proof" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-white/6 text-white/70 hover:text-primary transition-colors text-sm font-black uppercase tracking-[0.18em]">
                  <span>Proof</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#roadmap" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-white/6 text-white/70 hover:text-primary transition-colors text-sm font-black uppercase tracking-[0.18em]">
                  <span>Roadmap</span>
                  <ArrowRight size={16} />
                </a>
                <a href="/docs" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 text-white/70 hover:text-primary transition-colors text-sm font-black uppercase tracking-[0.18em]">
                  <span>Docs</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 px-5 md:px-8 pt-12 md:pt-20 pb-12 md:pb-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(3,251,173,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Validator • Nodes • Execution
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-5 uppercase text-light">
              Web3 infrastructure, validator systems, and execution <span className="text-primary text-glow">—</span> built to run.
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              404Labs builds reliable infrastructure for decentralized networks, combining validator operations, node systems, and execution layers designed for real-world use.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="px-5 md:px-6 py-3 bg-primary text-dark text-sm font-black rounded-sm border border-primary/70 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 uppercase tracking-[0.14em] shadow-[0_10px_24px_-12px_rgba(3,251,173,0.45)] group">
                View Validator <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/docs" className="px-5 md:px-6 py-3 border border-white/12 bg-white/[0.02] text-light text-sm font-black rounded-sm hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 uppercase tracking-[0.14em] shadow-[0_10px_24px_-16px_rgba(255,255,255,0.18)]">
                <Terminal size={20} /> Read Docs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex flex-1 justify-center relative"
          >
            <div className="relative w-[300px] h-[300px] xl:w-[340px] xl:h-[340px]">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 bg-primary/20 rounded-full blur-[70px] animate-pulse" />
                <Cpu size={110} className="text-primary opacity-80" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-8 text-center">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Reliability</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-8 text-center">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Infrastructure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="pillars">
        <CorePillars />
      </div>

      <section id="proof" className="relative z-10 px-5 md:px-8 py-12 md:py-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-3 block">Current proof</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-light uppercase mb-4">Live systems, not empty claims</h2>
          <p className="text-white/40 leading-relaxed font-light max-w-2xl">
            404Labs is actively operating validator and node infrastructure, with current public proof on Monad testnet and a broader focus on building infrastructure that can grow beyond any single network.
          </p>
          <div className="mt-6">
            <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 border border-primary/20 bg-primary/[0.06] rounded-sm text-[11px] font-black uppercase tracking-[0.16em] text-primary hover:bg-primary/[0.10] hover:border-primary/35 transition-all duration-200">
              Open validator on Monad Vision <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <HubNavigator />

      <NetworkHealth />

      <section className="px-5 md:px-8 py-12 md:py-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="border border-white/5 bg-white/[0.02] rounded-sm p-5 md:p-7">
          <div className="max-w-3xl mb-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-3">Execution Layer</div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-light uppercase mb-3">Powered by 404Agency</h2>
            <p className="text-white/40 font-light leading-relaxed">
              Beyond validator and node operations, 404Labs is extended by 404Agency — an AI-agent execution layer supporting research, product builds, audits, and digital delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Research', 'Product Builds', 'Audits', 'API Development', 'Content & Strategy', 'Multi-agent Execution'].map((item) => (
              <span key={item} className="px-3 py-2 border border-white/10 bg-white/[0.02] text-white/60 text-[10px] font-bold uppercase tracking-[0.18em] rounded-sm">
                {item}
              </span>
            ))}
          </div>

          <a
            href="https://agdp.io/agent/24417"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/12 bg-white/[0.02] text-light text-sm font-black rounded-sm hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-[0.14em] shadow-[0_10px_24px_-16px_rgba(255,255,255,0.18)]"
          >
            View 404Agency <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <div id="roadmap">
        <VisionGrid />
      </div>

      <section className="relative z-10 px-5 py-14 md:py-18 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-black tracking-tighter text-white/15 leading-tight uppercase">
          404Labs is building reliable validator and node infrastructure, one honest milestone at a time.
        </p>
      </section>

      <footer className="relative z-10 px-5 md:px-8 pt-12 md:pt-14 pb-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-sm overflow-hidden shadow-xl text-dark">
                <Image src="/IMG_3653.PNG" alt="404Labs Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase text-light leading-none">404<span className="text-primary">Labs</span></span>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Community Validator</span>
              </div>
            </div>
            <p className="text-white/30 font-light text-sm md:text-base leading-relaxed">High-performance community validator & Web3 infrastructure.</p>
            <p className="text-white/20 font-light text-sm leading-relaxed mt-2">Operated by 404Agency.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            <div className="flex flex-col gap-4">
              <span className="text-primary text-[10px] font-black">Navigation</span>
              <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Validator</a>
              <a href="/docs" className="hover:text-primary transition-colors">Docs</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary text-[10px] font-black">Social</span>
              <a href="https://x.com/NotFoundLabs" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">404Labs on X</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary text-[10px] font-black">Network</span>
              <span className="text-white/30">Current Proof: Monad Testnet</span>
              <span className="text-white/30">Validator + Full Node</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.28em] text-white/10 flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 404Labs</span>
          <span className="uppercase tracking-[0.12em]">Currently active on Monad testnet</span>
        </div>
      </footer>
    </main>
  );
}
