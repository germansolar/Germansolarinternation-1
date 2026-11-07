import React from 'react';
import { BatteryMedium, Globe2, ShieldCheck, Zap } from 'lucide-react';

export const KpiStrip: React.FC = () => {
  const kpis = [
    {
      value: '500kW – 1MWh+',
      label: 'Utility & C&I Liquid-Cooled Containerized BESS Systems',
      icon: BatteryMedium,
    },
    {
      value: '3+ African Hubs',
      label: 'Active engineering deployment in Kenya, Botswana & Rwanda',
      icon: Globe2,
    },
    {
      value: '10-Year Warranty',
      label: 'Performance guarantee on Tier-1 LiFePO4 cells & TOPCon PV',
      icon: ShieldCheck,
    },
    {
      value: '< 20ms Switch',
      label: 'Seamless UPS blackout transition protecting critical loads',
      icon: Zap,
    },
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200/70 rounded-xl p-5 transition-all duration-200 hover:border-emerald-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {kpi.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {kpi.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
