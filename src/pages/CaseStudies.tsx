import React, { useState } from 'react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data';
import { Database, LineChart, Shield, ShieldCheck, Zap, ArrowRight, ArrowLeft, Terminal, Server, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudiesProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function CaseStudies({ setCurrentPage, onOpenConsultation }: CaseStudiesProps) {
  let storeDataforContactUs = (e:any) =>{
      localStorage.setItem('queryFor',e);
  }

  const [activeStudyId, setActiveStudyId] = useState<string | null>(null);

  const handleStudyToggle = (id: string) => {
    if (activeStudyId === id) {
      setActiveStudyId(null);
    } else {
      setActiveStudyId(id);
      setTimeout(() => {
        const el = document.getElementById(`case-study-detail-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="case-studies-page">
      {/* Background radial accent glow */}
      <div className="absolute right-1/3 top-20 h-[500px] w-[500px] rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute left-1/3 bottom-10 h-[500px] w-[500px] rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Proven B2B Performance
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Enterprise Case Studies
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Discover how FLUMIX’s architectural advisory, operating in sync with our certified engineering squads, has resolved core pipeline bottlenecks and deployed secure cognitive intelligence.
          </p>
        </div>

        {/* Case Studies List Grid */}
        <div className="space-y-10" id="case-studies-directory">
          {CASE_STUDIES.map((study) => {
            const isExpanded = activeStudyId === study.id;
            
            return (
              <div
                key={study.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-500 bg-white shadow-lg'
                    : 'border-slate-200 bg-white hover:border-blue-500/20 hover:bg-slate-50/50 shadow-sm'
                }`}
                id={`case-study-detail-${study.id}`}
              >
                {/* Header Summary Panel */}
                <div
                  onClick={() => handleStudyToggle(study.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                      <span>{study.industry}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-blue-600 font-bold uppercase tracking-wider">{study.client}</span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-slate-900 md:text-2xl hover:text-blue-600 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {study.brief}
                    </p>
                  </div>

                  {/* Quantitative Highlight Column */}
                  <div className="flex gap-4 sm:gap-6 w-full lg:w-auto border-t lg:border-t-0 border-slate-200 pt-4 lg:pt-0 shrink-0">
                    {study.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="text-left lg:text-right min-w-[100px]">
                        <span className="block font-display text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {m.value}
                        </span>
                        <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-500 mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collapsible Rich Narrative */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-slate-200 bg-slate-50"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        
                        {/* Narrative Row (Challenge vs Solution) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          {/* Challenge Card */}
                          <div className="space-y-3.5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-2xs font-mono text-red-700 border border-red-100">
                              <span>The Business Bottleneck</span>
                            </div>
                            <h4 className="font-display text-sm font-bold text-slate-900">The Operational Challenge</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {study.challenge}
                            </p>
                          </div>

                          {/* Solution Card */}
                          <div className="space-y-3.5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-5 border border-blue-100 px-3 py-1 text-2xs font-mono text-blue-600">
                              <span>FLUMIX Advisory + Technical Execution</span>
                            </div>
                            <h4 className="font-display text-sm font-bold text-slate-900">The Technical Execution</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {study.solution}
                            </p>
                          </div>

                        </div>

                        {/* Quantitative Results Section */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Audited Strategic Outcomes</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id={`results-metrics-grid-${study.id}`}>
                            {study.results.map((res, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-3 text-xs text-slate-750 leading-relaxed">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 shrink-0 mt-0.5">
                                  <Check className="h-3.5 w-3.5" />
                                </div>
                                <span>{res}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Footer Bar */}
                        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex ps-4 items-center gap-2">
                            <Terminal className="h-4 w-4 text-slate-500" />
                            <span className="text-3xs font-mono text-slate-550 uppercase tracking-widest">Platform Integration Stack:</span>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {study.technologies.map(tech => (
                              <span
                                key={tech}
                                className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-2xs font-mono text-slate-600 shadow-3xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons inside details */}
                        <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                          <button
                            onClick={() => handleStudyToggle(study.id)}
                            className="rounded-full border border-slate-200 px-4 py-2 text-2xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer shadow-3xs"
                          >
                            Close Analysis
                          </button>
                          <button
                            onClick={()=>{
                              storeDataforContactUs("Case Studies");
                              onOpenConsultation();
                            }}
                            className="rounded-full bg-gray-900 px-4 py-2 text-2xs font-bold text-white hover:bg-gray-500 transition-all cursor-pointer shadow-sm"
                          >
                            Book similar project
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed expansion indicators */}
                {!isExpanded && (
                  <div className="bg-slate-50 hover:bg-slate-100/80 border-t border-slate-200 py-2.5 px-6 text-center">
                    <button
                      onClick={() => handleStudyToggle(study.id)}
                      className="inline-flex items-center gap-1.5 text-2xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer"
                    >
                      <span>Expand complete challenge & solution analysis</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom B2B Scoping Guidance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center max-w-4xl mx-auto space-y-4 shadow-sm" id="consultation-scoping-tip">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Consultation Blueprint
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">We deliver real results, not mock slides.</h3>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            During your initial free strategy session, we compile a target-state data flow diagram specific to your business silos. If engaged, our solution architects and engineering squads mobilize to build production-grade environments.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="rounded-full bg-gray-900 hover:bg-gray-500 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 inline-flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Schedule Free Advisory Mapping</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
