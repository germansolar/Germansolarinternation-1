import React from 'react';
import { GermanSolarLogo } from './GermanSolarLogo';
import { Phone, Mail, MapPin, ArrowUp, ArrowRight, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Bar matching video frame 00:10 */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 rounded-2xl p-6 sm:p-8 border border-emerald-800/40 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to cut your energy costs?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
              Speak with an engineer about solar & storage for your facility.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-emerald-50 active:scale-[0.98] transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Request a consultation</span>
            <ArrowRight className="w-4 h-4 text-emerald-800" />
          </button>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer"
            >
              <GermanSolarLogo variant="light" />
            </button>
            <p className="text-slate-400 leading-relaxed font-normal">
              Solar PV and battery energy storage for commercial, industrial and utility-scale projects
              across East and Southern Africa.
            </p>
          </div>

          {/* Col 2: COMPANY */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  About Us & CSR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('process')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Delivery Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('projects')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('industries')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Industries We Power
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SOLUTIONS */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  C&I Battery Storage
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Solar PV Systems
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  PPA & Leasing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('calculator')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: PRODUCTS */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Containerized BESS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Industrial Cabinets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  WallArk Home Batteries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  TOPCon Solar Panels
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Hybrid Inverters
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: GET IN TOUCH */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="tel:+254777200714"
                  className="inline-flex items-center gap-2 text-white font-mono font-semibold hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>+254 777 200 714</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:germansolarinternational@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors truncate max-w-full"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">germansolarinternational@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Kenya · Botswana · Rwanda</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 German Solar International. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/german-solar-international-codebase.zip"
              download="german-solar-international-codebase.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 hover:text-white hover:bg-emerald-900 transition-colors font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Codebase (.ZIP)</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <span className="italic text-slate-400">
              Powering Progress. Energizing Tomorrow.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

