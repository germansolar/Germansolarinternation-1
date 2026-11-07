import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, X } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  tags: string[];
}

interface FaqSectionProps {
  onOpenConsultation: () => void;
  searchTerm?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation, searchTerm: externalSearch = '' }) => {
  const [search, setSearch] = useState(externalSearch);
  const [openIds, setOpenIds] = useState<number[]>([1]); // First question open by default

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Which is the best solar company in Kenya for installation?',
      answer: 'German Solar International is ranked among the top Tier-1 solar and battery storage EPC companies in Kenya. We specialize in engineering German-standard solar photovoltaic (PV) and liquid-cooled LiFePO4 battery energy storage systems (BESS) for commercial, industrial, agricultural, and residential facilities. Our in-house licensed EPRA (Energy and Petroleum Regulatory Authority) engineers provide end-to-end site audits, custom PVsyst simulations, local utility permitting, zero-CAPEX PPA options, and 24/7 remote SCADA monitoring.',
      tags: ['best solar company', 'epc', 'kenya', 'installers', 'nairobi'],
    },
    {
      id: 2,
      question: 'How much does solar system installation cost in Kenya?',
      answer: 'Solar installation costs in Kenya depend on your energy consumption profile, peak daytime load, and battery backup requirements. Typical commercial rooftop solar PV systems range from KES 85,000 to KES 120,000 per kWp installed, with levelized costs of energy (LCOE) as low as KES 10–14 per kWh—representing a 30% to 50% discount compared to commercial grid tariffs. For utility-grade BESS storage, modular solutions start around KES 42,000 per kWh of usable LiFePO4 capacity. Alternatively, our Zero-CAPEX PPA financing allows eligible businesses to install systems with zero upfront expenditure.',
      tags: ['cost', 'price', 'solar installation cost', 'rates', 'quote'],
    },
    {
      id: 3,
      question: 'What are solar panel prices and solar battery prices in Kenya?',
      answer: 'High-efficiency Tier-1 N-Type TOPCon bifacial solar panels currently range between KES 14,000 and KES 22,000 per 550W–600W panel depending on volume and warranty terms. High-cycle LiFePO4 (Lithium Iron Phosphate) server-rack batteries (e.g. 5.12 kWh / 100Ah 48V) average KES 180,000 to KES 240,000, while heavy-duty C&I liquid-cooled battery cabinets (100 kWh to 1 MWh) are priced on project engineering basis with 6,000+ cycle warranties and sub-20ms micro-UPS transfer.',
      tags: ['solar panel prices', 'solar battery prices', 'lifepo4', 'topcon', 'prices in kenya'],
    },
    {
      id: 4,
      question: 'What size solar system do I need for my home or business?',
      answer: 'System sizing is determined by logging your 24-hour kilowatt-hour (kWh) demand curve and peak kilowatt (kW) draw. A medium commercial facility running 150 kW peak daytime demand with 4 hours of night-time critical backup typically requires a 250 kWp solar PV array and a 600 kWh LiFePO4 BESS. We use high-precision dataloggers during our free site assessment to avoid undersizing or wasteful oversizing.',
      tags: ['sizing', 'kw', 'kwh', 'bess capacity', 'load'],
    },
    {
      id: 5,
      question: 'What is the difference between on-grid, off-grid and hybrid solar systems?',
      answer: 'On-grid (grid-tied) systems work in direct parallel with the utility grid to offset daytime electricity costs; however, standard grid-tied inverters automatically shut down during power blackouts for anti-islanding safety. Off-grid systems operate completely independently of the utility grid, relying entirely on solar PV and large battery banks (ideal for remote agricultural farms and lodges). Hybrid systems combine the best of both worlds: they sync with the grid to maximize savings, while our sub-20ms microgrid inverters form an independent microgrid instantly during blackouts to power your facility seamlessly without machinery rebooting.',
      tags: ['on-grid', 'off-grid', 'hybrid', 'microgrid', 'grid-tied'],
    },
    {
      id: 6,
      question: 'Do you install solar systems for homes, businesses and factories?',
      answer: 'Yes. German Solar International delivers turnkey systems across all three tiers: premium residential villas and apartments requiring silent solar-lithium backup, commercial premises (offices, shopping centers, cold storage, hospitals, schools), and heavy industrial manufacturing plants, tea estates, floriculture, and mining microgrids.',
      tags: ['homes', 'businesses', 'factories', 'commercial', 'industrial'],
    },
    {
      id: 7,
      question: 'Where do you work? Are you a solar company near me in Nairobi, Mombasa or Kisumu?',
      answer: 'We have permanent engineering bases, warehouse inventory, and field service crews in Nairobi, Mombasa, and Kisumu, with regional operations extending to Nakuru, Eldoret, Nanyuki, and coastal resort areas. We also operate subsidiaries in Botswana (Gaborone) and Rwanda (Kigali). If you are anywhere in Kenya or Southern Africa, our engineers can conduct an on-site survey within 48 to 72 hours.',
      tags: ['nairobi', 'mombasa', 'kisumu', 'near me', 'locations', 'kenya'],
    },
    {
      id: 8,
      question: 'What solar products do you supply?',
      answer: 'We supply only Tier-1 tested hardware: N-Type TOPCon and Heterojunction (HJT) bifacial solar PV modules, liquid-cooled containerized BESS (500 kW / 1 MWh), modular outdoor commercial ESS cabinets (30 kW to 261 kWh), hybrid microgrid inverters, bi-directional PCS (Power Conversion Systems), smart solar street lighting, solar thermal water heaters, and cloud SCADA telemetry controllers.',
      tags: ['products', 'hardware', 'inverters', 'panels', 'batteries', 'bess'],
    },
    {
      id: 9,
      question: 'Are lithium solar batteries better than lead-acid batteries?',
      answer: 'Yes, significantly. LiFePO4 (Lithium Iron Phosphate) batteries offer 6,000+ deep cycles (15+ years of daily cycling) compared to just 800–1,200 cycles for tubular/gel lead-acid (2–3 years). LiFePO4 can be safely discharged to 90% Depth of Discharge (DoD) without degradation, charges 4x faster, maintains high round-trip efficiency (96% vs 75%), performs without capacity loss in hot climates, and requires zero acid maintenance.',
      tags: ['lithium', 'lead-acid', 'lifepo4', 'battery comparison', 'cycle life'],
    },
    {
      id: 10,
      question: 'Can solar keep my power on during a blackout?',
      answer: 'Yes, when configured with a hybrid inverter or BESS storage equipped with an automatic static transfer switch (STS). Our systems switch from grid to solar and battery storage in under 20 milliseconds (<20ms). This seamless transition means computers, CNC machines, servers, cold room compressors, and hospital imaging equipment will not shut down, blink, or lose data.',
      tags: ['blackout', 'ups', 'backup', 'power outage', 'seamless transfer'],
    },
    {
      id: 11,
      question: 'Can I get solar without paying upfront?',
      answer: 'Yes. Through our Zero-CAPEX Power Purchase Agreement (PPA) and Asset Lease programs, German Solar International finances 100% of the equipment, engineering, installation, and long-term maintenance. You simply pay for the solar energy generated each month at a fixed tariff guaranteed to be lower than your utility grid tariff, freeing your capital for core business expansion.',
      tags: ['zero-capex', 'ppa', 'financing', 'lease', 'no upfront cost'],
    },
    {
      id: 12,
      question: 'Who maintains the solar system after installation?',
      answer: 'Our dedicated Operations & Maintenance (O&M) engineering division provides continuous 24/7 cloud SCADA monitoring, detecting cell-level voltage irregularities, string underperformance, or dust accumulation in real time. We execute scheduled preventive maintenance, infrared drone thermography, inverter filter cleaning, and rapid response SLAs with guaranteed dispatch times across Kenya.',
      tags: ['maintenance', 'o&m', 'scada', 'monitoring', 'warranty'],
    },
    {
      id: 13,
      question: 'How do I get a solar installation quotation?',
      answer: 'You can request an itemized quotation by clicking "Request Engineering Consultation" on our website or calling +254 777 200 714. If you have your latest electricity bills (KPLC or utility) and an idea of your critical loads, our engineering team can issue a preliminary PVsyst feasibility model and financial proposal within 24 hours, followed by an on-site physical inspection.',
      tags: ['quotation', 'contact', 'call', 'get quotation', 'site survey'],
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar matching video frame 00:09 */}
        <div className="mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search a question, e.g. solar cost, batteries, Mombasa, off-grid"
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all shadow-xs"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {search && (
            <div className="text-xs text-slate-500 mt-2 px-1">
              Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} matching "{search}"
            </div>
          )}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200/70 p-6">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Have a specific engineering or commercial inquiry?
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800"
              >
                Ask Our Solar Engineers Directly
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/90 hover:border-emerald-200 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-[15px] font-semibold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
