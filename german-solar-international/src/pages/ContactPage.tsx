import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  defaultTopic?: string;
  defaultDetails?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigate, 
  defaultTopic = '', 
  defaultDetails = '' 
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Kenya');
  const [solutionInterest, setSolutionInterest] = useState(defaultTopic || 'Commercial Rooftop PV + BESS Storage');
  const [notes, setNotes] = useState(defaultDetails);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `GSI-ENG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  const commercialFaqs = [
    {
      q: 'How does a Zero-CAPEX Power Purchase Agreement (PPA) work?',
      a: 'Under our PPA model, German Solar International finances, designs, installs, and maintains the solar PV and battery storage system on your facility with zero upfront capital investment from you. You simply pay a monthly fee for the kilowatt-hours generated at a discounted fixed rate lower than the national utility grid tariff.',
    },
    {
      q: 'What battery chemistry do you deploy for commercial energy storage?',
      a: 'We exclusively deploy Tier-1 Lithium Iron Phosphate (LiFePO4 / LFP) cells. LiFePO4 offers the highest thermal stability, safety, and longevity for African operating conditions, providing 6,000+ full charge/discharge cycles at 90% Depth of Discharge with a 10-year warranty.',
    },
    {
      q: 'How fast can a commercial solar and BESS installation be commissioned?',
      a: 'Depending on system size and permitting across East and Southern Africa, commercial rooftop and modular cabinet installations (50kW-500kW) typically take 8 to 14 weeks from final engineering approval. Containerized megawatt systems deploy in 12 to 18 weeks.',
    },
    {
      q: 'Do your systems synchronize with existing diesel backup generators?',
      a: 'Yes. Our hybrid PCS inverters and smart microgrid controllers integrate seamlessly with diesel generators, running the generator only when battery reserves dip during prolonged cloudy periods, cutting diesel fuel consumption by 50% to 85%.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:57 */}
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
            <span className="text-emerald-800">CONTACT & INQUIRIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Contact German Solar International
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Connect directly with our engineering team for technical consultations, site evaluations,
            wholesale equipment pricing, or private utility PPA structuring.
          </p>
        </div>
      </section>

      {/* Main Inquiries Form & Direct Info matching video frames 00:57 - 00:58 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Inquiries Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  DIRECT INQUIRIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
                  Schedule an Engineering Consultation or Request a Proposal
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our solar & BESS engineers will evaluate your facility's load profile, conduct a satellite site
                  assessment, and provide a comprehensive PVsyst yield and financial ROI model.
                </p>
              </div>

              {/* Official Contact Information Card matching video frame 00:58 */}
              <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    OFFICIAL CONTACT INFORMATION
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">
                    GERMAN SOLAR INTERNATIONAL
                  </h3>
                  <p className="text-xs text-slate-500">
                    Renewable Energy Solutions for a Sustainable Future
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">
                      DIRECT TELEPHONE & WHATSAPP
                    </span>
                    <a
                      href="tel:+254777200714"
                      className="font-mono text-base font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>+254 777 200 714</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">
                      OFFICIAL INQUIRY EMAIL
                    </span>
                    <a
                      href="mailto:germansolarinternational@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-emerald-800 hover:underline flex items-center gap-2 truncate"
                    >
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">germansolarinternational@gmail.com</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">
                      REGIONAL OPERATIONS & HUBS
                    </span>
                    <div className="text-slate-700 font-medium flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Under Nairobi, Kenya · Gaborone, Botswana · Kigali, Rwanda · Southern & Western Africa Regional Desks
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Inquiries acknowledged within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Request a Customized Feasibility Proposal Form matching video frame 00:58 - 00:59 */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-md">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Project Submitted for Review
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your project details have been logged in our engineering desk. A designated solar and BESS application engineer will reach out with preliminary analysis.
                  </p>
                  <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-mono text-xs text-slate-700">
                    Tracking Ref: <span className="font-bold text-emerald-800">{ticketId}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Request a Customized Feasibility Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out your facility details to receive an engineering and simulation modeling model.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eng. David Kimani"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Rift Valley Beverages Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. operations@company.co.ke"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +254 700 000 000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Facility Location / Country
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      >
                        <option value="Kenya">Kenya</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Other">Other African Country</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Solution Interest
                      </label>
                      <select
                        value={solutionInterest}
                        onChange={(e) => setSolutionInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      >
                        <option value="Commercial Rooftop PV + BESS Storage">Commercial Rooftop PV + BESS Storage</option>
                        <option value="Utility Container BESS (500kW/1MWh)">Utility Container BESS (500kW/1MWh)</option>
                        <option value="Industrial Cabinet BESS (125kW/261kWh)">Industrial Cabinet BESS (125kW/261kWh)</option>
                        <option value="Zero-CAPEX Power Purchase Agreement (PPA)">Zero-CAPEX Power Purchase Agreement (PPA)</option>
                        <option value="Equipment Procurement & Wholesale">Equipment Procurement & Wholesale</option>
                        <option value="Agribusiness & Cold Storage Microgrid">Agribusiness & Cold Storage Microgrid</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Provide details about your current generator fuel consumption, roof area, or specific energy challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all text-xs sm:text-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project for Engineering Review</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Strict confidentiality: Your data will never be shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Commercial & Technical FAQ matching video frames 00:59 - 01:03 */}
      <section className="py-14 lg:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              COMMERCIAL & TECHNICAL FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Key considerations when planning a commercial solar and battery storage deployment in Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialFaqs.map((cf, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                    {cf.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cf.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
