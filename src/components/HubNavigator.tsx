'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Database, Terminal, CheckCircle2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const hubItems = [
  {
    title: 'Validator Operations',
    desc: 'High-availability validation for Monad, Berachain, and Solana.',
    status: 'ACTIVE',
    stats: '99.9% Uptime',
    icon: <Shield className="text-primary" />,
  },
  {
    title: 'RPC Gateway',
    desc: 'Low-latency entry points for builders and protocols.',
    status: 'ONLINE',
    stats: '< 100ms Ping',
    icon: <Zap className="text-primary" />,
  },
  {
    title: 'Data Indexers',
    desc: 'Organized on-chain data for real-time application needs.',
    status: 'SYNCING',
    stats: '4.2 TB Indexed',
    icon: <Database className="text-primary" />,
  },
  {
    title: 'Node Infrastructure',
    desc: 'Bare-metal and cloud distributed node clusters.',
    status: 'STABLE',
    stats: '12 Clusters',
    icon: <Terminal className="text-primary" />,
  },
];

export default function HubNavigator() {
  return (
    <section id="hub" className="px-6 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
      <div className="mb-10 md:mb-12">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">The Infrastructure Hub</h2>
        <p className="text-3xl md:text-4xl font-black italic tracking-tighter text-light">CENTRAL COMMAND</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {hubItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            className="p-[1px] rounded-sm bg-white/5 hover:bg-primary/20 transition-all duration-300 group"
          >
            <div className="p-6 md:p-8 bg-dark flex flex-col h-full rounded-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-sm bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 uppercase">
                  <CheckCircle2 size={10} className="text-primary" /> {item.status}
                </div>
              </div>
              <h3 className="text-xl font-bold italic mb-3 text-light group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-white/40 mb-8 font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                <span className="text-white/20">Network Metric:</span>
                <span className="text-primary">{item.stats}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
