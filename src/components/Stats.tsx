import React from 'react';
import { METRICS } from '../data';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  return (
    <section className="relative border-y border-slate-200 bg-slate-100/50 py-12" id="stats-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => {
            const isHighlight = index === 0; // Highlight the first card as per design spec
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 shadow-sm ${
                  isHighlight 
                    ? 'bg-blue-50 border border-blue-200 hover:shadow-md' 
                    : 'bg-white border border-slate-200 hover:border-blue-500/20 hover:shadow-md'
                }`}
                id={`stat-card-${index}`}
              >
                {/* Corner accent line */}
                <div className="absolute right-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-t-2xl" />
                
                <div className={`font-display text-4xl lg:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
                  isHighlight ? 'text-slate-900' : 'text-slate-900 group-hover:text-gray-500'
                }`}>
                  {metric.value}
                </div>
                <div className={`mt-2 text-xs font-bold tracking-wider uppercase ${
                  isHighlight ? 'text-blue-600' : 'text-slate-500'
                }`}>
                  {metric.label}
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
