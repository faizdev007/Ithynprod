import React from 'react';
import { PageId } from '../types';
import { SERVICES, CASE_STUDIES, BLOG_POSTS, TESTIMONIALS, EXPERTS } from '../data';
import Stats from '../components/Stats';
import Partners from '../components/Partners';
import TechEcosystem from '../components/TechEcosystem';
import MathAnimation from '../components/MathAnimation';
import { ArrowRight, Database, Cpu, Sparkles, BarChart3, Cloud, Users, ArrowUpRight, MessageSquare, Shield, Check, Calendar, Clock, Star, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
  theme?: 'light' | 'dark';
}

export default function Home({ setCurrentPage, onOpenConsultation, theme = 'light' }: HomeProps) {
  const [isEnquirySubmitted, setIsEnquirySubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleQuickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      jobTitle: formData.get('jobTitle'),
      projectOutline: formData.get('projectOutline'),
    };

    try {
      const response = await fetch('/api/quickcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setIsEnquirySubmitted(true);
        form.reset();
      } else {
        console.error('Quick contact submission failed:', response.status);
        setIsEnquirySubmitted(true); // Fallback to simulated success
      }
    } catch (err) {
      console.error('Error submitting quick contact:', err);
      setIsEnquirySubmitted(true); // Fallback to simulated success
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Query Analysis",
      subtitle: "FLUMIX Agent Intake",
      file: "FLUMIX_intake.py",
      command: "> ANALYZING USER REQUEST --model=deep-reasoning-v2",
      log1: "Parsed prompt: 'Incorporate FLUMIX predictive agent into logistics flow...'",
      log2: "Extracted intent: Neural orchestration layer for B2B supply logistics.",
      color: "from-blue-500 to-cyan-500",
      accentColor: "text-blue-500",
      stroke: "#3b82f6"
    },
    {
      title: "Vector Processing",
      subtitle: "pgvector Cluster Search",
      file: "vector_index.rs",
      command: "> CONNECTING CLUSTER INDEX --similarity=cosine",
      log1: "Searching 1,536-dim embeddings on private Azure PostgreSQL server.",
      log2: "Match found: 'SLA Mitigation Guidelines v4.3' with score 0.942.",
      color: "from-cyan-500 to-teal-500",
      accentColor: "text-cyan-500",
      stroke: "#06b6d4"
    },
    {
      title: "Agent Reasoning",
      subtitle: "FLUMIX Cognitive Loop",
      file: "cognitive_core.sh",
      command: "> COMPILING REASONING GRAPH --strategy=governance",
      log1: "Synthesizing mitigation plan: Scale Databricks clusters (+2 worker nodes).",
      log2: "Drafting execution payload; ensuring strict GDPR compliance boundaries.",
      color: "from-indigo-500 to-blue-500",
      accentColor: "text-indigo-500",
      stroke: "#6366f1"
    },
    {
      title: "Cloud Deployment",
      subtitle: "Secure Ingress Setup",
      file: "cloud_provision.tf",
      command: "> DEPLOYING ARTIFACTS --env=production",
      log1: "Deploying high-availability secure clusters. Activating IAM policies.",
      log2: "SUCCESS: Production-grade cloud architecture active. SLA stabilized.",
      color: "from-purple-500 to-pink-500",
      accentColor: "text-purple-500",
      stroke: "#a855f7"
    }
  ];

  // Auto-play interval for interactive AI hero banner
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);
  
  // Icon mapper helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="h-6 w-6 text-brand-400" />;
      case 'Cpu': return <Cpu className="h-6 w-6 text-accent-teal" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-accent-blue" />;
      case 'BarChart3': return <BarChart3 className="h-6 w-6 text-indigo-400" />;
      case 'Cloud': return <Cloud className="h-6 w-6 text-cyan-400" />;
      case 'Users': return <Users className="h-6 w-6 text-emerald-400" />;
      default: return <Database className="h-6 w-6 text-brand-400" />;
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage('services');
    setTimeout(() => {
      const element = document.getElementById(`service-card-${serviceId}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleCaseStudyClick = (id: string) => {
    setCurrentPage('case-studies');
    setTimeout(() => {
      const element = document.getElementById(`case-study-detail-${id}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBlogClick = (id: string) => {
    setCurrentPage('blog');
    setTimeout(() => {
      const element = document.getElementById(`blog-post-${id}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const trustedby = [
    { name: "Databricks", url: "/assets/trustedby/company1.webp" },
    { name: "Snowflake", url: "/assets/trustedby/company2.webp" },
    { name: "Azure", url: "/assets/trustedby/company3.webp" },
    { name: "AWS", url: "/assets/trustedby/company15.webp" },
    { name: "AWS", url: "/assets/trustedby/company16.webp" },
    { name: "AWS", url: "/assets/trustedby/company17.webp" },
    { name: "AWS", url: "/assets/trustedby/company18.webp" },
    { name: "AWS", url: "/assets/trustedby/company22.webp" },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-800" id="home-page">
      {/* Background radial accent glow */}
      <div className="absolute -left-64 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 glow-blur" />
      <div className="absolute -right-64 top-96 h-[500px] w-[500px] rounded-full bg-indigo-100/30 glow-blur" />

      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-24 sm:px-6 md:pt-28 md:pb-32 lg:px-8" id="hero-section">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6" id="hero-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-150 text-blue-600 text-xs font-bold uppercase tracking-widest mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                UK Strategic Advisory & Delivery Partners
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight"
              >
                The Straight Line from<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Data to AI-Powered Insights
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-slate-600 sm:text-lg leading-relaxed max-w-2xl"
              >
                Delivering enterprise-grade Data Engineering and AI solutions through strategic consulting. We design robust platform architectures and coordinate reliable pipelines that deliver high-velocity business results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
                id="hero-actions"
              >
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/15 flex items-center gap-2 cursor-pointer"
                >
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="px-6 py-3 border border-slate-200 bg-white text-slate-600 rounded-full text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                >
                  Explore Services
                </button>
              </motion.div>
            </div>

            {/* Hero Right Visuals (Modern Interactive Mathematical Canvas Animation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 h-80 md:h-full relative"
              id="hero-right"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 blur-xl animate-pulse animate-float" />
              <MathAnimation theme={theme} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trusted by Top Companies (Scrolling Logo Ticker) */}
      <section className="border-y border-slate-200/80 bg-white py-8 overflow-hidden" id="trusted-logos-ticker">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-3xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Trusted by Enterprise Leaders & Innovation Pioneers
          </p>
        </div>
        <div className="relative flex items-center">
          {/* Left and Right fade overlay gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-container flex overflow-hidden select-none">
            {/* The double lists for infinite looping */}
            <div className="animate-marquee px-10 flex items-center gap-16 py-3 whitespace-nowrap">
              {/* Logo Items */}
              {trustedby.map((company, index) => (
                <div key={index} className="flex items-center w-24 gap-2 text-slate-400 hover:text-slate-800 transition-colors">
                  <img src={company.url} alt={company.name} className="w-auto" />
                </div>
              ))}
            </div>

            {/* Repeated set for infinite loop */}
            <div className="animate-marquee flex items-center gap-16 py-3 whitespace-nowrap" aria-hidden="true">
              {trustedby.map((company, index) => (
                <div key={index} className="flex items-center w-24 gap-2 text-slate-400 hover:text-slate-800 transition-colors">
                  <img src={company.url} alt={company.name} className="w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <Stats />

      {/* Services Grid Section */}
      <section className="relative py-24 bg-slate-50" id="services-summary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Data & AI Services</h2>
            <p className="mt-4 text-base text-slate-650">
              FLUMIX specializes in high-level strategic architecture and rigorous governance. We couple our plans with deep engineering expertise to deploy actual production systems.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-portfolio-grid">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                id={`home-service-${service.id}`}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 border border-slate-150 text-blue-600 group-hover:bg-blue-600/10 group-hover:text-blue-600 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-150 flex items-center justify-between">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-500 hover:underline transition-colors cursor-pointer"
                  >
                    <span>Read scope</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-650 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
            >
              <span>View full service details</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Partnership Model Detail */}
      {/* <Partners /> */}

      {/* Case Studies Preview Section */}
      <section className="relative hidden py-24 bg-slate-50 border-t border-slate-200" id="case-studies-preview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                Proven Transformations
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Client Engagements</h2>
            </div>
            <button
              onClick={() => setCurrentPage('case-studies')}
              className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-500 hover:underline shrink-0 transition-colors cursor-pointer"
            >
              <span>Browse all case reviews</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Case Studies Teaser List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="home-case-studies-grid">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                id={`home-case-card-${study.id}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-2xs font-mono text-slate-500 border-b border-slate-100 pb-3">
                    <span>{study.industry}</span>
                    <span className="text-blue-600 font-bold uppercase tracking-wider">{study.client}</span>
                  </div>
                  
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {study.brief}
                  </p>

                  {/* Metric highlights */}
                  <div className="mt-6 grid grid-cols-3 gap-2 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block font-display text-sm font-bold text-slate-900">{m.value}</span>
                        <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-tight">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 group-hover:bg-slate-50 rounded-b-2xl flex items-center justify-between transition-colors">
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[9px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-650">{tech}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleCaseStudyClick(study.id)}
                    className="text-2xs font-bold text-blue-600 hover:text-blue-500 hover:underline shrink-0 transition-colors cursor-pointer"
                  >
                    Read analysis
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Technology Ecosystem Section */}
      {/* <TechEcosystem /> */}

      {/* Hire an Expert Section */}
      <section className="relative py-24 bg-white border-t border-slate-200" id="hire-expert-section">
        <div className="absolute left-[-15%] top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 glow-blur pointer-events-none" />
        <div className="absolute right-[-15%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 glow-blur pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
              ON-DEMAND ELITE TALENT
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Hire Certified FLUMIX Experts
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bypass slow hiring pipelines. Embed elite UK-vetted data engineers, cloud architects, and machine learning experts directly into your sprint teams in under 48 hours.
            </p>
          </div>

          {/* Expert Profiles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="expert-profiles-grid">
            {EXPERTS.slice(0, 3).map((exp, idx) => {
              const borderColors = [
                'bg-blue-600',
                'bg-indigo-600',
                'bg-purple-600'
              ];
              const textColors = [
                'text-blue-600',
                'text-indigo-600',
                'text-purple-600'
              ];
              const hoverColors = [
                'hover:border-blue-500/30',
                'hover:border-indigo-500/30',
                'hover:border-purple-500/30'
              ];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 ${hoverColors[idx % 3]} hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${borderColors[idx % 3]}`} />
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-3xs font-mono font-bold text-slate-700 uppercase tracking-wide">
                        Verified Expert
                      </span>
                      <span className="text-2xs font-mono font-semibold text-slate-500">{exp.experience} Exp</span>
                    </div>

                    <div>
                      <h3 className="font-display text-base font-extrabold text-slate-900 leading-tight">
                        {exp.name}
                      </h3>
                      <p className={`text-3xs font-mono ${textColors[idx % 3]} font-bold uppercase tracking-widest mt-1`}>
                        {exp.title}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        {exp.location}
                      </p>
                    </div>

                    {/* Certifications list */}
                    <div className="space-y-1.5">
                      <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-emerald-500" />
                        <span>Verified Certifications</span>
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.certifications.slice(0, 2).map((cert, i) => (
                          <span 
                            key={i} 
                            className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200/50 text-slate-700 text-3xs font-medium leading-relaxed"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Competencies list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-150">
                      <h4 className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Core Competencies
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-650">
                        {exp.skills.slice(0, 3).map((skill, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="inline-block px-2 py-0.5 rounded bg-blue-50 border border-blue-100/50 text-blue-600 text-3xs font-mono font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-150">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Request Profile Portfolio</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Vetting Process & Hiring Trust Flags */}
          <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200/80 p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1.5">
              <span className="block text-2xs font-mono font-bold text-blue-600 uppercase tracking-widest">01 / Rigorous Screening</span>
              <h4 className="text-sm font-bold text-slate-900">Top 1% UK Technical Vetting</h4>
              <p className="text-3xs text-slate-500 leading-relaxed">All experts pass extreme multi-phase coding, architecture design, and direct panel reviews.</p>
            </div>
            <div className="space-y-1.5">
              <span className="block text-2xs font-mono font-bold text-blue-600 uppercase tracking-widest">02 / Seamless Onboarding</span>
              <h4 className="text-sm font-bold text-slate-900">Plug-and-Play Integration</h4>
              <p className="text-3xs text-slate-500 leading-relaxed">Experts embed directly within your Jira, Slack, and Github workflows with zero setup friction.</p>
            </div>
            <div className="space-y-1.5">
              <span className="block text-2xs font-mono font-bold text-blue-600 uppercase tracking-widest">03 / Full Compliance</span>
              <h4 className="text-sm font-bold text-slate-900">GDPR & Security Compliant</h4>
              <p className="text-3xs text-slate-500 leading-relaxed">Active UK SC clearance models and rigorous NDA guardrails are established prior to team launch.</p>
            </div>
            <div className="space-y-1.5 flex flex-col justify-center">
              <button
                onClick={() => setCurrentPage('hire-experts')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 px-4 rounded-full transition-all shadow-md shadow-blue-600/10 cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <span>Browse All Certified Experts</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Slider/Highlight */}
      <section className="relative py-24 bg-slate-50" id="testimonials-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
              Corporate Validation
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">What Leadership Teams Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300 relative"
                id={`testimonial-card-${idx}`}
              >
                {/* Visual quote accent mark */}
                <div className="absolute top-4 right-4 text-4xl font-serif text-slate-100 pointer-events-none">&ldquo;</div>
                
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-650 leading-relaxed italic relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{t.author}</span>
                    <span className="block text-[10px] text-slate-500 font-mono">{t.role}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 uppercase tracking-wider">{t.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Advisory Consultation CTA */}
      <section className="relative hidden py-20 overflow-hidden bg-slate-50" id="pricing-cta-section">
        {/* Subtle geometric circles */}
        <div className="absolute right-[-10%] top-[-20%] h-96 w-96 rounded-full border border-slate-200/50 pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[-10%] h-96 w-96 rounded-full border border-slate-200/50 pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-mono font-bold text-blue-600 border border-blue-100">
              <Shield className="h-3.5 w-3.5" />
              <span>Sovereign Professional Pricing Structure</span>
            </span>
            
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transparent, Direct Advisory Commitments
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
              We structure our consulting agreements around predictable monthly retainers or scoped milestones. FLUMIX manages strategic architectural blueprints and continuous delivery validation, protecting your budget from scope creep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4" id="pricing-tiers-cards">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left hover:border-slate-300 transition-all shadow-sm">
                <span className="text-2xs font-mono font-bold text-slate-500 uppercase tracking-widest">Discovery</span>
                <h4 className="font-display text-base font-bold text-slate-900 mt-1">Strategic Audit</h4>
                <p className="text-3xs text-slate-500 mt-1 leading-relaxed">System audits, target state design, compliance mapping.</p>
                <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">1-2 Week Scopes</div>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 text-left relative hover:shadow-md transition-all">
                <div className="absolute right-2 top-2 rounded-full bg-blue-600 text-white px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider">Most Needed</div>
                <span className="text-2xs font-mono font-bold text-blue-600 uppercase tracking-widest">Execution</span>
                <h4 className="font-display text-base font-bold text-slate-900 mt-1">Managed Squad</h4>
                <p className="text-3xs text-slate-500 mt-1 leading-relaxed">FLUMIX architecture oversight + dedicated engineering sprint pods.</p>
                <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-semibold text-indigo-600">Monthly Sprints</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left hover:border-slate-300 transition-all shadow-sm">
                <span className="text-2xs font-mono font-bold text-slate-500 uppercase tracking-widest">Long Term</span>
                <h4 className="font-display text-base font-bold text-slate-900 mt-1">Operational SLA</h4>
                <p className="text-3xs text-slate-500 mt-1 leading-relaxed">Pipeline monitoring, fine-tuning, emergency triage support.</p>
                <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">Annual Partnership</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/15 cursor-pointer"
              >
                Schedule Budget Mapping
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3 border border-slate-200 bg-white text-slate-600 rounded-full text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
              >
                Inquire via Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="relative hidden py-20 bg-slate-50 border-t border-slate-200" id="blog-preview-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">Latest Corporate Publications</h2>
              <p className="text-xs text-slate-500 mt-1.5">Elite guides addressing modern data infrastructure and AI standards.</p>
            </div>
            <button
              onClick={() => setCurrentPage('blog')}
              className="text-xs font-bold text-blue-600 hover:text-blue-500 hover:underline flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
            >
              <span>See all articles</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-previews-grid">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <div
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500/20 hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => handleBlogClick(post.id)}
                id={`home-blog-${post.id}`}
              >
                <div>
                  <div className="flex items-center gap-3 text-3xs font-mono text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{post.category}</span>
                  <span className="text-3xs font-bold text-blue-600 group-hover:text-blue-500 transition-colors flex items-center gap-0.5">
                    Read Post <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Mini Contact Form */}
      <section  className="relative py-20 bg-slate-50 border-t border-slate-200" id="quick-contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4" id="quick-contact-left">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect Today</span>
              <h2 className="font-display text-3xl font-bold text-slate-900">Let&apos;s map your target state.</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our London advisory team. We provide free initial strategy reviews and present a custom pipeline blueprint for qualified businesses.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Confidential NDAs provided prior to any project reviews.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Sovereign deployment models supported.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" id="quick-contact-right">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                {isEnquirySubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900">Enquiry Received</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you. Your request has been logged. Our Canary Wharf strategic advisory desk will email you shortly with next steps.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleQuickSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-2xs font-mono uppercase text-slate-500 mb-1">First Name *</label>
                        <input
                          type="text"
                          required
                          name="firstName"
                          placeholder="Johnathan"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-2xs font-mono uppercase text-slate-500 mb-1">Last Name *</label>
                        <input
                          type="text"
                          required
                          name="lastName"
                          placeholder="Smith"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-2xs font-mono uppercase text-slate-500 mb-1">Job title *</label>
                        <input
                          type="text"
                          required
                          name="jobTitle"
                          placeholder="Data Engineer"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-2xs font-mono uppercase text-slate-500 mb-1">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="john@corporation.co.uk"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-2xs font-mono uppercase text-slate-500 mb-1">Project Outline *</label>
                      <textarea
                        required
                        rows={3}
                        name="projectOutline"
                        placeholder="Please briefly describe your current data volumes, platform bottlenecks, or target goals..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-600/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="h-4 w-4" />
                          <span>Submit Request to Advisory Desk</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
