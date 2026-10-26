export interface CaseStudy {
  id: string;
  project: string;
  location: string;
  typology: string;
  client: string;
  clientRole: string;
  clientCompany: string;
  quote: string;
  headlineMetric: string;
  headlineContext: string;
  secondaryMetrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  timeline: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-vestland',
    project: 'Vestland Fjord Residential Compound',
    location: 'Vestland, Norway',
    typology: 'High-Exposure Coastal Mass Timber',
    client: 'Henrik Vang-Petersen',
    clientRole: 'Managing Trustee',
    clientCompany: 'Sogn Coastal Heritage Foundation',
    quote: 'KRONA engineered a structure that feels as ancient and permanent as the fjord cliff itself, yet operates at net-positive annual solar and geothermal output. Their precision eliminated months of site adjustments.',
    headlineMetric: '-48% Embodied Carbon',
    headlineContext: 'Measured against Norwegian TEK17 baseline residential building codes',
    secondaryMetrics: [
      { label: 'Site Weather Delays', value: '0 Days' },
      { label: 'Cantilever Span', value: '14.2 Meters' },
      { label: 'Energy Self-Sufficiency', value: '118% Annual' }
    ],
    challenge: 'Building a 6,400 sq ft modern residence on an isolated marine promontory subject to 120 km/h squalls and strict regional conservation bylaws prohibiting heavy road excavation.',
    solution: 'Designed an off-site pre-cut mass timber post-and-beam system delivered by maritime barge. Foundations utilized 16 post-tensioned rock anchors drilled directly into native granite without blasting.',
    timeline: '18 Months from Initial Sketch to Occupancy'
  },
  {
    id: 'case-althea',
    project: 'Althea Contemporary Art Pavilion',
    location: 'Basel, Switzerland',
    typology: 'Civic Cultural Institution',
    client: 'Elena Rossi-Kaufmann',
    clientRole: 'Director of Capital Projects',
    clientCompany: 'Basel Fine Arts Trust',
    quote: 'The acoustic control and natural daylight modulation in the grand gallery allow delicate 20th-century tempera works and live orchestral acoustics to coexist in the same volumetric space.',
    headlineMetric: '$4.2M Budget Savings',
    headlineContext: 'Achieved through parametric stone optimization and zero change-orders',
    secondaryMetrics: [
      { label: 'Acoustic RT60 Time', value: '1.08 Seconds' },
      { label: 'Natural Daylight Factor', value: '94% Diffuse' },
      { label: 'Visitor Capacity', value: '1,400 / Hour' }
    ],
    challenge: 'Curators required zero direct sunlight on fragile art collections while the civic council mandated an open, daylit public forum that could host evening chamber concerts.',
    solution: 'Constructed an array of self-supporting parabolic Jura limestone vaults with north-facing aerogel clerestories that scatter sunlight evenly regardless of sun angle.',
    timeline: '24 Months Total Design & Construction'
  },
  {
    id: 'case-krona-hardware',
    project: 'KRONA S7 Architectural Sensing Array',
    location: 'San Francisco & Tokyo',
    typology: 'Precision Built-Environment Hardware',
    client: 'Marcus Chen',
    clientRole: 'Head of Workplace Design & Real Estate',
    clientCompany: 'Meridian Global Technology Campus',
    quote: 'Most building sensors look like plasticky smoke alarms glued to the wall. The KRONA hardware feels like a luxury Swiss timepiece that delivers lab-grade environmental telemetry.',
    headlineMetric: '35μm Machining Tolerance',
    headlineContext: 'Solid Grade 5 Titanium billet housing with hidden sub-millimeter intake channels',
    secondaryMetrics: [
      { label: 'Battery Lifespan', value: '7.2 Years' },
      { label: 'Air Sampling Rate', value: 'Every 30 Sec' },
      { label: 'Hardware Return Rate', value: '0.04%' }
    ],
    challenge: 'Corporate architectural clients rejected standard commercial thermostat and air sensors because they broke the visual rhythm of clean monolithic concrete and wood walls.',
    solution: 'Developed a flush-mount titanium sensor suite with magnetic quick-release chassis, wireless encrypted mesh networking, and custom haptic rotary dials.',
    timeline: '9 Months from Industrial Prototype to Mass Production'
  }
];
