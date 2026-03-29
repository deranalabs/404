'use client';

import { motion } from 'framer-motion';
import { Activity, Shield, Server, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NetworkHealth() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

        <div className="flex-1">
          <h2 className="text-3xl font-black italic tracking-tighter mb-4 uppercase">Monad Node Status</h2>
          <p className="text-white/40 font-light mb-8 max-w-xl leading-relaxed">
            404Labs is focused on stable validator and node operations on Monad testnet, with an emphasis on reliability, consistency, and transparent infrastructure progress.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatusItem label="Network" value="Monad Testnet" />
            <StatusItem label="Validator" value="Active" />
            <StatusItem label="Infrastructure" value="Full Node Live" />
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div
              animate={{ scale: pulse ? 1.08 : 1, opacity: pulse ? 0.2 : 0.1 }}
              className="absolute inset-0 bg-primary rounded-full blur-3xl"
            />
            <div className="relative z-10 grid grid-cols-1 gap-4 min-w-[220px]">
              <HealthPill icon={<Shield size={14} />} label="Validator Operations" status="Live" />
              <HealthPill icon={<Server size={14} />} label="Monad Full Node" status="Active" />
              <HealthPill icon={<Activity size={14} />} label="Infrastructure Focus" status="Reliability" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
      <div className="text-2xl font-black italic text-light tracking-tighter">{value}</div>
    </div>
  );
}

function HealthPill({ icon, label, status }: { icon: React.ReactNode; label: string; status: string }) {
  return (
    <div className="flex items-center justify-between bg-dark p-4 border border-white/5 rounded-sm">
      <div className="flex items-center gap-2 text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">
        <span className="text-primary">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={12} className="text-primary" />
        <span className="text-[10px] font-black text-light uppercase tracking-tighter">{status}</span>
      </div>
    </div>
  );
}
