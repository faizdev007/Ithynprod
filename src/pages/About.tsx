import React from 'react';
import { PageId } from '../types';
import { Award, Compass, Shield, Users, CheckCircle2, ChevronRight, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function About({ setCurrentPage, onOpenConsultation }: AboutProps) {

  let storeDataforContactUs = (e:any) =>{
    localStorage.setItem('inputName','Page');
    localStorage.setItem('inputData','About Us');
  }

  const leaders = [
    {
      name: "Marcus Sterling",
      role: "Managing Director",
      bio: "Former lead data architect for UK banking consortiums. Over 18 years driving enterprise-grade warehousing and strategic compliance platforms.",
      experience: "Ex-Accenture, Ex-Barclays Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Sarah Jenkins",
      role: "Director of Cognitive Systems",
      bio: "Ph.D. in Computer Science from Imperial College London. Leading authority on private domain RAG evaluation and AI safety compliance.",
      experience: "Imperial College Alumna, ex-DeepMind Researcher",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Edward Harrison",
      role: "VP of Strategic Partnerships",
      bio: "Manages alliance programs and commercial scoping pipelines. Ed oversees the strategic synergy between Flumix Advisory and our Engineering Delivery squads.",
      experience: "Ex-Gartner Enterprise Advisor",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="about-page">
      {/* Background radial accent glow */}
      <div className="absolute right-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute left-1/4 bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            About Flumix Data & AI
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Strategic Clarity. Production Velocity.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered in London, Flumix was founded to eliminate the chasm between strategic AI advisory and actual production engineering. We don&apos;t just write reports—we architect and coordinate production systems.
          </p>
        </div>

        {/* Corporate Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-values-grid">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hover:border-blue-500/20 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Sovereignty & Governance First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We design under the assumption of absolute privacy constraints. Our clinical trial and financial banking designs are built to prevent public leakage, ensuring your IP remains strictly yours.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hover:border-blue-500/20 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Hybrid Engineering Scalability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Through our specialized deployment pipeline, we scale team resources in days, not months. This ensures you acquire enterprise velocity without long-term overhead.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hover:border-blue-500/20 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Accountable Advisory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flumix Solution Architects retain single-point accountability. Even when massive engineering teams are deployed, your primary Flumix advisor remains your steward from kick-off to delivery.
            </p>
          </div>
        </div>

        {/* Timeline / Corporate Journey */}
        <div className="space-y-10 hidden" id="about-timeline">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900">The Flumix Evolution</h2>
            <p className="text-xs text-slate-500 mt-1">Our path to establishing a premier strategic-delivery ecosystem in the UK.</p>
          </div>

          <div className="relative border-l border-slate-200 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {/* 2026 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] h-6 w-6 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-mono text-xs font-bold text-blue-600">Q1 2026</span>
              <h4 className="font-display text-sm font-bold text-slate-900 mt-1">Ecosystem Refinement & Delivery Scaling</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Formally optimized our deployment and engineering delivery systems, creating a unified solution framework. This enabled us to deploy structured 5-person engineering squads in under 72 hours for UK mid-market clients.
              </p>
            </div>

            {/* 2025 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] h-6 w-6 rounded-full border-2 border-indigo-500 bg-white flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
              </div>
              <span className="font-mono text-xs font-bold text-slate-500">2025</span>
              <h4 className="font-display text-sm font-bold text-slate-900 mt-1">Sovereign RAG Implementations</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pioneered local vector-store integrations on Azure and GCP for clinical medical libraries. Successfully deployed compliance search portals indexing over 150k documents for pharmaceutical groups.
              </p>
            </div>

            {/* 2024 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] h-6 w-6 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-slate-450" />
              </div>
              <span className="font-mono text-xs font-bold text-slate-500">2024</span>
              <h4 className="font-display text-sm font-bold text-slate-900 mt-1">Foundation of Flumix Advisory</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Flumix was established in Central London by a team of elite banking data consultants. Our starting mission was clear: eliminate fluff and deliver resilient data architectures that scale.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Partnership Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm" id="about-partnership-breakdown">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">The Delivery Engine</span>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Our Strategic and Delivery Alignment</h2>
              <p className="text-xs text-slate-605 leading-relaxed">
                Clients hire Flumix for strategic security, architecture design, and governance audits. To execute these blueprints, our integrated engineering delivery teams translate specs directly into production environments.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-650">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Predictable Budgeting:</strong> No hiring delays. You bypass recruitment costs; we supply a dedicated, fully-assembled squad immediately.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-650">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Certified Engineers:</strong> Every engineer assigned to our accounts carries Databricks, Snowflake, AWS, or Azure expert credentials.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-650">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Operational Handovers:</strong> Once the system is live, we train your internal staff or provide SLA-managed maintenance support.</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={()=>{
                    storeDataforContactUs('AboutUs');
                    onOpenConsultation();
                  }}
                  className="px-5 py-2.5 bg-gray-900 hover:bg-gray-500 text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-1 cursor-pointer"
                >
                  Request Delivery Deck <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="px-5 py-2.5 border border-slate-200 bg-white text-slate-600 rounded-full text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                >
                  View Scopes
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 border border-slate-200 bg-slate-50 rounded-2xl p-6 relative font-mono text-xs text-slate-600 shadow-inner" id="about-visual-flow">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-2xs uppercase text-slate-550 tracking-wider">Flumix Framework Integration</span>
                <span className="text-3xs text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase font-bold border border-blue-100">Connected</span>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
                    <span>1. Strategic Advisory (Flumix)</span>
                    <span className="text-blue-600 text-3xs uppercase font-bold tracking-wider">Architectural Design</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Target metrics mapped, technology stacks audited, safety policies drafted.</p>
                </div>

                <div className="flex justify-center my-1.5">
                  <div className="h-5 w-px border-l-2 border-dashed border-slate-300" />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
                    <span>2. Engineered Implementation (Delivery Unit)</span>
                    <span className="text-indigo-600 text-3xs uppercase font-bold tracking-wider">Agile Scrum Pods</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Production code compiled, pipeline migration verified, CI/CD automated.</p>
                </div>

                <div className="flex justify-center my-1.5">
                  <div className="h-5 w-px border-l-2 border-dashed border-slate-300" />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
                    <span>3. Quality Assurance & SLA (Full-Cycle)</span>
                    <span className="text-blue-600 text-3xs uppercase font-bold tracking-wider">Continuous Run</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Continuous regression testing, drift monitoring, SLAs locked at 99.9% uptime.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Executive Leadership */}
        <div className="space-y-10 hidden" id="about-leadership">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
              Our Leadership
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">The Strategic Advisory Board</h2>
            <p className="text-xs text-slate-500 leading-relaxed mt-1">
              Flumix consultants hold decades of engineering and strategic experience across banking, research, and cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="leaders-grid">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                id={`leader-card-${idx}`}
              >
                {/* Simulated Leader Image */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent opacity-80" />
                  
                  {/* Small tag badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-mono text-slate-700 border border-slate-200">
                    {leader.experience.split(',')[0]}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div>
                    <span className="block text-xs font-mono text-blue-600 uppercase tracking-wide leading-none">{leader.role}</span>
                    <h3 className="font-display text-base font-bold text-slate-900 mt-2">{leader.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="pt-2 border-t border-slate-200 text-3xs font-mono text-slate-500 uppercase tracking-wider">
                    {leader.experience}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
