/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { RoiCalculatorModal } from './components/RoiCalculatorModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ArchitectureSpecsModal } from './components/ArchitectureSpecsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Engineering Consultation');
  const [consultationDetails, setConsultationDetails] = useState('');

  // Synchronize with URL hash for browser history / direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['solutions', 'products', 'calculator', 'process', 'projects', 'industries', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash || hash === 'home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (topic = 'General Engineering Consultation', details = '') => {
    setConsultationTopic(topic);
    setConsultationDetails(details);
    setIsConsultationOpen(true);
  };

  const handleCalculatorAuditRequest = (details: string) => {
    handleOpenConsultation('Solar & Storage Feasibility Assessment', details);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={() => navigateTo('contact')}
        onOpenCalculator={() => navigateTo('calculator')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenConsultation={handleOpenConsultation}
            onOpenSpecs={() => setIsSpecsOpen(true)}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'calculator' && (
          <CalculatorPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            defaultTopic={consultationTopic}
            defaultDetails={consultationDetails}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation('Footer Consultation Request')}
        onOpenCalculator={() => navigateTo('calculator')}
      />

      {/* Reusable Global Engineering Modals */}
      <RoiCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onRequestAudit={handleCalculatorAuditRequest}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultTopic={consultationTopic}
        defaultDetails={consultationDetails}
      />

      <ArchitectureSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        onConsult={() => handleOpenConsultation('Microgrid Architecture & SLD Review')}
      />

    </div>
  );
}
