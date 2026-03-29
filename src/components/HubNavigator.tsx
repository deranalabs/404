'use client';

import { motion } from 'framer-motion';
import { Shield, Terminal, CheckCircle2, Clock3 } from 'lucide-react';

const liveItems = [
  {
    title: 'Validator Operations',
    desc: 'High-performance validator operations running on Monad testnet.',
    status: 'LIVE',
    stats: 'Monad Testnet',
    icon: <Shield className="text-primary" />,
  },
  {
    title: 'Monad Node Infrastructure',
    desc: 'Reliable full node infrastructure supporting validator performance and network participation.',
    status: 'LIVE',
    stats: 'Full Node Active',
    icon: <Terminal className="text-primary" />,
  },
];

const upcomingItems = [
  'RPC Gateway',
  'Data Indexers',
];

export default function HubNavigator() {
  return (
    <section id="hub" className="px-5 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-10">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">What’s live now</h2>
        <p className="text-2xl md:text-3xl font-black tracking-tighter text-light uppercase">Current Operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {liveItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            className="p-[1px] rounded-sm bg-white/5 hover:bg-primary/20 transition-all duration-300 group"
          >
            <div className="p-5 md:p-7 bg-dark flex flex-col h-full rounded-sm">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 rounded-sm bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 uppercase">
                  <CheckCircle2 size={10} className="text-primary" /> {item.status}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-light group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-white/40 mb-6 font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                <span className="text-white/20">Status:</span>
                <span className="text-primary">{item.stats}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-5 md:p-6 border border-white/5 bg-white/[0.02] rounded-sm">
        <div className="flex items-center gap-2 mb-4 text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
          <Clock3 size={14} /> Upcoming
        </div>
        <div className="flex flex-wrap gap-3">
          {upcomingItems.map((item) => (
            <span key={item} className="px-3 py-2 border border-white/10 bg-white/[0.02] text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
