'use client';

import { motion } from 'framer-motion';
import { Cpu, Link2, Share2, ShieldAlert, Coins, Factory } from 'lucide-react';

const visionItems = [
  {
    title: 'Cross-Chain Settlement',
    desc: 'Unified liquidity layers for instant asset transfer across 50+ EVM and non-EVM networks.',
    icon: <Link2 size={24} className="text-primary" />,
  },
  {
    title: 'Agentic Commerce',
    desc: 'The backbone for autonomous economic agents to trade, pay, and settle without human intervention.',
    icon: <Cpu size={24} className="text-primary" />,
  },
  {
    title: 'Decentralized AI Compute',
    desc: 'Distributed GPU/CPU resources integrated directly into our validator stacks.',
    icon: <Factory size={24} className="text-primary" />,
  },
  {
    title: 'Identity Assurance',
    desc: 'On-chain verification for sovereign entities, ensuring trust in the machine-to-machine economy.',
    icon: <ShieldAlert size={24} className="text-primary" />,
  },
];

export default function VisionGrid() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4">The Horizon</h2>
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter text-light uppercase leading-none">
          THE FUTURE <br />
          <span className="text-white/20">CENTRAL HUB</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visionItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-primary/5 border border-primary/20 rounded-sm group-hover:bg-primary/20 transition-all duration-500">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold italic text-light mb-3 uppercase tracking-tighter group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-sm text-white/30 font-light leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
