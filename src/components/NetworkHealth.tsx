'use client';

import { motion } from 'framer-motion';
import { Activity, Globe, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NetworkHealth() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
        
        <div className="flex-1">
          <h2 className="text-3xl font-black italic tracking-tighter mb-4 uppercase">Infrastructure Health</h2>
          <p className="text-white/40 font-light mb-8 max-w-lg leading-relaxed">
            Real-time monitoring of our global node distribution. Our systems are load-balanced across 4 continents to ensure zero-latency response times.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Packet Loss</div>
              <div className="text-2xl font-black italic text-light tracking-tighter">0.0001%</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Global Load</div>
              <div className="text-2xl font-black italic text-light tracking-tighter">14.2%</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div 
              animate={{ scale: pulse ? 1.1 : 1, opacity: pulse ? 0.2 : 0.1 }}
              className="absolute inset-0 bg-primary rounded-full blur-3xl"
            />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <HealthPill label="NA" status="Online" />
              <HealthPill label="EU" status="Online" />
              <HealthPill label="ASIA" status="Online" />
              <HealthPill label="SA" status="Online" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HealthPill({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex flex-col items-center bg-dark p-4 border border-white/5 rounded-sm min-w-[100px]">
      <div className="text-[10px] font-bold text-white/20 mb-2">{label}</div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-light uppercase tracking-tighter">{status}</span>
      </div>
    </div>
  );
}
