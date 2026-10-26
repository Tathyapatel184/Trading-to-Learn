export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'civic' | 'industrial';
  location: string;
  year: string;
  image: string;
  area: string;
  materials: string[];
  carbonMetric: string;
  structuralPartner: string;
  summary: string;
  details: {
    program: string;
    envelope: string;
    energyStandard: string;
    accolades: string;
    challengesSolved: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'vestland-pavilion',
    title: 'Vestland Fjord Pavilion',
    subtitle: 'Cantilevered mass timber & low-carbon concrete residence',
    category: 'residential',
    location: 'Vestland, Norway',
    year: '2026',
    image: '/src/assets/images/hero_modern_architecture_1793034175731.jpg',
    area: '6,400 sq ft',
    materials: ['Glulam Pine', 'Board-Formed Concrete', 'Triple Low-E Glazing'],
    carbonMetric: '-48% Embodied Carbon vs Baseline',
    structuralPartner: 'Nordic Silvics Engineering Group',
    summary: 'A panoramic coastal pavilion anchored directly into the granite bedrock above the fjord line. Features a 14-meter clear cantilever living hall engineered with tensioned timber beams.',
    details: {
      program: 'Private residential compound and maritime observatory',
      envelope: 'Thermally isolated curtain wall with aerogel perimeter insulation',
      energyStandard: 'Passive House Plus (Net Positive Annual Energy Generation)',
      accolades: 'Nordic Architectural Prize Finalist 2026 · European Timber Structure of the Year',
      challengesSolved: 'Engineered a wind-shear damping system to withstand severe Atlantic gales without bulky interior columns.'
    }
  },
  {
    id: 'monterey-promontory',
    title: 'Monterey Promontory Monolith',
    subtitle: 'Brutalist cliffside residence with integrated infinity tidal pool',
    category: 'residential',
    location: 'Big Sur, California',
    year: '2025',
    image: '/src/assets/images/project_residential_monolith_1793034176352.jpg',
    area: '8,200 sq ft',
    materials: ['Charcoal Volcanic Concrete', 'Western Red Cedar', 'Structural Glass'],
    carbonMetric: '35% Pozzolan Fly-Ash Concrete Mix',
    structuralPartner: 'Pacific Seismic & Structural Labs',
    summary: 'Perched 180 feet above the Pacific surf, this multi-tier monolith steps down the cliff contour. Operable timber louvers offer passive solar regulation throughout marine fog cycles.',
    details: {
      program: 'Four-bedroom cliff residence, oceanfront gallery, and subterranean wine vault',
      envelope: 'Dual-seal structural silicone glazing with custom bronze mullion caps',
      energyStandard: 'Title 24 Net-Zero Performance Standard with 24kW concealed rooftop solar',
      accolades: 'AIA National Housing Honor Award · World Architecture Community Monograph Feature',
      challengesSolved: 'Direct anchoring into fracturing coastal Franciscan melange rock using 24 post-tensioned micropiles.'
    }
  },
  {
    id: 'althea-cultural-center',
    title: 'Althea Contemporary Art Pavilion',
    subtitle: 'Parametric limestone vaulted galleries with daylight diffusing canopies',
    category: 'civic',
    location: 'Basel, Switzerland',
    year: '2025',
    image: '/src/assets/images/project_cultural_pavilion_1793034176592.jpg',
    area: '48,000 sq ft',
    materials: ['Jura Limestone Ashlar', 'Structural Steel Ribs', 'Acid-Etched Optical Glass'],
    carbonMetric: '100% Locally Sourced Aggregates',
    structuralPartner: 'Arup Façade Engineering Zurich',
    summary: 'A civic museum of modern sculpture designed around sweeping parabolic arches. Calibrated light scoops capture indirect north light, eliminating glare on sensitive contemporary canvases.',
    details: {
      program: 'Primary public exhibition halls, acoustic chamber hall, and civic atrium',
      envelope: 'Curved insulated units with ceramic frit micro-dot matrix diffusing 94% UV radiation',
      energyStandard: 'Swiss Minergie-P Eco High Performance Standard',
      accolades: 'Mies Crown Hall Americas Prize Nominee · Swiss Federal Design Citation 2025',
      challengesSolved: 'Achieved acoustic reverberation time under 1.1s across a 22-meter soaring ceiling without visible acoustic panels.'
    }
  },
  {
    id: 'krona-acoustic-sensor',
    title: 'KRONA S7-Acoustic Hardware Suite',
    subtitle: 'Millimeter-machined architectural ambient sensor and mechanical hardware',
    category: 'industrial',
    location: 'Tokyo & San Francisco',
    year: '2026',
    image: '/src/assets/images/project_industrial_hardware_1793034177793.jpg',
    area: 'Precision Hardware Units',
    materials: ['Anodized Aerospace Titanium', 'Sintered Ceramic', 'Gorilla Glass'],
    carbonMetric: 'Cradle-to-Cradle Certified Gold',
    structuralPartner: 'KRONA Advanced Prototyping Division',
    summary: 'An environmental monitoring and acoustic calibration instrument designed to seamlessly integrate into architectural reveals, door assemblies, and wall surfaces.',
    details: {
      program: 'Architectural monitoring hardware for humidity, VOCs, sound pressure, and thermal loads',
      envelope: 'CNC machined 6061-T6 aluminum block with bead-blasted finish and laser nomenclature',
      energyStandard: 'Ultra-low-power BLE & Thread mesh protocol operating 7 years on solid-state battery',
      accolades: 'iF Gold Design Award 2026 · Red Dot Best of the Best in Industrial Design',
      challengesSolved: 'Integrated microphone acoustic chambers and thermal decoupling directly inside a 32mm bezel volume.'
    }
  }
];
