import React from 'react';
import { PageId } from '../types';
import { 
  Megaphone, Search, AppWindow, Brain, ShoppingBag, Users, Target, BarChart3, Briefcase, FileText, Mail,
  CheckCircle2, ArrowRight, Shield, Sparkles, HelpCircle, ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface DigitalMarketingProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function DigitalMarketing({ setCurrentPage, onOpenConsultation }: DigitalMarketingProps) {
  let storeDataforContactUs = (e:any) =>{
    localStorage.setItem('inputName','Page');
    localStorage.setItem('inputData',e);
  }

  const digitalMarketingDetailed = [
    {
      id: 'digital-ads',
      title: 'Digital Advertising & Paid Media',
      description: 'AI-optimized paid campaigns across Google, Bing, Meta, and LinkedIn with real-time bid management that puts every dollar where it converts.',
      icon: <Megaphone className="h-6 w-6 text-blue-600" />,
      items: [
        'Google Ads Management',
        'Retargeting Campaigns',
        'AI Ad Optimization & Bidding',
        'AI Programmatic Advertising',
        'Meta Ads Management',
        'Predictive Campaign Performance',
        'LinkedIn Ads (B2B Growth Engine)'
      ],
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'hover:border-blue-500/30'
    },
    {
      id: 'ai-seo',
      title: 'AI-Driven SEO & Findability',
      description: 'SEO built for how people actually search now, on Google, on ChatGPT, on every AI answer engine in between, so your brand shows up no matter where the question gets asked.',
      icon: <Search className="h-6 w-6 text-purple-600" />,
      items: [
        'AI-First Search Optimization (GEO)',
        'AI-Powered Technical SEO Audits',
        'Semantic On-Page Optimization',
        'AI-First Content Strategy & SEO',
        'AI-Driven Link Intelligence',
        'AI-Powered Local SEO & Authority',
        'AI-First E-commerce SEO & Revenue Scaling',
        'Voice & Conversational Search Optimization'
      ],
      color: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'hover:border-purple-500/30'
    },
    {
      id: 'web-design',
      title: 'Web Design & Digital Personalization',
      description: 'Conversion-focused UI/UX design and AI-driven personalization that turns more of your site visitors into customers, on every device.',
      icon: <AppWindow className="h-6 w-6 text-emerald-600" />,
      items: [
        'User Experience & Interface Design (UI/UX)',
        'High-Performance Web Development',
        'High-Conversion Landing Pages',
        'Mobile App Interface Design',
        'Conversion-Focused Design',
        'AI UX & Personalization',
        'Logo & Visual Identity Design',
        'Website Copy & On-Page Messaging'
      ],
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'hover:border-emerald-500/30'
    },
    {
      id: 'ai-marketing-growth',
      title: 'AI Marketing & Growth',
      description: 'AI content generation, predictive analytics, and automated marketing workflows — scaling your growth engine without scaling your team.',
      icon: <Brain className="h-6 w-6 text-orange-600" />,
      items: [
        'AI Content Generation',
        'Predictive Marketing Analytics',
        'AI Personalization',
        'AI Marketing Automation',
        'AI Customer Segmentation',
        'Generative AI Campaigns',
        'AI-Driven Conversion Optimization'
      ],
      color: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'hover:border-orange-500/30'
    },
    {
      id: 'ecommerce-content',
      title: 'E-commerce Content Optimization',
      description: 'AI-powered product listings, enhanced brand content, and marketplace copy engineered to rank on Amazon, Flipkart, and beyond.',
      icon: <ShoppingBag className="h-6 w-6 text-rose-600" />,
      items: [
        'Product Content Creation',
        'Listing Optimization',
        'A+ Content Design & Strategy',
        'Product SEO & Rank Engineering',
        'AI Listing Content Generation',
        'eCommerce Catalog Audit',
        'Listing Creative Design',
        'Walmart Rich Media (Rich Content)'
      ],
      color: 'from-rose-500/10 to-pink-500/10',
      borderColor: 'hover:border-rose-500/30'
    },
    {
      id: 'social-media',
      title: 'Social Media & Community',
      description: 'Social content strategy, community management, and platform-native creative building audiences that engage, not just follow.',
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      items: [
        'Social Media Strategic Engineering',
        'Intelligent Content Calendar Engineering',
        'Influencer & Creator Ecosystem Engineering',
        'Community Growth & Engagement Engineering',
        'Online Reputation & Trust Engineering',
        'AI-Driven Caption & Localization'
      ],
      color: 'from-indigo-500/10 to-blue-500/10',
      borderColor: 'hover:border-indigo-500/30'
    },
    {
      id: 'cro',
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Data-driven funnel analysis, A/B testing, and AI behavior prediction — turning the traffic you already have into the revenue you should already be making.',
      icon: <Target className="h-6 w-6 text-pink-600" />,
      items: [
        'Precision A/B & Multivariate Testing',
        'Strategic Funnel Engineering',
        'AI-Driven Behavioral Surveillance',
        'Data-Driven UX Optimization',
        'Full-Funnel Event Attribution',
        'AI-Driven Hyper Personalization',
        'Landing Page Optimization',
        'App Store Optimization'
      ],
      color: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'hover:border-pink-500/30'
    },
    {
      id: 'marketing-analytics',
      title: 'Marketing Analytics & Data',
      description: 'Unified dashboards, full-funnel attribution, and predictive AI insights so you always know what\'s working, what isn\'t, and where to put the next dollar of budget.',
      icon: <BarChart3 className="h-6 w-6 text-teal-600" />,
      items: [
        'GA4 Setup & Configuration',
        'Custom Marketing Dashboards',
        'Multi-Touch Attribution',
        'Heatmapping & Behavior Tracking',
        'Data Visualization',
        'ROI & Performance Reporting',
        'GTM Strategy & Governance',
        'AI Marketing Attribution'
      ],
      color: 'from-teal-500/10 to-emerald-500/10',
      borderColor: 'hover:border-teal-500/30'
    },
    {
      id: 'strategic-consulting',
      title: 'Strategic Marketing Consulting',
      description: 'AI-driven brand strategy and market positioning built on data, not instinct, for businesses that want to grow with a plan, not just a budget.',
      icon: <Briefcase className="h-6 w-6 text-cyan-600" />,
      items: [
        'AI-Driven Brand Strategy',
        'Intelligent Messaging Framework',
        'Predictive Campaign Planning',
        'AI-Powered Creative Strategy',
        'Cultural Sentiment Sync',
        'Market Research',
        'Competitor Analysis',
        'Digital Transformation Roadmap'
      ],
      color: 'from-cyan-500/10 to-sky-500/10',
      borderColor: 'hover:border-cyan-500/30'
    },
    {
      id: 'content-personalization',
      title: 'Content Personalization',
      description: 'High-performing content and impactful editorial strategy delivering the right message to the right person at the right moment, at scale.',
      icon: <FileText className="h-6 w-6 text-amber-600" />,
      items: [
        'AI-Enhanced Content Strategy',
        'Algorithmic Blog & Article Writing',
        'Technical Whitepapers & E-books',
        'AI-Driven Video Scriptwriting',
        'AI-Enhanced Infographics & Visuals',
        'Algorithmic Case Study Development'
      ],
      color: 'from-yellow-500/10 to-amber-500/10',
      borderColor: 'hover:border-yellow-500/30'
    },
    {
      id: 'email-automation',
      title: 'Email & Automation',
      description: 'Automated welcome, nurture, and behavioral-trigger email flows that move contacts forward, personalized and deliverable, on the highest-ROI channel in marketing.',
      icon: <Mail className="h-6 w-6 text-red-600" />,
      items: [
        'Predictive Email Marketing',
        'Email Marketing Strategy',
        'Newsletter Management',
        'Marketing Automation Flows',
        'Drip Campaigns',
        'CRM Integration',
        'List Segmentation',
        'Intelligent Marketing Automation'
      ],
      color: 'from-red-500/10 to-rose-500/10',
      borderColor: 'hover:border-red-500/30'
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="digital-marketing-page">
      {/* Background ambient lighting */}
      <div className="absolute left-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-purple-500/5 glow-blur pointer-events-none" />
      <div className="absolute right-[-20%] bottom-20 h-[500px] w-[500px] rounded-full bg-pink-500/5 glow-blur pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-widest">
            Extended Capabilities
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Digital Marketing Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Data-driven performance campaigns, search optimization, conversions, and copy designed to elevate brand footprint, drive inbound pipelines, and compound returns.
          </p>
        </div>

        {/* Hero Call-Out */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-3xs font-mono font-bold uppercase tracking-widest">
              Data-Driven Conversion
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight">Performance Growth Engines</h2>
            <p className="text-purple-100 text-sm leading-relaxed">
              Accelerate digital acquisition, brand visibility, and target-audience engagement. Combining modern analytical insights with innovative campaign planning, we deploy SEO/SEM optimization, content strategies, performance marketing, and conversion rate optimization (CRO).
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={()=>{
                storeDataforContactUs('Digital Marketing Services');
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="marketing-services-bento">
          {digitalMarketingDetailed.map((service, idx) => (
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
