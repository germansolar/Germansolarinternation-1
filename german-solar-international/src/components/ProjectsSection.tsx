import React, { useState } from 'react';
import { ArrowRight, MapPin, Zap, CheckCircle2, X } from 'lucide-react';

interface ProjectItem {
  id: string;
  country: string;
  flag: string;
  category: string;
  title: string;
  specs: string;
  impact: string;
  image: string;
  details: {
    client: string;
    commissioned: string;
    solarCapacity: string;
    storageCapacity: string;
    inverterType: string;
    annualYield: string;
    dieselReduction: string;
    financialModel: string;
  };
}

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'nairobi-hub',
      country: 'Kenya',
      flag: '🇰🇪',
      category: 'C&I Manufacturing',
      title: 'Nairobi Industrial Hub: BESS & Rooftop PV',
      specs: '420 kW Solar PV · 1.05 MWh LiFePO4 BESS',
      impact: 'Eliminated 95% of grid outage downtime and cut diesel generator fuel expenses by 82%.',
      image: '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
      details: {
        client: 'TechnoFab Manufacturing East Africa',
        commissioned: 'Q3 2024',
        solarCapacity: '420 kWp (Tier-1 Bifacial TOPCon)',
        storageCapacity: '1.05 MWh (Liquid-Cooled Container)',
        inverterType: 'Bi-directional Microgrid Formers with Static Transfer Switch',
        annualYield: '685,000 kWh clean generation',
        dieselReduction: '74,000 Liters / year eliminated',
        financialModel: '15-Year Zero-CAPEX PPA at 28% discount to KPLC tariff',
      },
    },
    {
      id: 'botswana-farm',
      country: 'Botswana',
      flag: '🇧🇼',
      category: 'Commercial Farm',
      title: 'Botswana Commercial Farm & Microgrid',
      specs: '350 kW Solar PV · 700 kWh Containerized BESS',
      impact: 'Provides 100% daytime irrigation energy and keeps cold storage packs powered during night-time.',
      image: '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
      details: {
        client: 'Kalahari Agri-Enterprises',
        commissioned: 'Q1 2025',
        solarCapacity: '350 kWp ground-mounted single-axis tracking',
        storageCapacity: '700 kWh LiFePO4 IP55 containerized BESS',
        inverterType: 'Hybrid solar-diesel intelligent synchronization controller',
        annualYield: '610,000 kWh',
        dieselReduction: '62,500 Liters / year eliminated',
        financialModel: 'EPC Turnkey with 10-Year O&M Service Agreement',
      },
    },
    {
      id: 'kigali-medical',
      country: 'Rwanda',
      flag: '🇷🇼',
      category: 'Commercial Rooftop',
      title: 'Kigali Medical & Diagnostic Center Solar System',
      specs: '180 kW Rooftop PV · 260 kWh Outdoor ESS Cabinet',
      impact: 'Guaranteed zero-downtime clean power with zero voltage dips and 40% operational electricity savings.',
      image: '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
      details: {
        client: 'Kigali Specialized Diagnostic Hospital',
        commissioned: 'Q4 2024',
        solarCapacity: '180 kWp rooftop & solar carport',
        storageCapacity: '260 kWh Outdoor Modular LiFePO4 Cabinet',
        inverterType: 'Online UPS-grade PCS with sub-15ms transfer time',
        annualYield: '295,000 kWh',
        dieselReduction: '31,000 Liters / year eliminated',
        financialModel: 'Equipment Lease with Guaranteed Uptime SLA',
      },
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              AFRICAN FOOTPRINT — KENYA · BOTSWANA · RWANDA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Proven Track Record Across Africa
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Active deployments in East and Southern Africa spanning industrial hubs, off-grid eco-lodges,
              agricultural cold chains, and hospital backup.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.hash = 'projects';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer group"
          >
            <span>View All African Projects (6)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/5 cursor-pointer flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Country Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                  <span>{proj.flag}</span>
                  <span>{proj.country}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white shadow-sm">
                  {proj.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                    {proj.title}
                  </h3>
                  
                  {/* System Specs */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-3">
                    <Zap className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{proj.specs}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {proj.impact}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>View Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Page Takeover */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full min-h-screen flex flex-col animate-in fade-in duration-150">
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 cursor-pointer transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Overview</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Hero Image */}
            <div className="h-64 sm:h-80 rounded-3xl overflow-hidden bg-slate-100 mb-8 border border-slate-200 shadow-sm">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>{activeProject.flag}</span>
              <span>{activeProject.country}</span>
              <span>·</span>
              <span>{activeProject.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {activeProject.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              {activeProject.impact}
            </p>

            {/* Spec breakdown table */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Engineering & Deployment Specifications
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Client / Facility</span>
                  <span className="font-semibold text-slate-900">{activeProject.details.client}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Commissioning Date</span>
                  <span className="font-mono text-slate-900">{activeProject.details.commissioned}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Solar PV Array</span>
                  <span className="font-semibold text-slate-900">{activeProject.details.solarCapacity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Battery Energy Storage</span>
                  <span className="font-semibold text-slate-900">{activeProject.details.storageCapacity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Inverter / PCS</span>
                  <span className="font-semibold text-slate-900">{activeProject.details.inverterType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Annual Clean Generation</span>
                  <span className="font-mono font-semibold text-emerald-800">{activeProject.details.annualYield}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Diesel Displacement</span>
                  <span className="font-mono font-semibold text-emerald-800">{activeProject.details.dieselReduction}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 font-medium">Commercial Structure</span>
                  <span className="font-semibold text-slate-900">{activeProject.details.financialModel}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
              >
                ← Back to Overview
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  window.location.hash = 'contact';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
              >
                <span>Request Similar Installation Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
