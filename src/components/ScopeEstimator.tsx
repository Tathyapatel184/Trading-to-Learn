import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Copy, Check, Info } from 'lucide-react';

interface ScopeEstimatorProps {
  onApplyEstimate: (estimateSummary: {
    typology: string;
    scale: number;
    budgetFormatted: string;
    timeline: string;
    carbonOffset: string;
    materialsTier: string;
    siteCondition: string;
  }) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onApplyEstimate }) => {
  const [typology, setTypology] = useState<'residential' | 'cultural' | 'commercial' | 'hardware'>('residential');
  const [sqft, setSqft] = useState<number>(6500);
  const [hardwareUnits, setHardwareUnits] = useState<number>(5000);
  const [materialTier, setMaterialTier] = useState<'standard' | 'timber' | 'monolith'>('timber');
  const [performanceStandard, setPerformanceStandard] = useState<'standard' | 'passive' | 'netzero'>('passive');
  const [siteCondition, setSiteCondition] = useState<'urban' | 'coastal' | 'remote'>('coastal');
  const [copied, setCopied] = useState<boolean>(false);
  const sliderId = useId();

  // Calculation formulas
  const baseRates: Record<string, number> = {
    residential: 420,
    cultural: 580,
    commercial: 460,
    hardware: 135 // Per unit base cost
  };

  const materialMultipliers: Record<string, number> = {
    standard: 1.0,
    timber: 1.15,
    monolith: 1.28
  };

  const performanceMultipliers: Record<string, number> = {
    standard: 1.0,
    passive: 1.09,
    netzero: 1.18
  };

  const siteMultipliers: Record<string, number> = {
    urban: 1.0,
    coastal: 1.22,
    remote: 1.35
  };

  let totalEstimatedCost = 0;
  let minCost = 0;
  let maxCost = 0;
  let estimatedMonths = '12 - 16';
  let carbonTons = 0;

  if (typology === 'hardware') {
    const unitRate = baseRates.hardware * (materialTier === 'monolith' ? 1.35 : 1.0);
    const toolingFixed = 85000;
    totalEstimatedCost = toolingFixed + hardwareUnits * unitRate;
    minCost = Math.round(totalEstimatedCost * 0.92);
    maxCost = Math.round(totalEstimatedCost * 1.12);
    estimatedMonths = '8 - 12';
    carbonTons = Math.round(hardwareUnits * 0.012);
  } else {
    const ratePerSqft =
      baseRates[typology] *
      materialMultipliers[materialTier] *
      performanceMultipliers[performanceStandard] *
      siteMultipliers[siteCondition];

    totalEstimatedCost = sqft * ratePerSqft;
    minCost = Math.round(totalEstimatedCost * 0.92);
    maxCost = Math.round(totalEstimatedCost * 1.15);

    if (sqft < 5000) {
      estimatedMonths = '12 - 16';
    } else if (sqft < 15000) {
      estimatedMonths = '16 - 22';
    } else {
      estimatedMonths = '22 - 32';
    }

    // Carbon reduction calculation (metric tons of CO2e avoided/sequestered)
    const carbonFactor = materialTier === 'timber' ? 0.048 : materialTier === 'monolith' ? 0.025 : 0.018;
    carbonTons = Math.round(sqft * carbonFactor);
  }

  const formatCurrency = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(2)}M`;
    }
    return `$${Math.round(val / 1000).toLocaleString()}k`;
  };

  const budgetFormatted = `${formatCurrency(minCost)} – ${formatCurrency(maxCost)}`;

  const typologyLabels: Record<string, string> = {
    residential: 'Private Monolith Residence',
    cultural: 'Civic Cultural Institution',
    commercial: 'Commercial / Studio HQ',
    hardware: 'Precision Hardware System'
  };

  const materialLabels: Record<string, string> = {
    standard: 'Standard High-Spec Envelope',
    timber: 'Carbon-Negative Mass Timber Frame',
    monolith: 'Bespoke Monolith Stone & Cast Concrete'
  };

  const handleCopy = () => {
    const summaryText = `KRONA PROJECT SCOPE ESTIMATION
