'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Terminal, Cpu } from 'lucide-react';
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

      <nav className={`relative z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 sticky top-0 ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
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
          <a href="#validator" className="hover:text-primary transition-all relative group py-2">
            Validator
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#live" className="hover:text-primary transition-all relative group py-2">Infrastructure</a>
          <a href="#roadmap" className="hover:text-primary transition-all relative group py-2">Roadmap</a>
          <a href="/docs" className="hover:text-primary transition-all relative group py-2">Docs</a>
        </div>

        <button
          className="lg:hidden p-2 text-primary hover:bg-white/5 rounded-sm transition-colors relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-dark flex flex-col pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-10 text-4xl font-black tracking-tighter text-light">
              <a href="#validator" onClick={() => setIsMenuOpen(false)} className="text-primary hover:pl-4 transition-all uppercase underline decoration-primary decoration-4 underline-offset-8">Validator</a>
              <a href="#live" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">Infrastructure</a>
              <a href="#roadmap" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">Roadmap</a>
              <a href="/docs" onClick={() => setIsMenuOpen(false)} className="hover:text-primary hover:pl-4 transition-all uppercase text-white/60">Docs</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Monad Testnet Validator
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-light">
              High-performance community validator <span className="text-primary text-glow">&</span> Web3 infrastructure
            </h1>
            <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
              404Labs operates reliable validator infrastructure and Monad full nodes supporting decentralized networks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="px-10 py-5 bg-primary text-dark font-black rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter shadow-[0_15px_35px_-10px_rgba(3,251,173,0.4)] group">
                View Validator <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/docs" className="px-10 py-5 border border-white/10 text-light font-black rounded-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter">
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
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                <Cpu size={140} className="text-primary opacity-80" />
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

      <section id="validator" className="relative z-10 px-6 md:px-8 py-12 max-w-7xl mx-auto border-y border-white/5 bg-white/[0.01]">
        <div className="mb-10 max-w-3xl">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-2 block">Built for reliability on Monad testnet</span>
          <h2 className="text-3xl font-black tracking-tighter text-light uppercase mb-4">Validator proof</h2>
          <p className="text-white/40 leading-relaxed font-light">
            404Labs is actively operating validator infrastructure and full nodes on Monad testnet, focused on reliable participation, network support, and long-term infrastructure credibility.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="px-8 py-4 bg-primary text-dark font-black rounded-sm hover:brightness-110 transition-all inline-flex items-center justify-center gap-3 uppercase tracking-tighter w-fit">
            View Validator <ArrowRight size={18} />
          </a>
          <a href="/docs" className="px-8 py-4 border border-white/10 text-light font-black rounded-sm hover:bg-white/5 transition-all inline-flex items-center justify-center gap-3 uppercase tracking-tighter w-fit">
            <Terminal size={18} /> Read Docs
          </a>
        </div>
      </section>

      <div id="live">
        <HubNavigator />
      </div>

      <NetworkHealth />

      <div id="roadmap">
        <VisionGrid />
      </div>

      <section className="relative z-10 px-6 py-24 text-center max-w-4xl mx-auto">
        <p className="text-3xl md:text-4xl font-black tracking-tighter text-white/15 leading-tight uppercase">
          404Labs is building reliable validator and node infrastructure, one honest milestone at a time.
        </p>
      </section>

      <footer className="relative z-10 px-6 md:px-8 pt-20 pb-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 bg-white rounded-sm overflow-hidden shadow-xl text-dark">
                <Image src="/IMG_3653.PNG" alt="404Labs Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase text-light text-glow leading-none">404<span className="text-primary">Labs</span></span>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Community Validator</span>
              </div>
            </div>
            <p className="text-white/30 font-light text-base leading-relaxed">High-performance community validator & Web3 infrastructure.</p>
            <p className="text-white/20 font-light text-sm leading-relaxed mt-3">Operated by 404Agency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
            <div className="flex flex-col gap-5">
              <span className="text-primary text-[10px] font-black">Validator</span>
              <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">View Validator</a>
              <a href="/docs" className="hover:text-primary transition-colors">Read Docs</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-primary text-[10px] font-black">Social</span>
              <a href="https://x.com/NotFoundLabs" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">404Labs on X</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-primary text-[10px] font-black">Network</span>
              <span className="text-white/30">Monad Testnet</span>
              <span className="text-white/30">Validator + Full Node</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/10 flex flex-col md:flex-row justify-between gap-4">
          <span>© 2026 404Labs. High-performance community validator infrastructure.</span>
          <span className="uppercase tracking-[0.1em]">Built on Monad testnet</span>
        </div>
      </footer>
    </main>
  );
}
