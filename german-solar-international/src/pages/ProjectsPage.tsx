import React, { useState } from 'react';
import { 
  MapPin, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Globe2, 
  Building2, 
  Sun, 
  Battery 
} from 'lucide-react';

interface ProjectDetail {
  id: string;
  region: 'kenya' | 'botswana' | 'rwanda';
  regionLabel: string;
  location: string;
  category: string;
  title: string;
  pvCapacity: string;
  bessCapacity: string;
  impact: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  deliverySteps: { step: string; title: string; desc: string }[];
}

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [regionFilter, setRegionFilter] = useState<'all' | 'kenya' | 'botswana' | 'rwanda'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: 'nairobi-technofab',
      region: 'kenya',
      regionLabel: 'Kenya',
      location: 'Nairobi Industrial Area, Kenya',
      category: 'C&I Manufacturing',
      title: 'TechnoFab Packaging Industrial BESS & Rooftop PV',
      pvCapacity: '420 kW Solar PV',
      bessCapacity: '1.05 MWh LiFePO4 BESS',
      impact: 'Reduced generator run-time by 82% and eliminated peak demand penalties.',
      image: '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
      gallery: [
        '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
        '/src/assets/images/hero_solar_bess_1793957877232.jpg',
        '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
        '/src/assets/images/solar_technician_training_1794000472159.jpg',
      ],
      overview: 'Industrial packaging and injection molding factory facing frequent grid dips and high peak utility demand tariffs. Installed a turnkey rooftop solar array and containerized liquid-cooled battery microgrid.',
      highlights: [
        'Sub-16ms static transfer switch protects sensitive extrusion lines',
        'Direct diesel generator synchronization reduces fuel costs by 82%',
        'Annual power bill savings exceeding $110,000 USD',
      ],
      deliverySteps: [
        { step: '01', title: 'Power Quality Datalogging', desc: 'Captured motor startup inrush curves over a 14-day continuous logging cycle.' },
        { step: '02', title: 'Container Placement', desc: 'Engineered concrete plinth and secondary fire containment beside main factory substation.' },
        { step: '03', title: 'KPLC Interconnection', desc: 'Zero-export protection relays commissioned with national utility sign-off.' },
        { step: '04', title: '24/7 Cloud SCADA', desc: 'Live monitoring of string yields and cell balance with automated alarm dispatch.' },
      ],
    },
    {
      id: 'botswana-farm-corridor',
      region: 'botswana',
      regionLabel: 'Botswana',
      location: 'Gaborone / Francistown Corridor, Botswana',
      category: 'Commercial Farm',
      title: 'Botswana Commercial Solar Farm & Microgrid',
      pvCapacity: '350 kW Solar PV',
      bessCapacity: '700 kWh Containerized BESS',
      impact: 'Provides 100% daytime irrigation energy and keeps cold storage packs powered during night-time.',
      image: '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
      gallery: [
        '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
        '/src/assets/images/solar_water_pumping_1794000470998.jpg',
        '/src/assets/images/hero_solar_bess_1793957877232.jpg',
        '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
      ],
      overview: 'Large-scale commercial grain and vegetable agribusiness requiring reliable pumping and post-harvest cooling across high summer temperatures in Botswana.',
      highlights: [
        'Single-axis ground mounts engineered for extreme desert wind speeds',
        'Powers high-pressure center pivot irrigation pumps directly from solar',
        'Eliminated over 62,500 liters of diesel per season',
      ],
      deliverySteps: [
        { step: '01', title: 'Geotechnical Soil Survey', desc: 'Tested soil resistivity and foundation depths for single-axis tracker piles.' },
        { step: '02', title: 'Liquid-Cooling Optimization', desc: 'Configured dual-circuit BESS HVAC to maintain cells at 24°C in 44°C ambient heat.' },
        { step: '03', title: 'Borehole Sync', desc: 'Synchronized variable speed pump drives with solar generation curves.' },
        { step: '04', title: 'Automated Dust Alert', desc: 'SCADA algorithms trigger panel cleaning based on optical soiling sensors.' },
      ],
    },
    {
      id: 'kigali-diagnostic',
      region: 'rwanda',
      regionLabel: 'Rwanda',
      location: 'Kigali, Rwanda',
      category: 'Commercial Healthcare',
      title: 'Rwanda Diagnostic Hospital Microgrid',
      pvCapacity: '180 kW Rooftop PV',
      bessCapacity: '260 kWh Outdoor ESS Cabinet',
      impact: 'Guaranteed 24/7 clean power with zero voltage dips and 40% operational electricity savings.',
      image: '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
      gallery: [
        '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
        '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
        '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
        '/src/assets/images/hero_solar_bess_1793957877232.jpg',
      ],
      overview: 'Specialized healthcare diagnostic center housing MRI machines, CT scanners, and vaccine cold rooms requiring 100% clean, flicker-free electrical power.',
      highlights: [
        'Total harmonic distortion (THD) kept under 2% for delicate imaging devices',
        'Sub-10 millisecond UPS transfer without equipment recalibration',
        'Solar carport doubles as covered parking for hospital ambulances',
      ],
      deliverySteps: [
        { step: '01', title: 'Hospital Load Segregation', desc: 'Segregated critical surgical circuits from general facility HVAC boards.' },
        { step: '02', title: 'Carport Solar Canopy', desc: 'Erected architectural solar canopy with water drainage gutters.' },
        { step: '03', title: 'Emergency SAT', desc: 'Simulated 10 sudden grid failures under full medical imaging load.' },
        { step: '04', title: 'Hospital Staff Briefing', desc: 'Certified hospital biomedical engineers on emergency bypass operation.' },
      ],
    },
    {
      id: 'maasai-mara-lodge',
      region: 'kenya',
      regionLabel: 'Kenya',
      location: 'Maasai Mara Eco-Lodge, Kenya',
      category: 'Safari / Hospitality',
      title: 'Maasai Mara Eco-Lodge Silent Solar Microgrid',
      pvCapacity: '85 kW Ground Solar',
      bessCapacity: '180 kWh Lithium Storage',
      impact: 'Silent nighttime guest experience, zero generator fumes, and over 100,000 liters of diesel avoided annually.',
      image: '/src/assets/images/maasai_mara_lodge_1794000470029.jpg',
      gallery: [
        '/src/assets/images/maasai_mara_lodge_1794000470029.jpg',
        '/src/assets/images/solar_water_pumping_1794000470998.jpg',
        '/src/assets/images/hero_solar_bess_1793957877232.jpg',
        '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
      ],
      overview: 'Luxury eco-camp situated in a pristine conservation reserve requiring 24/7 silent electricity for luxury guest tents, refrigeration, and electric safari vehicles.',
      highlights: [
        'Completely silent nighttime operation with zero noise pollution for wildlife',
        'Zero generator fuel transport logistics through national park roads',
        'EV safari charging powered 100% from daytime solar surplus',
      ],
      deliverySteps: [
        { step: '01', title: 'Environmental Conservation Audit', desc: 'Engineered wildlife-proof fencing and underground low-impact cabling.' },
        { step: '02', title: 'Hybrid Inverter Integration', desc: 'Integrated automated generator starter that only engages in emergencies.' },
        { step: '03', title: 'Camp Staff Training', desc: 'Trained local camp technicians on daily inverter log inspection.' },
        { step: '04', title: 'Eco-Rating Certification', desc: 'Achieved Gold Eco-Rating certification for sustainable tourism.' },
      ],
    },
    {
      id: 'botswana-residential-cluster',
      region: 'botswana',
      regionLabel: 'Botswana',
      location: 'Phakalane, Gaborone, Botswana',
      category: 'Commercial Rooftop',
      title: 'Botswana Executive Smart Residential Cluster',
      pvCapacity: '65 kWp Rooftop',
      bessCapacity: '90 kWh WallArk LiFePO4',
      impact: 'Zero electricity bills during summer months and full outage immunity.',
      image: '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
      gallery: [
        '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
        '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
        '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
        '/src/assets/images/solar_technician_training_1794000472159.jpg',
      ],
      overview: 'Cluster of interconnected smart residential solar installations equipped with WallArk 15kWh wall-mounted batteries and hybrid inverters in Gaborone.',
      highlights: [
        'Sleek WallArk aesthetics matching luxury architectural finishes',
        'Mobile app control and real-time battery SoC view per homeowner',
        'Zero electricity bills in summer months and full outage immunity',
      ],
      deliverySteps: [
        { step: '01', title: 'Site Survey & Feasibility', desc: 'Measured roof structural condition, grid connection, and client load profile.' },
        { step: '02', title: 'Engineering Design', desc: 'Calculated optimal LiFePO4 storage needed for blackout protection and grid compliance.' },
        { step: '03', title: 'Installation & Commissioning', desc: 'Our crews mounted WallArk systems and synchronized inverters with operator training.' },
        { step: '04', title: 'Monitoring & O&M', desc: '24/7 remote SCADA monitoring and maintenance keeps performance at target.' },
      ],
    },
    {
      id: 'rwanda-agrivoltaics',
      region: 'rwanda',
      regionLabel: 'Rwanda',
      location: 'Eastern Province, Rwanda',
      category: 'Agrivoltaics & Cold Chain',
      title: 'Rwanda Horticulture Cold Chain Solar Hub',
      pvCapacity: '240 kWp Agrivoltaics',
      bessCapacity: '380 kWh Industrial BESS',
      impact: 'Prevented post-harvest crop spoilage and eliminated expensive peak-tariff grid surcharges.',
      image: '/src/assets/images/solar_water_pumping_1794000470998.jpg',
      gallery: [
        '/src/assets/images/solar_water_pumping_1794000470998.jpg',
        '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
        '/src/assets/images/hero_solar_bess_1793957877232.jpg',
        '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
      ],
      overview: 'Integrated agrivoltaic solar canopy powering fresh produce pre-cooling, cold pack rooms, and cold transport logistics for high-value avocado and vegetable exports.',
      highlights: [
        'Elevated structure allows tractor access and crop farming under panels',
        'Cold storage stays at 2°C even during prolonged national grid failures',
        'Direct connection to irrigation drip pump networks',
      ],
      deliverySteps: [
        { step: '01', title: 'Agronomic Light Modeling', desc: 'Modeled crop PAR light penetration under elevated solar arrays.' },
        { step: '02', title: 'Cold Room Compressor Sizing', desc: 'Matched BESS inverter capacity to high initial compressor starting spikes.' },
        { step: '03', title: 'Dual Backup Synchronization', desc: 'Integrated secondary solar backup lines for export compliance.' },
        { step: '04', title: 'Cooperative Training', desc: 'Instructed farming cooperative managers on digital cold room temperature logging.' },
      ],
    },
  ];

  const filtered = projects.filter((p) => {
    if (regionFilter === 'kenya') return p.region === 'kenya';
    if (regionFilter === 'botswana') return p.region === 'botswana';
    if (regionFilter === 'rwanda') return p.region === 'rwanda';
    return true;
  });

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:28 */}
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
            <span className="text-emerald-800">AFRICAN PROJECT GALLERY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Demonstrated African Solar & BESS Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Explore verified installations across Kenya, Botswana, Rwanda, and neighboring regions—from
            industrial packaging factories and hospital zero-break UPS to commercial solar farms and off-grid safari lodges.
          </p>
        </div>
      </section>

      {/* Main Section: Track Record & Footprint matching frame 00:28 - 00:30 */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                TRACK RECORD & FOOTPRINT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Demonstrated Engineering Projects Across Africa
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                From commercial rooftop arrays and high-capacity industrial battery storage to multi-megawatt
                solar farms and off-grid silent eco-lodges in Kenya, Botswana, and Rwanda.
              </p>
            </div>

            {/* Region Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold shrink-0">
              <button
                type="button"
                onClick={() => setRegionFilter('all')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  regionFilter === 'all'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Regions
              </button>
              <button
                type="button"
                onClick={() => setRegionFilter('kenya')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  regionFilter === 'kenya'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kenya
              </button>
              <button
                type="button"
                onClick={() => setRegionFilter('botswana')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  regionFilter === 'botswana'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Botswana
              </button>
              <button
                type="button"
                onClick={() => setRegionFilter('rwanda')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  regionFilter === 'rwanda'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Rwanda
              </button>
            </div>
          </div>

          {/* 6 Projects Grid matching video frames 00:28 - 00:30 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo frame */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-slate-800 shadow-sm border border-slate-200">
                      {proj.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-emerald-800 transition-colors">
                      {proj.title}
                    </h3>

                    {/* Sizing Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono font-semibold">
                      <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        <span>{proj.pvCapacity}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Battery className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{proj.bessCapacity}</span>
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 leading-relaxed font-normal">
                      <strong className="text-slate-900 block mb-0.5">Measurable Impact:</strong>
                      {proj.impact}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span className="text-[11px] text-slate-400 font-mono">Commissioned & Grid-Synchronized</span>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(proj)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Border Multi-Site Portfolio Callout (00:31 - 00:33) */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Expanding Cross-Border Multi-Site Solar Portfolios
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Operating multi-site facilities in Kenya, Tanzania, Uganda, Rwanda, Zambia, and Botswana? We offer unified regional PPA agreements and centralized cloud SCADA fleet management.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Multi-Country Portfolio Inquiry', 'Inquiry for regional multi-site commercial solar & storage PPA deployment.')}
              className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm shrink-0 whitespace-nowrap cursor-pointer"
            >
              Inquire for Multi-Country Portfolio
            </button>
          </div>

        </div>
      </section>

      {/* Case Study Detail Full Page View matching video frames 00:34 - 00:36 */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full animate-in fade-in duration-200 flex flex-col">
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 cursor-pointer transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to African Projects</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Hero Image */}
            <div className="h-72 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 mb-8 border border-slate-200 shadow-sm">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Case Study Headers */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                {activeModalProject.regionLabel.toUpperCase()} CASE STUDY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                {activeModalProject.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{activeModalProject.location}</span>
              </div>
            </div>

            {/* 3 Metric Tiles matching frame 00:34 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">System Architecture</span>
                <span className="text-sm font-bold text-slate-900">{activeModalProject.category}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">PV Generation Capacity</span>
                <span className="text-sm font-mono font-bold text-emerald-800">{activeModalProject.pvCapacity}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Battery Energy Storage</span>
                <span className="text-sm font-mono font-bold text-slate-900">{activeModalProject.bessCapacity}</span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                PROJECT OVERVIEW
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                {activeModalProject.overview}
              </p>
            </div>

            {/* Highlights & Delivery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Engineering Highlights */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  ENGINEERING HIGHLIGHTS
                </div>
                <div className="space-y-3">
                  {activeModalProject.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Delivered It */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  HOW WE DELIVERED IT
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  {activeModalProject.deliverySteps.map((ds, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <strong className="text-slate-900">{ds.step}. {ds.title}: </strong>
                      <span className="text-slate-600">{ds.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Gallery Thumbnails */}
            <div className="mb-10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                PROJECT GALLERY
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModalProject.gallery.map((gImg, idx) => (
                  <div key={idx} className="h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                    <img
                      src={gImg}
                      alt="Gallery thumb"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
              >
                ← Back to Projects List
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeModalProject.title;
                  setActiveModalProject(null);
                  onOpenConsultation(`System Proposal: ${title}`, `Inquiring for a similar configuration to ${title}`);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
              >
                <span>Request Similar System Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
