import React, { useState } from 'react';
import { 
  Zap, 
  SunMedium, 
  Handshake, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  TrendingDown, 
  Cpu, 
  Fuel, 
  ArrowRight,
  BatteryMedium,
  CheckCircle2
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [activeTab, setActiveTab] = useState<'bess' | 'solar' | 'ppa' | 'epc'>('bess');

  const tabContents = {
    bess: {
      kicker: 'POWER QUALITY & GRID INDEPENDENCE',
      title: 'Commercial & Industrial Battery Energy Storage Systems (BESS)',
      description:
        'Reliable power is critical to modern industrial and commercial operations. Our battery energy storage systems are engineered with Tier-1 LiFePO4 cells and intelligent thermal management to optimize electricity tariffs, buffer peak demand, and guarantee uninterrupted operations during grid failures.',
      specs: [
        'Modular Cabinets: 30kW - 125kW / 60kWh - 261kWh',
        'Utility Containers: 500kW / 1MWh Liquid-Cooled 20ft/40ft Units',
        'Cycle Life: 6,000+ Cycles (15+ Years) at 90% DoD',
      ],
      features: [
        {
          title: 'Peak Demand Management',
          desc: 'Discharges stored energy during facility peak load windows, cutting punishing demand tariff surcharges.',
          icon: TrendingDown,
        },
        {
          title: 'Zero-Break Seamless Backup',
          desc: 'Sub-20 millisecond transfer time protects automated manufacturing, chillers, and surgical suites without dropping load.',
          icon: Zap,
        },
        {
          title: 'Diesel Displacement & Hybridization',
          desc: 'Synchronizes with existing generators, reducing run hours by up to 85% and saving thousands in fuel costs.',
          icon: Fuel,
        },
        {
          title: 'Time-of-Use Load Shifting',
          desc: 'Stores low-cost off-peak utility power or mid-day solar generation to run facilities during expensive peak tariff periods.',
          icon: Clock,
        },
        {
          title: 'Grid Stabilization & Power Factor',
          desc: 'Provides fast frequency regulation, active voltage support, and harmonic filtering for delicate industrial machinery.',
          icon: Cpu,
        },
        {
          title: 'Microgrid & EV Charging Buffer',
          desc: 'Enables high-power electric fleet charging and isolated microgrids without overloading weak local distribution transformers.',
          icon: BatteryMedium,
        },
      ],
    },
    solar: {
      kicker: 'MAXIMUM EQUATORIAL YIELD',
      title: 'Solar Photovoltaic & Hybrid Microgrid Engineering',
      description:
        'Engineered specifically for African high ambient temperatures and solar irradiance. We combine Tier-1 N-Type TOPCon bifacial modules with smart string inverters to deliver maximum kilowatt-hour yield per square meter of roof or land.',
      specs: [
        'Rooftop, Ground-Mount & Solar Carport Structures',
        'N-Type TOPCon Bifacial: Up to 80% rear-side albedo gain',
        'Heat Coefficient: -0.30%/°C for superior tropical performance',
      ],
      features: [
        {
          title: 'Bifacial Ground & Roof Yield',
          desc: 'Captures direct sunlight plus reflected albedo from reflective roof membranes and white gravel surfaces.',
          icon: SunMedium,
        },
        {
          title: 'Zero-Export KPLC Interlocking',
          desc: 'Active reverse-power relays guarantee zero back-feed into utility lines, meeting national utility grid codes.',
          icon: ShieldCheck,
        },
        {
          title: 'Engineered Wind & Corrosion Resistance',
          desc: 'Anodized marine-grade aluminum mounting structures rated for coastal salt-fog and inland wind storms.',
          icon: Wrench,
        },
        {
          title: 'Independent String MPPT Tracking',
          desc: 'Multiple maximum power point trackers prevent array underperformance caused by partial dust shading.',
          icon: Cpu,
        },
        {
          title: 'Hybrid Genset Synchronization',
          desc: 'Microgrid controller modulates solar inverters to ensure diesel generators always operate above minimum 30% load.',
          icon: Fuel,
        },
        {
          title: 'Cloud SCADA Datalogging',
          desc: 'String-level telemetry monitored 24/7 with automated soiling detection and predictive fault alerts.',
          icon: Clock,
        },
      ],
    },
    ppa: {
      kicker: 'OFF-BALANCE SHEET RENEWABLE UTILITY',
      title: 'Zero-CAPEX Power Purchase Agreements (PPA) & Solar Leasing',
      description:
        'Eliminate capital expenditure constraints entirely. German Solar International finances, installs, owns, and maintains the solar PV and battery infrastructure. Your facility buys clean energy at a guaranteed lower tariff.',
      specs: [
        'Zero Capital Expenditure (100% turnkey funded)',
        'Guaranteed Discount: 20% to 45% below prevailing grid tariff',
        'Term Options: 10 to 20-Year PPA with optional buyout',
      ],
      features: [
        {
          title: 'Immediate Balance Sheet Protection',
          desc: 'Conserve your capital for primary business expansion, manufacturing lines, and inventory inventory.',
          icon: TrendingDown,
        },
        {
          title: '100% Performance Risk Transfer',
          desc: 'We assume all responsibility for maintenance, component replacement, insurance, and solar performance.',
          icon: ShieldCheck,
        },
        {
          title: 'Predictable Tariff Escalation',
          desc: 'Hedge against unpredictable national utility tariff increases and currency-indexed diesel price shocks.',
          icon: Clock,
        },
        {
          title: 'Guaranteed Equipment Uptime SLA',
          desc: 'Contractually guaranteed solar energy production and battery uptime backed by financial availability warranties.',
          icon: Zap,
        },
        {
          title: 'Flexible Year 5+ Buyout Terms',
          desc: 'Option to purchase the installed system at fair depreciated market value after initial contract milestone.',
          icon: Handshake,
        },
        {
          title: 'Audited ESG & Carbon Credits',
          desc: 'Full verified sustainability reporting for multinational corporate supply chain compliance and carbon audits.',
          icon: CheckCircle2,
        },
      ],
    },
    epc: {
      kicker: 'GERMAN STANDARDS · AFRICAN EXECUTION',
      title: '10-Step EPC Engineering & 24/7 O&M Asset Management',
      description:
        'From precision PVsyst 3D shading analysis and structural roof audits to high-voltage grid synchronization and round-the-clock SCADA telemetry, our in-house engineers manage every stage under strict IEC standards.',
      specs: [
        'EPRA Licensed Class T3/V1 Senior Electrical Engineers',
        'German DIN VDE & IEC 62446 Quality Compliance',
        '24/7 Dedicated Rapid-Dispatch Maintenance Teams',
      ],
      features: [
        {
          title: 'Bankable PVsyst Yield Modeling',
          desc: 'Rigorous 3D terrain and structural irradiance simulations validated for institutional bank financing.',
          icon: Cpu,
        },
        {
          title: 'Full Regulatory Permitting (EPRA/KPLC)',
          desc: 'We handle all environmental NEMA filings, utility grid interconnection approvals, and safety certifications.',
          icon: ShieldCheck,
        },
        {
          title: 'Tier-1 Hardware Staging & Testing',
          desc: 'Factory Acceptance Testing (FAT) with flash test verification before dispatch to your project site.',
          icon: Wrench,
        },
        {
          title: 'High-Voltage Safety Protocols',
          desc: 'Calibrated torque auditing, DC arc-fault circuit interrupters, and coordinated surge protection devices.',
          icon: Zap,
        },
        {
          title: 'Live Cold & Hot Commissioning',
          desc: 'Comprehensive Site Acceptance Testing (SAT) including thermal drone thermography and black-start testing.',
          icon: CheckCircle2,
        },
        {
          title: 'Scheduled Preventive O&M Contracts',
          desc: 'Dedicated local technicians provide module washing, inverter servicing, and cell balancing visits.',
          icon: Clock,
        },
      ],
    },
  }[activeTab];

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header */}
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
            <span className="text-emerald-800">SOLUTIONS & MANDATE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Commercial, Industrial & Utility Energy Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            From MW-scale liquid-cooled battery storage to decentralized solar microgrids and zero-CAPEX
            power purchase agreements, we build infrastructure engineered for Africa's operating demands.
          </p>
        </div>
      </section>

      {/* Main Section: End-to-End Renewable Energy Solutions for Africa */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              CAPABILITIES & MANDATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              End-to-End Renewable Energy Solutions for Africa
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              From factory-scale battery energy storage and solar farms to private utilities and zero-CAPEX
              power purchase agreements, we build infrastructure that powers sustainable economic growth.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs matching video frame 00:00 - 00:01 */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl mb-10 max-w-3xl border border-slate-200/70">
            <button
              type="button"
              onClick={() => setActiveTab('bess')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bess'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-950/15'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Battery Energy Storage (BESS)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('solar')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'solar'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-950/15'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <SunMedium className="w-4 h-4" />
              <span>Solar PV & Microgrids</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ppa')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ppa'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-950/15'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Handshake className="w-4 h-4" />
              <span>Private Utilities & PPA</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('epc')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'epc'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-950/15'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Turnkey EPC & O&M</span>
            </button>
          </div>

          {/* Active Tab Content Area: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Solution Detail & Hardware Architecture */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                {tabContents.kicker}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                {tabContents.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {tabContents.description}
              </p>

              {/* Hardware & Architecture Bullet List */}
              <div className="space-y-3 pt-6 border-t border-slate-200 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hardware & Architecture
                </div>
                {tabContents.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <span>Model Sizing for Your Facility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: 6 Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabContents.features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-300 transition-all hover:shadow-md hover:shadow-slate-900/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: Financial Engineering & Mandate (00:02 in video) */}
      <section className="py-14 lg:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              FINANCIAL ENGINEERING & MANDATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Flexible Acquisition & Commercial Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* Card 1: PPA */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Zero Capital Expenditure (100% Financed)
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Power Purchase Agreements (PPA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  German Solar International designs, finances, installs, owns, and maintains the solar
                  and storage infrastructure on your facility. You simply pay an agreed tariff per kilowatt-hour
                  generated at a fixed rate lower than the utility.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
                8 to 20-Year terms · Guaranteed uptime SLAs
              </div>
            </div>

            {/* Card 2: Equipment Leases */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Off-Balance Sheet or Capital Lease Structures
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Equipment Leases & Asset Financing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Tailored financing options that allow commercial and industrial operators to preserve
                  capital balance sheets. Monthly lease payments are offset by immediate reductions in
                  electricity and diesel fuel expenses.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
                3 to 7-Year terms · Full ownership transfer
              </div>
            </div>

            {/* Card 3: Turnkey EPC */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Direct Ownership with Engineering Guarantee
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Turnkey EPC + Arranged Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Outright purchase for organizations seeking maximum lifetime return on investment. Includes
                  comprehensive system design, high-voltage civil and electrical installation, utility permitting,
                  and 10-year guarantees.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
                5 to 10-Year payable · 25-Year system lifespan
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('calculator')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all text-xs sm:text-sm cursor-pointer"
            >
              <span>Calculate Sizing & Financial Model for Your Facility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
