import React, { useState } from 'react';
import { PageId, ContactInquiry } from '../types';
import { Mail, Phone, MapPin, ShieldAlert, CheckSquare, Sparkles, MessageSquare, Calendar, FileCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'Strategic Data Engineering Audit',
    budget: '£25k - £50k',
    message: ''
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitSuccess(true);
  };

  const budgetOptions = [
    'Under £25k',
    '£25k - £50k',
    '£50k - £100k',
    '£100k+'
  ];

  const serviceOptions = [
    'Strategic Data Engineering Audit',
    'Sovereign Generative AI & RAG',
    'Modern Cloud Lakehouse Migration',
    'Analytics Semantic Layer Model',
    'Managed Squad (Advisory & Engineering)'
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-55 text-slate-800" id="contact-page">
      {/* Background radial accent glow */}
      <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute right-[-15%] bottom-10 h-[500px] w-[500px] rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Contact Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Connect with our Advisory Desk
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Book Strategic Consultation
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Initialize your target state mapping. Our Central London solution architects provide structured platform reviews and present custom pipeline blueprints for qualified organizations.
          </p>
        </div>

        {/* Contact Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-content-grid">
          
          {/* Left Column: Address, Phones, Commitments */}
          <div className="lg:col-span-5 space-y-8" id="contact-left-details">
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">Canary Wharf Headquarters</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our strategic advisory desk is located in London&apos;s primary tech and financial hub, coordinating globally with our engineering squads.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-4 text-xs text-slate-800" id="contact-coordinates">
              <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-500/10 hover:bg-slate-50/50 shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-900">Office Address</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    ITHYN Data & AI Ltd.<br />
                    Level 37, One Canada Square,<br />
                    Canary Wharf, London, E14 5AB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-500/10 hover:bg-slate-50/50 shadow-sm">
                <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-900">Inquiry Gateways</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Client Scopes: <strong className="text-slate-900">inquiries@ithyn.ai</strong><br />
                    Partnership Operations: <strong className="text-slate-900">alliances@ithyn.ai</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-500/10 hover:bg-slate-50/50 shadow-sm">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-900">Strategic Hotline</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Tel: <strong className="text-slate-900">+44 (0) 20 7946 0831</strong><br />
                    Mon - Fri, 08:30 - 18:00 GMT / BST
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate NDA commitment */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 space-y-3" id="nda-commitment-box">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                <ShieldAlert className="h-4.5 w-4.5" />
                <span>NDA & Confidentiality Statement</span>
              </div>
              <p className="text-2xs text-slate-600 leading-relaxed">
                ITHYN is fully insured and operates under English and Welsh corporate confidentiality statutes. Prior to discussing proprietary source schemas, patient directories, or financial transactional ledgers, our alliances desk provides structured bilateral NDAs.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7" id="contact-right-form">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSubmitSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6 text-xs"
                  >
                    <div className="space-y-1.5 border-b border-slate-200 pb-3">
                      <h3 className="font-display text-base font-bold text-slate-900">Engagement Questionnaire</h3>
                      <p className="text-slate-500 text-3xs">Fields marked with an asterisk are required.</p>
                    </div>

                    {/* Standard details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Johnathan Smith"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Corporate Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jsmith@corporate.co.uk"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Prestige Enterprise"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Contact Telephone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 20 7900 1234"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-3xs font-mono uppercase text-slate-500 mb-1.5">Strategic Solution Interest</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((opt) => {
                          const isSelected = formData.serviceInterest === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, serviceInterest: opt })}
                              className={`rounded-lg border p-3 text-left transition-all duration-200 cursor-pointer text-2xs ${
                                isSelected
                                  ? 'border-blue-500 bg-blue-50 text-blue-600 font-bold shadow-sm'
                                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget dials */}
                    <div>
                      <label className="block text-3xs font-mono uppercase text-slate-500 mb-1.5">Estimated Scoping Budget</label>
                      <div className="flex flex-wrap gap-2" id="budget-dials">
                        {budgetOptions.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`rounded-full px-4 py-2 border text-2xs font-semibold transition-all duration-150 cursor-pointer shadow-3xs ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/15'
                                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Brief outline */}
                    <div>
                      <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Brief Description of Bottlenecks *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your storage formats, pipeline orchestrations (Airflow, spark clusters), or cognitive RAG compliance specifications..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>

                    {/* Commit checklist */}
                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-3xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                        <CheckSquare className="h-4 w-4 text-blue-600" />
                        <span>Pre-Scoping Checklist Highlights</span>
                      </div>
                      <div className="space-y-1 text-slate-550 text-3xs">
                        <p>&bull; Structured NDA sent automatically within 4 hours to {formData.email || 'your email'}.</p>
                        <p>&bull; Initial strategy reviews are free of charge under English scoping protocols.</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-blue-600 hover:bg-blue-500 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-600/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Submit Blueprint Request to Solution Architects
                    </button>
                  </motion.form>
                ) : (
                  /* Success Calendar mapping */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-6 space-y-6"
                    id="booking-success-message"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                      <Sparkles className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-base font-bold text-slate-900">Consultation Initiated, {formData.name}!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                        Your inquiry has been successfully registered at our One Canada Square strategic advisory desk.
                      </p>
                    </div>

                    {/* Encryption & Calendar Simulation */}
                    <div className="rounded-xl hidden border border-slate-200 bg-slate-50 p-5 text-left font-mono text-[10px] text-slate-600 space-y-4 max-w-sm mx-auto shadow-3xs">
                      
                      {/* NDA Status */}
                      <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
                        <FileCheck className="h-5 w-5 text-blue-600 shrink-0" />
                        <div>
                          <span className="block font-bold text-slate-900 uppercase tracking-wider text-3xs">Stage 1: Bilateral NDA</span>
                          <p className="text-slate-550 mt-0.5 leading-relaxed">
                            Bilateral NDA generated. Secure DocuSign package dispatched to <strong className="text-slate-900">{formData.email}</strong>.
                          </p>
                        </div>
                      </div>

                      {/* Calendar Mapping */}
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-indigo-600 shrink-0" />
                        <div>
                          <span className="block font-bold text-slate-900 uppercase tracking-wider text-3xs">Stage 2: Advisory Mapping</span>
                          <p className="text-slate-550 mt-0.5 leading-relaxed">
                            Our managing partner (Marcus Sterling) or cognitive lead (Dr. Sarah Jenkins) will coordinate a 30-minute MS Teams screen-share.
                          </p>
                        </div>
                      </div>

                      {/* Ticket Number */}
                      <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-3xs text-slate-500">
                        <span>Ticket ID: BP-2026-8809</span>
                        <span>SLA: <strong className="text-blue-600 font-bold">4 Hours Response</strong></span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setIsSubmitSuccess(false);
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            phone: '',
                            serviceInterest: 'Strategic Data Engineering Audit',
                            budget: '£25k - £50k',
                            message: ''
                          });
                        }}
                        className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-3xs"
                      >
                        Submit another request
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('home');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/15 inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        Return to Home <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
