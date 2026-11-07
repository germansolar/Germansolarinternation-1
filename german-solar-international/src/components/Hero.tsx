import React from 'react';
import { Check, ArrowRight, Shield, Zap } from 'lucide-react';
import { MicrogridTelemetry } from './MicrogridTelemetry';

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
  onOpenSpecs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCalculator,
  onOpenConsultation,
  onOpenSpecs,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background subtle micro-grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#064e3b 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Value Proposition, Checklist, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-2">
            
            {/* Top tag badge line */}
            <div className="inline-flex items-center flex-wrap gap-2 text-xs font-semibold tracking-wide text-slate-600 mb-6 uppercase">
              <span className="text-emerald-800 font-bold">Renewable Energy Infrastructure</span>
              <span className="text-slate-300">·</span>
              <span>Solar Installation Company in Kenya</span>
              <span className="text-slate-300">·</span>
              <span>Utility-Scale BESS</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">East & Southern Africa</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
              Powering Africa with{' '}
              <span className="text-emerald-700">
                Reliable, Sustainable Energy
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              German Solar International delivers advanced solar photovoltaic (PV) systems and battery
              energy storage systems (BESS) for commercial, industrial, and utility-scale operations.
              Engineered for demanding African environments to eliminate power disruptions and
              drastically reduce operating costs.
            </p>

            {/* 2-Column Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-xl">
              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  Tier-1 N-Type TOPCon Solar
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  Liquid-Cooled LiFePO4 BESS Storage
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  Zero-CAPEX PPA & Asset Lease Models
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  24/7 Remote SCADA Monitoring & O&M
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <button
                type="button"
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] transition-all shadow-md shadow-emerald-900/15 text-sm cursor-pointer"
              >
                <span>Calculate Solar & Storage ROI</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-700 hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
              >
                Speak with an Engineer
              </button>
            </div>

            {/* Small Motto Line */}
            <div className="text-xs font-semibold text-slate-400 tracking-wide">
              MOTTO: <span className="text-slate-600 italic">“Powering Progress. Energizing Tomorrow.”</span>
            </div>
          </div>

          {/* Right Column: Hero Photo + C&I Microgrid Telemetry Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Rounded Photo with Soft Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200/80 group">
              <img
                src="/src/assets/images/hero_solar_bess_1793957877232.jpg"
                alt="Solar panels beside white battery cabinet with wind turbines and green hills in Africa"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Top Left Caption Pill */}
              <div className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                Utility-scale storage, built for Africa
              </div>

              {/* Bottom Right Pill: Kenya · Botswana · Rwanda */}
              <div className="absolute bottom-3.5 right-3.5 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                Kenya · Botswana · Rwanda
              </div>
            </div>

            {/* Under the photo: C&I Microgrid Telemetry Live Card */}
            <MicrogridTelemetry onOpenSpecs={onOpenSpecs} />
          </div>

        </div>
      </div>
    </section>
  );
};
