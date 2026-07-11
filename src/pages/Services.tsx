import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data';
import { Database, Cpu, Sparkles, BarChart3, Cloud, Users, CheckCircle2, FileCode, Landmark, Milestone, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function Services({ setCurrentPage, onOpenConsultation }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="h-8 w-8 text-blue-600" />;
      case 'Cpu': return <Cpu className="h-8 w-8 text-indigo-600" />;
      case 'Sparkles': return <Sparkles className="h-8 w-8 text-blue-600" />;
      case 'BarChart3': return <BarChart3 className="h-8 w-8 text-indigo-600" />;
      case 'Cloud': return <Cloud className="h-8 w-8 text-blue-600" />;
      case 'Users': return <Users className="h-8 w-8 text-indigo-600" />;
      default: return <Database className="h-8 w-8 text-blue-600" />;
    }
  };

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.id === selectedCategory);

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="services-page">
      {/* Background visual element */}
      <div className="absolute left-[-20%] top-10 h-[500px] w-[500px] rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute right-[-25%] bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Services Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-55 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Consulting & Fulfillment Capabilities
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Core Data & AI Services
          </h1>
          <p className="text-base text-slate-650 leading-relaxed">
            We structure highly compliant, enterprise-grade data platforms. Explore our specialized offerings designed to optimize storage workloads, automate modeling pipelines, and secure operational intelligence.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto" id="services-category-tabs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/15'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            All Services
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedCategory(s.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
                selectedCategory === s.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/15'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {s.title.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Detailed Services Directory */}
        <div className="space-y-12" id="services-detailed-list">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm space-y-8 hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                id={`service-card-${service.id}`}
              >
                {/* Service Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-slate-900 md:text-2xl">{service.title}</h2>
                      <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mt-1.5">{service.id === 'managed-delivery' ? 'Fulfillment Architecture' : 'Strategic Capability'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xs font-mono text-slate-500 uppercase tracking-widest">Sovereign Compliant</span>
                    <div className="h-2 w-2 rounded-full bg-blue-605" />
                  </div>
                </div>

                {/* Service Detailed Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Descriptive Text & Features */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-2xs font-mono font-bold uppercase tracking-wider text-slate-500">Core Scope & Methodology</h4>
                      <p className="mt-2 text-sm text-slate-650 leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-2xs font-mono font-bold uppercase tracking-wider text-slate-500">Capabilities Encompassed</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-650 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Use Cases */}
                  <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-6" id={`service-deliverables-${service.id}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <FileCode className="h-4.5 w-4.5 text-blue-600" />
                        <h4 className="uppercase font-mono text-2xs tracking-wider text-slate-700">Key Advisory Deliverables</h4>
                      </div>
                      
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <ShieldCheck className="h-4.5 w-4.5 text-indigo-600" />
                        <h4 className="uppercase font-mono text-2xs tracking-wider text-slate-700">Optimal Target Context</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        {service.useCase}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-2xs text-slate-500 font-mono">
                    <Milestone className="h-4 w-4" />
                    <span>Canary Wharf Advisory Desk &bull; Engineering delivery authorized</span>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/15 cursor-pointer"
                  >
                    <span>Inquire for {service.title.split(' (')[0]} scope</span>
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Compliance Assurance Section */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 text-center max-w-4xl mx-auto space-y-4" id="compliance-assurance-banner">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            UK Regulatory Assurance
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">Strict Compliance Frameworks Guaranteed</h3>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All data ingestion, cloud warehouses (Snowflake, Databricks), and generative assistant nodes are configured in secure tenants compliant with GDPR, UK NHS clinical trials safety matrices, and financial auditing guidelines.
          </p>
        </div>

      </div>
    </div>
  );
}
