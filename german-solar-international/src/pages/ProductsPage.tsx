import React, { useState } from 'react';
import { 
  Zap, 
  SunMedium, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  Layers, 
  Cpu, 
  BatteryCharging, 
  Sparkles,
  Info,
  Clock,
  Check
} from 'lucide-react';

interface ProductItem {
  id: string;
  category: 'bess' | 'solar';
  badgeCategory: string;
  name: string;
  subtitle: string;
  image: string;
  certBadge?: string;
  specs: { label: string; value: string }[];
  tags: string[];
  plainWords: string;
  howItWorks: { step: string; title: string; desc: string }[];
  whyItMatters: { title: string; desc: string }[];
  detailedSpecs: { label: string; value: string }[];
  termsExplained: { term: string; explanation: string }[];
  compatibility: string[];
  bestSuitedFor: string[];
}

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onNavigate, 
  onOpenConsultation 
}) => {
  const [filter, setFilter] = useState<'all' | 'bess' | 'solar'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'container-500kw',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'Containerized BESS (500kW / 1MWh)',
      subtitle: 'Heavy-duty liquid-cooled containerized battery energy storage',
      image: '/src/assets/images/hero_solar_bess_1793957877232.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Rated Power', value: '500 kW' },
        { label: 'Storage Capacity', value: '1 MWh / Grade-A' },
        { label: 'Battery Chemistry', value: 'LiFePO4 (LFP) 6000+ Cy' },
        { label: 'Thermal System', value: 'Smart Liquid Cooling' },
      ],
      tags: ['Solar Hybridization', 'Peak Shaving', 'Utility Backup', 'Industrial Estates'],
      plainWords: 'A high-capacity containerized power plant. It stores megawatt-hours of solar energy to eliminate diesel generator use, avoid expensive peak-hour grid tariffs, and guarantee zero power interruptions for large factories and microgrids.',
      howItWorks: [
        { step: '1', title: 'Absorb', desc: 'Captures up to 1 MWh of solar array yield or cheap overnight grid power.' },
        { step: '2', title: 'Regulate', desc: 'Precision liquid cooling keeps every cell within 2.5°C in extreme tropical heat.' },
        { step: '3', title: 'Dispatch', desc: 'Discharges 500kW instantly during utility outages or high-tariff peak windows.' },
      ],
      whyItMatters: [
        { title: 'Saves Massive Fuel', desc: 'Replaces up to 150,000 liters of noisy diesel fuel per year.' },
        { title: 'Sub-20ms Microgrid', desc: 'Industrial equipment never trips or resets during utility failures.' },
        { title: '15-Year Life', desc: 'Grade-A CATL/EVE cells deliver 6,000+ deep cycles at 90% Depth of Discharge.' },
      ],
      detailedSpecs: [
        { label: 'Nominal Energy', value: '1,000 kWh (1 MWh)' },
        { label: 'Continuous Output Power', value: '500 kW AC' },
        { label: 'Enclosure Rating', value: '20ft ISO Container IP55' },
        { label: 'Cooling Method', value: 'Closed-Loop Liquid Glycol' },
        { label: 'Cycle Life', value: '≥ 6,000 Cycles @ 90% DoD' },
        { label: 'Fire Safety', value: 'Stat-X Aerosol + Gas Detection' },
      ],
      termsExplained: [
        { term: 'MWh', explanation: 'Megawatt-hour: 1,000 kilowatt-hours of electrical storage.' },
        { term: 'Liquid Cooling', explanation: 'Circulates coolant through cell plates for longer life in hot climates.' },
        { term: 'DoD', explanation: 'Depth of Discharge: the percentage of stored energy safely used daily.' },
      ],
      compatibility: ['Compatible with all utility-scale grid formers', 'SCADA Modbus TCP/IP integration', 'UL 9540A & NFPA 855 certified'],
      bestSuitedFor: ['Manufacturing Plants', 'Agricultural Cold Storage', 'Mining Microgrids', 'Data Centers'],
    },
    {
      id: 'industrial-cabinet-125kw',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'Industrial Cabinet BESS (125kW / 261.2kWh)',
      subtitle: 'Commercial & industrial all-in-one outdoor energy storage cabinet',
      image: '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Rated Power', value: '125 kW' },
        { label: 'Storage Capacity', value: '261.2 kWh' },
        { label: 'Voltage Range', value: '500V - 850V DC' },
        { label: 'Enclosure', value: 'IP55 Outdoor Rated' },
      ],
      tags: ['Manufacturing Plants', 'Agro-processing Cold Rooms'],
      plainWords: 'An all-in-one outdoor energy storage cabinet. It contains cells, inverter, liquid cooling, and fire suppression in a compact footprint, designed for medium manufacturing and commercial buildings.',
      howItWorks: [
        { step: '1', title: 'Charge', desc: 'Charges quietly from rooftop solar panels or utility during off-peak hours.' },
        { step: '2', title: 'Shield', desc: 'Instantly takes over facility load within 15 milliseconds during a blackout.' },
        { step: '3', title: 'Shave', desc: 'Discharges automatically during peak tariff hours to slash monthly power bills.' },
      ],
      whyItMatters: [
        { title: 'Zero Production Downtime', desc: 'Prevents plastic molds, chillers, and CNC machines from jamming.' },
        { title: 'Outdoor Weatherproof', desc: 'Requires no indoor room; mounts on an outdoor concrete pad.' },
        { title: 'Smart Battery Management', desc: 'Three-tier BMS monitors individual cell voltage and temperature.' },
      ],
      detailedSpecs: [
        { label: 'Nominal Energy', value: '261.2 kWh' },
        { label: 'Rated Power', value: '125 kW' },
        { label: 'DC Voltage Range', value: '500V - 850V' },
        { label: 'Dimensions (W×D×H)', value: '1,350 × 1,150 × 2,200 mm' },
        { label: 'Ingress Protection', value: 'IP55 Weatherproof' },
        { label: 'Cooling', value: 'Industrial Liquid Cooling' },
      ],
      termsExplained: [
        { term: 'All-In-One', explanation: 'Combines battery cells, PCS inverter, and thermal cooling in one cabinet.' },
        { term: 'IP55', explanation: 'Dust-tight and resistant to driving rain and water jets from any direction.' },
      ],
      compatibility: ['Plug-and-play synchronization with commercial switchboards', 'Dual cloud SCADA telemetry'],
      bestSuitedFor: ['Food Processing', 'Pharmaceutical Facilities', 'Commercial Plazas', 'Regional Hospitals'],
    },
    {
      id: 'outdoor-commercial-ess',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'Outdoor Commercial ESS Cabinet (30-60kW / 60-100kWh)',
      subtitle: 'Compact footprint outdoor cabinet for commercial enterprises',
      image: '/src/assets/images/maasai_mara_lodge_1794000470029.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Power Range', value: '30 kW - 60 kW' },
        { label: 'Storage Capacity', value: '60 kWh - 100 kWh' },
        { label: 'Battery Chemistry', value: 'Lithium Iron Phosphate' },
        { label: 'Cooling', value: 'Intelligent HVAC Cooling' },
      ],
      tags: ['Hotels & Safari Lodges', 'Commercial Plazas', 'Educational Institutions'],
      plainWords: 'A high-efficiency outdoor battery cabinet designed for lodges, clinics, hotels, and retail offices seeking silent 24/7 power without generator noise or fuel costs.',
      howItWorks: [
        { step: '1', title: 'Silent Store', desc: 'Stores solar daytime energy quietly with zero exhaust fumes.' },
        { step: '2', title: 'Nighttime Power', desc: 'Runs air conditioning, kitchen chillers, and lights throughout the night.' },
        { step: '3', title: 'Seamless Backup', desc: 'Transfers in <20ms during grid dips to maintain uninterrupted operation.' },
      ],
      whyItMatters: [
        { title: 'Silent Guest Experience', desc: 'Crucial for luxury safari lodges and quiet hospitality venues.' },
        { title: 'Low O&M Cost', desc: 'Zero oil changes, zero spark plugs, and zero diesel delivery logistics.' },
        { title: 'Fast Installation', desc: 'Pre-wired and factory tested for rapid on-site commissioning.' },
      ],
      detailedSpecs: [
        { label: 'Rated Power', value: '30 kW to 60 kW' },
        { label: 'Usable Storage', value: '60 kWh to 100 kWh' },
        { label: 'Cell Type', value: 'Tier-1 Prismatic LiFePO4' },
        { label: 'Transfer Time', value: '< 20 ms' },
        { label: 'Operating Temp', value: '-20°C to +50°C' },
        { label: 'Warranty', value: '10 Years Performance' },
      ],
      termsExplained: [
        { term: 'ESS', explanation: 'Energy Storage System: the integrated battery and management apparatus.' },
        { term: 'HVAC', explanation: 'Integrated climate conditioning unit that keeps cells at optimal temperature.' },
      ],
      compatibility: ['Standard three-phase 415V distribution boards', 'Automatic generator start/stop contacts'],
      bestSuitedFor: ['Boutique Safari Lodges', 'Private Schools', 'Retail Malls', 'Branch Bank Offices'],
    },
    {
      id: 'hps-hybrid-inverter',
      category: 'solar',
      badgeCategory: 'SOLAR GENERATION',
      name: 'HPS Series Commercial Hybrid Inverters (50kW-150kW)',
      subtitle: 'High-output multi-MPPT three-phase hybrid inverter with generator integration',
      image: '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
      specs: [
        { label: 'Max PV Input', value: '75 kW - 225 kW' },
        { label: 'Battery Voltage', value: '300V - 800V DC' },
        { label: 'Transfer Time', value: '< 10 ms (UPS Seamless)' },
        { label: 'MPPT Inputs', value: 'Up to 4 Independent MPPTs' },
      ],
      tags: ['Commercial Microgrids', 'Farms & Lodges'],
      plainWords: 'The brain of your solar microgrid. It directs power simultaneously between your solar array, your battery storage, the national grid, and your backup generator with zero interruption.',
      howItWorks: [
        { step: '1', title: 'Coordinate', desc: 'Directs sunlight into immediate facility loads and battery charging.' },
        { step: '2', title: 'Synchronize', desc: 'Matches voltage and frequency with utility grid or diesel generator.' },
        { step: '3', title: 'Isolate', desc: 'Creates an independent microgrid island in less than 10 milliseconds.' },
      ],
      whyItMatters: [
        { title: 'True Online UPS', desc: 'Sub-10ms transfer is faster than any human eye can blink.' },
        { title: 'Generator Friendly', desc: 'Prevents generator reverse-power damage through active throttling.' },
        { title: 'High DC Voltage', desc: '300-800V DC reduces cable losses and installation wire costs.' },
      ],
      detailedSpecs: [
        { label: 'Rated AC Output', value: '50 kW to 150 kW' },
        { label: 'Max Efficiency', value: '98.5%' },
        { label: 'THDi', value: '< 3% at rated load' },
        { label: 'Grid Code Compliance', value: 'VDE-AR-N 4105, IEEE 1547, EPRA' },
        { label: 'Communication', value: 'RS485, CAN, Ethernet, 4G' },
      ],
      termsExplained: [
        { term: 'MPPT', explanation: 'Maximum Power Point Tracking extracts peak wattage from solar panels.' },
        { term: 'Hybrid Inverter', explanation: 'Handles both solar DC and battery DC in a single high-efficiency box.' },
      ],
      compatibility: ['High-voltage LiFePO4 battery racks', 'Diesel gensets with remote dry contact start'],
      bestSuitedFor: ['Hospitals', 'Packaging Plants', 'Commercial Carports', 'Campuses'],
    },
    {
      id: 'utility-string-inverters',
      category: 'solar',
      badgeCategory: 'SOLAR GENERATION',
      name: 'Utility-Scale Three-Phase String Inverters (100kW–250kW)',
      subtitle: 'Ultra-efficient grid-forming large inverters for large rooftop and ground installations',
      image: '/src/assets/images/botswana_solar_farm_1793957879640.jpg',
      specs: [
        { label: 'Max Efficiency', value: '98.8%' },
        { label: 'MPPT Trackers', value: 'Up to 12 MPPTs' },
        { label: 'DC/AC Ratio', value: 'Up to 1.5 Over-sizing' },
        { label: 'Safety', value: 'IP66 & Anti-PID Integration' },
      ],
      tags: ['Utility Solar Farms', 'Logistics Warehouses', 'Mining Sites'],
      plainWords: 'Heavy-duty string inverters built for massive commercial roofs and ground solar farms. With 98.8% efficiency and 12 independent MPPT trackers, they deliver maximum energy yield.',
      howItWorks: [
        { step: '1', title: 'Track', desc: '12 MPPTs ensure dirty or partially shaded panel strings don’t pull down the rest.' },
        { step: '2', title: 'Convert', desc: 'Converts DC into crisp 415V three-phase AC at 98.8% peak efficiency.' },
        { step: '3', title: 'Protect', desc: 'Internal Smart DC Arc Fault Circuit Interrupters (AFCI) stop electrical fires.' },
      ],
      whyItMatters: [
        { title: 'Maximum Solar Yield', desc: 'Minimizes mismatch losses across complex undulating factory roofs.' },
        { title: 'Zero Export Support', desc: 'Integrates with zero-export power meters to satisfy Kenya Power (KPLC).' },
        { title: 'C5 Anti-Corrosion', desc: 'Can be installed directly in harsh coastal or dusty agricultural areas.' },
      ],
      detailedSpecs: [
        { label: 'Max Output AC Power', value: '110 kVA to 275 kVA' },
        { label: 'Max PV Input Voltage', value: '1,100 V DC' },
        { label: 'Max MPPT Current', value: '30 A per tracker' },
        { label: 'Enclosure Rating', value: 'IP66 Industrial Sealed' },
        { label: 'AFCI Detection', value: 'Integrated AI Arc Fault Detection' },
      ],
      termsExplained: [
        { term: 'Anti-PID', explanation: 'Prevents Potential Induced Degradation, keeping panels operating like new.' },
        { term: 'AFCI', explanation: 'Arc Fault Circuit Interruption shuts down high-voltage arcs in <2.5ms.' },
      ],
      compatibility: ['Standard utility SCADA systems', 'Smart zero-export meter controllers'],
      bestSuitedFor: ['Logistics Warehouses', 'Agribusiness Farms', 'Industrial Sheds', 'Utility IPPs'],
    },
    {
      id: 'pcs-smart-bms',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'Smart BMS 4-Power Power Conversion Systems (PCS)',
      subtitle: 'Industrial bi-directional battery converter with high-frequency bidirectional controls',
      image: '/src/assets/images/nairobi_industrial_pv_1793957878944.jpg',
      specs: [
        { label: 'Balancing', value: 'Active / Passive Intelligent Balancing' },
        { label: 'Protection', value: 'Over-voltage, Over-current, Temp, Short' },
        { label: 'Communication', value: 'CAN / RS485 / TCP/IP' },
        { label: 'Certifications', value: 'IEC 62619, UL 1973, CE' },
      ],
      tags: ['Microgrid Nodes', 'Cold Storage Plants'],
      plainWords: 'High-speed bi-directional power conversion units that manage mega-amps of battery current with millisecond responsiveness for frequency support and peak shaving.',
      howItWorks: [
        { step: '1', title: 'Monitor', desc: 'Monitors voltage on every single lithium cell up to 1,000 times per second.' },
        { step: '2', title: 'Balance', desc: 'Transfers charge between cells to prevent premature battery aging.' },
        { step: '3', title: 'Invert', desc: 'Bi-directionally converts between battery DC and building AC.' },
      ],
      whyItMatters: [
        { title: 'Protects Battery Asset', desc: 'Maximizes the lifespan of expensive battery investments.' },
        { title: 'Sub-Cycle Switching', desc: 'Provides active synthetic inertia to stabilize unstable microgrids.' },
      ],
      detailedSpecs: [
        { label: 'Efficiency', value: '98.6%' },
        { label: 'Overload Capability', value: '110% Continuous, 150% 1 min' },
        { label: 'Response Time', value: '< 5 ms' },
      ],
      termsExplained: [
        { term: 'PCS', explanation: 'Power Conversion System: bi-directional DC-to-AC and AC-to-DC converter.' },
        { term: 'Active Balancing', explanation: 'Smartly moves energy from high cells to lower cells during charge.' },
      ],
      compatibility: ['CATL, EVE, and BYD high-voltage lithium battery racks'],
      bestSuitedFor: ['Utility Scale BESS', 'Islanded Microgrids', 'Factory Backup Systems'],
    },
    {
      id: 'wallark-15kwh',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'WallArk 15kWh Wall-Mounted LiFePO4 Battery',
      subtitle: 'Sleek high-density lithium storage for executive residences & small businesses',
      image: '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Nominal Energy', value: '15.36 kWh' },
        { label: 'Nominal Voltage', value: '51.2V (48V compatible)' },
        { label: 'Parallel Capability', value: 'Up to 15 units parallel' },
        { label: 'Cycle Life', value: '≥ 6,000 Cycles' },
      ],
      tags: ['Luxury Residences', 'Executive Offices', 'Clinics & Pharmacies'],
      plainWords: 'A slim, wall-mounted lithium battery. It saves solar power during the day so lights, fridges and electronics keep working at night or during a blackout, quietly and with no fumes.',
      howItWorks: [
        { step: '1', title: 'Store', desc: 'Solar energy is stored in the battery during the day.' },
        { step: '2', title: 'Convert', desc: 'Hybrid inverter feeds it to your home or small business.' },
        { step: '3', title: 'Seamless', desc: 'If the grid or blackout occurs, the battery takes over automatically.' },
      ],
      whyItMatters: [
        { title: 'Silent Backup', desc: 'No noise, no petrol/diesel fumes, unlike a noisy generator.' },
        { title: 'Clean Look', desc: 'Discreet unit that suits executive homes and modern offices.' },
        { title: 'Use More of Your Solar', desc: 'Store that electricity so you\'re not paying for it after sunset.' },
      ],
      detailedSpecs: [
        { label: 'Nominal Energy', value: '15.36 kWh' },
        { label: 'Nominal Voltage', value: '51.2 V (48V compatible)' },
        { label: 'Parallel Capability', value: 'Up to 15 units parallel' },
        { label: 'Cycle Life', value: '≥ 6,000 cycles @ 80% DoD' },
        { label: 'Display', value: 'HD Touchscreen Status' },
        { label: 'Weight / Mount', value: 'Wall-Mount / Floor Bracket' },
      ],
      termsExplained: [
        { term: 'LiFePO4', explanation: 'A safe lithium chemistry known for long life and thermal stability.' },
        { term: 'BMS', explanation: 'Battery Management System: watches every cell for safety and health.' },
        { term: 'Hybrid Inverter', explanation: 'Manages solar, battery, and grid together in one device.' },
      ],
      compatibility: [
        'Compatible with all leading inverter protocols (Victron, Deye, Growatt, Sunsynk)',
        'Triple-tier active BMS protection (Over-voltage, under-voltage, short-circuit, over-temp)',
        'CE / UN38.3 / IEC 62619 certified for residential and commercial safety',
      ],
      bestSuitedFor: ['Luxury Residences', 'Executive Offices', 'Clinics & Pharmacies', 'Boutique Lodges'],
    },
    {
      id: 'rack-mounted-home',
      category: 'bess',
      badgeCategory: 'BATTERY ENERGY STORAGE',
      name: 'Rack-Mounted Home & SME Battery System (5kWh / 10kWh)',
      subtitle: 'Modular server-rack style storage with hot-swap serviceability',
      image: '/src/assets/images/wallark_wall_battery_1794000469988.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Module Capacity', value: '5.12 kWh / 10.24 kWh' },
        { label: 'Form Factor', value: 'Standard 19" 3U/4U Rack' },
        { label: 'C-Rate', value: '0.5C / 1.0C charge/discharge' },
        { label: 'Usable Capacity', value: '95% Depth of Discharge' },
      ],
      tags: ['Home Solar Storage', 'Telecom BTS Sites', 'Branch Offices'],
      plainWords: 'Modular server-rack batteries that stack neatly into standard 19-inch IT cabinets. Expand capacity easily by adding more modules as energy needs grow.',
      howItWorks: [
        { step: '1', title: 'Modular Stack', desc: 'Slide modules into standard server cabinets from 5kWh up to 100kWh.' },
        { step: '2', title: 'Automatic Link', desc: 'Modules auto-address and balance across CANbus in seconds.' },
        { step: '3', title: 'Expand Anytime', desc: 'Add extra storage years down the line without replacing your system.' },
      ],
      whyItMatters: [
        { title: 'Standard IT Footprint', desc: 'Fits directly in telecom and IT server rooms alongside networking gear.' },
        { title: 'Hot-Swap Maintenance', desc: 'Service individual modules without taking the entire facility down.' },
        { title: 'Economical Scaling', desc: 'Start with 10kWh and scale up to 80kWh as your operations expand.' },
      ],
      detailedSpecs: [
        { label: 'Module Energy', value: '5.12 kWh (100Ah 51.2V)' },
        { label: 'Max Discharge Current', value: '100 A Continuous' },
        { label: 'Weight', value: '45 kg per module' },
        { label: 'Cycle Life', value: '≥ 6,000 Cycles' },
      ],
      termsExplained: [
        { term: '19-inch Rack', explanation: 'Global standardized telecommunications equipment enclosure.' },
        { term: 'C-Rate', explanation: 'Measure of the speed with which a battery is charged or discharged.' },
      ],
      compatibility: ['Standard 48V/51.2V hybrid inverters', 'Telecom DC rectifiers -48V'],
      bestSuitedFor: ['Telecom BTS Towers', 'Branch Banks', 'Home Solar', 'Server Rooms'],
    },
    {
      id: 'topcon-solar-panels',
      category: 'solar',
      badgeCategory: 'SOLAR GENERATION',
      name: 'N-Type TOPCon Bifacial Solar Panels (580W–650W)',
      subtitle: 'Ultra-high efficiency dual-glass solar PV with rear-side albedo gain',
      image: '/src/assets/images/kigali_hospital_solar_1793957879098.jpg',
      certBadge: 'IEC / CE Certified',
      specs: [
        { label: 'Module Power', value: '580W - 650W' },
        { label: 'Efficiency', value: 'Up to 22.8%' },
        { label: 'Bifaciality', value: 'Up to 80% (rear gain)' },
        { label: 'Temp Coeff', value: '-0.30%/°C High heat performance' },
      ],
      tags: ['Commercial Rooftops', 'Ground-Mount Solar Farms', 'Agrivoltaics & Solar Carports'],
      plainWords: 'Next-generation double-glass solar panels that generate power from both sides. With N-Type TOPCon silicon, they resist African heat much better than older panels.',
      howItWorks: [
        { step: '1', title: 'Front Absorption', desc: 'Front face absorbs direct sunlight with 22.8% cell efficiency.' },
        { step: '2', title: 'Rear Albedo Gain', desc: 'Rear face captures up to 25% extra energy reflected from the roof or ground.' },
        { step: '3', title: 'Heat Resistance', desc: 'Low temperature coefficient ensures higher yield on 35°C+ sunny afternoons.' },
      ],
      whyItMatters: [
        { title: 'More Power Per Sq Meter', desc: 'Extracts 15% to 25% more lifetime kilowatt-hours from the same roof area.' },
        { title: 'Dual-Glass Durability', desc: 'Zero micro-cracking and impervious to moisture, dust, and ammonia.' },
        { title: '30-Year Performance', desc: 'Guaranteed 87.4% output retention after 30 years in field operation.' },
      ],
      detailedSpecs: [
        { label: 'Power Range', value: '580W to 650W' },
        { label: 'Cell Type', value: 'N-Type Monocrystalline TOPCon' },
        { label: 'Glass Structure', value: '2.0mm + 2.0mm Dual Heat-Strengthened Glass' },
        { label: 'Frame', value: 'Anodized 35mm Aluminum Alloy' },
        { label: 'Mechanical Load', value: '5400 Pa front, 2400 Pa rear' },
        { label: 'Warranty', value: '12-Year Product, 30-Year Linear Power' },
      ],
      termsExplained: [
        { term: 'TOPCon', explanation: 'Tunnel Oxide Passivated Contact: advanced cell tech that stops energy leakage.' },
        { term: 'Bifacial', explanation: 'Generates power from both the sun-facing front and the reflected-light back.' },
      ],
      compatibility: ['Standard 1500V DC string inverters', 'Universal MC4 connectors'],
      bestSuitedFor: ['Commercial Factory Roofs', 'Ground-Mount Farms', 'Agrivoltaics', 'Carports'],
    },
  ];

  const filteredProducts = products.filter((p) => {
    if (filter === 'bess') return p.category === 'bess';
    if (filter === 'solar') return p.category === 'solar';
    return true;
  });

  return (
    <div className="bg-white text-slate-900 pb-20">
      
      {/* Breadcrumb + Header matching video frame 00:05 */}
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
            <span className="text-emerald-800">PRODUCTS & HARDWARE PORTFOLIO</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Tier-1 Energy Storage & Solar Hardware
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            Direct manufacturer partnerships supplying industrial-grade LiFePO4 battery cabinets,
            megawatt containerized BESS, WallArk 15kWh residential systems, and N-Type TOPCon
            bifacial modules across Africa.
          </p>
        </div>
      </section>

      {/* Main Section: Battery Storage & Solar Hardware Portfolio */}
      <section className="py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                TIER-1 PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Battery Storage & Solar Hardware Portfolio
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We supply high-quality renewable energy technologies sourced from globally recognized manufacturers,
                rigorously tested for high ambient temperatures and harsh grid dynamics across Africa.
              </p>
            </div>

            {/* Filter Tabs matching video frame 00:06 */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold shrink-0">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Hardware ({products.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('bess')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'bess'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ⚡⚡ BESS Storage
              </button>
              <button
                type="button"
                onClick={() => setFilter('solar')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'solar'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ☀ Solar & Inverters
              </button>
            </div>
          </div>

          {/* Product Cards Grid: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image header with IEC/CE badge */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                      {p.badgeCategory}
                    </div>
                    {p.certBadge && (
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-slate-800 shadow-sm border border-slate-200">
                        {p.certBadge}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-emerald-800 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {p.subtitle}
                    </p>

                    {/* Spec List */}
                    <div className="space-y-2 py-3 border-y border-slate-100 text-xs mb-4">
                      {p.specs.map((sp, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-slate-500">{sp.label}</span>
                          <span className="font-mono font-semibold text-slate-900 text-right">{sp.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Applications / Tags */}
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: View Full Specs & Quote */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(p)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer text-center"
                  >
                    View Full Specs
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Product Quote: ${p.name}`, `Inquiry for ${p.name}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer text-center"
                  >
                    Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Global Manufacturer Direct Procurement Guarantee Callout (00:08 - 00:09) */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  Global Manufacturer Direct Procurement Guarantee
                </h4>
                <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                  All components are sourced directly from Tier-1 BloombergNEF listed manufacturers with guaranteed flash test reports and local warranty replacement backing.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Equipment Price List Request', 'Requesting latest Tier-1 BESS and solar equipment catalog with FOB/CIF container pricing.')}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm shrink-0 whitespace-nowrap cursor-pointer"
            >
              Request Equipment Price List
            </button>
          </div>

          {/* Wholesale Equipment Procurement Box (00:09) */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h5 className="text-sm font-bold text-slate-900">
                Looking for wholesale equipment procurement or EPC distribution?
              </h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Contact our supply chain desk for container-volume CIF/DDP quotes and local warranty replacement.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation('Wholesale Supply Chain Desk', 'Requesting wholesale equipment procurement terms and distributor pricing.')}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shrink-0 cursor-pointer"
            >
              Contact Supply Chain Desk
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Full Specs Product Full Page View matching video frames 00:12 - 00:16 */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full animate-in fade-in duration-200 flex flex-col">
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 cursor-pointer transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Hardware Portfolio</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Product Hero Gallery Area */}
            <div className="mb-8">
              <div className="h-72 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 mb-5 border border-slate-200 shadow-sm">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                {selectedProduct.badgeCategory}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                {selectedProduct.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1.5">
                {selectedProduct.subtitle}
              </p>
            </div>

            {/* In Plain Words Box */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <Info className="w-4 h-4" />
                <span>IN PLAIN WORDS</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {selectedProduct.plainWords}
              </p>
            </div>

            {/* How It Works (Numbered steps) */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                HOW IT WORKS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProduct.howItWorks.map((hw, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-2.5">
                      {hw.step}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">{hw.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{hw.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                WHY IT MATTERS FOR YOUR BUSINESS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProduct.whyItMatters.map((wm, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="text-sm font-bold text-emerald-950 mb-1">{wm.title}</div>
                    <p className="text-xs text-emerald-800 leading-relaxed">{wm.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                TECHNICAL SPECIFICATIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {selectedProduct.detailedSpecs.map((ds, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                    <span className="text-slate-500">{ds.label}</span>
                    <span className="font-mono font-semibold text-slate-900">{ds.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms Explained Callout */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 space-y-2.5 text-xs sm:text-sm">
              <div className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                TERMS EXPLAINED
              </div>
              {selectedProduct.termsExplained.map((te, idx) => (
                <div key={idx} className="text-slate-600">
                  <strong className="text-slate-900">{te.term}:</strong> {te.explanation}
                </div>
              ))}
            </div>

            {/* Compatibility & Suited For */}
            <div className="mb-10 text-xs sm:text-sm text-slate-600 space-y-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <strong className="text-slate-800">Compatibility: </strong>
                {selectedProduct.compatibility.join(' · ')}
              </div>
              <div>
                <strong className="text-slate-800">Best Suited For: </strong>
                {selectedProduct.bestSuitedFor.join(', ')}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
              >
                ← Back to Hardware Catalog
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = selectedProduct.name;
                  setSelectedProduct(null);
                  onOpenConsultation(`Hardware Quotation: ${name}`, `Quotation requested for ${name}`);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
