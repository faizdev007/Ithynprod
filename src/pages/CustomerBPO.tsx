import React from 'react';
import { PageId } from '../types';
import { 
  Headset, PhoneCall, Brain, GraduationCap, ShoppingBag, FileText, BarChart3, HeartPulse, Scale, Users,
  CheckCircle2, ArrowRight, Shield, Sparkles, HelpCircle, ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface CustomerBPOProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function CustomerBPO({ setCurrentPage, onOpenConsultation }: CustomerBPOProps) {
  const customerBpoDetailed = [
    {
      id: 'customer-support',
      title: 'Customer Support & Helpdesk',
      description: '24/7 omnichannel support that resolves issues on first contact across voice, chat, email, and social, powered by AI and delivered by people who genuinely care.',
      icon: <Headset className="h-6 w-6 text-blue-600" />,
      items: [
        'Seamless Support Across Every Possible Channel',
        'Tier 1/2/3 Technical Support',
        'Global Reach, Local Presence',
        'High-Efficiency Tiered Support Architecture',
        'AI Chatbots & Virtual Assistants for Customer Support',
        'High-Stakes Voice Support With Human Nuance',
        'Digital First-Response Email & Chat Support'
      ],
      color: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'hover:border-blue-500/30'
    },
    {
      id: 'intelligent-cx',
      title: 'Intelligent Customer Experience (CX)',
      description: 'AI-driven CX that predicts what your customers need before they ask — automated resolution, real-time sentiment analysis, and personalization at scale.',
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      items: [
        'Human-Grade Conversational AI For Voice Ops',
        'Zero-Human Ticket Resolution At Scale',
        'Real-Time Sentiment & Intent Intelligence',
        'The Living Knowledge Base',
        'The Hybrid Future'
      ],
      color: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'hover:border-indigo-500/30'
    },
    {
      id: 'telemarketing',
      title: 'Telemarketing & Outbound',
      description: 'Strategic outbound programs powered by AI lead scoring, so your sales team spends time on prospects who are ready to buy — not cold lists.',
      icon: <PhoneCall className="h-6 w-6 text-purple-600" />,
      items: [
        'Data-Driven Lead Generation That Scales',
        'High-Conversion Appointment Setting For Closers',
        'Active Outbound Sales & Prospecting',
        'Voice of the Customer Survey Intelligence',
        'AI Voice Agent Optimization'
      ],
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'hover:border-purple-500/30'
    },
    {
      id: 'training-qa',
      title: 'Training & Quality Management',
      description: 'Expert-led agent training and AI-powered QA, real-time call monitoring, sentiment scoring, and weekly calibration sessions that keep service quality consistently high.',
      icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
      items: [
        'Elite Agent Training',
        '100% QA & Compliance Monitoring at Scale',
        'Scientific Process Optimization Via AI Mining',
        'Advanced Performance Management For Peak Productivity',
        'AI-Powered Quality Assurance & Call Analysis'
      ],
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'hover:border-emerald-500/30'
    },
    {
      id: 'ecommerce-support',
      title: 'E-commerce Support',
      description: 'End-to-end marketplace operations, order management, returns, inventory queries, and seller support, handled at the speed and scale e-commerce demands.',
      icon: <ShoppingBag className="h-6 w-6 text-cyan-600" />,
      items: [
        'Precision Product Listing Management at Scale',
        'End-to-End Marketplace Operations Dominance',
        'Frictionless Order Processing & Triage',
        'Master Catalog Architecture & Health',
        'Intelligent Inventory Support & Visibility',
        'Hyper-Personalized AI Recommendations & Search'
      ],
      color: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'hover:border-cyan-500/30'
    },
    {
      id: 'data-entry',
      title: 'Data Entry & Virtual Assistant',
      description: 'Accurate, high-speed data entry, document processing, and virtual assistant support, from inbox and calendar management to research — handled by a dedicated back-office team.',
      icon: <FileText className="h-6 w-6 text-orange-600" />,
      items: [
        'Precision Data Processing & Cleansing Services',
        'High-Output Back-Office Support Operations',
        'Elite Administrative Support for High-Performance Teams',
        'Master Document Management & Archiving',
        'AI-Powered Intelligent Document Processing (IDP)'
      ],
      color: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'hover:border-orange-500/30'
    },
    {
      id: 'finance-accounting',
      title: 'Finance & Accounting',
      description: 'AI-powered financial process outsourcing, accounts payable and receivable, payroll processing, reconciliation, and reporting — with the accuracy and security your finance function demands.',
      icon: <BarChart3 className="h-6 w-6 text-rose-600" />,
      items: [
        'Autonomous Invoice & Fraud Detection',
        'Precision Payroll & Accounting Automation',
        'Real-Time Financial Reporting & Analytics',
        'Global Tax Support & Compliance',
        'Strategic AR & AP Lifecycle Management'
      ],
      color: 'from-rose-500/10 to-red-500/10',
      borderColor: 'hover:border-rose-500/30'
    },
    {
      id: 'healthcare-bpo',
      title: 'Healthcare BPO (Medical Billing, RCM)',
      description: 'HIPAA-compliant medical billing, revenue cycle management, and claims processing. Specialist BPO support built for the precision healthcare demands.',
      icon: <HeartPulse className="h-6 w-6 text-blue-600" />,
      items: [
        'Medical Billing & Coding Services',
        'Prior Authorization Support',
        'Patient Scheduling & Intake',
        'Denial Management & Recovery',
        'EMR & EHR Optimization'
      ],
      color: 'from-blue-500/10 to-sky-500/10',
      borderColor: 'hover:border-blue-500/30'
    },
    {
      id: 'legal-bpo',
      title: 'Legal Process Outsourcing (LPO)',
      description: 'Efficient legal document processing, contract review, and compliance support — outsourced to specialists who understand the accuracy and confidentiality the legal sector requires.',
      icon: <Scale className="h-6 w-6 text-teal-600" />,
      items: [
        'Legal Document Summarization',
        'Contract Lifecycle Management',
        'Legal Research Assistance',
        'Paralegal Support Services',
        'Compliance & Regulatory Support'
      ],
      color: 'from-teal-500/10 to-emerald-500/10',
      borderColor: 'hover:border-teal-500/30'
    },
    {
      id: 'hr-outsourcing',
      title: 'HR Outsourcing',
      description: 'End-to-end HR process outsourcing, talent administration, payroll management, onboarding, and compliance — so your HR team focuses on people, not paperwork.',
      icon: <Users className="h-6 w-6 text-pink-600" />,
      items: [
        'Recruitment & Talent Acquisition',
        'Onboarding & HR Administration',
        'Payroll & Benefits Support',
        'Employee Support Helpdesk',
        'HR Compliance & Filing'
      ],
      color: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'hover:border-pink-500/30'
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="customer-bpo-page">
      {/* Background ambient lighting */}
      <div className="absolute left-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-indigo-500/5 glow-blur pointer-events-none" />
      <div className="absolute right-[-20%] bottom-20 h-[500px] w-[500px] rounded-full bg-purple-500/5 glow-blur pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
            Extended Capabilities
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Customer Service & BPO
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed">
            High-assurance operational outsourcing and human-grade customer experience solutions. We deliver seamless multi-channel assistance, process automation, back-office optimization, and specialized BPO services.
          </p>
        </div>

        {/* Hero Call-Out */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
              Omnichannel Excellence
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight">Customer Service & Operations</h2>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Transform your customer relations into a competitive advantage. We provide scalable business process outsourcing (BPO) and 24/7 multichannel customer support including technical helpdesks, general support lines, multi-tier CRM operations, and automated workflows.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all cursor-pointer"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="customer-bpo-bento">
          {customerBpoDetailed.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ${service.borderColor} hover:shadow-md relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
              
              <div className="space-y-5 flex-grow flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Service Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm max-w-4xl mx-auto space-y-6" id="delivery-assurance">
          <div className="flex items-center gap-3 justify-center text-center">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h3 className="font-display text-lg font-bold text-slate-900">Professional SLAs & ISO Compliant Inception</h3>
          </div>
          <p className="text-xs text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            All Extended Services undergo strict validation controls. Application deployment conforms to ISO-27001 data isolation policies, customer support operations comply with Tier-1 communication uptime criteria, and performance marketing conforms to strict UK ASA regulatory rules.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-3xs font-mono text-slate-500 uppercase tracking-widest pt-2">
            <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-blue-500" /> 100% IP Ownership</span>
            <span className="hidden sm:inline-block">&bull;</span>
            <span className="flex items-center gap-1"><HelpCircle className="h-3 w-3 text-indigo-500" /> Dedicated Scrum Managers</span>
            <span className="hidden sm:inline-block">&bull;</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-purple-500" /> GDPR & UK DPA Active</span>
          </div>
        </div>

      </div>
    </div>
  );
}
