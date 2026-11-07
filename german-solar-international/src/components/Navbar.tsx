import React, { useState, useEffect } from 'react';
import { GermanSolarLogo } from './GermanSolarLogo';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContact: () => void;
  onOpenCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenContact 
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
        scrolled ? 'border-slate-200/90 shadow-sm' : 'border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center text-left cursor-pointer"
            >
              <GermanSolarLogo />
            </button>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-700">
            <button
              type="button"
              onClick={() => handleNav('solutions')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'solutions'
                  ? 'text-emerald-700 font-semibold'
                  : 'hover:text-emerald-700'
              }`}
            >
              Solutions
            </button>

            <button
              type="button"
              onClick={() => handleNav('products')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'products'
                  ? 'text-emerald-700 font-semibold'
                  : 'hover:text-emerald-700'
              }`}
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => handleNav('calculator')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'calculator'
                  ? 'text-emerald-700 font-semibold'
                  : 'hover:text-emerald-700'
              }`}
            >
              Calculator
            </button>

            <button
              type="button"
              onClick={() => handleNav('process')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'process'
                  ? 'text-emerald-700 font-semibold'
                  : 'hover:text-emerald-700'
              }`}
            >
              Process
            </button>

            <button
              type="button"
              onClick={() => handleNav('projects')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'projects'
                  ? 'text-emerald-700 font-semibold'
                  : 'hover:text-emerald-700'
              }`}
            >
              Projects
            </button>

            {/* "More" Dropdown matching video frames 00:40 & 00:56 */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 250)}
                className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  ['industries', 'about', 'contact'].includes(currentPage)
                    ? 'text-emerald-700 font-semibold'
                    : 'hover:text-emerald-700'
                }`}
                aria-expanded={isMoreOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    isMoreOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'
                  }`}
                />
              </button>

              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    type="button"
                    onMouseDown={() => handleNav('industries')}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors cursor-pointer ${
                      currentPage === 'industries'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-800'
                    }`}
                  >
                    Industries We Power
                  </button>

                  <button
                    type="button"
                    onMouseDown={() => handleNav('about')}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors cursor-pointer ${
                      currentPage === 'about'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-800'
                    }`}
                  >
                    About Us & CSR
                  </button>

                  <button
                    type="button"
                    onMouseDown={() => handleNav('contact')}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors cursor-pointer ${
                      currentPage === 'contact'
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-800'
                    }`}
                  >
                    Contact & Inquiries
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Green Pill Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] transition-all duration-150 shadow-sm shadow-emerald-900/10 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-700"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'home' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleNav('solutions')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'solutions' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Solutions
          </button>
          <button
            type="button"
            onClick={() => handleNav('products')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'products' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => handleNav('calculator')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'calculator' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Calculator
          </button>
          <button
            type="button"
            onClick={() => handleNav('process')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'process' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Process
          </button>
          <button
            type="button"
            onClick={() => handleNav('projects')}
            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === 'projects' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Projects
          </button>
          
          <div className="pt-2 border-t border-slate-100">
            <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase">
              More
            </div>
            <button
              type="button"
              onClick={() => handleNav('industries')}
              className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Industries We Power
            </button>
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About Us & CSR
            </button>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="w-full py-2.5 rounded-full text-sm font-semibold text-white bg-emerald-700 text-center"
            >
              Schedule Engineering Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

