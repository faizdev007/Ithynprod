import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Users, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Partners() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" id="partnership-info">
      {/* Background visual element */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600"
          >
            <Award className="h-3.5 w-3.5" />
            <span>Fulfillment Ecosystem</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            An Integrated Framework Built for Enterprise Delivery
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            Traditional consultancy delivers advice that gets lost in translation. ITHYN combines elite UK-based strategic consulting with the robust execution power of our certified, high-velocity engineering squads.
          </motion.p>
        </div>

        {/* Visual Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="partnership-model-grid">
          
          {/* Column 1: ITHYN Strategic Advisory */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
            id="partner-vertex-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/10">
              <Shield className="h-6 w-6" />
            </div>
            
            <h3 className="mt-6 font-display text-xl font-bold text-slate-900">ITHYN Advisory</h3>
            <p className="mt-2 text-xs font-mono text-slate-500 uppercase tracking-widest">Strategic Consulting & Governance</p>
            
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              ITHYN operates directly in advisory roles, structuring data architectures, aligning regulatory compliance (such as UK HIPAA counterparts, GDPR, MHRA), and defining business objectives.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Target state data platform definition",
                "Corporate compliance and security audit reviews",
                "Advanced Generative AI evaluation & safety policies",
                "Continuous quality assurance and delivery oversight",
                "Executive alignment and steering committee reporting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle Indicator: Collaborative Flow */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-2 py-4 lg:py-0" id="partner-flow-connector">
            <div className="hidden lg:block h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
              <span>Coordinated Flow</span>
            </div>
            <div className="hidden lg:block h-12 w-px bg-gradient-to-b from-transparent to-blue-500" />
            <div className="lg:hidden flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
            </div>
          </div>

          {/* Column 3: ITHYN Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
            id="partner-intg-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-indigo-500/10">
              <Users className="h-6 w-6" />
            </div>
            
            <h3 className="mt-6 font-display text-xl font-bold text-slate-900">ITHYN Engineering</h3>
            <p className="mt-2 text-xs font-mono text-indigo-600 uppercase tracking-widest">Technical Implementation</p>
            
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Our engineering squads supply the elite technical execution to implement robust, certified specifications. Backed by professional data developers and cloud specialists.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Deploying highly-optimized production pipelines",
                "Dynamic resource scaling and agile scrum pods",
                "Continuous code deployments and pipeline migrations",
                "Round-the-clock technical operations and monitoring",
                "Service-Level-Agreements (SLAs) for stable operational run"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Dynamic Integration Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-xl border border-slate-200 bg-slate-100/50 p-6 text-center"
          id="partnership-advantage-callout"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">The Client Advantage</span>
            <p className="text-sm text-slate-700 max-w-2xl text-left sm:text-center">
              You sign a single, unified contract. ITHYN retains direct accountability for the strategic architecture and guarantees standard engineering velocity—protecting you from delays and costly internal talent gaps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
