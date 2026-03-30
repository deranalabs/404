'use client';

import { motion } from 'framer-motion';

const roadmapGroups = [
  {
    label: 'Live now',
    items: [
      {
        title: 'Validator Operations',
        desc: 'Active validator operations with public proof and real infrastructure participation.',
      },
      {
        title: 'Node Infrastructure',
        desc: 'Reliable node systems supporting uptime, consistency, and validator performance.',
      },
    ],
  },
  {
    label: 'Next',
    items: [
      {
        title: 'Clearer Proof',
        desc: 'Stronger public visibility around infrastructure progress, live systems, and operational transparency.',
      },
      {
        title: 'Stronger Docs',
        desc: 'Better documentation across infrastructure direction, validator systems, and execution capabilities.',
      },
    ],
  },
  {
    label: 'Later',
    items: [
      {
        title: 'Broader Services',
        desc: 'Broader infrastructure services and more capable execution systems beyond the current footprint.',
      },
      {
        title: 'Multi-network Expansion',
        desc: 'A wider operating surface across networks, systems, and execution layers as the stack matures.',
      },
    ],
  },
];

export default function VisionGrid() {
  return (
    <section className="px-5 md:px-8 py-14 md:py-18 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4">Direction</div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-light uppercase leading-none mb-5">
            Built with focus. <br />
            <span className="text-white/20">Expanded with discipline.</span>
          </h3>
          <p className="text-white/40 font-light leading-relaxed max-w-lg">
            404Labs is building toward a broader infrastructure stack — growing from validator and node operations into clearer public proof, stronger execution layers, and wider operating capability.
          </p>
        </div>

        <div className="space-y-10">
          {roadmapGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="pb-8 border-b border-white/6 last:border-b-0 last:pb-0"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-5">{group.label}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-base md:text-lg font-black text-light mb-2 uppercase tracking-[0.12em]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/35 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
