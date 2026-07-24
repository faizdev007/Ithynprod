import React from 'react';
import { PageId } from '../types';
import { 
  AppWindow, CheckCircle2, ArrowRight, Shield, Sparkles, HelpCircle,
  Layers, Brain, Factory, Cloud, Terminal, CheckSquare, BarChart3, Network, Workflow, ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface ApplicationServicesProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function ApplicationServices({ setCurrentPage, onOpenConsultation }: ApplicationServicesProps) {
  let storeDataforContactUs = (e:any) =>{
    localStorage.setItem('inputName','Page');
    localStorage.setItem('inputData',e);
  }
  const appServicesDetailed = [
    {
      id: 'ai-first-apps',
      title: 'AI-First Application Services',
      description: 'Most applications today treat AI as an afterthought, bolted on at the end. We build it in from the ground up: intelligence is part of your core business logic, not a feature layer on top.',
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      items: [
        'Custom AI-Native Application Development',
        'AI-Integrated Web Application Development',
        'AI-Powered Mobile App Development',
        'AI-Assisted Legacy System Modernization',
        'Enterprise API & AI Model Integration',
        'Application Maintenance & Support'
      ],
      color: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'hover:border-blue-500/30'
    },
    {
      id: 'product-dev',
      title: 'Product Development',
      description: 'From concept to global deployment, we design and engineer scalable, AI-enabled SaaS products that users love and businesses can grow on.',
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      items: [
        'Custom AI-SaaS Product Engineering',
        'Rapid AI MVP Development & Prototyping',
        'AI-First UI/UX & Design Engineering',
        'Core Product Engineering Excellence',
        'Intelligent Product Lifecycle Management',
        'Enterprise Product Scaling & Optimization'
      ],
      color: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'hover:border-indigo-500/30'
    },
    {
      id: 'ai-intelligent-eng',
      title: 'AI & Intelligent Engineering',
      description: 'We engineer and operate the intelligence layer inside your existing stack: NLP, computer vision, and autonomous agents running reliably in production with guardrails and continuous evaluation.',
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      items: [
        'Advanced NLP Solutions & LLM Fine-Tuning',
        'Autonomous AI Agents & Multi-Agent Systems',
        'Enterprise MLOps & AI Infrastructure',
        'Custom Generative AI Business Applications',
        'Advanced Computer Vision & Visual Intelligence',
        'AI-Powered Predictive Analytics & Forecasting'
      ],
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'hover:border-purple-500/30'
    },
    {
      id: 'manufacturing-analytics',
      title: 'Manufacturing Analytics',
      description: 'Real-time, AI-driven intelligence that standardizes plant data, predicts failures before they happen, and optimizes operations end to end.',
      icon: <Factory className="h-6 w-6 text-emerald-600" />,
      items: [
        'Resilient Supply Chain Analytics & Intelligence',
        'Intelligent Predictive Maintenance & Uptime',
        'Intelligent Production Planning & Optimization',
        'Dynamic Inventory Analytics & Optimization',
        'Automated Quality Control & Root-Cause Analytics'
      ],
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'hover:border-emerald-500/30'
    },
    {
      id: 'ai-driven-cloud',
      title: 'AI-Driven Cloud',
      description: 'Cloud-native architecture and automated operations, optimized by AI across AWS, GCP, and Azure so your infrastructure scales intelligently and your teams stop firefighting.',
      icon: <Cloud className="h-6 w-6 text-cyan-600" />,
      items: [
        'AI-Driven Strategy & Consulting',
        'Accelerated AI-Assisted Cloud Migration',
        'Scalable Serverless Application Development',
        'Intelligent Cost Optimization (FinOps)'
      ],
      color: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'hover:border-cyan-500/30'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Infrastructure Automation',
      description: 'Full CI/CD pipeline automation and AIOps for infrastructure that runs itself. Fewer incidents, faster releases, and engineering teams freed up to build instead of babysit.',
      icon: <Terminal className="h-6 w-6 text-orange-600" />,
      items: [
        'Intelligent DevOps Automation & Orchestration',
        'High-Velocity CI/CD Pipeline Architecture',
        'Advanced AIOps & Intelligent Monitoring'
      ],
      color: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'hover:border-orange-500/30'
    },
    {
      id: 'quality-eng',
      title: 'Quality Engineering & Assurance',
      description: 'We build AI-powered test automation and predictive defect detection into your delivery pipeline, so quality is engineered in from the first commit, not bolted on at the end.',
      icon: <CheckSquare className="h-6 w-6 text-rose-600" />,
      items: [
        'Comprehensive Manual QA & Exploratory Testing',
        'Industrial-Grade Test Automation Frameworks',
        'Performance, Scalability & Load Testing',
        'Security, Vulnerability & Penetration Testing',
        'Strategic Quality Consulting & QA Audits',
        'Self-Healing AI Test Automation'
      ],
      color: 'from-rose-500/10 to-red-500/10',
      borderColor: 'hover:border-rose-500/30'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      description: 'Comprehensive data engineering and BI solutions turning raw enterprise data into decisions that move the business, powered by tools your teams will actually use.',
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      items: [
        'Scalable Data Engineering Pipelines',
        'Modern Cloud Data Warehousing',
        'Executive BI Dashboards & Reporting',
        'Advanced Data Visualization & Storytelling',
        'Intelligent Predictive Analytics & Modeling',
        'Custom ML Model Development & Training',
        'Generative AI & NLP Business Solutions',
        'Data Governance, Security & Compliance'
      ],
      color: 'from-blue-500/10 to-sky-500/10',
      borderColor: 'hover:border-blue-500/30'
    },
    {
      id: 'digital-infra',
      title: 'Digital Infrastructure & Support',
      description: 'End-to-end IT infrastructure management and cybersecurity monitoring keeping your systems available, secure, and performing at the standard your business demands.',
      icon: <Network className="h-6 w-6 text-teal-600" />,
      items: [
        'Resilient IT Infrastructure Management',
        'Intelligent Monitoring & Security',
        'Modern IT Helpdesk & Employee Support',
        'Advanced System Administration & OS Hardening',
        '24/7 Cybersecurity Monitoring & Threat Hunting',
        'Global Remote Infrastructure Management (RIM)',
        'Cloud Infrastructure Governance & Administration'
      ],
      color: 'from-teal-500/10 to-emerald-500/10',
      borderColor: 'hover:border-teal-500/30'
    },
    {
      id: 'enterprise-platforms',
      title: 'Enterprise Platforms',
      description: 'Salesforce, NetSuite, and ServiceNow implemented, customized, and optimized to fit how your teams actually work, with clean data migration and a single source of truth that keeps compounding long after go-live.',
      icon: <Workflow className="h-6 w-6 text-pink-600" />,
      items: [
        'End-to-End NetSuite Consulting & Optimization',
        'Advanced Salesforce Consulting & Implementation',
        'Enterprise ServiceNow Workflows & ITOM',
        'Seamless CRM Integration & Ecosystems',
        'AI-Powered CRM & ERP Intelligence Layer',
        'Total Enterprise Data Unification'
      ],
      color: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'hover:border-pink-500/30'
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="application-services-page">
      {/* Background ambient lighting */}
      <div className="absolute left-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 glow-blur pointer-events-none" />
      <div className="absolute right-[-20%] bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-500/5 glow-blur pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Extended Capabilities
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Application Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Premium custom software engineering fused with advanced intelligence. We build and maintain high-performance web applications, enterprise products, automated operations, and next-generation data solutions.
          </p>
        </div>

        {/* Hero Call-Out */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
              Intelligence-Infused Engineering
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight">Enterprise Application Services</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              We build premium software from the ground up: intelligence is part of your core business logic, not a feature layer on top. From rapid MVPs to complete enterprise platforms, we deliver robust solutions that scale.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={()=>{
                storeDataforContactUs("Application Services");
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 transition-all cursor-pointer"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="app-services-bento">
          {appServicesDetailed.map((service, idx) => (
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
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Quality Assurance Banner */}
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
