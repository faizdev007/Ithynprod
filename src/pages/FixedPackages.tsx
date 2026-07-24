import React from 'react';
import { PageId } from '../types';
import { 
  Headset, PhoneCall, Brain, GraduationCap, ShoppingBag, FileText, BarChart3, HeartPulse, Scale, Users,
  CheckCircle2, ArrowRight, Shield, Sparkles, HelpCircle, ShieldCheck,
  Server,
  TargetIcon,
  BookDashedIcon,
  DatabaseIcon,
  LightbulbIcon,
  BotIcon,
  BotMessageSquareIcon
} from 'lucide-react';
import { motion } from 'motion/react';

interface CustomerBPOProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function CustomerBPO({ setCurrentPage, onOpenConsultation }: CustomerBPOProps) {
    let storeDataforContactUs = (e:any) =>{
        localStorage.setItem('queryFor',e);
    }

    const fixedPackagesForDDSP = [
    {
        "id": "data-health-check",
        "title": "Data Health Check",
        "description": "A comprehensive review of your data landscape. Ideal if you're unsure where to start.",
        "price": "Starting from £1295",
        "category": "Strategy Packages",
        "icon": <Shield className="h-6 w-6 text-blue-600" />,
        "Includes": [
        "Architecture review",
        "Data quality assessment",
        "Reporting review",
        "Prioritised roadmap"
        ],
        "PerfectFor": [],
        "Assess": [],
        "Deliverables": [],
        "Reviews": [],
        "color": "from-purple-500/10 to-pink-500/10",
        "borderColor": "hover:border-purple-500/30"
    },
    {
        "id": "executive-data-strategy-workshop",
        "title": "Executive Data Strategy Workshop",
        "description": "A half-day workshop with business stakeholders.",
        "price": "Starting from £995",
        "category": "Strategy Packages",
        "icon": <TargetIcon className="h-6 w-6 text-indigo-600" />,
        "Includes": [
            "Business objectives",
            "Current challenges",
            "KPI definition",
            "Reporting requirements",
            "Modern data platform recommendations"
        ],
        "Deliverables": [
            "Data strategy document",
            "Architecture proposal",
            "Implementation roadmap",
        ],
        "PerfectFor": [],
        "Assess": [],
        "Reviews": [],
        "color": "from-green-500/10 to-blue-500/10",
        "borderColor": "hover:border-blue-500/30"
    }
  ];

  const fixedPackagesForAP = [
    {
        "id": "data-health-check",
        "title": "Power BI Dashboard Review",
        "description": "Review current BI Dashboard and Data model.",
        "price": "Starting from £495",
        "category": "Analytics Packages",
        "icon": <BarChart3 className="h-6 w-6 text-emerald-600" />,
        "Includes": [
            "Performance review",
            "UX review",
            "DAX optimisation",
            "Best practice recommendations",
            "Security review"
        ],
        "PerfectFor": [],
        "Assess": [],
        "Reviews": [],
        "Deliverables": [
            "Annotated report",
            "Improvement plan ",
        ],
        "color": "from-purple-500/10 to-pink-500/10",
        "borderColor": "hover:border-purple-500/30"
    },
    {
        "id": "executive-data-strategy-workshop",
        "title": "Executive Dashboard Package",
        "description": "Build an executive dashboard from existing data.",
        "price": "Starting from £1,495",
        "category": "Analytics Packages",
        "icon": <BookDashedIcon className="h-6 w-6 text-cyan-600" />,
        "Includes": [
            "Discovery session",
            "KPI design",
            "Dashboard development",
            "User walkthrough",
            "One revision"
        ],
        "Assess": [],
        "Deliverables": [],
        "Reviews": [],
        "PerfectFor": [
          'Sales',  
          'Finance',  
          'Operations',  
          'Customer Service',  
        ],
        "color": "from-green-500/10 to-blue-500/10",
        "borderColor": "hover:border-blue-500/30"
    }
  ];

