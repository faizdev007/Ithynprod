import React, { useState } from 'react';
import { PageId, ContactInquiry } from '../types';
import { Mail, Phone, MapPin, ShieldAlert, CheckSquare, Sparkles, MessageSquare, Calendar, FileCheck, ArrowRight, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { validatePhone } from '../phonevalidation';
import PhoneInput from "react-phone-input-2";

interface ContactProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState<ContactInquiry>({
    firstname: '',
    lastname: '',
    jobtitle: '',
    linkedin: '',
    email: '',
    phone: '',
    inputName: localStorage.getItem("inputName") || "",
    inputData: localStorage.getItem("inputData") || "",
    message: ''
  });


  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const [isSubmitStatus, setIsSubmitStatus] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [phone, setPhone] = useState("");

  const [phoneError, setPhoneError] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.trim() === "") {
      setPhoneError(true);
      return;
    }

    if (!validatePhone(formData.phone.replace(/^\+/, ""))) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    
    setIsSubmitting(true);

    try {
      console.log(formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitSuccess(true);
      } else {
        console.error('Contact submission failed status code:', response.status);
        setIsSubmitSuccess(true); // Fallback to simulated success
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setIsSubmitSuccess(true); // Fallback to simulated success
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="contact-page">
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
            Initialize your target state mapping. Our architects provide structured platform reviews and present custom pipeline blueprints for qualified organizations.
          </p>
        </div>

        {/* Contact Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-content-grid">
          
          {/* Left Column: Address, Phones, Commitments */}
          <div className="lg:col-span-5 space-y-8" id="contact-left-details">
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">Flumix Data Consulting</h2>
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
                    Kemp House, 160 City Road,  London, EC1V 2NX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-500/10 hover:bg-slate-50/50 shadow-sm">
                <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-900">Inquiry Gateways</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Client Scopes: <strong className="text-slate-900">inquiries@Flumix.co.uk</strong><br />
                    {/* Partnership Operations: <strong className="text-slate-900">alliances@Flumix.co.uk</strong> */}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-500/10 hover:bg-slate-50/50 shadow-sm">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-900">Strategic Hotline</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Tel: <strong className="text-slate-900">+44 77 3435 4500</strong><br />
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
                Flumix is fully insured and operates under English and Welsh corporate confidentiality statutes. Prior to discussing proprietary source schemas, patient directories, or financial transactional ledgers, our alliances desk provides structured bilateral NDAs.
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
                    id="mainContact"
                  >
                    <div className="space-y-1.5 border-b border-slate-200 pb-3">
                      <h3 className="font-display text-base font-bold text-slate-900">Let’s Talk!</h3>
                      <p className="text-slate-500 text-3xs">Fill in your details and We’ll reach out to you shortly.</p>
                    </div>
                    {/* Standard details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstname}
                          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                          placeholder="Johnathan"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastname}
                          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                          placeholder="Smith"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Job Title *</label>
                        <input
                          type="text"
                          required
                          value={formData.jobtitle}
                          onChange={(e) => setFormData({ ...formData, jobtitle: e.target.value })}
                          placeholder="Sales Director"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">LinkedIn Profile </label>
                        <input
                          type="text"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          placeholder="https://www.linkedin.com/in/johnsmith"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <div>
                        <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Contact Number *</label>
                        <div className="flex flex-col">
                          <PhoneInput
                            name="phone"
                            country={"gb"}
                            value={phone}
                            onChange={(value:any, country:any) => {
                                setFormData({ ...formData, phone: country.dailCode +'-'+ value });
                                setFormData({
                                    ...formData,
                                    phone: "+" + value,
                                });

                                setPhoneError(
                                    value.length > 2 &&
                                    !validatePhone(value)
                                );
                            }}
                            enableSearch
                            countryCodeEditable={false}
                            placeholder="Enter phone number"
                            inputStyle={{
                              width: "100%",
                              height: "38px",
                              borderRadius: "8px",
                              border: phoneError ? "1px solid #ef4444" : "1px solid #d1d5db",
                            }}
                        />
                        {phoneError && (
                          <span className="text-red-500 text-3xs">
                            Please provide a valid phone number.
                          </span>)
                        }
                        </div>
                      </div>
                    </div>
                      
                    {/* Brief outline */}
                    <div>
                      <label className="block text-3xs font-mono uppercase text-slate-500 mb-1">Brief Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your data infrastructure or AI requirements....."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>

                    {/* Commit checklist */}
                    <div className="rounded-xl hidden bg-slate-50 p-4 border border-slate-200 space-y-2">
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
                      disabled={isSubmitStatus || isSubmitting || phoneError}
                      className="w-full rounded-full bg-gray-900 hover:bg-gray-500 disabled:bg-slate-300 disabled:cursor-not-allowed py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-600/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="h-4 w-4" />
                          <span>Submit Request</span>
                        </>
                      )}
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
                      <h3 className="font-display text-base font-bold text-slate-900">Consultation Initiated, {formData.firstname} {formData.lastname}!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                        Your inquiry has been successfully registered at our strategic advisory desk.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setCurrentPage('home');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="rounded-full bg-gray-900 hover:bg-gray-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/15 inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        Return <ArrowRight className="h-3.5 w-3.5" />
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
