'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Database, Terminal, CheckCircle2 } from 'lucide-react';

const hubItems = [
  {
    title: 'Validator Operations',
    desc: 'High-availability validation for Monad, Berachain, and Solana.',
    status: 'ACTIVE',
    stats: '99.9% Uptime',
    icon: <Shield className="text-purple-500" />,
  },
  {
    title: 'RPC Gateway',
    desc: 'Low-latency entry points for builders and protocols.',
    status: 'ONLINE',
    stats: '< 100ms Ping',
    icon: <Zap className="text-yellow-500" />,
  },
  {
    title: 'Data Indexers',
    desc: 'Organized on-chain data for real-time application needs.',
    status: 'SYNCING',
    stats: '4.2 TB Indexed',
    icon: <Database className="text-blue-500" />,
  },
  {
    title: 'Node Infrastructure',
    desc: 'Bare-metal and cloud distributed node clusters.',
    status: 'STABLE',
    stats: '12 Clusters',
    icon: <Terminal className="text-green-500" />,
  },
];

export default function HubNavigator() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-sm uppercase tracking-widest text-white/30 font-bold mb-2">The Infrastructure Hub</h2>
        <p className="text-3xl font-black italic tracking-tighter">CENTRAL COMMAND</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hubItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            className="p-1 rounded-sm bg-gradient-to-br from-white/10 to-transparent border border-white/5 group"
          >
            <div className="p-6 bg-black flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-sm bg-white/5 border border-white/5 group-hover:border-purple-500/50 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase">
                  <CheckCircle2 size={10} className="text-green-500" /> {item.status}
                </div>
              </div>
              <h3 className="text-xl font-bold italic mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-white/50 mb-6 font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
                <span className="text-white/30">Network Metric:</span>
                <span className="text-white/80">{item.stats}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
