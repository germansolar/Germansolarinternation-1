import React, { useState } from 'react';
import { X, Calculator, Sun, Battery, DollarSign, Fuel, Leaf, ArrowRight, Check } from 'lucide-react';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAudit: (details: string) => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestAudit,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');
  const [monthlySpend, setMonthlySpend] = useState<number>(12000); // USD
  const [peakLoadKw, setPeakLoadKw] = useState<number>(250);
  const [backupHours, setBackupHours] = useState<number>(4);
  const [generatorHoursPerWeek, setGeneratorHoursPerWeek] = useState<number>(15);

  if (!isOpen) return null;

  // Engineering calculations based on East African solar insolation (approx 5.2 PSH - Peak Sun Hours)
  const fxRate = currency === 'KES' ? 130 : 1; // 1 USD = ~130 KES
  const displaySpend = currency === 'KES' ? monthlySpend * 130 : monthlySpend;

  // Sizing recommendations:
  // Recommended PV: roughly 1.6x - 2.0x peak daytime load
  const recommendedPvKw = Math.round(peakLoadKw * 1.8);
  // Recommended BESS: peak load * backup hours * 1.15 (safety factor for DoD)
  const recommendedBessKwh = Math.round(peakLoadKw * backupHours * 1.15);

  // Energy production: PV kW * 5.2 PSH * 365 days * 0.82 system PR
  const annualKwhGenerated = Math.round(recommendedPvKw * 5.2 * 365 * 0.82);

  // Financial savings: Solar displaces ~65-75% of grid tariff + generator fuel
  const tariffPerKwhUsd = 0.18; // approx $0.18/kWh
  const annualGridSavingsUsd = Math.round(annualKwhGenerated * 0.75 * tariffPerKwhUsd);

  // Generator fuel displacement: 1 kWh diesel = ~0.28 L diesel. At $1.50/L:
  const weeklyDieselLiters = Math.round(peakLoadKw * 0.7 * generatorHoursPerWeek * 0.28);
  const annualDieselLitersSaved = weeklyDieselLiters * 52;
  const annualDieselSavingsUsd = Math.round(annualDieselLitersSaved * 1.55);

  const totalAnnualSavingsUsd = annualGridSavingsUsd + annualDieselSavingsUsd;
  const totalAnnualSavingsDisplay = currency === 'KES' ? totalAnnualSavingsUsd * 130 : totalAnnualSavingsUsd;

  // Estimated Turnkey Capex: PV ~$850/kWp, BESS ~$320/kWh installed
  const estimatedCapexUsd = Math.round(recommendedPvKw * 850 + recommendedBessKwh * 320);
  const paybackYears = (estimatedCapexUsd / Math.max(1, totalAnnualSavingsUsd)).toFixed(1);

  // PPA clean tariff comparison
  const ppaTariffDisplay = currency === 'KES' ? 'KES 14.80 / kWh' : '$0.114 / kWh';
  const gridTariffDisplay = currency === 'KES' ? 'KES 23.50 / kWh' : '$0.181 / kWh';

  // CO2 reduction (approx 0.58 kg CO2/kWh displaced)
  const annualCo2Tons = Math.round((annualKwhGenerated * 0.58) / 1000);

  const handleAuditRequest = () => {
    const summary = `Solar PV: ${recommendedPvKw} kWp, BESS: ${recommendedBessKwh} kWh, Monthly Bill: ${currency} ${displaySpend.toLocaleString()}, Backup Hours: ${backupHours}h`;
    onClose();
    onRequestAudit(summary);
  };

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
          <span>Return to Previous View</span>
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

      <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
                <Calculator className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  C&I Solar & BESS Sizing Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Engineering estimation model calibrated for East & Southern African solar irradiance and tariff structures
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Currency Selector */}
        <div className="flex items-center justify-between mt-5 mb-6 bg-slate-50 p-2 rounded-xl border border-slate-200/70">
          <span className="text-xs font-semibold text-slate-600 pl-2">Select Currency:</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('KES')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currency === 'KES' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kenya Shillings (KES)
            </button>
          </div>
        </div>

        {/* Grid Inputs & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Facility Load Profile
            </div>

            {/* Input 1: Peak Facility Load */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Average Daytime Load</span>
                <span className="font-mono text-emerald-800">{peakLoadKw} kW</span>
              </div>
              <input
                type="range"
                min="30"
                max="1500"
                step="10"
                value={peakLoadKw}
                onChange={(e) => setPeakLoadKw(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>30 kW (Light C&I)</span>
                <span>500 kW</span>
                <span>1.5 MW (Industrial)</span>
              </div>
            </div>

            {/* Input 2: Backup Duration */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Required Battery Backup Duration</span>
                <span className="font-mono text-emerald-800">{backupHours} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={backupHours}
                onChange={(e) => setBackupHours(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 hr (UPS ride-through)</span>
                <span>4 hrs (Shift backup)</span>
                <span>12 hrs (Overnight)</span>
              </div>
            </div>

            {/* Input 3: Generator Outage Hours / Week */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Grid Outage / Generator Run Time</span>
                <span className="font-mono text-emerald-800">{generatorHoursPerWeek} hrs / week</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="2"
                value={generatorHoursPerWeek}
                onChange={(e) => setGeneratorHoursPerWeek(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Stable Grid (0 hrs)</span>
                <span>Moderate Outages (15 hrs)</span>
                <span>Severe Grid Issues (50 hrs)</span>
              </div>
            </div>

            {/* Zero-CAPEX PPA Card */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1">
                Zero-CAPEX PPA Option
              </div>
              <p className="text-xs text-emerald-800 mb-3">
                Don’t want capital expenditure? Lock in clean solar power below your current grid tariff with no upfront cost.
              </p>
              <div className="flex items-center justify-between text-xs font-mono font-semibold">
                <span className="text-slate-600">Current Grid Tariff:</span>
                <span className="text-red-700 line-through">{gridTariffDisplay}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono font-bold mt-1">
                <span className="text-emerald-900">German Solar PPA Tariff:</span>
                <span className="text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">{ppaTariffDisplay}</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Recommended System Architecture
              </div>

              {/* Hardware Sizing Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Solar PV Array</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900">
                    {recommendedPvKw} <span className="text-xs font-sans text-slate-500">kWp</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Tier-1 TOPCon Bifacial</div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Battery className="w-3.5 h-3.5 text-emerald-600" />
                    <span>LiFePO4 BESS</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900">
                    {recommendedBessKwh >= 1000 ? (recommendedBessKwh / 1000).toFixed(2) : recommendedBessKwh}{' '}
                    <span className="text-xs font-sans text-slate-500">
                      {recommendedBessKwh >= 1000 ? 'MWh' : 'kWh'}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">Liquid-Cooled Grade-A</div>
                </div>
              </div>

              {/* Financial Metrics */}
              <div className="space-y-2.5 bg-white rounded-xl p-4 border border-slate-200/80 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Estimated Annual Savings:</span>
                  <span className="text-base font-extrabold font-mono text-emerald-700">
                    {currency === 'KES' ? 'KES ' : '$'}
                    {totalAnnualSavingsDisplay.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Diesel Fuel Displaced:</span>
                  <span className="font-mono font-semibold text-slate-800">
                    {annualDieselLitersSaved.toLocaleString()} L / year
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Estimated CAPEX Payback:</span>
                  <span className="font-mono font-semibold text-slate-800">
                    {paybackYears} Years
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">CO2 Emissions Avoided:</span>
                  <span className="font-mono font-semibold text-emerald-800 flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{annualCo2Tons} Tonnes / year</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAuditRequest}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] transition-all shadow-md shadow-emerald-950/10 text-sm cursor-pointer"
              >
                <span>Request Site Assessment & Official Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
