import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Motto Kicker */}
        <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-3">
          Powering Progress. Energizing Tomorrow.
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Ready to Protect Your Operations and Lower Energy Costs?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Our engineers are on standby to perform a comprehensive energy audit, site assessment,
          and project financial model.
        </p>

        {/* Button */}
        <div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] transition-all shadow-md shadow-emerald-950/15 text-sm cursor-pointer"
          >
            <Wrench className="w-4 h-4" />
            <span>Request Engineering Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
