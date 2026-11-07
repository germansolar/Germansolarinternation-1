import React from 'react';
import { CheckCircle2, Shield, Wrench, BarChart3, Zap, Cpu, FileCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Energy Audit & Load Profiling',
      desc: 'High-speed datalogging monitors peak kW demand, power factor, harmonic distortion, and outage duration.',
    },
    {
      step: '02',
      title: 'PVsyst 3D Irradiance Simulation',
      desc: 'Accurate 3D terrain modeling, bifacial irradiance yield calculations, and conservative weather data integration.',
    },
    {
      step: '03',
      title: 'Electrical SLD & Protection Design',
      desc: 'Single-line diagrams designed to IEC 60364 with sub-20ms transfer switches, ATS synchronization, and arc fault protection.',
    },
    {
      step: '04',
      title: 'Structural Roof & Geotechnical Audit',
      desc: 'Wind load simulations, roof structural certifications, and foundation engineering for ground-mounts and carports.',
    },
    {
      step: '05',
      title: 'Regulatory Permitting & Net-Metering',
      desc: 'Complete EPRA compliance, environmental approvals, and local utility interconnection agreements.',
    },
    {
      step: '06',
      title: 'Tier-1 Hardware Procurement & FAT',
      desc: 'Factory Acceptance Testing (FAT) for Grade-A LiFePO4 cells, liquid-cooling loops, and Tier-1 TOPCon bifacial modules.',
    },
    {
      step: '07',
      title: 'Certified Mechanical & Electrical Works',
      desc: 'Installed by full-time German Solar certified engineers equipped with calibrated torque tools and high-voltage safety gear.',
    },
    {
      step: '08',
      title: 'Commissioning & Site Acceptance (SAT)',
      desc: 'Dielectric insulation testing, thermal imaging, protection relay calibration, and live microgrid black-start testing.',
    },
    {
      step: '09',
      title: 'Grid Sync & Zero-Export Validation',
      desc: 'Seamless zero-export grid synchronization with utility protection interlocks to ensure 100% compliance.',
    },
    {
      step: '10',
      title: '24/7 Cloud SCADA & Dedicated O&M',
      desc: 'Real-time telemetry, automated fault alerts, infrared thermography, panel cleaning, and guaranteed local spare parts SLA.',
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            The 10-Step German EPC & O&M Process
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Every megawatt-hour is delivered under strict German DIN and international IEC engineering standards,
            ensuring 25+ years of dependable performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-emerald-300 transition-all duration-200 hover:bg-white hover:shadow-md hover:shadow-slate-900/5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  STEP {s.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
