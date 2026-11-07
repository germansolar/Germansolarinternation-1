import React, { useState } from 'react';
import { ArrowRight, Layers, SunMedium, Handshake, Wrench, X, CheckCircle2 } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenConsultation }) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: 'Commercial & Industrial BESS',
      desc: 'Peak shaving, demand charge reduction, solar time-shifting, and sub-20ms micro-UPS backup for mission-critical operations.',
      actionText: 'View BESS Solutions →',
      icon: Layers,
      details: {
        badge: 'Utility & C&I Storage',
        summary: 'Designed specifically for harsh grid conditions across Kenya, Botswana, and Rwanda. Our liquid-cooled BESS containers provide uninterrupted operations for manufacturing facilities, data centers, and agricultural cold chains.',
        features: [
          'Sub-20ms seamless UPS transfer prevents machinery reset during brownouts',
          'Intelligent peak-shaving algorithmic dispatch to eliminate maximum demand penalties',
          'Liquid cooling maintains cell temperature delta < 2.5°C in 45°C ambient heat',
          'Grade-A CATL/EVE LiFePO4 cells rated for 6,000+ cycles at 90% DoD',
          'Automated aerosol fire suppression with NFPA 855 & UL 9540A certification'
        ],
      },
    },
    {
      id: 2,
      title: 'Solar PV & Hybrid Microgrids',
      desc: 'Rooftop arrays, ground-mounts, and solar carports engineered for maximum heat-tolerant yield with TOPCon bifacial cells.',
      actionText: 'View Solar Solutions →',
      icon: SunMedium,
      details: {
        badge: 'Solar Generation Engineering',
        summary: 'State-of-the-art N-Type TOPCon bifacial solar PV arrays optimized for equatorial high-irradiance and high-temperature environments, generating up to 25% higher lifetime energy yield.',
        features: [
          'High thermal coefficient (-0.30%/°C) delivering superior output in tropical climates',
          'Up to 80% bifaciality capturing albedo reflectance from white roofs and ground',
          'Structural anodized aluminum mounting wind-rated for coastal and highland gusts',
          'Smart string inverters with individual MPPT tracking and DC arc fault protection (AFCI)',
          'Zero-export grid synchronization with Kenya Power (KPLC) and regional utilities'
        ],
      },
    },
    {
      id: 3,
      title: 'Private Utilities & Zero-CAPEX PPA',
      desc: 'We construct, operate, and maintain power assets. You pay only for clean power generated at a guaranteed lower tariff.',
      actionText: 'Learn About PPAs →',
      icon: Handshake,
      details: {
        badge: 'Solar-as-a-Service',
        summary: 'Eliminate upfront capital expenditure entirely. German Solar International finances, installs, owns, and maintains the entire solar and BESS infrastructure on your premises under long-term Power Purchase Agreements (PPA) or Equipment Lease agreements.',
        features: [
          'Zero upfront capital expenditure (100% turnkey financed by our infrastructure fund)',
          'Instant 20% to 45% discount relative to prevailing national grid retail tariffs',
          'Hedge against future utility inflation and currency-indexed diesel fluctuations',
          'Full operational risk transfer: German Solar International covers all maintenance, insurance & repairs',
          'Flexible buyout options available after Year 5 or Year 10'
        ],
      },
    },
    {
      id: 4,
      title: '10-Step EPC & 24/7 O&M',
      desc: 'Structured German-quality delivery from cloud SCADA and PVsyst engineering to 10-step EPC and dedicated local engineering teams.',
      actionText: 'See 10-Step Roadmap →',
      icon: Wrench,
      details: {
        badge: 'Engineering, Procurement & Construction',
        summary: 'A rigorous 10-step engineering framework governed by German DIN and IEC standards, executed by our full-time engineering teams stationed in Nairobi, Mombasa, Gaborone, and Kigali.',
        features: [
          'Step 1-3: High-precision load profiling, 3D shading analysis & PVsyst simulation',
          'Step 4-6: Structural load audit, regulatory EPRA permitting & electrical SLD design',
          'Step 7-8: Tier-1 hardware staging, civil works & certified high-voltage installation',
          'Step 9: Commissioning, grid synchronization, protection relay calibration & SAT testing',
          'Step 10: 24/7 Cloud SCADA monitoring, preventative thermal imaging & rapid spare-parts SLA'
        ],
      },
    },
  ];

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Turnkey Energy Solutions Built for Africa
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We design, finance, construct, and maintain heavy-duty solar and battery energy storage
              infrastructure that eliminates blackouts and cuts operating costs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveModal(1)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer group"
          >
            <span>Explore All 4 Solution Pillars</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-emerald-950/5 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(item.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors pt-3 border-t border-slate-100 cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>{item.actionText}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* In-depth Solution Full Page View */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full min-h-screen flex flex-col animate-in fade-in duration-150">
          {/* Top Sticky Navigation Bar */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 cursor-pointer transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Core Capabilities</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {(() => {
              const sol = solutions.find((s) => s.id === activeModal)!;
              return (
                <div>
                  <div className="mb-8">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      {sol.details.badge}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {sol.title}
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                      {sol.details.summary}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Technical & Commercial Specifications
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {sol.details.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
                    >
                      ← Back to Capabilities
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const title = sol.title;
                        setActiveModal(null);
                        onOpenConsultation(title);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
                    >
                      <span>Inquire About {sol.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};
