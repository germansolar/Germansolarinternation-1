import React from 'react';
import { X, Network, Cpu, ShieldAlert, Zap, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';

interface ArchitectureSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: () => void;
}

export const ArchitectureSpecsModal: React.FC<ArchitectureSpecsModalProps> = ({
  isOpen,
  onClose,
  onConsult,
}) => {
  if (!isOpen) return null;

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
          <span>Back to Microgrid Overview</span>
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
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Network className="w-4 h-4 text-emerald-700" />
            <span>Engineering Architecture Specification</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            C&I Microgrid Topology & Single-Line Architecture
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            High-availability hybrid electrical topology engineered for zero facility downtime, instantaneous sub-16ms UPS transfer, and automated diesel fuel displacement.
          </p>
        </div>

        {/* Interactive Electrical Topology Visual Diagram */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 mb-8 font-mono text-xs border border-slate-800 overflow-x-auto shadow-inner">
          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-4">
            Single-Line Diagram (SLD) Power Flow Schematic
          </div>

          <div className="min-w-[580px] flex items-center justify-between gap-3 text-center text-[11px] py-4">
            {/* PV Array */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 w-36">
              <div className="font-bold">Solar PV</div>
              <div className="text-[9px] text-amber-200/70">TOPCon Bifacial</div>
              <div className="text-[11px] text-white mt-1 font-semibold">485 kW DC</div>
            </div>

            <div className="text-slate-500 text-xs font-bold">→ DC/AC →</div>

            {/* Central BESS & Inverter */}
            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 w-48">
              <div className="font-bold">Hybrid PCS & BESS</div>
              <div className="text-[9px] text-emerald-200/70">Liquid-Cooled LiFePO4</div>
              <div className="text-[11px] text-white mt-1 font-semibold">1.0 MWh / &lt;16ms STS</div>
            </div>

            <div className="text-slate-500 text-xs font-bold">⇄ AC Bus ⇄</div>

            {/* Facility Load */}
            <div className="p-3.5 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-300 w-40">
              <div className="font-bold">Facility Main MSB</div>
              <div className="text-[9px] text-blue-200/70">415V 3-Phase 50Hz</div>
              <div className="text-[11px] text-white mt-1 font-semibold">250 kW Protected</div>
            </div>

            <div className="text-slate-500 text-xs font-bold">⇅</div>

            {/* Utility Grid & Genset */}
            <div className="flex flex-col gap-2 w-36 text-[10px]">
              <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-semibold">
                Grid (Net-Zero)
              </div>
              <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 font-semibold">
                Diesel (Standby)
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-700" />
              <span>Microgrid Transition Time</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">
              Sub-16ms static transfer switch (STS) response time. Guarantees true uninterrupted online UPS power for automated production lines, variable frequency drives (VFDs), and sensitive hospital IT equipment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <span>Grid-Forming PCS Topology</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">
              Virtual Synchronous Machine (VSM) algorithms establish voltage and frequency reference during complete utility blackout, supporting motor start-up inrush currents up to 200% for 10s.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-700" />
              <span>SCADA & Cloud Optimization</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">
              Industrial edge controller communicates via Modbus TCP and IEC 61850 with real-time sub-second dispatch algorithms for dynamic tariff arbitrage and automated generator start/stop commands.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>African Environmental Resilience</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">
              IP55 weatherproof outdoor enclosure, C5-M marine anti-corrosion rated for coastal climates, and dual closed-loop liquid thermal cooling maintaining cells at optimal 25°C ±2°C.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
          >
            ← Back to Overview
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
          >
            <span>Request Facility SLD Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