Typology: ${typologyLabels[typology]}
Scale: ${typology === 'hardware' ? `${hardwareUnits.toLocaleString()} Units` : `${sqft.toLocaleString()} Sq Ft`}
Estimated Budget Range: ${budgetFormatted}
Horizon: ${estimatedMonths} Months
Carbon Abatement: ~${carbonTons} Metric Tons CO2e
Material Specification: ${materialLabels[materialTier]}
Site Topography: ${siteCondition.toUpperCase()}
Generated on kronastudio.com`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApply = () => {
    onApplyEstimate({
      typology: typologyLabels[typology],
      scale: typology === 'hardware' ? hardwareUnits : sqft,
      budgetFormatted,
      timeline: `${estimatedMonths} Months`,
      carbonOffset: `${carbonTons} Metric Tons CO2e`,
      materialsTier: materialLabels[materialTier],
      siteCondition: siteCondition.toUpperCase()
    });
  };

  return (
    <section id="estimator" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Parametric Feasibility Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Interactive Project Scope & Budget Calculator.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Estimate baseline capital requirements, structural carbon abatement, and delivery milestones 
            grounded in our historical cost databases and regional supply chains.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
            
            {/* 1. Typology Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                01. Project Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: 'residential', label: 'Residence' },
                  { key: 'cultural', label: 'Cultural' },
                  { key: 'commercial', label: 'Commercial' },
                  { key: 'hardware', label: 'Hardware' }
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => setTypology(item.key as any)}
                    className={`px-3 py-2.5 text-xs font-medium rounded-md border text-center transition-all cursor-pointer ${
                      typology === item.key
                        ? 'border-white bg-white text-neutral-950 font-semibold shadow-sm'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={sliderId} className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  02. Scale & Physical Volume
                </label>
                <span className="text-sm font-bold text-white font-mono tabular-nums">
                  {typology === 'hardware' 
                    ? `${hardwareUnits.toLocaleString()} Production Units` 
                    : `${sqft.toLocaleString()} Gross Sq Ft`}
                </span>
              </div>

              {typology === 'hardware' ? (
                <input
                  id={sliderId}
                  type="range"
                  min={500}
                  max={25000}
                  step={500}
                  value={hardwareUnits}
                  onChange={(e) => setHardwareUnits(Number(e.target.value))}
                  className="w-full accent-white bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
              ) : (
                <input
                  id={sliderId}
                  type="range"
                  min={2500}
                  max={45000}
                  step={500}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full accent-white bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
              )}

              <div className="flex justify-between text-xs text-neutral-500 font-mono mt-1">
                <span>{typology === 'hardware' ? '500 Units' : '2,500 Sq Ft'}</span>
                <span>{typology === 'hardware' ? '25,000 Units' : '45,000 Sq Ft'}</span>
              </div>
            </div>

            {/* 3. Material Specification Tier */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                03. Structural Envelope & Materials
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { key: 'standard', name: 'High-Spec Composite', detail: 'Architectural steel & concrete baseline' },
                  { key: 'timber', name: 'Mass Timber Frame', detail: 'Glulam post-and-beam · Low embodied carbon' },
                  { key: 'monolith', name: 'Bespoke Monolith', detail: 'Cast-in-place volcanic concrete & stone' }
                ].map(tier => (
                  <button
                    key={tier.key}
                    onClick={() => setMaterialTier(tier.key as any)}
                    className={`p-3 text-left rounded-md border transition-all cursor-pointer ${
                      materialTier === tier.key
                        ? 'border-neutral-400 bg-neutral-800 text-white'
                        : 'border-neutral-800/80 bg-neutral-900/50 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{tier.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{tier.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Energy Performance & Site Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  04. Performance Certification
                </label>
                <select
                  value={performanceStandard}
                  onChange={(e) => setPerformanceStandard(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="standard">Standard High-Efficiency Building Code</option>
                  <option value="passive">Passive House Certified (Net-Positive)</option>
                  <option value="netzero">Living Building Challenge / Net-Zero</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  05. Site Topography & Logistics
                </label>
                <select
                  value={siteCondition}
                  onChange={(e) => setSiteCondition(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="urban">Urban Infill / Standard Topography</option>
                  <option value="coastal">Coastal / Exposed Cliffside Topography</option>
                  <option value="remote">Remote Island / Alpine Conditions</option>
                </select>
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Estimated Investment
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Class 4 Feasibility Model
                </span>
              </div>

              {/* Highlighted Cost Range */}
              <div className="py-6">
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
                  {budgetFormatted}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-2">
                  <span>Target Delivery: <strong className="text-white font-mono">{estimatedMonths} Months</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Direct BIM Oversight</span>
                </div>
              </div>

              {/* Key Quantitative Indicators */}
              <div className="space-y-3.5 py-4 border-t border-b border-neutral-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Carbon Abatement Potential</span>
                  <span className="text-emerald-400 font-mono font-medium">~{carbonTons} t CO₂e Avoided</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Envelope Material Standard</span>
                  <span className="text-white font-medium">{materialLabels[materialTier].split('·')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Permitting Complexity</span>
                  <span className="text-white font-medium">
                    {siteCondition === 'remote' ? 'High (Alpine/Marine)' : siteCondition === 'coastal' ? 'Medium-High (Coastal Commission)' : 'Standard Municipal'}
                  </span>
                </div>
              </div>

              {/* Phase Milestone Breakdown */}
              <div className="pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Capital Distribution by Phase
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-neutral-400">Schematic & Geotechnical Feasibility</span>
                      <span className="font-mono text-neutral-300">15%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-400 h-full w-[15%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-neutral-400">Parametric BIM & Structural Engineering</span>
                      <span className="font-mono text-neutral-300">25%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-300 h-full w-[25%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-neutral-400">Permitting & Regulatory Dossiers</span>
                      <span className="font-mono text-neutral-300">10%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-500 h-full w-[10%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-neutral-400">Prefabrication & Construction Administration</span>
                      <span className="font-mono text-neutral-300">50%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[50%]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
              <button
                onClick={handleApply}
                className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Transfer Parameters to Consultation Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:text-white hover:border-neutral-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                <span>{copied ? 'Estimate Copied to Clipboard' : 'Copy Estimate Summary'}</span>
              </button>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-neutral-500 leading-relaxed">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Estimates are indicative benchmarks based on recent European and North American projects and do not constitute a binding architectural tender.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
