import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Empirical Evidence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Quantified outcomes across complex sites.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Every architectural drawing and physical module is benchmarked for structural efficiency, 
            embodied carbon suppression, and lifetime cost certainty.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-7 transition-colors hover:border-neutral-700"
              >
                <div>
                  {/* Clean Zero-Pill Metadata */}
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                    <span>{study.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.typology}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {study.project}
                  </h3>

                  {/* Headline Quantified Metric Callout */}
                  <div className="my-6 p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                      {study.headlineMetric}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 leading-snug">
                      {study.headlineContext}
                    </div>
                  </div>

                  {/* Client Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-5 h-5 text-neutral-600 mb-2" />
                    <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                      "{study.quote}"
                    </p>
                    <div className="mt-3 text-xs">
                      <p className="font-semibold text-white">{study.client}</p>
                      <p className="text-neutral-400">{study.clientRole}, {study.clientCompany}</p>
                    </div>
                  </div>

                  {/* Secondary Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-neutral-800 text-center">
                    {study.secondaryMetrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-mono font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Challenge / Solution */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 space-y-3 text-xs text-neutral-300 animate-fadeIn">
                      <div>
                        <span className="font-mono uppercase text-[11px] text-neutral-400 block mb-1">
                          Site Challenge:
                        </span>
                        <p className="text-neutral-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="font-mono uppercase text-[11px] text-neutral-400 block mb-1">
                          Engineering Solution:
                        </span>
                        <p className="text-neutral-300 leading-relaxed">{study.solution}</p>
                      </div>
                      <div className="pt-1 text-[11px] text-neutral-400">
                        <span>Timeline: </span>
                        <span className="text-white font-mono">{study.timeline}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Methodology' : 'Inspect Methodology'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-xs font-mono text-neutral-400">
                    Verified Audit
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
