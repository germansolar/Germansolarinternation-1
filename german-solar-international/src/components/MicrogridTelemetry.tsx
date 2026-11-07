import React, { useState, useEffect } from 'react';
import { Sun, BatteryCharging, Factory, Zap, ShieldCheck, ArrowRight, Activity, Battery } from 'lucide-react';

export type MicrogridMode = 'solar-peak' | 'grid-outage' | 'peak-shave';

interface TelemetryProps {
  onOpenSpecs?: () => void;
}

export const MicrogridTelemetry: React.FC<TelemetryProps> = ({ onOpenSpecs }) => {
  const [mode, setMode] = useState<MicrogridMode>('solar-peak');
  const [tick, setTick] = useState(0);

  // Subtle live simulation jitter to feel like real streaming SCADA telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const jitter = (tick % 2 === 0 ? 1 : -1) * (tick % 3);

  const modeData = {
    'solar-peak': {
      title: 'Daytime Generation & BESS Charging',
      desc: 'Clean solar PV directly powers facility load; excess generation safely charges liquid-cooled BESS.',
      solarKw: 485 + jitter,
      bessSoC: 88,
      bessKw: '+120 kW Charging',
      bessStatus: 'charging',
      loadKw: 250 + (jitter > 0 ? 2 : -2),
      gridFeed: '0 kW (Net-Zero)',
      gridSub: 'Sub-20ms Transfer Zero brownouts',
      genset: 'OFF (Standby)',
      gensetSub: '65 L/hr Diesel Saved',
      gridColor: 'text-slate-700',
    },
    'grid-outage': {
      title: 'Islanded Microgrid Mode (<20ms UPS Transfer)',
      desc: 'National grid dropped. BESS inverter formed grid voltage within 16ms without facility disruption.',
      solarKw: 210 + jitter,
      bessSoC: 82,
      bessKw: '-160 kW Discharging',
      bessStatus: 'discharging',
      loadKw: 370 + jitter,
      gridFeed: '0 kW (Blackout)',
      gridSub: 'Isolated from utility fault',
      genset: 'OFF (Standby)',
      gensetSub: 'Zero noisy diesel started',
      gridColor: 'text-amber-600',
    },
    'peak-shave': {
      title: 'Evening Peak Shaving & Tariff Arbitrage',
      desc: 'BESS discharges during expensive peak utility hours to cap maximum demand charges.',
      solarKw: 35 + Math.max(0, jitter),
      bessSoC: 64,
      bessKw: '-280 kW Peak Discharge',
      bessStatus: 'discharging',
      loadKw: 340 + jitter,
      gridFeed: '25 kW (Capped)',
      gridSub: 'Protected from penalty tariff',
      genset: 'OFF (Standby)',
      gensetSub: '$180/hr Demand Fee Saved',
      gridColor: 'text-emerald-700',
    },
  }[mode];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-4 sm:p-5 text-slate-800 transition-all duration-300">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-semibold tracking-wide border border-emerald-200/60">
            <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
            <span>LIVE SIM</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">C&I Microgrid Telemetry</h4>
            <p className="text-[11px] text-slate-500 hidden sm:block">Real-time energy dispatch simulation</p>
          </div>
        </div>

        {/* 3 tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setMode('solar-peak')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              mode === 'solar-peak'
                ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Solar Peak
          </button>
          <button
            type="button"
            onClick={() => setMode('grid-outage')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              mode === 'grid-outage'
                ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Grid Outage
          </button>
          <button
            type="button"
            onClick={() => setMode('peak-shave')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              mode === 'peak-shave'
                ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Peak Shave
          </button>
        </div>
      </div>

      {/* Mode caption */}
      <div className="mt-2.5 mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50/70 px-2 py-0.5 rounded-sm">
          {modeData.title}
        </span>
        <span className="text-[11px] text-slate-400 font-mono">SCADA Node #01</span>
      </div>

      {/* 3 Stat Tiles */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-2">
        {/* Tile 1: Solar PV Array */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 sm:p-3 border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-medium text-slate-600 truncate">Solar PV Array</span>
            <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-slate-900 tabular-nums">
              {modeData.solarKw} <span className="text-xs font-sans font-semibold text-slate-500">kW</span>
            </div>
            <div className="text-[10px] text-emerald-700 font-medium truncate mt-0.5">
              100% Bifacial Yield
            </div>
          </div>
        </div>

        {/* Tile 2: LiFePO4 BESS */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 sm:p-3 border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-medium text-slate-600 truncate">LiFePO4 BESS</span>
            {modeData.bessStatus === 'charging' ? (
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            ) : (
              <Battery className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            )}
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-slate-900 tabular-nums">
              {modeData.bessSoC}% <span className="text-xs font-sans font-semibold text-slate-500">SoC</span>
            </div>
            <div className="text-[10px] text-emerald-700 font-medium truncate mt-0.5">
              {modeData.bessKw}
            </div>
          </div>
        </div>

        {/* Tile 3: Facility Load */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 sm:p-3 border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-medium text-slate-600 truncate">Facility Load</span>
            <Factory className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-slate-900 tabular-nums">
              {modeData.loadKw} <span className="text-xs font-sans font-semibold text-slate-500">kW</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
              100% Protected
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Readouts */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Utility Grid Feed</div>
            <div className={`font-mono font-semibold ${modeData.gridColor}`}>{modeData.gridFeed}</div>
            <div className="text-[10px] text-slate-400">{modeData.gridSub}</div>
          </div>

          <div className="w-px h-7 bg-slate-200 hidden sm:block" />

          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Diesel Genset</div>
            <div className="font-mono font-semibold text-slate-700">{modeData.genset}</div>
            <div className="text-[10px] text-emerald-700 font-medium">{modeData.gensetSub}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenSpecs}
          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold text-xs transition-colors self-end sm:self-center cursor-pointer group"
        >
          <span>Architecture Specs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
