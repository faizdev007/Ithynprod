import React, { useState } from 'react';
import { PageId, ExpertProfile } from '../types';
import { EXPERTS } from '../data';
import { 
  Users, Award, Cpu, Database, Star, CheckCircle2, ArrowRight, Zap, RefreshCw, 
  Layers, Sparkles, Sliders, CheckSquare, Brain, BarChart3, Clock, ShieldCheck, Mail, Building
} from 'lucide-react';
import { motion } from 'motion/react';

interface HireExpertsProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function HireExperts({ setCurrentPage, onOpenConsultation }: HireExpertsProps) {
  // Tech stack selector state
  const [selectedTech, setSelectedTech] = useState<string>('All');
  
  // Squad Calculator State
  const [dataEngineers, setDataEngineers] = useState<number>(2);
  const [aiArchitects, setAiArchitects] = useState<number>(1);
  const [biAnalysts, setBiAnalysts] = useState<number>(1);
  const [qaEngineers, setQaEngineers] = useState<number>(1);
  const [squadDuration, setSquadDuration] = useState<number>(3); // months

  // Inquiry submit state
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [specialRequirements, setSpecialRequirements] = useState<string>('');

  const ALL_TECHS = ['All', 'Snowflake', 'Databricks', 'dbt', 'AWS', 'Google Cloud', 'LangChain', 'Apache Kafka', 'Apache Spark', 'Python'];

  const filteredExperts = selectedTech === 'All'
    ? EXPERTS
    : EXPERTS.filter(exp => exp.techStack.includes(selectedTech));

  // Compute Squad Metrics
  const totalSquadSize = dataEngineers + aiArchitects + biAnalysts + qaEngineers;
  const estimatedWeeklyCost = (
    dataEngineers * 140 * 40 +
    aiArchitects * 165 * 40 +
    biAnalysts * 115 * 40 +
    qaEngineers * 95 * 40
  );
  
  const estimatedTotalProjectInvestment = estimatedWeeklyCost * 4.33 * squadDuration;

