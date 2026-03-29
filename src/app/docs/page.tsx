'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Shield, Server, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <nav className="relative z-50 flex justify-between items-center px-5 md:px-10 py-4 border-b border-white/5 backdrop-blur-xl bg-dark/50 sticky top-0">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-black text-dark rounded-sm text-sm">404</div>
          <span className="text-lg font-black tracking-tighter uppercase text-glow">404<span className="text-primary">Labs Docs</span></span>
        </Link>
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          Docs Hub
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase text-light">
            Read the <span className="text-primary">Docs</span>
          </h1>

          <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8 border-l-2 border-primary/30 pl-4 md:pl-6">
            Explore validator information, infrastructure direction, and the foundations behind 404Labs through our documentation hub.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <div className="px-5 py-3 bg-white/[0.03] border border-white/10 text-white/50 text-sm font-black rounded-sm inline-flex items-center justify-center gap-2.5 uppercase tracking-[0.14em] w-fit cursor-not-allowed shadow-[0_10px_24px_-16px_rgba(255,255,255,0.18)]">
              GitBook coming soon <ArrowUpRight size={18} />
            </div>
            <a href="https://testnet.monadvision.com/validator/0x756D4C468F6131d7896AEC8a897865Ae92412b77?tab=Proposed+Blocks" target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/12 bg-white/[0.02] text-light text-sm font-black rounded-sm hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 uppercase tracking-[0.14em] w-fit shadow-[0_10px_24px_-16px_rgba(255,255,255,0.18)]">
              View Validator
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-12">
          <DocCard icon={<Shield className="text-primary" />} title="About 404Labs" content="Who we are, what we operate, and how 404Labs is positioned as a high-performance community validator and infrastructure brand." />
          <DocCard icon={<Server className="text-primary" />} title="Validator Overview" content="A simple overview of our Monad validator operations, infrastructure focus, and current live footprint." />
          <DocCard icon={<BookOpen className="text-primary" />} title="Why 404Labs" content="The reasoning behind our infrastructure direction, reliability mindset, and long-term validator credibility." />
          <DocCard icon={<FileText className="text-primary" />} title="FAQ" content="Short answers covering validator direction, documentation, and what is live now versus what is still planned." />
        </div>

        <div className="p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
          <div>
            <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3">Docs direction</div>
            <p className="text-white/40 font-light max-w-2xl leading-relaxed">
              This docs page serves as the documentation hub for 404Labs. Deeper documentation can expand through GitBook as the validator and infrastructure stack matures.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-white/40 font-bold uppercase tracking-[0.2em] text-[11px]">
            GitBook coming soon <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </main>
  );
}

function DocCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="group p-5 md:p-6 border border-white/5 bg-white/[0.02] rounded-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase text-light group-hover:text-primary transition-colors">{title}</h2>
      </div>
      <p className="text-white/40 font-light leading-relaxed">{content}</p>
    </div>
  );
}
