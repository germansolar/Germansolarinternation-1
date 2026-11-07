import React from 'react';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface RoiPromoProps {
  onLaunchCalculator: () => void;
}

export const RoiCalculatorPromo: React.FC<RoiPromoProps> = ({ onLaunchCalculator }) => {
  return (
    <section className="py-12 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50/40 border border-emerald-100/90 p-8 sm:p-12 shadow-sm">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ENGINEERING TOOL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                How Much Could Your Facility Save with Solar & BESS?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Use our dynamic calculator to model solar PV array capacity, MWh battery storage sizing,
                annual dollar savings, diesel fuel displacement, and payback periods tailored to your
                facility load.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={onLaunchCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] transition-all shadow-md shadow-emerald-950/10 text-sm whitespace-nowrap cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Sizing Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
