/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ApplicationServices from './pages/ApplicationServices';
import CustomerBPO from './pages/CustomerBPO';
import FixedPackages from './pages/FixedPackages';
import DigitalMarketing from './pages/DigitalMarketing';
import HireExperts from './pages/HireExperts';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeSubService, setActiveSubService] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('Flumix-theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('Flumix-theme', next);
  };

  const handleOpenConsultation = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(()=>{
      const section = document.getElementById("mainContact");
      
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  
      const firstInput = section?.querySelector(
        "input, textarea, select"
      ) as HTMLElement | null;
      
      console.log(firstInput);
      firstInput?.focus();
    },600);
  };

  const handleSelectSubService = (serviceId: string) => {
    setActiveSubService(serviceId);
    if (serviceId === 'app-services' || serviceId === 'customer-bpo' || serviceId === 'digital-marketing' || serviceId === 'hire-experts') {
      setCurrentPage(serviceId as PageId);
    } else {
      setCurrentPage('services');
    }
  };

  // Page switcher
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} theme={theme} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'app-services':
        return <ApplicationServices setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'customer-bpo':
        return <CustomerBPO setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'digital-marketing':
        return <DigitalMarketing setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'fixed-packages':
        return <FixedPackages setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'hire-experts':
        return <HireExperts setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'case-studies':
        return <CaseStudies setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} />;

      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} theme={theme} />;
    }
  };

  return (
    <div className={`flex min-h-screen flex-col transition-colors duration-300 ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`} id="app-root">
      {/* Upper ambient background light */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950/20 via-indigo-950/5 to-transparent' : 'bg-gradient-to-b from-blue-100/30 via-indigo-50/10 to-transparent'}`} />

      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenConsultation={handleOpenConsultation}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectSubService={handleSelectSubService}
        activeSubService={activeSubService}
      />

      {/* Main Multi-Page Segment */}
      <main className="flex-grow relative z-10" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Segment */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
