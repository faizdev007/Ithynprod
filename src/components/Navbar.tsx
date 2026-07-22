import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Sparkles, Building, Users, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onSelectSubService: (serviceId: string) => void;
  activeSubService?: string;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenConsultation, theme, toggleTheme, onSelectSubService, activeSubService }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'fixed-packages', label: 'Fixed Packages' },
    { id: 'case-studies', label: 'Case Studies' },
    // { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("quick-contact");

    if (!contactSection) {
      setCurrentPage("home");

      // Wait for the page to render before scrolling and focusing
      setTimeout(() => {
        const section = document.getElementById("quick-contact");

        section?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        const firstInput = section?.querySelector(
          "input, textarea, select"
        ) as HTMLElement | null;

        firstInput?.focus();
      }, 500);

      return;
    }

    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Focus after the smooth scroll starts
    setTimeout(() => {
      const firstInput = contactSection.querySelector(
        "input, textarea, select"
      ) as HTMLElement | null;

      firstInput?.focus();
    }, 500);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur-md" id="navbar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')} id="nav-logo">
            <img src="/assets/logo/logonew2.webp" alt="FLUMIX Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2" id="nav-desktop-menu">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'services' && (currentPage === 'app-services' || currentPage === 'customer-bpo' || currentPage === 'digital-marketing' || currentPage === 'hire-experts'));
              
              if (item.id === 'services') {
                return (
                  <div
                    key={item.id}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`relative flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                        isActive ? 'text-gray-600' : 'text-slate-600 hover:text-slate-900'
                      }`}
                      id={`nav-item-${item.id}`}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-md bg-slate-100 border border-slate-200/60"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Submenu Dropdown panel */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl z-50"
                        >
                          <div className="space-y-1">
                            <button
                              onClick={() => {
                                handleNavClick('services');
                                setIsDropdownOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition-colors ${
                                currentPage === 'services' ? 'bg-slate-50 text-gray-600' : ''
                              }`}
                            >
                              <div>
                                <span className="block font-semibold text-xs text-slate-900 font-sans">Data & AI</span>
                              </div>
                            </button>
                             <button
                              onClick={() => {
                                onSelectSubService('app-services');
                                setIsDropdownOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition-colors ${
                                currentPage === 'app-services' ? 'bg-slate-50 text-blue-600' : ''
                              }`}
                            >
                              <div>
                                <span className="block font-semibold text-xs text-slate-900 font-sans">Application Services</span>
                              </div>
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('customer-bpo');
                                setIsDropdownOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition-colors ${
                                currentPage === 'customer-bpo' ? 'bg-slate-50 text-blue-600' : ''
                              }`}
                            >
                              <div>
                                <span className="block font-semibold text-xs text-slate-900 font-sans">Customer Service & BPO</span>
                              </div>
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('digital-marketing');
                                setIsDropdownOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition-colors ${
                                currentPage === 'digital-marketing' ? 'bg-slate-50 text-blue-600' : ''
                              }`}
                            >
                              <div>
                                <span className="block font-semibold text-xs text-slate-900 font-sans">Digital Marketing Services</span>
                              </div>
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('hire-experts');
                                setIsDropdownOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition-colors ${
                                currentPage === 'hire-experts' ? 'bg-slate-50 text-blue-600' : ''
                              }`}
                            >
                              <div>
                                <span className="block font-semibold text-xs text-slate-900 font-sans">Hire Certified Experts</span>
                              </div>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-gray-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-md bg-slate-100 border border-slate-200/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Consultation CTA */}
          <div className="hidden lg:flex items-center gap-4" id="nav-desktop-actions">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 hidden hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
            </button>
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/10 flex items-center gap-1.5 cursor-pointer"
              id="nav-consultation-btn"
            >
              Schedule a Call
              <Sparkles className="h-4 w-4 text-blue-100" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2" id="nav-mobile-hamburger">
            {/* <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-expanded="false"
              id="hamburger-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-b border-slate-200 bg-white lg:hidden"
            id="nav-mobile-drawer"
          >
            <div className="space-y-1.5 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.id || (item.id === 'services' && (currentPage === 'app-services' || currentPage === 'customer-bpo' || currentPage === 'digital-marketing' || currentPage === 'hire-experts'));
                
                if (item.id === 'services') {
                  const isAnyServiceActive = currentPage === 'services' || currentPage === 'app-services' || currentPage === 'customer-bpo' || currentPage === 'digital-marketing' || currentPage === 'hire-experts';
                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                          isAnyServiceActive
                            ? 'bg-slate-50 text-gray-600 border-l-2 border-gray-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                        id={`nav-mobile-item-${item.id}`}
                      >
                        <span>Services</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: isMobileServicesOpen ? 'rotate(180deg)' : 'none' }} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 border-l border-slate-200 space-y-1 py-1 overflow-hidden"
                          >
                            <button
                              onClick={() => {
                                handleNavClick('services');
                                setIsOpen(false);
                              }}
                              className={`flex w-full items-center py-2 text-sm font-semibold transition-colors ${
                                currentPage === 'services' ? 'text-gray-900' : 'text-slate-500 hover:text-gray-600'
                              }`}
                            >
                              &bull;&nbsp;&nbsp;Data & AI
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('app-services');
                                setIsOpen(false);
                              }}
                              className={`flex w-full items-center py-2 text-sm font-semibold transition-colors ${
                                currentPage === 'app-services' ? 'text-gray-900' : 'text-slate-500 hover:text-gray-600'
                              }`}
                            >
                              &bull;&nbsp;&nbsp;Application Services
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('customer-bpo');
                                setIsOpen(false);
                              }}
                              className={`flex w-full items-center py-2 text-sm font-semibold transition-colors ${
                                currentPage === 'customer-bpo' ? 'text-gray-900' : 'text-slate-500 hover:text-gray-600'
                              }`}
                            >
                              &bull;&nbsp;&nbsp;Customer Service & BPO
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('digital-marketing');
                                setIsOpen(false);
                              }}
                              className={`flex w-full items-center py-2 text-sm font-semibold transition-colors ${
                                currentPage === 'digital-marketing' ? 'text-gray-900' : 'text-slate-500 hover:text-gray-600'
                              }`}
                            >
                              &bull;&nbsp;&nbsp;Digital Marketing Services
                            </button>
                            <button
                              onClick={() => {
                                onSelectSubService('hire-experts');
                                setIsOpen(false);
                              }}
                              className={`flex w-full items-center py-2 text-sm font-semibold transition-colors ${
                                currentPage === 'hire-experts' ? 'text-gray-900' : 'text-slate-500 hover:text-gray-600'
                              }`}
                            >
                              &bull;&nbsp;&nbsp;Hire Certified Experts
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-slate-50 text-gray-900 border-l-2 border-gray-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    id={`nav-mobile-item-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 py-3 text-base font-bold text-white shadow-md hover:bg-gray-500 transition-all cursor-pointer"
                  id="nav-mobile-consultation-btn"
                >
                  <Sparkles className="h-5 w-5 text-blue-200" />
                  Schedule a Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
