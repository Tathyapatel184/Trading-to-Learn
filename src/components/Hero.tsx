import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

interface HeroProps {
  onRequestConsultation: () => void;
  onExploreEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestConsultation, onExploreEstimator }) => {
  return (
    <section className="relative pt-12 pb-20 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Lead */}
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider uppercase">
            <span>Zurich</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Tokyo</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>San Francisco</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Est. 2018</span>
          </div>

          <h1 
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            className="font-bold tracking-tight text-white leading-[1.08] max-w-4xl text-balance"
          >
            Designing enduring architectural forms and precision physical systems.
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            We integrate carbon-sequestering mass timber engineering, tactile mineral materiality, 
            and millimeter-grade industrial prototyping to create generational built environments.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onRequestConsultation}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreEstimator}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:text-white hover:border-neutral-700 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-neutral-400" />
              <span>Project Scope Estimator</span>
            </button>
          </div>
        </div>

        {/* Hero Dominant Visual Carrier (16:9) */}
        <div className="relative mt-8 group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[16/9] w-full">
          <img
            src="/src/assets/images/hero_modern_architecture_1793034175731.jpg"
            alt="KRONA Fjord Coastal Pavilion showing cantilevered mass timber and board-formed concrete"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          
          {/* Measured Scrim & Caption */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-xs text-neutral-300">
            <div>
              <p className="font-semibold text-white text-sm sm:text-base">Vestland Fjord Residential Pavilion</p>
              <div className="flex items-center gap-2 text-neutral-400 mt-1">
                <span>Vestland, Norway</span>
                <span aria-hidden="true">·</span>
                <span>Completed 2026</span>
                <span aria-hidden="true">·</span>
                <span>Passive House Plus Certified</span>
              </div>
            </div>
            <a 
              href="#projects" 
              className="text-xs font-medium text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-500 whitespace-nowrap"
            >
              View Project Dossier →
            </a>
          </div>
        </div>

        {/* 4-Column Delivery & Performance Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-neutral-800/80">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
              42
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mt-1">
              Completed Monoliths
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Across 8 international jurisdictions
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
              $180M+
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mt-1">
              Capital Constructed
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Verified on-budget execution rate
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
              14
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mt-1">
              International Citations
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              AIA, Red Dot, Mies Crown Hall nominations
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
              99.4%
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mt-1">
              On-Schedule Delivery
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Driven by Level 3 BIM prefabrication
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