  // Compute capabilities based on composition
  const getSquadCapabilities = () => {
    const caps = [];
    if (dataEngineers > 0) {
      caps.push('Build robust ETL/ELT pipelines with Apache Spark, Kafka and dbt.');
    }
    if (aiArchitects > 0) {
      caps.push('Deploy secure, private LLMs, sovereign RAG search, and agent networks.');
    }
    if (biAnalysts > 0) {
      caps.push('Configure central LookML semantic layers, PowerBI and Looker suites.');
    }
    if (qaEngineers > 0) {
      caps.push('Write comprehensive automated CI/CD validation gates & regression test suites.');
    }
    if (dataEngineers >= 2 && aiArchitects >= 1) {
      caps.push('Enterprise-grade Lakehouse implementation with Databricks/Snowflake matching modern ML deployment matrices.');
    }
    if (totalSquadSize >= 5) {
      caps.push('Fully self-managed Agile squad led by a Senior Delivery Architect with daily standups and bi-weekly release cycles.');
    }
    return caps;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100" id="hire-experts-page">
      {/* Background ambient gradient loops */}
      <div className="absolute left-[-15%] top-10 h-[600px] w-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/2 glow-blur pointer-events-none" />
      <div className="absolute right-[-15%] bottom-10 h-[600px] w-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 glow-blur pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Title Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
            Elite Engineering Staffing
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Hire Certified Data & AI Experts
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed">
            Acquire immediate access to pre-vetted, highly certified consultants, architects, and engineers. Our professionals hold active qualifications in Snowflake, Databricks, AWS, and GCP to scale your analytical output.
          </p>
        </div>

        {/* Dynamic Tech Filter Bar */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-slate-400 tracking-wider">
            <Sliders className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Filter Available Experts by Core Technology Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TECHS.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
                  selectedTech === tech
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Available Certified Experts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto" id="experts-showcase-grid">
          {filteredExperts.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex flex-col gap-6 p-6 rounded-2xl border border-slate-250/70 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all duration-300 relative"
            >
              {/* Expert Credentials & Capabilities */}
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="font-display text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                    {exp.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {exp.title} &bull; <span className="text-slate-500 font-normal">{exp.experience} Exp</span> &bull; <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
                  </p>
                </div>

                {/* Certifications list */}
                <div className="space-y-1.5">
                  <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-emerald-500" />
                    <span>Verified Certifications</span>
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.certifications.map((cert, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-3xs font-medium leading-relaxed"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Expertise Areas */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Core Competencies
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-650 dark:text-slate-300">
                    {exp.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-3xs font-mono font-bold uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          {filteredExperts.length === 0 && (
            <div className="col-span-full py-12 text-center border border-dashed border-slate-300 dark:border-slate-850 rounded-2xl bg-white dark:bg-slate-900">
              <RefreshCw className="h-8 w-8 text-slate-400 mx-auto animate-spin mb-3" />
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">No experts currently available matching {selectedTech}.</p>
              <button 
                onClick={() => setSelectedTech('All')}
                className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Section divider with subtle graphics */}
        <div className="max-w-5xl hidden mx-auto flex items-center justify-center gap-4">
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
          <div className="shrink-0 flex items-center gap-1 text-slate-400 font-mono text-3xs uppercase tracking-widest">
            <Sliders className="h-3.5 w-3.5 text-blue-600" />
            <span>Interactive Squad Planner</span>
          </div>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>

        {/* Interactive B2B Squad Calculator */}
        <div className="grid hidden grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden" id="interactive-squad-calculator">
          
          {/* Left panel: sliders and configuration */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-slate-50/50 dark:bg-slate-900/50 border-r border-slate-100 dark:border-slate-800">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 border border-indigo-150 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 text-3xs font-mono font-bold uppercase tracking-widest">
                Resource Modeling
              </span>
              <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">
                Bespoke Data Engineering Squad Builder
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Configure your ideal delivery team composition. Estimate weekly output potential, core architecture capabilities, and schedule an immediate onboarding call.
              </p>
            </div>

            <div className="space-y-6">
              {/* Slider 1: Senior Data Engineers */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    Senior Data Engineers
                  </span>
                  <span className="font-mono bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-bold">{dataEngineers} Headcount</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="6" 
                  value={dataEngineers} 
                  onChange={(e) => setDataEngineers(parseInt(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-4xs text-slate-400 dark:text-slate-500">Expert pipelines: Databricks, Snowflake, Apache Kafka, Apache Spark, and dbt layouts.</p>
              </div>

              {/* Slider 2: GenAI Architects */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Brain className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    Generative AI Architects
                  </span>
                  <span className="font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded font-bold">{aiArchitects} Headcount</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  value={aiArchitects} 
                  onChange={(e) => setAiArchitects(parseInt(e.target.value))}
                  className="w-full accent-indigo-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-4xs text-slate-400 dark:text-slate-500">AI native features: Sovereign RAG infrastructure, LLM tuning, LangChain, and Guardrail engines.</p>
              </div>

              {/* Slider 3: Analytics Developers */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <BarChart3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Analytics Engineers & BI Developers
                  </span>
                  <span className="font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">{biAnalysts} Headcount</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  value={biAnalysts} 
                  onChange={(e) => setBiAnalysts(parseInt(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-4xs text-slate-400 dark:text-slate-500">Business intelligence: Looker dashboards, PowerBI workspaces, dbt Semantic layer definitions.</p>
              </div>

              {/* Slider 4: QA Engineers */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <CheckSquare className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    QA Automation Engineers
                  </span>
                  <span className="font-mono bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded font-bold">{qaEngineers} Headcount</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  value={qaEngineers} 
                  onChange={(e) => setQaEngineers(parseInt(e.target.value))}
                  className="w-full accent-rose-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-4xs text-slate-400 dark:text-slate-500">Quality verification: CI/CD test automations, Playwright frameworks, data validation integrity checkpoints.</p>
              </div>

              {/* Duration Slider */}
              <div className="space-y-2 pt-4 border-t border-slate-200/55 dark:border-slate-800/55">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Project Duration Commitment
                  </span>
                  <span className="font-mono bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded font-bold">{squadDuration} Months</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={squadDuration} 
                  onChange={(e) => setSquadDuration(parseInt(e.target.value))}
                  className="w-full accent-slate-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-4xs text-slate-400 dark:text-slate-500">Minimum B2B project tenure is 1 month. Longer tenures qualify for certified SLA architectures.</p>
              </div>
            </div>
          </div>

          {/* Right panel: calculated output & booking inquiry */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-slate-100/40 dark:bg-slate-900/40">
            
            {/* Computed squad statistics */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Squad Architecture Metrics</h3>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-3xs">
                    <div className="text-3xs text-slate-400 font-medium">Squad Strength</div>
                    <div className="text-xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5">{totalSquadSize} FTEs</div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-3xs">
                    <div className="text-3xs text-slate-400 font-medium">Estimated Weekly Core Hours</div>
                    <div className="text-xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5">{totalSquadSize * 40} Hrs</div>
                  </div>
                </div>
              </div>

              {/* Dynamic capabilities matching the selected squad */}
              <div className="space-y-2.5">
                <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">Engineered Deliverables Output</h4>
                {totalSquadSize === 0 ? (
                  <p className="text-xs text-slate-500 italic">Please increase squad headcount to view dynamically projected capabilities.</p>
                ) : (
                  <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-350">
                    {getSquadCapabilities().map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <Zap className="h-3 w-3 text-yellow-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Function inquiry booking form */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              {inquirySent ? (
                <div className="bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl p-4 text-xs space-y-2 text-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mx-auto" />
                  <p className="font-bold font-display">Squad Inquiry Transmitted Successfully</p>
                  <p className="text-3xs text-slate-550 leading-relaxed">
                    Our London engineering advisory desk has logged your squad configuration ({totalSquadSize} FTEs for a {squadDuration} Month tenure). A Solutions Architect will email you at <strong>{clientEmail}</strong> within 2 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setInquirySent(false);
                      setClientName('');
                      setClientEmail('');
                      setCompanyName('');
                    }}
                    className="mt-2 text-3xs font-mono font-bold uppercase tracking-wider text-blue-600 hover:underline"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="text-3xs font-mono font-bold uppercase tracking-wider text-slate-400">Request Custom Squad Reservation</div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                    <input 
                      type="text" 
                      required
                      placeholder="Company"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <input 
                    type="email" 
                    required
                    placeholder="corporate@email.co.uk"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />

                  <textarea
                    placeholder="Any specific architectural, data sovereignty, or compliance requirements?"
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                    rows={2}
                    className="w-full rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    disabled={totalSquadSize === 0}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-650 hover:bg-blue-600 disabled:bg-slate-300 disabled:dark:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed py-2 rounded-xl text-xs font-bold text-white shadow transition-all cursor-pointer"
                  >
                    <span>Submit Squad Configuration</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Global Compliance Assurance Section */}
        <div className="rounded-2xl hidden  border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8 max-w-4xl mx-auto space-y-6" id="compliance-assurance-banner">
          <div className="flex items-center gap-2 justify-center text-center">
            <ShieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Professional SLAs & ISO Compliant Inception</h3>
          </div>
          <p className="text-xs text-slate-650 dark:text-slate-350 text-center max-w-2xl mx-auto leading-relaxed">
            All Extended Services undergo strict validation controls. Application deployment conforms to ISO-27001 data isolation policies, customer support operations comply with Tier-1 communication uptime criteria, and performance marketing conforms to strict UK ASA regulatory rules.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-3xs font-mono text-slate-550 dark:text-slate-400 uppercase tracking-widest pt-2">
            <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-blue-500" /> 100% IP Ownership</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Users className="h-3 w-3 text-indigo-500" /> Dedicated Scrum Managers</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-purple-500" /> GDPR & UK DPA Active</span>
          </div>
        </div>

      </div>
    </div>
  );
}
