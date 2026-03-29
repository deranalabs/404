'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Database, Cpu, Globe, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Header Docs */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-xl bg-dark/50 sticky top-0">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-black text-dark rounded-sm italic text-sm">404</div>
          <span className="text-lg font-black tracking-tighter uppercase text-glow">NotFound<span className="text-primary italic">Docs</span></span>
        </Link>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
           <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> v1.0.4-alpha</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 p-8 border-r border-white/5 hidden lg:block sticky top-20 h-[calc(100vh-80px)]">
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Introduction</h3>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="text-primary font-bold flex items-center gap-2">Overview <ChevronRight size={12} /></li>
                <li className="hover:text-light transition-colors cursor-pointer">Vision & Philosophy</li>
                <li className="hover:text-light transition-colors cursor-pointer">Architecture</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Core Services</h3>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="hover:text-light transition-colors cursor-pointer">Validator Ops</li>
                <li className="hover:text-light transition-colors cursor-pointer">RPC Gateway</li>
                <li className="hover:text-light transition-colors cursor-pointer">Data Indexers</li>
                <li className="hover:text-light transition-colors cursor-pointer">Node Clusters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Community</h3>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="hover:text-light transition-colors cursor-pointer">Staking Guide</li>
                <li className="hover:text-light transition-colors cursor-pointer">Delegation Policy</li>
                <li className="hover:text-light transition-colors cursor-pointer">Discord Access</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-black italic tracking-tighter mb-8 uppercase text-light">System <span className="text-primary not-italic">Overview</span></h1>
            
            <p className="text-lg text-white/50 font-light leading-relaxed mb-12 italic border-l-2 border-primary/30 pl-6">
              "Building the resilient layer for a sovereign digital future. When the world searches for centralized failures, they find NotFoundLabs—the infrastructure that never blinks."
            </p>

            <div className="space-y-16">
              <DocSection 
                icon={<Shield className="text-primary" />}
                title="Validator Operations"
                content="Our validator nodes are engineered for maximum reliability. Utilizing bare-metal hardware and proprietary sentry node architectures, we ensure consistent block production on Monad, Solana, and Berachain."
              />
              
              <DocSection 
                icon={<Zap className="text-primary" />}
                title="The RPC Gateway"
                content="NotFoundLabs provides distributed RPC endpoints optimized for high-frequency trading and agentic workflows. We prioritize sub-100ms response times and unthrottled access for our institutional partners."
              />

              <DocSection 
                icon={<Database className="text-primary" />}
                title="Autonomous Indexers"
                content="Data is the fuel for AI agents. Our indexing layer transforms raw block data into actionable intelligence, providing low-latency APIs that power the next generation of SocialFi and DeFi applications."
              />

              <div className="p-8 bg-primary/5 border border-primary/20 rounded-sm">
                <h4 className="flex items-center gap-2 text-primary font-black italic mb-4 uppercase tracking-tighter">
                  <Terminal size={18} /> Mission Statement
                </h4>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  404Labs is not just a provider; we are the foundation. We exist to solve the instability of current infrastructure, providing a 'Titan' class layer that empowers sovereign agents to operate without fear of downtime or data corruption.
                </p>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/20">
              <span>Next: Vision & Philosophy</span>
              <div className="flex items-center gap-2 text-primary cursor-pointer hover:underline underline-offset-4">
                Architecture <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function DocSection({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
          {icon}
        </div>
        <h2 className="text-2xl font-black italic tracking-tighter uppercase text-light group-hover:text-primary transition-colors">{title}</h2>
      </div>
      <p className="text-white/40 font-light leading-relaxed">
        {content}
      </p>
    </div>
  );
}
