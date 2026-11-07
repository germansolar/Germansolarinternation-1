import React from 'react';
import { X, Check, ShieldCheck, Zap, ThermometerSnowflake, FileText, ArrowRight } from 'lucide-react';

export interface HardwareItem {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
  details: {
    description: string;
    cooling: string;
    chemistry: string;
    cycleLife: string;
    dimensions: string;
    ipRating: string;
    fireProtection: string;
    certifications: string;
    warranty: string;
  };
}

interface HardwareDetailModalProps {
  item: HardwareItem | null;
  onClose: () => void;
  onQuote: (item: HardwareItem) => void;
}

export const HardwareDetailModal: React.FC<HardwareDetailModalProps> = ({
  item,
  onClose,
  onQuote,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full min-h-screen flex flex-col animate-in fade-in duration-150">
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 cursor-pointer transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>Back to Hardware & Products</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Full Page Content */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            {item.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
            {item.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {item.subtitle}
          </p>
        </div>

        {/* Primary Specs Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          {item.specs.map((sp, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{sp.label}</span>
              <span className="text-base font-mono font-bold text-slate-900">{sp.value}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Engineering Overview
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            {item.details.description}
          </p>
        </div>

        {/* Spec Grid */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technical Datasheet Highlights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Cell Chemistry</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.chemistry}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Thermal Cooling</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.cooling}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Cycle Life</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.cycleLife}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Dimensions</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.dimensions}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Enclosure Rating</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.ipRating}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Fire Safety System</span>
              <span className="font-semibold text-sm text-slate-900">{item.details.fireProtection}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 sm:col-span-2">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Standard Warranty</span>
              <span className="font-semibold text-sm text-emerald-800">{item.details.warranty}</span>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 mb-10 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span><strong>Compliance & Standards:</strong> {item.details.certifications}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
          >
            ← Back to Products
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onQuote(item);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
          >
            <span>Request Quotation for {item.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
