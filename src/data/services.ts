export interface Discipline {
  index: string;
  title: string;
  lead: string;
  description: string;
  deliverables: string[];
  metrics: string;
  focusAreas: string[];
}

export const DISCIPLINES: Discipline[] = [
  {
    index: '01',
    title: 'Architectural Engineering & BIM',
    lead: 'Generational built environments engineered with computational structural analysis.',
    description: 'We develop building envelopes and core structural frameworks from initial conceptual sketches through fully parametric BIM Level 3 models. Every beam, joinery connection, and mechanical penetration is coordinated before site ground-breaking.',
    deliverables: [
      'Comprehensive Schematic & Construction BIM Documents',
      'Computational Structural Load & Wind Simulation',
      'Municipal Permitting & Regulatory Entitlement Dossiers',
      'Tender Package & Contractor Quality Assurance Protocols'
    ],
    metrics: '0.00% Spatial Collision Rate Across 42 Projects',
    focusAreas: ['Monolithic Residences', 'Cultural Institutions', 'Commercial Headquarters']
  },
  {
    index: '02',
    title: 'Precision Industrial Prototyping',
    lead: 'Tactile physical products, bespoke architectural hardware, and sensing devices.',
    description: 'Bridging large-scale spatial architecture and hand-held tactile precision. Our prototyping workshop produces CNC-machined titanium hardware, acoustic baffles, and environmental sensors designed for decades of daily physical touch.',
    deliverables: [
      'Industrial Design Language & Ergonomic Surfacing',
      '5-Axis CNC & Direct Metal Laser Sintering (DMLS)',
      'Design for Manufacturability (DFM) Tooling Specifications',
      'Accelerated Cycle & Environmental Stress Testing'
    ],
    metrics: 'Sub-35 Micron Precision Machining Tolerances',
    focusAreas: ['Architectural Hardware', 'Environmental Sensors', 'Custom Lighting Modules']
  },
  {
    index: '03',
    title: 'Carbon-Negative Mass Timber Systems',
    lead: 'Cross-laminated and glulam timber frameworks replacing carbon-intensive concrete.',
    description: 'We lead the transition to biophilic structural mass timber. By engineering hybrid glulam post-and-beam skeletons and CLT shear walls, our buildings lock away hundreds of tons of atmospheric carbon throughout their century-long lifespans.',
    deliverables: [
      'Certified Life Cycle Assessment (LCA) Carbon Accounting',
      'Prefabricated Off-Site Timber Assembly Sequences',
      'Advanced Heavy Timber Fire & Acoustic Engineering',
      'Sustainably Managed Forest Supply Chain Audits'
    ],
    metrics: 'Average -46% Net Embodied Carbon Reduction',
    focusAreas: ['Mass Timber Spans', 'Hybrid Concrete-Timber Frames', 'Passive Thermal Envelopes']
  },
  {
    index: '04',
    title: 'Adaptive Urban Rehabilitation',
    lead: 'Transforming post-industrial monoliths into modern civic and creative complexes.',
    description: 'We preserve historic structural bones while infusing state-of-the-art geothermal mechanical cores, acoustic envelopes, and contemporary circulation. We treat existing embodied structural energy as sacred capital.',
    deliverables: [
      'Non-Destructive Historic Fabric Ultrasonic Testing',
      'Seismic Retrofitting with Concealed Dampers',
      'Thermal Envelope Upgrade Behind Heritage Facades',
      'Adaptive Reuse Spatial Program Repositioning'
    ],
    metrics: '78% Average Embodied Material Preservation',
    focusAreas: ['Heritage Warehouses', 'Mid-Century Civic Assets', 'Industrial Waterfronts']
  }
];
