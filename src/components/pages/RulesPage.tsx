import React, { useState } from 'react';
import { COMPETITION_RULES } from '../../data/rulesData';
import { OfficialDocuments } from '../OfficialDocuments';
import { BookOpen, Search, Download, Calculator, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const RulesPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(COMPETITION_RULES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive 70/30 Scoring Simulator state (Verbatim Chuck's Mockup)
  const [teamReturn, setTeamReturn] = useState<number>(14.5);
  const benchmarkReturn = 7.94; // S&P 500 benchmark
  const [tradeNotesScore, setTradeNotesScore] = useState<number>(13.5); // out of 15
  const [weeklyReflectionsScore, setWeeklyReflectionsScore] = useState<number>(14.0); // out of 15

  // Calculations:
  // Alpha = teamReturn - benchmarkReturn
  const alpha = teamReturn - benchmarkReturn;
  // 70% Portfolio Return vs Benchmark scaled: baseline 35 pts at 0 alpha, +2.5 pts per 1% alpha, clamped [0, 70]
  const returnScore = Math.min(70, Math.max(0, 35 + alpha * 2.5));
  const educationalScore = tradeNotesScore + weeklyReflectionsScore;
  const compositeTotal = (returnScore + educationalScore).toFixed(1);

  const activeSection = COMPETITION_RULES.find((s) => s.id === activeSectionId) || COMPETITION_RULES[0];

  const filteredClauses = searchQuery.trim()
    ? COMPETITION_RULES.flatMap((s) =>
        s.clauses.filter(
          (c) =>
            c.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.code.includes(searchQuery)
        )
      )
    : null;

  const handleDownloadRulebook = () => {
    let rulebookText = `=====================================================
TRADINGTOLEARN - OFFICIAL COLLEGIATE RULEBOOK & MANDATE
Academic Season 2026 · Independent Simulation
=====================================================\n\n`;

    COMPETITION_RULES.forEach((sec) => {
      rulebookText += `SECTION ${sec.number}: ${sec.title.toUpperCase()}\n`;
      rulebookText += `Summary: ${sec.summary}\n`;
      rulebookText += `-----------------------------------------------------\n`;
      sec.clauses.forEach((c) => {
        rulebookText += `Clause ${c.code}: ${c.headline}\n${c.details}\n\n`;
      });
      rulebookText += `\n`;
    });

    const blob = new Blob([rulebookText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TradingToLearn_Official_Rules_2026.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider uppercase mb-2">
            <span>Codified Governance</span>
            <span aria-hidden="true">·</span>
            <span>Academic Season 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Competition Rules & Investment Mandate
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            Institutional portfolio constraints, execution parameters, and scoring formulas governing 
            all participating collegiate investment teams.
          </p>
        </div>

        <button
          onClick={handleDownloadRulebook}
          className="px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap self-start md:self-auto shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Rulebook (.txt)</span>
        </button>
      </div>

      {/* Quick Mandate Snapshot (4 Cards - Chuck's Exact Rules) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
            Holding Cap
          </div>
          <div className="text-2xl font-bold font-mono text-white">10.0% Max</div>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            No single holding may exceed 10% of portfolio NAV at time of order execution.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
            Invested Requirement
          </div>
          <div className="text-2xl font-bold font-mono text-white">≥ 90.0% Invested</div>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            Portfolios must be at least 90% invested after Week 2 through the end of the competition.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
            Prohibited Instruments
          </div>
          <div className="text-2xl font-bold font-mono text-white">No Margin / &lt;$5</div>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            Margin, short selling, and stocks priced under $5 are strictly prohibited.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
            Educational Score (30%)
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-400">Trade Notes Required</div>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            Every trade requires a 2–3 sentence rationale. Notes count toward your score.
          </p>
        </div>
      </div>

      {/* Main Interactive Rulebook */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search rules (e.g. 10%, margin, notes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          <div className="space-y-2">
            {COMPETITION_RULES.map((sec) => {
              const isActive = activeSectionId === sec.id && !searchQuery.trim();
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSectionId(sec.id);
                    setSearchQuery('');
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? 'border-neutral-400 bg-neutral-900 text-white shadow-sm'
                      : 'border-neutral-800/80 bg-neutral-900/30 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                    <span>SECTION {sec.number}</span>
                    {isActive && <span className="text-emerald-400">●</span>}
                  </div>
                  <div className="text-sm font-semibold text-white">{sec.title}</div>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{sec.summary}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Column (8 Cols) */}
        <div className="lg:col-span-8 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-6">
          {filteredClauses ? (
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-3">
                Found {filteredClauses.length} clause(s) matching "{searchQuery}"
              </div>
              {filteredClauses.length === 0 ? (
                <p className="text-xs text-neutral-500 py-8 text-center">No matching clauses found. Clear search to view sections.</p>
              ) : (
                filteredClauses.map((c) => (
                  <div key={c.code} className="p-4 rounded-lg bg-neutral-950/70 border border-neutral-800/80">
                    <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Clause {c.code}</span>
                    <h4 className="text-sm font-bold text-white mb-2">{c.headline}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">{c.details}</p>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div>
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  SECTION {activeSection.number}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {activeSection.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {activeSection.summary}
                </p>
              </div>

              <div className="space-y-4">
                {activeSection.clauses.map((clause) => (
                  <div key={clause.code} className="p-5 rounded-lg border border-neutral-800 bg-neutral-950/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        {clause.code}
                      </span>
                      <h4 className="text-sm font-bold text-white">{clause.headline}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-1">
                      {clause.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Interactive 70/30 Scoring Formula Calculator */}
      <div className="pt-8 border-t border-neutral-800">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Quantitative Transparency · Chuck's Official Scoring Model
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Calculator className="w-6 h-6 text-emerald-400" />
            <span>Interactive 70 / 30 Scoring Simulator</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            &ldquo;70% portfolio return relative to a benchmark, 30% quality of trade notes and weekly reflections.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 space-y-6">
            
            {/* 1. Portfolio Return vs Benchmark */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-mono uppercase tracking-wider text-neutral-300">
                  1. Team Portfolio Return (Benchmark: +{benchmarkReturn}%)
                </label>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {teamReturn >= 0 ? `+${teamReturn.toFixed(1)}%` : `${teamReturn.toFixed(1)}%`}
                </span>
              </div>
              <input
                type="range"
                min={-10.0}
                max={30.0}
                step={0.5}
                value={teamReturn}
                onChange={(e) => setTeamReturn(Number(e.target.value))}
                className="w-full accent-white bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>-10.0% Underperformance</span>
                <span className="text-emerald-400">
                  Alpha vs S&P 500: {alpha >= 0 ? `+${alpha.toFixed(2)}%` : `${alpha.toFixed(2)}%`}
                </span>
                <span>+30.0% Max</span>
              </div>
            </div>

            {/* 2. Trade Notes Rationale Quality */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-mono uppercase tracking-wider text-neutral-300">
                  2. Trade Notes Quality & Rationale (15% Weight)
                </label>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {tradeNotesScore.toFixed(1)} / 15.0 pts
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={15}
                step={0.5}
                value={tradeNotesScore}
                onChange={(e) => setTradeNotesScore(Number(e.target.value))}
                className="w-full accent-white bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>0.0 (Missing Rationales)</span>
                <span>15.0 (Flawless Catalysts Logged for 100% of Trades)</span>
              </div>
            </div>

            {/* 3. Weekly Reflections & Learnings */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-mono uppercase tracking-wider text-neutral-300">
                  3. Weekly Reflections & Learnings (15% Weight)
                </label>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {weeklyReflectionsScore.toFixed(1)} / 15.0 pts
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={15}
                step={0.5}
                value={weeklyReflectionsScore}
                onChange={(e) => setWeeklyReflectionsScore(Number(e.target.value))}
                className="w-full accent-white bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>0.0 (No Reflections)</span>
                <span>15.0 (Analytical Course Integration & Post-Mortem Rigor)</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 space-y-1">
              <span className="font-semibold text-white block">The &ldquo;Trade to Learn&rdquo; Pedagogy:</span>
              <p className="text-neutral-400 leading-relaxed">
                A team with top-tier returns who neglects to write trade notes will score a maximum of 70 points, 
                falling below a disciplined team that generated modest returns while explaining every trade rationale with academic rigor.
              </p>
            </div>

          </div>

          {/* Results Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 space-y-6">
            <div className="border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Composite Championship Score
              </span>
              <div className="text-4xl font-bold font-mono text-white mt-2 tabular-nums">
                {compositeTotal} <span className="text-sm font-normal text-neutral-500">/ 100</span>
              </div>
              <div className="mt-2 text-xs font-medium text-emerald-400">
                {Number(compositeTotal) >= 85
                  ? '🏆 High Distinction (Tournament Leaderboard Tier 1)'
                  : Number(compositeTotal) >= 70
                  ? '🏅 Honors Standing (Above Average Performance)'
                  : '📘 Academic Credit Eligible (Passing Grade)'}
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Portfolio Return vs Benchmark (70%):</span>
                <span className="font-mono text-white font-medium">{returnScore.toFixed(1)} / 70.0 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Trade Notes Rationale (15%):</span>
                <span className="font-mono text-white font-medium">{tradeNotesScore.toFixed(1)} / 15.0 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Weekly Reflections (15%):</span>
                <span className="font-mono text-white font-medium">{weeklyReflectionsScore.toFixed(1)} / 15.0 pts</span>
              </div>
              <div className="pt-2 border-t border-neutral-800 flex justify-between font-bold">
                <span className="text-neutral-200">Total Educational Weight:</span>
                <span className="text-emerald-400 font-mono">30.0% Non-Negotiable</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
              <strong className="text-white block mb-1">Scoring Rule Reminder:</strong>
              Portfolio returns are audited weekly relative to the S&P 500 Total Return benchmark. 
              Trade rationales are evaluated weekly by faculty advisors.
            </div>
          </div>

        </div>

      </div>

      {/* Official Syllabus and Form Downloads */}
      <div>
        <OfficialDocuments />
      </div>

    </div>
  );
};
