import React, { useState } from 'react';
import { 
  Calculator, 
  Sun, 
  Battery, 
  DollarSign, 
  Fuel, 
  Leaf, 
  ArrowRight, 
  Check, 
  Info,
  ChevronDown,
  Layers
} from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [industry, setIndustry] = useState('Manufacturing');
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');
  const [monthlySpendUsd, setMonthlySpendUsd] = useState(15000);
  const [outageFrequency, setOutageFrequency] = useState<'low' | 'med' | 'severe' | 'offgrid'>('med');
  const [financeType, setFinanceType] = useState<'capex' | 'ppa'>('capex');
  const [showMethodology, setShowMethodology] = useState(true);

  const industries = [
    'Manufacturing',
    'Agri & Cold Storage',
    'Hospital / Clinic',
    'Safari Lodge / Hotel',
    'Commercial Real Estate',
    'Shopping Mall',
    'Mining / Remote',
  ];

  // Load multiplier based on selected industry load profile
  const industryMultipliers: Record<string, { pvRatio: number; bessRatio: number }> = {
    'Manufacturing': { pvRatio: 0.055, bessRatio: 0.098 },
    'Agri & Cold Storage': { pvRatio: 0.058, bessRatio: 0.11 },
    'Hospital / Clinic': { pvRatio: 0.050, bessRatio: 0.12 },
    'Safari Lodge / Hotel': { pvRatio: 0.048, bessRatio: 0.105 },
    'Commercial Real Estate': { pvRatio: 0.045, bessRatio: 0.075 },
    'Shopping Mall': { pvRatio: 0.052, bessRatio: 0.080 },
    'Mining / Remote': { pvRatio: 0.062, bessRatio: 0.13 },
  };

  const mult = industryMultipliers[industry] || { pvRatio: 0.055, bessRatio: 0.098 };

  // Outage factor
  const outageHoursMap = {
    low: 1.5,
    med: 4.5,
    severe: 9.5,
    offgrid: 24.0,
  };
  const outageFactor = outageHoursMap[outageFrequency];

  // Dynamic engineering estimations
  const recommendedPvKw = Math.round(monthlySpendUsd * mult.pvRatio);
  const recommendedBessKwh = Math.round(monthlySpendUsd * mult.bessRatio * (outageFrequency === 'offgrid' ? 1.4 : outageFrequency === 'severe' ? 1.2 : 1.0));

  // Annual savings: ~62-72% displacement of grid and fuel
  const annualSavingsUsd = Math.round(monthlySpendUsd * 12 * 0.52 + (recommendedBessKwh * outageFactor * 52 * 0.28 * 1.55 * 0.45));
  
  // Diesel displaced
  const dieselDisplacedLiters = Math.round(outageFactor * (recommendedPvKw * 0.22) * 52 * 3.2);
  
  // CO2 offset
  const co2OffsetTons = Math.round((recommendedPvKw * 1650 * 0.58) / 1000);

  // Payback calculation
  const totalCapexEstimate = recommendedPvKw * 850 + recommendedBessKwh * 320;
  const paybackYears = (totalCapexEstimate / Math.max(1, annualSavingsUsd)).toFixed(1);

  // Currency conversions
  const fx = currency === 'KES' ? 130 : 1;
  const displaySpend = monthlySpendUsd * fx;
  const displaySavings = annualSavingsUsd * fx;

  const handleRequestStudy = () => {
    const summary = `Facility: ${industry}, Monthly Spend: ${currency} ${displaySpend.toLocaleString()}, Outage: ${outageFrequency}, Model: ${financeType.toUpperCase()}, Sizing: ${recommendedPvKw} kWp Solar + ${recommendedBessKwh} kWh BESS`;
    onOpenConsultation('Feasibility Study Request (Sizing Calculator)', summary);
  };

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:19 */}
      <section className="bg-slate-50/70 border-b border-slate-100 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
            <button 
              type="button" 
              onClick={() => onNavigate('home')} 
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              HOME
            </button>
            {' / '}
            <span className="text-emerald-800">SOLAR & STORAGE CALCULATOR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Commercial Solar PV & BESS Sizing Calculator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Estimate your required solar array size, battery energy storage capacity, annual electricity
            savings, diesel fuel displacement, and capital payback period in real time.
          </p>
        </div>
      </section>

      {/* Main Calculator Engine Section */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              ENGINEERING & FEASIBILITY TOOL / ZERO OBLIGATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Solar PV & BESS Sizing & Savings Calculator
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Estimate the ideal solar array capacity, battery storage size, diesel fuel displacement, and capital
              payback period tailored to your facility's operating demand.
            </p>
          </div>

          {/* Two-Column Interactive Calculator Layout matching frame 00:20 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: 1. Enter Your Facility Energy Profile */}
            <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                1. Enter Your Facility Energy Profile
              </h3>

              {/* Facility Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  INDUSTRY / FACILITY TYPE
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        industry === ind
                          ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Electricity & Diesel Spend */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    CURRENT MONTHLY ELECTRICITY & DIESEL SPEND
                  </label>
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setCurrency('USD')}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                        currency === 'USD' ? 'bg-emerald-700 text-white' : 'text-slate-500'
                      }`}
                    >
                      $ USD
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency('KES')}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                        currency === 'KES' ? 'bg-emerald-700 text-white' : 'text-slate-500'
                      }`}
                    >
                      KES
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-2xl font-extrabold font-mono text-emerald-800">
                    {currency === 'KES' ? 'KES ' : '$'}
                    {displaySpend.toLocaleString()} <span className="text-xs font-sans text-slate-500 font-normal">/ mo</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="2000"
                  max="80000"
                  step="1000"
                  value={monthlySpendUsd}
                  onChange={(e) => setMonthlySpendUsd(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>{currency === 'KES' ? 'KES 260K' : '$2,000'}</span>
                  <span>{currency === 'KES' ? 'KES 5.2M' : '$40,000'}</span>
                  <span>{currency === 'KES' ? 'KES 10.4M+' : '$80,000+'}</span>
                </div>
              </div>

              {/* Grid Outage Frequency / Generator Run Time */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  GRID OUTAGE FREQUENCY / GENERATOR RUN TIME
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setOutageFrequency('low')}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      outageFrequency === 'low'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>Low</div>
                    <div className="text-[10px] opacity-80 mt-0.5">0-2 hrs/day</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOutageFrequency('med')}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      outageFrequency === 'med'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>Med</div>
                    <div className="text-[10px] opacity-80 mt-0.5">3-6 hrs/day</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOutageFrequency('severe')}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      outageFrequency === 'severe'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>Severe</div>
                    <div className="text-[10px] opacity-80 mt-0.5">7-12 hrs/day</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOutageFrequency('offgrid')}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      outageFrequency === 'offgrid'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>Off-Grid</div>
                    <div className="text-[10px] opacity-80 mt-0.5">24h Island</div>
                  </button>
                </div>
              </div>

              {/* Preferred Acquisition Structure */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  PREFERRED ACQUISITION STRUCTURE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFinanceType('capex')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      financeType === 'capex'
                        ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/20 shadow-xs'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Direct Turnkey EPC (CAPEX)</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Direct CAPEX ownership and 10-yr warranty</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFinanceType('ppa')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      financeType === 'ppa'
                        ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/20 shadow-xs'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Zero-CAPEX PPA (OPEX)</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">We finance & install; you pay lower kWh</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: 2. Recommended Engineering Sizing matching frame 00:20 */}
            <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    2. Recommended Engineering Sizing
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                    Tier-1 Architecture
                  </span>
                </div>

                {/* Sizing Result Tiles (PV kWp + BESS kWh) */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>Solar PV Capacity</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                      {recommendedPvKw}{' '}
                      <span className="text-xs font-sans text-slate-500 font-normal">kWp</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Tier-1 TOPCon Bifacial Arrays</div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Battery className="w-3.5 h-3.5 text-emerald-600" />
                      <span>BESS Storage Capacity</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                      {recommendedBessKwh}{' '}
                      <span className="text-xs font-sans text-slate-500 font-normal">kWh</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">LiFePO4 Modular Pack / Cabinet</div>
                  </div>
                </div>

                {/* Financial Outcome Tiles (Annual Savings + Est Payback) */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/90 shadow-xs">
                    <div className="text-xs font-semibold text-emerald-800 mb-1">
                      Estimated Annual Savings
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-900">
                      {currency === 'KES' ? 'KES ' : '$'}
                      {displaySavings.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-emerald-700 mt-1">
                      Based on ~68% grid & fuel reduction
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                    <div className="text-xs font-semibold text-slate-500 mb-1">
                      Est. Payback Period
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                      {paybackYears}{' '}
                      <span className="text-xs font-sans text-slate-500 font-normal">Years</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Standard asset lifespan 25+ years
                    </div>
                  </div>
                </div>

                {/* Diesel displaced & CO2 offset readouts */}
                <div className="grid grid-cols-2 gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 mb-6 text-xs">
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">DIESEL FUEL DISPLACED</div>
                      <div className="font-mono font-bold text-slate-900">{dieselDisplacedLiters.toLocaleString()} L / yr</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">ESTIMATED CO2 OFFSET</div>
                      <div className="font-mono font-bold text-emerald-800">{co2OffsetTons.toLocaleString()} Tons / yr</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleRequestStudy}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all text-xs sm:text-sm cursor-pointer"
                >
                  <span>Request Feasibility Study with This Sizing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  Our engineering team will generate a site-specific PVsyst yield model and formal BOQ.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Calculation Methodology & Standards Accordion (frame 00:21) */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
            <button
              type="button"
              onClick={() => setShowMethodology(!showMethodology)}
              className="w-full flex items-center justify-between text-left text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Calculation Methodology & Standards</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMethodology ? 'rotate-180' : ''}`} />
            </button>

            {showMethodology && (
              <div className="pt-3 mt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-normal">
                Estimates are calculated using regional solar irradiation constants for East and Southern Africa (approx. 5.2 - 5.8 Peak Sun Hours/day), Tier-1 N-Type TOPCon bifacial generation models with 15% rear-side albedo boost, LiFePO4 round-trip efficiency of 92%, and average diesel generator fuel consumption of 0.28 liters/kWh delivered. For a formal PVsyst bankable report, contact our engineering team.
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