  const fixedPackagesForDE = [
    {
        "id": "sql-performance-review",
        "title": "SQL Performance Review",
        "description": "Identify slow queries and database bottlenecks.",
        "price": "Starting from £595",
        "category": "Data Engineering",
        "icon": <DatabaseIcon className="h-6 w-6 text-blue-600" />,
        "Includes": [
        "Query review",
        "Index recommendations",
        "Execution plan analysis",
        "Performance report"
        ],
        "PerfectFor": [],
        "Assess": [],
        "Reviews": [],
        "Deliverables": [
        "Optimised SQL examples",
        "Recommendations"
        ],
        "color": "from-blue-500/10 to-indigo-500/10",
        "borderColor": "hover:border-blue-500/30"
    },
    {
        "id": "data-warehouse-health-check",
        "title": "Data Warehouse Health Check",
        "description": "Review an existing warehouse.",
        "price": "Starting from £995",
        "category": "Data Engineering",
        "icon": <Server className="h-6 w-6 text-emerald-600" />,
        "Includes":[],
        "PerfectFor": [],
        "Reviews": [],
        "Assess": [
        "Modelling",
        "ETL processes",
        "Performance",
        "Cost",
        "Security",
        "Scalability"
        ],
        "Deliverables": [
        "Technical assessment",
        "Improvement roadmap"
        ],
        "color": "from-emerald-500/10 to-teal-500/10",
        "borderColor": "hover:border-emerald-500/30"
    },
    {
        "id": "data-quality-assessment",
        "title": "Data Quality Assessment",
        "description": "Review the quality and integrity of your business data.",
        "price": "Starting from £795",
        "category": "Data Engineering",
        "icon": <ShieldCheck className="h-6 w-6 text-purple-600" />,
        "Includes":[],
        "PerfectFor": [],
        "Assess": [],
        "Reviews": [
        "Duplicate records",
        "Missing values",
        "Validation rules",
        "Data lineage",
        "Master data"
        ],
        "Deliverables": [
        "Data Quality Scorecard",
        "Improvement roadmap"
        ],
        "color": "from-purple-500/10 to-pink-500/10",
        "borderColor": "hover:border-purple-500/30"
    }
    ];

