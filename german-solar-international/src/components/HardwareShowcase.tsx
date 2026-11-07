import React, { useState } from 'react';
import { ArrowRight, Cpu, Shield, Layers, Battery, Eye } from 'lucide-react';
import { HardwareItem, HardwareDetailModal } from './HardwareDetailModal';

interface HardwareShowcaseProps {
  onQuote: (productName: string) => void;
}

export const HardwareShowcase: React.FC<HardwareShowcaseProps> = ({ onQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<HardwareItem | null>(null);

  const products: HardwareItem[] = [
    {
      id: 'container-500kw-1mwh',
      category: 'UTILITY-SCALE CONTAINER',
      name: 'Containerized BESS (500kW / 1MWh)',
      subtitle: 'Heavy-duty liquid-cooled containerized battery storage system',
      specs: [
        { label: 'Rated Power', value: '500 kW' },
        { label: 'Storage Capacity', value: '1 MWh / Grade-A' },
        { label: 'Battery Chemistry', value: 'LiFePO4 (LFP) 6000+ Cy' },
      ],
      details: {
        description: 'Complete 20ft / 40ft containerized battery energy storage turnkey solution engineered for African ambient temperatures up to 50°C. Integrates bi-directional power conversion system (PCS), smart liquid thermal management, aerosol fire protection, and intelligent BMS.',
        chemistry: 'CATL / EVE Grade-A Lithium Iron Phosphate (LiFePO4)',
        cooling: 'Closed-loop smart liquid cooling (ΔT < 2.5°C across all modules)',
        cycleLife: '≥ 6,000 cycles at 90% DoD / 0.5C rate',
        dimensions: '20ft standard ISO container (6,058 × 2,438 × 2,896 mm)',
        ipRating: 'IP55 outdoor container rating with C5-M anti-corrosion coating',
        fireProtection: 'Stat-X aerosol suppression + multi-gas detection (CO, H2, VOC)',
        certifications: 'UL 9540, UL 9540A, IEC 62619, IEC 62477, UN 38.3',
        warranty: '10-year performance and capacity retention warranty',
      },
    },
    {
      id: 'cabinet-125kw-261kwh',
      category: 'COMMERCIAL & INDUSTRIAL',
      name: 'Industrial Cabinet BESS (125kW / 261.2kWh)',
      subtitle: 'Commercial & industrial all-in-one outdoor energy storage cabinet',
      specs: [
        { label: 'Rated Power', value: '125 kW' },
        { label: 'Storage Capacity', value: '261.2 kWh' },
        { label: 'Voltage Range', value: '500V - 850V DC' },
      ],
      details: {
        description: 'Compact high-density outdoor energy storage cabinet designed for manufacturing hubs, commercial plazas, hotels, and agricultural facilities. Features built-in hybrid inverter / PCS for plug-and-play installation.',
        chemistry: 'Grade-A LiFePO4 cells with 3-tier BMS protection',
        cooling: 'High-efficiency industrial liquid-cooling module',
        cycleLife: '≥ 6,000 cycles at 80% DoD',
        dimensions: '1,350 × 1,150 × 2,200 mm',
        ipRating: 'IP55 outdoor weatherproof enclosure',
        fireProtection: 'Aerosol auto-discharge + rapid emergency stop isolation',
        certifications: 'IEC 62619, IEC 61000, CE, UN 38.3',
        warranty: '10-year standard product and cycle warranty',
      },
    },
    {
      id: 'cabinet-30-60kw',
      category: 'COMMERCIAL BACKUP',
      name: 'Outdoor Commercial ESS Cabinet (30-60kW / 60-100kWh)',
      subtitle: 'Compact commercial outdoor cabinet for commercial enterprises',
      specs: [
        { label: 'Power Range', value: '30 kW - 60 kW' },
        { label: 'Storage Capacity', value: '60 kWh - 100 kWh' },
        { label: 'Battery Chemistry', value: 'LiFePO4 (LFP) IP55 Rated' },
      ],
      details: {
        description: 'Tailored for small-to-medium businesses, clinics, luxury lodges, and retail centers seeking reliable, diesel-free 24/7 power with silent instantaneous UPS transfer.',
        chemistry: 'Tier-1 LiFePO4 prismatic cells',
        cooling: 'Smart forced-air HVAC with smart thermal regulation',
        cycleLife: '≥ 5,000 cycles at 90% DoD',
        dimensions: '1,000 × 900 × 1,950 mm',
        ipRating: 'IP55 dust and jet-water resistant',
        fireProtection: 'Internal smoke/thermal sensors with gas fire extinguishing',
        certifications: 'IEC 62619, EN 61000-6-2, UN 38.3',
        warranty: '10-year manufacturer warranty',
      },
    },
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              HARDWARE SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Tier-1 Battery Storage & Solar Portfolio
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Sourced directly from leading global manufacturers, featuring Grade-A LiFePO4 cells, smart
              liquid cooling, and ultra-high efficiency TOPCon bifacials.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.hash = 'products';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer group"
          >
            <span>View Full Hardware Catalog (9)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/5 group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Specs list */}
                <div className="space-y-2.5 pb-6 border-b border-slate-100 text-xs">
                  {item.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">{sp.label}</span>
                      <span className="font-mono font-semibold text-slate-900">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(item)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>Inspect Specs</span>
                </button>
                <button
                  type="button"
                  onClick={() => onQuote(item.name)}
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Datasheet Inspect Modal */}
      <HardwareDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={(item) => onQuote(item.name)}
      />
    </section>
  );
};
