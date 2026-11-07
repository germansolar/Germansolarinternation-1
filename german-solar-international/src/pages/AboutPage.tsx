import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Globe2, 
  HeartHandshake, 
  Award, 
  Lightbulb, 
  Users, 
  Leaf, 
  FileDown, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Clock,
  Zap,
  Layers
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const coreValues = [
    {
      title: 'Integrity',
      desc: 'We believe lasting relationships are built on honesty, transparency, and accountability in all our dealings.',
      icon: ShieldCheck,
    },
    {
      title: 'Excellence',
      desc: 'We pursue the highest engineering standards, precision German system design, project delivery, and responsive customer service.',
      icon: Award,
    },
    {
      title: 'Innovation',
      desc: 'We embrace emerging lithium battery technologies, smart energy management, and deliver smarter energy systems.',
      icon: Lightbulb,
    },
    {
      title: 'Customer Focus',
      desc: 'Every project begins by understanding operational goals, delivering practical, reliable, and tailored solutions.',
      icon: Users,
    },
    {
      title: 'Sustainability',
      desc: 'We are committed to advancing clean energy, helping clients reduce emissions while protecting the environment for future generations.',
      icon: Leaf,
    },
  ];

  const csrInitiatives = [
    {
      title: 'Clean Energy Access for Clinics & Schools',
      desc: 'Donating and installing solar power systems for rural maternity clinics and primary schools across underserved communities, ensuring vaccine refrigeration and digital learning.',
      metric: '40+ FACILITIES ELECTRIFIED',
      image: '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
    },
    {
      title: 'Technical Skills & Apprenticeships',
      desc: 'Empowering African youth and women through practical hands-on apprenticeships in solar system design, PV installation, BESS electrical maintenance, and SCADA monitoring.',
      metric: '250+ ENGINEERS & TECHNICIANS TRAINED',
      image: '/src/assets/images/solar_technician_training_1794000472159.jpg',
    },
    {
      title: 'Go Green Initiative',
      desc: 'Educating businesses and communities on climate resilience, responsible e-waste recycling, and environmental tree planting partnerships around solar installation sites.',
      metric: '12,000+ NATIVE TREES PLANTED',
      image: '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
    },
    {
      title: 'Solar Water Pumping for Communities',
      desc: 'Deploying high-reliability solar pumping stations providing clean, reliable drinking water and agricultural irrigation to remote villages.',
      metric: '18 COMMUNITY BOREHOLES POWERED',
      image: '/src/assets/images/solar_water_pumping_1794000470998.jpg',
    },
  ];

  const advantages = [
    {
      num: '#1',
      title: 'African Operating Experience',
      tag: 'Tailored for microgrids & climate',
      desc: 'We pride ourselves in delivering infrastructure designed specifically for African temperature extremes, dust, and grid instability.',
    },
    {
      num: '#2',
      title: 'Competitive Direct Pricing',
      tag: 'Direct global manufacturer supply chain',
      desc: 'We supply high-quality Tier-1 renewable energy equipment directly from global manufacturers, drastically reducing CAPEX and project payback periods.',
    },
    {
      num: '#3',
      title: 'Advanced Lithium-Ion & BESS',
      tag: 'High-C & Liquid-Cooled Tech',
      desc: 'Deep specialized expertise in commercial and utility-scale LiFePO4 battery energy storage, liquid-cooled smart containerized megawatt systems, and smart EMS.',
    },
    {
      num: '#4',
      title: '24/7 Operations & Maintenance',
      tag: 'Round-the-clock remote energy monitoring',
      desc: 'Scheduled preventative maintenance, dedicated rapid emergency response, and SLA-backed reporting keep systems performing at peak yield.',
    },
    {
      num: '#5',
      title: 'Rapid Deployment & Speed',
      tag: 'Robust regional logistics & stocks',
      desc: 'With permanent local engineering teams and regional logistics hubs across East and Southern Africa, we execute fast installation and commissioning without delays.',
    },
    {
      num: '#6',
      title: 'Flexible Contract & PPA Structures',
      tag: 'Asset finance, leases & PPAs',
      desc: 'We offer structured financing including Power Purchase Agreements (PPA), on/off balance sheet leases, and BOOT options on arranged models.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:45 */}
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
            <span className="text-emerald-800">ABOUT GERMAN SOLAR INTERNATIONAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Engineering German-Grade Clean Energy in Africa
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Delivering world-class solar PV and energy storage infrastructure to power African industrialization,
            commercial growth, and resilient healthcare.
          </p>
        </div>
      </section>

      {/* Section 1: Company Overview & Our Story matching video frame 00:47 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Box 1: Company Overview */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  COMPANY OVERVIEW
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Built for Africa's Operating Environments
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Reliable energy is the foundation of every successful business. It keeps industries running,
                  hospitals operational, schools connected, and communities moving forward. German Solar
                  International is committed to delivering innovative energy solutions that meet the pressing
                  needs of businesses, industries, and utility infrastructure projects across the continent.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-800">
                More than supplying equipment, we build lasting partnerships founded on trust and quality.
              </div>
            </div>

            {/* Box 2: Our Story */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  OUR STORY
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Seizing Africa's Energy Transformation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Africa's energy future is full of opportunity. As industries expand and demand for reliable energy continues to grow, organizations need energy solutions that are efficient, dependable, and built for the future. German Solar International was established to help meet that demand by providing modern renewable energy technologies that empower businesses to operate more efficiently while reducing their environmental footprint.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Corporate Profile Request', 'Requesting PDF Corporate Profile and Company Credentials.')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Corporate Profile (PDF)</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Global Partnerships matching frame 00:47 */}
      <section className="py-14 lg:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                GLOBAL PARTNERSHIPS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Connecting World-Class Engineering to African Execution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                At German Solar International, we believe that strong partnerships are the foundation of delivering
                world-class renewable energy solutions. We partner with internationally recognized Tier-1 technology
                providers, engineering firms, and financial institutions to deliver reliable, high-performance solar
                and battery energy storage systems.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-emerald-700" />
                <span>International Supply Hubs</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct procurement logistics from Germany, Europe, and global Tier-1 manufacturing centers directly to hubs in Nairobi, Gaborone, and Kigali.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our Guiding Core Values matching frame 00:48 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              OUR GUIDING CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Principles That Govern Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 hover:border-emerald-300 transition-all hover:bg-white hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 4: Social Impact & Go Green Initiative matching frames 00:49 - 00:53 */}
      <section className="py-14 lg:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              SOCIAL IMPACT & GO GREEN INITIATIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Sustainability Beyond the Bottom Line
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              At German Solar International, we believe that responsible business practices contribute to stronger
              communities and a healthier planet. Through our Go Green initiative, we drive real social transformation across Africa.
            </p>
          </div>

          {/* 4 Cards with Images & Impact Metrics matching frames 00:49 - 00:52 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {csrInitiatives.map((csr, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between group hover:border-emerald-300 transition-all"
              >
                <div>
                  <div className="h-44 bg-slate-100 overflow-hidden relative">
                    <img
                      src={csr.image}
                      alt={csr.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                      {csr.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {csr.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 text-center">
                    {csr.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Go Green Banner matching video frame 00:53 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                THE GERMAN SOLAR GO GREEN INITIATIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                “Every step toward clean energy creates a brighter, more resilient future.”
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We partner with corporate clients to not only decarbonize their supply chain, but also co-sponsor youth technician training, local clinic backup power, and circular solar e-waste recycling programs.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-1">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certified Solar Apprentice Program</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Maternity Clinic Electrification</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tree Planting for Every MW Installed</span>
                </span>
              </div>
            </div>

            {/* Right: Audited Carbon Credits Card */}
            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200/80 text-center lg:text-left shrink-0 max-w-sm">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Corporate ESG Reporting
              </span>
              <h4 className="text-lg font-extrabold text-emerald-950 mb-1">
                Audited Carbon Credits
              </h4>
              <p className="text-xs text-emerald-800/90 leading-relaxed mb-4">
                Continuous emission monitoring via cloud SCADA and ISO 14064 verified carbon audit reports for sustainable corporate reporting.
              </p>
              <button
                type="button"
                onClick={() => onOpenConsultation('ESG & Carbon Credits Consultation', 'Inquiring for corporate sustainability reporting and audited carbon credits.')}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm cursor-pointer"
              >
                Inquire About ESG Tracking
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: The GSI Advantage matching frames 00:54 - 00:56 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              THE GSI ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Why Leading Enterprises Partner with German Solar International
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Selecting an energy partner is about more than choosing equipment—it's about working with a team you
              can trust to keep your machines running, your operating costs low, and your capital secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-300 transition-all hover:bg-white hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base font-extrabold font-mono text-emerald-800">
                      {adv.num}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {adv.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {adv.desc}
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
