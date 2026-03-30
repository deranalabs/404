'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Infrastructure',
    copy: 'Reliable systems for decentralized networks, designed to operate with clarity, consistency, and long-term resilience.',
  },
  {
    title: 'Validators',
    copy: 'Active validator and node operations with public proof, real deployment experience, and infrastructure that runs beyond marketing claims.',
  },
  {
    title: 'Execution',
    copy: 'Expanded by 404Agency, 404Labs extends beyond infrastructure into AI-powered execution across research, builds, audits, and delivery.',
  },
];

export default function CorePillars() {
  return (
    <section className="px-5 md:px-8 py-12 md:py-16 max-w-7xl mx-auto border-t border-white/5">
      <div className="max-w-2xl mb-10 md:mb-12">
        <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-3">What 404Labs does</div>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-light leading-tight uppercase">
          Infrastructure, validators, and execution — working as one stack.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            viewport={{ once: true, amount: 0.25 }}
            className="group"
          >
            <div className="text-[10px] uppercase tracking-[0.24em] text-primary/80 font-bold mb-4">
              0{i + 1}
            </div>
            <h3 className="text-xl md:text-2xl font-black tracking-tighter text-light mb-3 uppercase group-hover:text-primary transition-colors">
              {pillar.title}
            </h3>
            <p className="text-white/40 leading-relaxed font-light max-w-sm">
              {pillar.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
