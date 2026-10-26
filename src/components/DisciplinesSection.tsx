import React, { useState } from 'react';
import { DISCIPLINES, Discipline } from '../data/services';
import { Check, ChevronRight } from 'lucide-react';

interface DisciplinesSectionProps {
  onSelectDiscipline: (title: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectDiscipline }) => {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>(DISCIPLINES[0]);

  return (
    <section id="disciplines" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Integrated Methodologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Four disciplines united under one studio roof.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            By merging civil architectural engineering with sub-millimeter industrial machining, we eliminate the friction 
            between structural scale and intimate physical contact.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Discipline Selector List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {DISCIPLINES.map((discipline) => {
              const isActive = activeDiscipline.index === discipline.index;
              return (
                <div
                  key={discipline.index}
                  onClick={() => setActiveDiscipline(discipline)}
                  className={`p-5 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? 'border-neutral-400 bg-neutral-900/90 text-white shadow-md'
                      : 'border-neutral-800/80 bg-neutral-900/30 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-neutral-400">
                      {discipline.index}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-neutral-600'}`} />
                  </div>
                  
                  <h3 className="text-base font-bold text-white mt-1">
                    {discipline.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                    {discipline.lead}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Discipline Detailed Dossier (7 Cols) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900 p-7 sm:p-9 space-y-6">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Discipline Specification Dossier
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Methodology {activeDiscipline.index} / 04
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeDiscipline.title}
              </h3>
              <p className="text-sm font-medium text-neutral-300 mt-1">
                {activeDiscipline.lead}
              </p>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                {activeDiscipline.description}
              </p>
            </div>

            {/* Benchmark Metric */}
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/60 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Studio Delivery Benchmark</span>
              <span className="text-xs font-mono font-semibold text-white">{activeDiscipline.metrics}</span>
            </div>

            {/* Scope Deliverables */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Included Deliverables & Documentation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeDiscipline.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Typologies */}
            <div className="pt-4 border-t border-neutral-800">
              <span className="text-xs text-neutral-500">Primary Applications: </span>
              <span className="text-xs text-neutral-300 font-medium">{activeDiscipline.focusAreas.join(' · ')}</span>
            </div>

            {/* Inquiry Trigger */}
            <div className="pt-2">
              <button
                onClick={() => onSelectDiscipline(activeDiscipline.title)}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Inquire for {activeDiscipline.title}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