    const fixedPackagesForAI = [
    {
        id: "ai-readiness-assessment",
        title: "AI Readiness Assessment",
        description:
        "A comprehensive assessment of your organisation's AI readiness, data maturity, and potential use cases. Ideal if you're exploring AI but unsure where to begin.",
        price: "Starting from £995",
        category: "AI Strategy & Readiness",
        icon: <Brain className="h-6 w-6 text-violet-600" />,
        Includes: [
        "Business process review",
        "Data & AI readiness assessment",
        "AI opportunity identification",
        "Technology stack review",
        "Prioritised AI roadmap"
        ],
        Deliverables: [
        "AI Readiness Report",
        "Use Case Prioritisation Matrix",
        "AI Adoption Roadmap"
        ],
        PerfectFor: [],
        Assess: [],
        Reviews: [],
        color: "from-violet-500/10 to-indigo-500/10",
        borderColor: "hover:border-violet-500/30"
    },
    {
        id: "genai-use-case-discovery-workshop",
        title: "GenAI Use Case Discovery Workshop",
        description:
        "A collaborative workshop to identify high-value AI and Generative AI opportunities across your business.",
        price: "Starting from £1,295",
        category: "AI Strategy & Readiness",
        icon: <LightbulbIcon className="h-6 w-6 text-amber-600" />,
        Includes: [
        "Business goals alignment",
        "Process mapping",
        "AI use case brainstorming",
        "ROI and feasibility assessment",
        "Prioritisation of quick wins"
        ],
        Deliverables: [
        "AI Use Case Catalogue",
        "Prioritised Implementation Plan",
        "Business Case Summary"
        ],
        PerfectFor: [],
        Assess: [],
        Reviews: [],
        color: "from-amber-500/10 to-orange-500/10",
        borderColor: "hover:border-amber-500/30"
    },
    {
        id: "ai-proof-of-concept",
        title: "AI Proof of Concept (PoC)",
        description:
        "Rapid development of a working AI prototype to validate business value before full implementation.",
        price: "Starting from £2,995",
        category: "AI Development",
        icon: <BotIcon className="h-6 w-6 text-blue-600" />,
        Includes: [
        "Solution architecture",
        "AI model selection",
        "Prototype development",
        "Sample data integration",
        "Demonstration & feedback session"
        ],
        Deliverables: [
        "Working AI Prototype",
        "Technical Documentation",
        "Production Readiness Recommendations"
        ],
        PerfectFor: [],
        Assess: [],
        Reviews: [],
        color: "from-blue-500/10 to-cyan-500/10",
        borderColor: "hover:border-blue-500/30"
    },
    {
        id: "ai-copilot-intelligent-automation",
        title: "AI Copilot & Intelligent Automation Package",
        description:
        "Design and implement AI assistants to automate business processes and improve productivity.",
        price: "Contact for Pricing",
        category: "AI Automation",
        icon: <BotMessageSquareIcon className="h-6 w-6 text-emerald-600" />,
        Includes: [
        "AI chatbot/copilot design",
        "Knowledge base integration",
        "Workflow automation",
        "Security & governance review",
        "User training"
        ],
        Deliverables: [
        "AI Copilot Solution",
        "Automation Workflow Documentation",
        "Adoption & Governance Guide"
        ],
        PerfectFor: [],
        Assess: [],
        Reviews: [],
        color: "from-emerald-500/10 to-teal-500/10",
        borderColor: "hover:border-emerald-500/30"
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
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Fixed Packages
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed">
            Explore practical AI solutions through expert-led assessments, strategy workshops, rapid proof of concepts, and intelligent automation packages. Our fixed-price services help you identify opportunities, validate ideas, and implement AI solutions that deliver real business value.
          </p>
        </div>

        <div className="space-y-6">

            {/* Hero Call-Out */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
                    Data Discovery & Strategy Packages
                    </span>
                    <h2 className="font-display text-3xl font-bold tracking-tight">Build a Data Strategy That Drives Better Decisions</h2>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="fixed-packages-bento">
            {fixedPackagesForDDSP.map((fpackage, idx) => (
                <motion.div
                key={fpackage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ${fpackage.borderColor} hover:shadow-md relative overflow-hidden`}
                >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fpackage.color}`} />
                
                <div className="space-y-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                        {fpackage.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                        {fpackage.title}
                    </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {fpackage.description}
                    </p>

                    <div className="md:space-x-4 space-y-2 md:space-y-0 md:flex pt-2 border-t border-slate-100">
                    {fpackage.Includes && fpackage.Includes.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Includes
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Includes.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Reviews && fpackage.Reviews.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Reviews
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Reviews.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Assess && fpackage.Assess.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Assess
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Assess.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Deliverables && fpackage.Deliverables.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Deliverables
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Deliverables.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    </div>
                    <div className="inline-flex justify-between">
                        <span className="font-bold flex justify-center items-center bg-gray-500 px-4 py-2 w-max rounded-full text-white">{fpackage.price}</span>
                        <button
                            onClick={()=>{
                                storeDataforContactUs(fpackage.title);
                                onOpenConsultation();
                            }}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all cursor-pointer"
                            >
                            <span>Book a call Now</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>

        </div>
        
        <div className="space-y-6">

            {/* Hero Call-Out */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
                        Analytics Packages
                    </span>
                    <h2 className="font-display text-3xl font-bold tracking-tight">Transform Your Data into Actionable Insights</h2>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="fixed-packages-bento">
            {fixedPackagesForAP.map((fpackage, idx) => (
                <motion.div
                key={fpackage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ${fpackage.borderColor} hover:shadow-md relative overflow-hidden`}
                >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fpackage.color}`} />
                
                <div className="space-y-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                        {fpackage.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                        {fpackage.title}
                    </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {fpackage.description}
                    </p>

                    <div className="md:space-x-4 space-y-2 md:space-y-0 md:flex pt-2 border-t border-slate-100">
                    {fpackage.Includes && fpackage.Includes.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Includes
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Includes.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Reviews && fpackage.Reviews.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Reviews
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Reviews.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Assess && fpackage.Assess.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Assess
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Assess.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Deliverables && fpackage.Deliverables.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Deliverables
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Deliverables.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    </div>
                    <div className="inline-flex justify-between">
                        <span className="font-bold flex justify-center items-center bg-gray-500 px-4 py-2 w-max rounded-full text-white">{fpackage.price}</span>
                        <button
                            onClick={()=>{
                                storeDataforContactUs(fpackage.title);
                                onOpenConsultation();
                            }}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all cursor-pointer"
                            >
                            <span>Book a call Now</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        <div className="space-y-6">

            {/* Hero Call-Out */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
                        Data Engineering Packages
                    </span>
                    <h2 className="font-display text-3xl font-bold tracking-tight">Build Faster, Smarter, and More Reliable Data Platforms</h2>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="fixed-packages-bento">
            {fixedPackagesForDE.map((fpackage, idx) => (
                <motion.div
                key={fpackage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ${fpackage.borderColor} hover:shadow-md relative overflow-hidden`}
                >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fpackage.color}`} />
                
                <div className="space-y-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                        {fpackage.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                        {fpackage.title}
                    </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {fpackage.description}
                    </p>

                    <div className="md:space-x-4 space-y-2 md:space-y-0 md:flex pt-2 border-t border-slate-100">
                    {fpackage.Includes && fpackage.Includes.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Includes
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Includes.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Reviews && fpackage.Reviews.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Reviews
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Reviews.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Assess && fpackage.Assess.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Assess
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Assess.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Deliverables && fpackage.Deliverables.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Deliverables
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Deliverables.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    </div>
                    <div className="inline-flex justify-between">
                        <span className="font-bold flex justify-center items-center bg-gray-500 px-4 py-2 w-max rounded-full text-white">{fpackage.price}</span>
                        <button
                            onClick={()=>{
                                storeDataforContactUs(fpackage.title);
                                onOpenConsultation();
                            }}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all cursor-pointer"
                            >
                            <span>Book a call Now</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>

        </div>

        <div className="space-y-6">

            {/* Hero Call-Out */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
                    AI Strategy & Solutions Packages
                    </span>

                    <h2 className="font-display text-3xl font-bold tracking-tight">
                    Accelerate AI Adoption with Confidence
                    </h2>

                    <p className="text-violet-100 text-sm leading-relaxed">
                    From assessing your organisation's AI readiness to building production-ready
                    AI solutions, our fixed-price packages help you identify high-value use
                    cases, validate ideas through rapid prototypes, and deploy intelligent
                    copilots that automate business processes and improve productivity.
                    </p>
                </div>
                </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="fixed-packages-bento">
            {fixedPackagesForAI.map((fpackage, idx) => (
                <motion.div
                key={fpackage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ${fpackage.borderColor} hover:shadow-md relative overflow-hidden`}
                >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fpackage.color}`} />
                
                <div className="space-y-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                        {fpackage.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                        {fpackage.title}
                    </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {fpackage.description}
                    </p>

                    <div className="md:space-x-4 space-y-2 md:space-y-0 md:flex pt-2 border-t border-slate-100">
                    {fpackage.Includes && fpackage.Includes.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Includes
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Includes.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Reviews && fpackage.Reviews.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Reviews
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Reviews.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Assess && fpackage.Assess.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Assess
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Assess.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {fpackage.Deliverables && fpackage.Deliverables.length > 0 && (
                    <div className="text-sm space-y-2 font-bold text-slate-900">
                        <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            Deliverables
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {fpackage.Deliverables.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-650">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    </div>
                    <div className="inline-flex justify-between">
                        <span className="font-bold flex justify-center items-center bg-gray-500 px-4 py-2 w-max rounded-full text-white">{fpackage.price}</span>
                        <button
                            onClick={()=>{
                                storeDataforContactUs(fpackage.title);
                                onOpenConsultation();
                            }}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all cursor-pointer"
                            >
                            <span>Book a call Now</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
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
