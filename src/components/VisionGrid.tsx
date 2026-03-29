'use client';

import { motion } from 'framer-motion';
import { Shield, Server, FileText, Radio, Database, Zap } from 'lucide-react';

const roadmapGroups = [
  {
    label: 'Live now',
    items: [
      {
        title: 'Validator Operations',
        desc: 'High-performance validator operations running on Monad testnet.',
        icon: <Shield size={22} className="text-primary" />,
      },
      {
        title: 'Monad Node Infrastructure',
        desc: 'Reliable full node infrastructure supporting validator participation.',
        icon: <Server size={22} className="text-primary" />,
      },
    ],
  },
  {
    label: 'Next',
    items: [
      {
        title: 'Validator Transparency',
        desc: 'Clearer public reporting around validator operations and infrastructure progress.',
        icon: <FileText size={22} className="text-primary" />,
      },
      {
        title: 'Documentation Expansion',
        desc: 'Better docs for validator overview, network focus, and infrastructure direction.',
        icon: <Radio size={22} className="text-primary" />,
      },
    ],
  },
  {
    label: 'Later',
    items: [
      {
        title: 'RPC Services',
        desc: 'Public-facing infrastructure services as the stack matures.',
        icon: <Zap size={22} className="text-primary" />,
      },
      {
        title: 'Data Indexing',
        desc: 'Structured data services to support broader infrastructure tooling.',
        icon: <Database size={22} className="text-primary" />,
      },
    ],
  },
];

export default function VisionGrid() {
  return (
    <section className="px-5 md:px-8 py-14 md:py-18 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-10 md:mb-12">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4">Roadmap</h2>
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-light uppercase leading-none">
          Built with focus. <br />
          <span className="text-white/20">Expanded with discipline.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        {roadmapGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-white/5 bg-white/[0.02] rounded-sm p-5 md:p-6"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-6">{group.label}</div>
            <div className="space-y-6">
              {group.items.map((item) => (
                <div key={item.title} className="group">
                  <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/5 border border-primary/20 rounded-sm group-hover:bg-primary/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-light mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/30 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
