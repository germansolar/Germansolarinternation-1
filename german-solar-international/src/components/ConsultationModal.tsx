import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Building, MapPin, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
  defaultDetails?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Engineering Consultation',
  defaultDetails = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [location, setLocation] = useState('Nairobi, Kenya');
  const [topic, setTopic] = useState(defaultTopic);
  const [notes, setNotes] = useState(defaultDetails);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `GSI-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
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

      <div className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Consultation Request Received
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. A German Solar International senior project engineer will review your facility requirements and contact you within 24 business hours.
            </p>
            <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-mono text-xs text-slate-700 mb-8">
              Reference ID: <span className="font-bold text-emerald-800">{refId}</span>
            </div>
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Direct Engineering Access
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Request Engineering Consultation
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
                Connect directly with our solar PV and BESS microgrid engineers in Nairobi, Gaborone, or Kigali.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Mwangi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254 700 000 000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Facility / Company Name
                  </label>
                  <input
                    type="text"
                    value={facilityName}
                    onChange={(e) => setFacilityName(e.target.value)}
                    placeholder="e.g. Athi River Processing Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  >
                    <option value="Nairobi, Kenya">Nairobi, Kenya</option>
                    <option value="Mombasa, Kenya">Mombasa, Kenya</option>
                    <option value="Kisumu, Kenya">Kisumu, Kenya</option>
                    <option value="Nakuru, Kenya">Nakuru / Rift Valley, Kenya</option>
                    <option value="Gaborone, Botswana">Gaborone, Botswana</option>
                    <option value="Kigali, Rwanda">Kigali, Rwanda</option>
                    <option value="Other Regional">Other (East / Southern Africa)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. 500kW BESS, Rooftop PV, PPA"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Load or Project Notes
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your current power challenges, monthly electricity bill, generator fuel costs, or equipment specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <a
                  href="tel:+254777200714"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-emerald-700"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Immediate help: +254 777 200 714</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Engineering Request</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
