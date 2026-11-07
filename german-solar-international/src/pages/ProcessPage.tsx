import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Layers, 
  FileText, 
  Wrench, 
  Zap, 
  Sparkles 
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      quote: 'Understanding your operations and strategic goals',
      desc: 'We meet with your engineering and leadership team to understand operational load profiles, billing tariffs, generator fuel expenses, and energy security priorities.',
      deliverables: [
        'Operational profile review',
        'Tariff structure audit',
        'Preliminary feasibility brief',
      ],
      standard: 'IEC / IEEE compliant',
    },
    {
      num: '02',
      title: 'Site Assessment',
      quote: 'Precise physical and geotechnical survey',
      desc: 'Our engineers deploy on-site to inspect structural roof capacity, soil resistivity, transformer rating, cable conduits, and surrounding shading obstacles.',
      deliverables: [
        'Structural roof loading certificate',
        'High-resolution drone aerial mapping',
        'Switchboard thermal imaging scan',
      ],
      standard: 'Structural Eurocode & Kenya Building Code',
    },
    {
      num: '03',
      title: 'Energy Analysis',
      quote: 'High-speed datalogging and PVsyst yield simulation',
      desc: 'We deploy power quality loggers to capture 24/7 load fluctuations, harmonics, and peak kVA spikes, followed by bankable 3D irradiance modeling.',
      deliverables: [
        'Sub-second interval demand curve',
        'P50/P90 bankable PVsyst simulation',
        'Diesel displacement projection model',
      ],
      standard: 'ISO 50001 Energy Management',
    },
    {
      num: '04',
      title: 'System Design',
      quote: 'Precision electrical SLD and protection coordination',
      desc: 'Preparation of stamped electrical single-line diagrams, BESS thermal loops, static transfer switch logic, and microgrid islanding protection schemes.',
      deliverables: [
        'Detailed electrical Single-Line Diagram (SLD)',
        'Protection relay coordination study',
        'Bill of Quantities (BOQ) with Tier-1 datasheets',
      ],
      standard: 'IEC 60364 & DIN VDE Standards',
    },
    {
      num: '05',
      title: 'Proposal & Project Planning',
      quote: 'Transparent commercial terms and project Gantt schedule',
      desc: 'Presentation of turnkey EPC and zero-CAPEX PPA contract options, tariff discount guarantees, and procurement milestone timelines.',
      deliverables: [
        'Bankable 25-year financial model',
        'Project execution Gantt timeline',
        'Performance guarantee agreement',
      ],
      standard: 'FIDIC Engineering Contract',
    },
    {
      num: '06',
      title: 'Equipment Supply',
      quote: 'Tier-1 hardware staging and factory acceptance testing',
      desc: 'Direct procurement from BloombergNEF Tier-1 factories, shipping logistics through Mombasa or regional ports, and Flash Test report verification.',
      deliverables: [
        'Factory Acceptance Testing (FAT) reports',
        'Customs clearance and bonded storage',
        'Component serial number tracing',
      ],
      standard: 'IEC 61215 / IEC 62619 / CE Marked',
    },
    {
      num: '07',
      title: 'Installation',
      quote: 'Certified civil, mechanical, and electrical works',
      desc: 'Installation executed by full-time EPRA-licensed solar and BESS crews equipped with calibrated torque tools, certified scaffolding, and PPE.',
      deliverables: [
        'Mechanical mounting & DC stringing',
        'BESS container foundation placement',
        'AC switchgear interconnection',
      ],
      standard: 'EPRA Class T3 / Solar V1 Certified',
    },
    {
      num: '08',
      title: 'Testing & Commissioning',
      quote: 'Site Acceptance Testing (SAT) and microgrid black-start',
      desc: 'Rigorous cold and hot commissioning, insulation resistance testing, secondary injection relay testing, and live seamless blackout simulation.',
      deliverables: [
        'Site Acceptance Testing (SAT) sign-off',
        'Grid-synchronization validation',
        'Emergency shutdown & fire loop sign-off',
      ],
      standard: 'IEEE 1547.1 Interconnection Compliance',
    },
    {
      num: '09',
      title: 'Client Training',
      quote: 'Empowering your on-site engineering team',
      desc: 'Comprehensive training covering basic operation, manual bypass switching, cloud SCADA dashboard navigation, and emergency protocols.',
      deliverables: [
        'Facility engineering operations manual',
        'Standard Operating Procedures (SOP) placards',
        'Operator certification sign-off',
      ],
      standard: 'OSHA / Workplace Safety Protocols',
    },
    {
      num: '10',
      title: 'Ongoing Maintenance & Support',
      quote: '24/7 cloud SCADA monitoring and proactive maintenance',
      desc: 'Continuous real-time telemetry from our regional engineering centers, scheduled infrared thermography, module washing, and rapid spare parts SLA.',
      deliverables: [
        '24/7 Cloud SCADA telemetry portal',
        'Quarterly preventive maintenance visits',
        'Contractually guaranteed uptime response SLA',
      ],
      standard: 'ISO 9001 Quality Management',
    },
  ];

  const active = steps[currentStep];

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:23 */}
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
            <span className="text-emerald-800">10-STEP PROJECT DELIVERY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            How We Deliver Every Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Every project follows a structured engineering process designed to ensure quality, safety,
            efficiency, and successful delivery on schedule.
          </p>
        </div>
      </section>

      {/* Main Stepper Section matching video frames 00:23 - 00:24 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              ENGINEERING RIGOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              How We Deliver Every Project: The 10-Step Approach
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Every project follows a structured engineering workflow designed to ensure maximum electrical
              safety, high-round-trip efficiency, and timely commissioning across Africa.
            </p>
          </div>

          {/* Horizontal Clickable Stepper Bar matching video frame 00:24 */}
          <div className="overflow-x-auto pb-4 mb-8">
            <div className="flex items-center gap-2 min-w-[950px] p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
              {steps.map((st, idx) => (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setCurrentStep(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    currentStep === idx
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    currentStep === idx ? 'bg-white text-emerald-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{st.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step Execution Detail Card matching video frame 00:24 */}
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Big Step index, title, description, buttons */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded">
                    EXECUTION PHASE
                  </span>
                  <span className="text-xs font-mono text-slate-400">Step {active.num} of 10</span>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-5xl sm:text-6xl font-extrabold font-mono text-emerald-800 leading-none">
                    {active.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {active.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 italic mt-0.5 font-medium">
                      "{active.quote}"
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2">
                  {active.desc}
                </p>

                {/* Previous & Next Buttons */}
                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Step</span>
                  </button>

                  <button
                    type="button"
                    disabled={currentStep === steps.length - 1}
                    onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Next Step ({currentStep + 2} of 10)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Audited Deliverables Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  AUDITED DELIVERABLES FOR STEP {parseInt(active.num, 10)}
                </div>

                <div className="space-y-3">
                  {active.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Quality Standard: {active.standard}</span>
                  <span className="text-emerald-800 font-semibold font-sans">Zero-Shortcut Protocol</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Grid of All 10 Steps Cards matching video frame 00:24 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {steps.map((st, idx) => (
              <div
                key={st.num}
                onClick={() => setCurrentStep(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  currentStep === idx
                    ? 'bg-emerald-50/70 border-emerald-600 ring-1 ring-emerald-600/30 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                    Step {st.num}
                  </span>
                  {currentStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {st.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Standards, Compliance & Safety Section matching video frame 00:25 */}
      <section className="py-14 lg:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Quality statement and standards list */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  STANDARDS, COMPLIANCE & SAFETY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Zero Compromise on Electrical Quality & Life-Safety
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Quality and safety are at the heart of everything we do. We apply industry best practices throughout every stage of project delivery, ensuring our systems are reliable, safe, and built to perform in demanding environments.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Strict compliance with IEC 62619, IEC 61215, and IEEE 1547 electrical safety standards
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    UL 9540 & UL 9540A certified LiFePO4 battery thermal preservation and safety
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    EPRA Class T3 / Solar V1 licensed installation teams across East Africa
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Secondary containment and active clean-agent aerosol fire protection in all BESS installations
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Callout Card matching video frame 00:25 */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                YOUR RELIABLE PARTNER
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                The future of energy is cleaner, smarter, and more connected.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                German Solar International is committed to supporting Africa's energy transformation by delivering renewable energy solutions that improve reliability, reduce costs, and create long-term value for businesses and communities.
              </p>
              <button
                type="button"
                onClick={() => onOpenConsultation('Step 1 Initial Consultation', 'Booking Step 1 Initial Consultation on the 10-step EPC roadmap.')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <span>Initiate Step 1 Initial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
