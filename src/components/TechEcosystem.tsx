import React, { useState } from 'react';
import { TECH_ECOSYSTEM } from '../data';
import { Cloud, Cpu, Database, Network, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechEcosystem() {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Data Lakehouse', 'Modern Data Warehouse', 'Cloud Hyperscaler', 'AI Models', 'Generative AI Orchestration', 'Compute Engine', 'Data Orchestration', 'Relational Database'];

  // Match category groups or simplify categories
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'AI Models':
      case 'Generative AI Orchestration':
        return <Cpu className="h-4 w-4 text-blue-600" />;
      case 'Cloud Hyperscaler':
        return <Cloud className="h-4 w-4 text-indigo-600" />;
      case 'Data Lakehouse':
      case 'Modern Data Warehouse':
      case 'Relational Database':
        return <Database className="h-4 w-4 text-blue-600" />;
      default:
        return <Network className="h-4 w-4 text-slate-500" />;
    }
  };

  const filteredTech = filterCategory === 'All'
    ? TECH_ECOSYSTEM
    : TECH_ECOSYSTEM.filter(tech => tech.category === filterCategory);

  return (
    <section className="relative py-20 bg-slate-50 border-t border-slate-200" id="tech-ecosystem-section">
      <div className="absolute left-1/2 top-0 h-48 w-full -translate-x-1/2 bg-gradient-to-b from-blue-100/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Our Certified Technology Ecosystem</h2>
          <p className="mt-3 text-sm text-slate-650">
            We operate exclusively on open, modern platforms and enterprise technologies. No legacy lock-in, just performance, scalability, and security.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-10 max-w-4xl mx-auto" id="tech-filter-pills">
          {categories.map((cat) => {
            // Check if any tech actually belongs to this category, or if it is 'All'
            const hasTech = cat === 'All' || TECH_ECOSYSTEM.some(t => t.category === cat);
            if (!hasTech) return null;

            const isSelected = filterCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm border border-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                }`}
                id={`tech-pill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" id="tech-logo-grid">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-500/30 hover:bg-blue-50/20 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
              id={`tech-card-${tech.name.toLowerCase()}`}
            >
              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between gap-2 relative z-10">
                {getIconForCategory(tech.category)}
                <span className="text-2xs font-mono text-slate-450 uppercase tracking-widest">{tech.name === "AWS" || tech.name === "Azure" ? "Cloud" : "Core"}</span>
              </div>
              
              <div className="mt-4 relative z-10">
                <div className="font-display text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                  {tech.name}
                </div>
                <div className="text-3xs font-medium text-slate-500 uppercase tracking-wider mt-1 leading-none">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
