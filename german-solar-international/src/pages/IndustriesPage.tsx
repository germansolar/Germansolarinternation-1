import React, { useState } from 'react';
import { 
  Factory, 
  Hospital, 
  Hotel, 
  Wheat, 
  Building, 
  Pickaxe, 
  Radio, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('manufacturing');

  const industries = [
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industrial',
      icon: Factory,
      badge: '35% – 65% reduction in electricity bills',
      challenge: 'High peak demand charges and devastating production line downtime during grid blackouts.',
      solution: 'MW-scale solar PV combined with containerized BESS for peak shaving, power quality stabilization, and instant diesel displacement.',
      recommendedConfig: '500kW–2MW PV + 1MWh Liquid-Cooled BESS',
      details: [
        'Eliminates voltage sags that trip variable speed drives (VFDs) and automation PLCs',
        'Cuts maximum demand penalty charges during afternoon grid peak windows',
        'Synchronizes with heavy diesel gensets to guarantee minimum 30% loading threshold',
      ],
    },
    {
      id: 'healthcare',
      title: 'Hospitals & Healthcare',
      icon: Hospital,
      badge: '100% Guaranteed Uptime & Zero Voltage Dips',
      challenge: 'Critical surgical theaters, intensive care units (ICUs), CT scanners, and vaccine cold chains cannot afford even a 5-second generator changeover delay.',
      solution: 'Sub-15ms online micro-UPS battery energy storage coupled with rooftop and carport solar PV arrays, maintaining clean sine wave power 24/7.',
      recommendedConfig: '100kW–350kW PV + 260kWh–500kWh Modular ESS',
      details: [
        'Total Harmonic Distortion (THD) under 2% to protect multimillion-dollar medical diagnostic electronics',
        'Redundant dual-inverter topology eliminates single point of electrical failure',
        'Quiet, fume-free operation directly adjacent to patient recovery wards',
      ],
    },
    {
      id: 'hospitality',
      title: 'Hotels, Resorts & Safari Lodges',
      icon: Hotel,
      badge: '100% Diesel Displacement During Guest Hours',
      challenge: 'Remote safari camps and coastal beach resorts spend astronomical sums trucking diesel over poor roads, while generator noise ruins guest tranquility.',
      solution: 'Silent hybrid microgrids with containerized LiFePO4 batteries, providing 24/7 silent electricity for luxury guest suites, cold rooms, and swimming pool pumps.',
      recommendedConfig: '80kW–300kW Ground PV + 200kWh–600kWh Outdoor BESS',
      details: [
        'Completely silent nighttime operation, allowing guests to hear pure African wilderness',
        'Eliminates fuel contamination, tanker transport fees, and messy on-site diesel storage',
        'Supports high-draw EV safari game drive vehicle charging from daytime surplus solar',
      ],
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Cold Storage',
      icon: Wheat,
      badge: '40% – 70% Operating Expense Savings',
      challenge: 'Irrigation pumps, tea drying fans, grain elevators, and fresh horticulture cold packing plants suffer devastating crop spoilage during rural grid blackouts.',
      solution: 'Ground-mounted and agrivoltaic solar systems synchronized with robust battery storage and variable frequency pump drives.',
      recommendedConfig: '250kW–1.5MW PV + 500kWh–1MWh Containerized BESS',
      details: [
        'Powers center-pivot irrigation and borehole pumps without expensive utility line extensions',
        'Maintains cold chain rooms strictly at 2°C to preserve export quality for European markets',
        'Agrivoltaic structures provide shading benefits for sensitive horticulture crops beneath',
      ],
    },
    {
      id: 'retail',
      title: 'Retail & Commercial Real Estate',
      icon: Building,
      badge: '25% – 45% Net Operating Cost Reduction',
      challenge: 'Commercial office towers and shopping malls grapple with high HVAC chiller cooling loads and escalating retail utility tariffs.',
      solution: 'High-density rooftop solar arrays and aesthetic commercial carport canopies integrated with intelligent time-of-use peak shaving batteries.',
      recommendedConfig: '150kW–800kW Rooftop PV + 200kWh–400kWh Commercial ESS',
      details: [
        'Converts vast unshaded retail parking lots into revenue-generating clean energy shade structures',
        'Sub-metering capability enables landlord billing to commercial office tenants',
        'Strengthens corporate green building ratings (LEED / EDGE certification)',
      ],
    },
    {
      id: 'mining',
      title: 'Mining & Remote Operations',
      icon: Pickaxe,
      badge: 'Up to 3,000,000 Liters Diesel Saved Annually',
      challenge: 'Remote extraction mines depend entirely on costly diesel fuel convoys with heavy fuel burn and high logistics vulnerability.',
      solution: 'Heavy-duty multi-megawatt solar PV and high-discharge containerized BESS microgrids engineered for heavy dust and high ambient temperatures.',
      recommendedConfig: '1MW–10MW Solar Array + 2MWh–10MWh Utility BESS',
      details: [
        'High C-rate spinning reserve allows turning off multiple 1MW+ diesel gen units',
        'IP55 heavy-duty C5-M containerized coating resists abrasive mining dust and chemical vapors',
        'Sub-second frequency support counters sudden motor starting drops and ball mill shocks',
      ],
    },
    {
      id: 'telecom',
      title: 'Data Centers & Telecom',
      icon: Radio,
      badge: 'Tier-III / Tier-IV 99.999% Reliability Compliance',
      challenge: 'Telecommunications cell towers (BTS) and regional colocation data centers face crippling SLA penalties for any millisecond of downtime.',
      solution: 'Ultra-reliable modular LiFePO4 rack batteries paired with smart hybrid DC rectifiers and rooftop solar PV arrays.',
      recommendedConfig: '50kW–500kW PV + 100kWh–1MWh High-Cycle BESS',
      details: [
        'Direct 48V DC battery integration eliminates double-conversion inverter losses',
        'Replaces short-lived lead-acid banks with 15-year 6,000-cycle LiFePO4 technology',
        'Remote cloud telemetry monitors every BTS site across national telecom networks',
      ],
    },
    {
      id: 'government',
      title: 'Government & Public Infrastructure',
      icon: Landmark,
      badge: 'Zero-CAPEX Municipal Energy Resilience',
      challenge: 'Municipal water distribution pumping, street lighting, and administrative headquarters face municipal budgetary caps and unreliable grids.',
      solution: 'Public-private partnership (PPP) and zero-CAPEX PPA turnkey solar and storage installations.',
      recommendedConfig: '200kW–3MW PV + 500kWh–2MWh Centralized Storage',
      details: [
        'Ensures uninterrupted municipal water treatment and pumping during power grid collapses',
        'Solar smart street lighting networks increase public safety and night commerce',
        '100% off-balance-sheet financing with zero upfront capital strain on taxpayers',
      ],
    },
  ];

  const current = industries.find((i) => i.id === activeIndustry) || industries[0];

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:41 */}
      <section className="bg-slate-50/70 border-b border-slate-100 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
            <button 
              type="button" 
              onClick={() => onNavigate('home')} 
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              HOME
            </button>
            {' / '}
            <span className="text-emerald-800">INDUSTRIES WE SERVE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Targeted Clean Energy for African Industries
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Every sector faces unique energy consumption curves and resilience requirements. We design
            tailored solutions that deliver measurable operational savings and power reliability.
          </p>
        </div>
      </section>

      {/* Main Section: Industries We Power Across Africa matching video frames 00:41 - 00:43 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              MARKET APPLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Industries We Power Across Africa
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Every sector faces distinct operational challenges, electricity tariffs, and uptime demands. We design
              engineered solar PV and battery storage systems tailored to your industry.
            </p>
          </div>

          {/* Interactive Layout: Left Menu + Right Detailed Solution matching frames 00:41-00:43 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical Industry Buttons List */}
            <div className="lg:col-span-5 space-y-2">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isActive = ind.id === activeIndustry;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-300/40 shadow-xs'
                        : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-xs sm:text-sm font-bold ${
                        isActive ? 'text-amber-950' : 'text-slate-800'
                      }`}>
                        {ind.title}
                      </span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-amber-900 translate-x-0.5' : 'text-slate-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Engineered Solution Display matching frame 00:41 & 00:43 */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    ENGINEERED SOLUTION
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {current.title}
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 shadow-xs">
                  {current.badge}
                </div>
              </div>

              {/* The Operational Challenge */}
              <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-red-800 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                  <span>THE OPERATIONAL CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-normal">
                  {current.challenge}
                </p>
              </div>

              {/* The German Solar Solution */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>THE GERMAN SOLAR INTERNATIONAL SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-normal">
                  {current.solution}
                </p>
              </div>

              {/* Detailed Advantages */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  SECTOR-SPECIFIC ADVANTAGES
                </div>
                {current.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Config & Action Bar matching frame 00:43 */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Recommended Architecture Configuration
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900">
                    {current.recommendedConfig}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Industry Case Study: ${current.title}`, `Inquiring for customized solar & BESS proposal for ${current.title}.`)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all whitespace-nowrap cursor-pointer"
                >
                  Request Case Study & Quote →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
