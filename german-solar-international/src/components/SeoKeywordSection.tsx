import React from 'react';
import { Phone, Calculator, ArrowRight, FileSpreadsheet, MapPin } from 'lucide-react';

interface SeoSectionProps {
  onOpenQuotation: () => void;
  onOpenCalculator: () => void;
  onSelectTag?: (tag: string) => void;
}

export const SeoKeywordSection: React.FC<SeoSectionProps> = ({
  onOpenQuotation,
  onOpenCalculator,
  onSelectTag,
}) => {
  const handleTagClick = (tag: string) => {
    if (onSelectTag) {
      onSelectTag(tag);
    }
  };

  const installationTags = [
    'Solar installation company',
    'Solar installation services',
    'Home solar installation',
    'Commercial solar installation',
    'Industrial solar installation',
    'On-grid solar systems',
    'Off-grid solar systems',
    'Solar power installation',
    'Solar electricity installation',
    'Solar system installers',
    'Professional solar installers',
  ];

  const productTags = [
    'Solar products',
    'Solar panels',
    'Solar batteries',
    'Solar inverters',
    'Lithium solar batteries',
    'Commercial solar panels',
    'Tier-1 solar panels',
    'Solar backup systems',
    'Solar water heaters',
    'Solar street lights',
    'Solar accessories',
  ];

  const solutionTags = [
    'Solar solutions',
    'Solar power for homes in Kenya',
    'Commercial solar solutions',
    'On-grid solar systems',
    'Off-grid solar systems',
    'Hybrid solar systems',
    'Solar energy solutions',
    'Solar power systems Kenya',
  ];

  const priceTags = [
    'Solar system price in Kenya',
    'Solar panel prices in Kenya',
    'Solar installation prices',
    'Solar system cost estimate',
    'Solar panel installation cost',
    'Solar prices in Kenya',
    'Solar installation quotation',
    'Solar installation cost',
  ];

  return (
    <section id="locations" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title & Introductory Paragraph */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            SOLAR COMPANY IN KENYA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            Solar Companies in Kenya: Solar Installation, Solar Panels, Batteries & Inverters
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            German Solar International is a professional solar installation company in Kenya delivering affordable,
            reliable solar energy solutions for homes, businesses and industry. From solar panel installation and
            hybrid solar systems to lithium solar batteries and solar inverters, our engineers design, supply and
            install solar power systems built to last. Searching for solar companies near me, the best solar
            installers in Nairobi or solar contractors near me? Talk to us for a free site assessment and solar
            installation quotation.
          </p>
        </div>

        {/* 3 Top Cards: Installation services, Products, Energy solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Solar installation services */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Solar installation services
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                Solar system installers you can trust, from small home systems to large industrial solar power installation.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {installationTags.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="inline-block text-[11px] font-medium text-slate-700 bg-slate-100/90 hover:bg-emerald-50 hover:text-emerald-800 rounded-md px-2.5 py-1 transition-colors text-left cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Solar products */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Solar products
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                Quality solar energy products and accessories from leading manufacturers, supplied and fitted with warranty.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {productTags.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="inline-block text-[11px] font-medium text-slate-700 bg-slate-100/90 hover:bg-emerald-50 hover:text-emerald-800 rounded-md px-2.5 py-1 transition-colors text-left cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Solar energy solutions */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Solar energy solutions
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                Solar power for homes in Kenya and for commercial and industrial sites, grid-tied, off-grid or hybrid.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {solutionTags.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="inline-block text-[11px] font-medium text-slate-700 bg-slate-100/90 hover:bg-emerald-50 hover:text-emerald-800 rounded-md px-2.5 py-1 transition-colors text-left cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 2 Wide Cards below: Locations and Prices/Quotation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 4: Solar installation in Kenya: Nairobi, Mombasa, Kisumu */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Solar Installation in Kenya: Nairobi, Mombasa, Kisumu</span>
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                As a company in Kenya we install solar systems across the country, with engineering teams based in Nairobi, Mombasa and Kisumu.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900">Nairobi:</strong> Solar installation Nairobi · Solar panels in Nairobi · Best solar companies in Nairobi
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900">Mombasa:</strong> Solar installation in Mombasa · Solar panels in Mombasa · Coastal marine grade installations
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900">Kisumu:</strong> Solar companies in Kisumu · Solar installation in Kisumu · Western Kenya agricultural mini-grids
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900">Across Kenya:</strong> Solar companies in Kenya · Solar installation in Kenya · Solar systems in Kenya · Affordable solar systems in Kenya
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Solar prices in Kenya and free quotation */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Solar prices in Kenya and free quotation
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                Looking for the solar system price in Kenya, solar panel prices in Kenya or solar battery prices in Kenya?
                Solar installation costs depend on your load, system size and storage. We keep solar installation cost
                transparent with an itemised quotation, so you can compare and choose with confidence. Contact us for
                a free site assessment, solar system quotation or solar installation price estimate.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {priceTags.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="inline-block text-[11px] font-medium text-slate-700 bg-slate-100/90 hover:bg-emerald-50 hover:text-emerald-800 rounded-md px-2.5 py-1 transition-colors text-left cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Action buttons at bottom */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onOpenQuotation}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
              >
                <span>Get solar installation quotation</span>
              </button>

              <button
                type="button"
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Calculate solar ROI</span>
              </button>

              <a
                href="tel:+254777200714"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +254 777 200 714</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
