import React, { useState, useEffect } from 'react';
import { HORSE_RACE_WEEKS } from '../../data/horseRaceData';
import { Play, Pause, RotateCcw, TrendingUp, Zap, Clock, ShieldCheck, Trophy, ArrowRight, Award } from 'lucide-react';

export const HorseRacePage: React.FC = () => {
  const [activeWeekIndex, setActiveWeekIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [latencyMode, setLatencyMode] = useState<'realtime' | 'fiveMin' | 'fifteenMin'>('realtime');

  const currentWeek = HORSE_RACE_WEEKS[activeWeekIndex];

  // Auto-play interval
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveWeekIndex((prev) => {
          if (prev >= HORSE_RACE_WEEKS.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider uppercase mb-2">
            <span>Weekly Momentum Tracker</span>
            <span aria-hidden="true">·</span>
            <span>Educational Post-Mortem</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            The Weekly Horse Race.
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            Track how collegiate rankings evolve week by week, and discover the exact trades, 
            factor rotations, and market catalysts that shifted team positions.
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-neutral-950" /> : <Play className="w-4 h-4 text-neutral-950 fill-neutral-950" />}
            <span>{isPlaying ? 'Pause Race' : 'Auto-Play Race'}</span>
          </button>
          
          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveWeekIndex(0);
            }}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors cursor-pointer"
            title="Reset to Week 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Week Selector Bar */}
      <div className="flex items-center gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto text-xs">
        {HORSE_RACE_WEEKS.map((w, idx) => {
          const isActive = idx === activeWeekIndex;
          return (
            <button
              key={w.weekNumber}
              onClick={() => {
                setIsPlaying(false);
                setActiveWeekIndex(idx);
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-800 border border-neutral-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-0.5">
                <span>WEEK {w.weekNumber}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </div>
              <div className="text-[10px] text-neutral-400 truncate">{w.marketEvent}</div>
            </button>
          );
        })}
      </div>

      {/* Current Week Banner */}
      <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
            Current Stage: Week {currentWeek.weekNumber} of 6
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">{currentWeek.marketEvent}</h3>
          <p className="text-neutral-400 font-mono text-[11px] mt-0.5">{currentWeek.weekDates}</p>
        </div>

        {/* Latency Experiment Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-800">
          <span className="text-[11px] font-mono text-neutral-400 uppercase flex items-center gap-1.5 px-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Feed Latency Model:</span>
          </span>
          <div className="flex items-center gap-1 text-[11px]">
            <button
              onClick={() => setLatencyMode('realtime')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                latencyMode === 'realtime'
                  ? 'bg-neutral-800 text-emerald-400 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Real-Time (0s)
            </button>
            <button
              onClick={() => setLatencyMode('fiveMin')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                latencyMode === 'fiveMin'
                  ? 'bg-neutral-800 text-amber-400 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              5-Min Delay
            </button>
            <button
              onClick={() => setLatencyMode('fifteenMin')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                latencyMode === 'fifteenMin'
                  ? 'bg-neutral-800 text-rose-400 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              15-Min Terminal Gap
            </button>
          </div>
        </div>
      </div>

      {/* Visual Horse Race Progress Tracks */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Weekly Standings & Trade Catalysts
        </h3>

        {currentWeek.standings.map((standing) => {
          const selectedNav =
            latencyMode === 'realtime'
              ? standing.latencyImpact.realTimeNav
              : latencyMode === 'fiveMin'
              ? standing.latencyImpact.fiveMinDelayNav
              : standing.latencyImpact.fifteenMinDelayNav;

          const slippageDelta = standing.latencyImpact.realTimeNav - selectedNav;
          const returnWithLatency = ((selectedNav - 1000000) / 1000000) * 100;
          
          // Normalized width calculation for the visual track
          const maxNavInWeek = Math.max(...currentWeek.standings.map((s) => s.latencyImpact.realTimeNav));
          const minNavBaseline = 1000000;
          const progressPercent = Math.min(100, Math.max(15, ((selectedNav - minNavBaseline) / (maxNavInWeek - minNavBaseline || 1)) * 85 + 15));

          const medal =
            standing.rank === 1
              ? 'text-amber-400 border-amber-500/40 bg-amber-950/20'
              : standing.rank === 2
              ? 'text-slate-300 border-slate-500/40 bg-slate-900/30'
              : standing.rank === 3
              ? 'text-amber-600 border-amber-700/40 bg-neutral-900'
              : 'text-neutral-400 border-neutral-800 bg-neutral-950';

          return (
            <div
              key={standing.teamName}
              className={`p-5 rounded-xl border transition-all ${
                standing.tradeEffect === 'surge'
                  ? 'border-emerald-500/40 bg-neutral-900/80 shadow-md'
                  : 'border-neutral-800 bg-neutral-900/40'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-mono font-bold text-xs ${medal}`}>
                    {standing.rank}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">{standing.teamName}</h4>
                    <p className="text-xs text-neutral-400">{standing.university}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 block">Weekly Delta</span>
                    <span className="text-emerald-400 font-bold">+{standing.weeklyReturnPct.toFixed(2)}%</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 block">Cumulative NAV</span>
                    <span className="text-white font-bold text-sm">{formatCurrency(selectedNav)}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 block">Total Return</span>
                    <span className="text-emerald-400 font-bold text-sm">+{returnWithLatency.toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {/* Visual Horse Race Progress Bar */}
              <div className="space-y-1 mb-3">
                <div className="w-full bg-neutral-950 h-3 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div
                    style={{ width: `${progressPercent}%` }}
                    className={`h-full rounded-full transition-all duration-700 ${
                      standing.rank === 1
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                        : standing.rank === 2
                        ? 'bg-gradient-to-r from-sky-600 to-sky-400'
                        : 'bg-gradient-to-r from-neutral-600 to-neutral-400'
                    }`}
                  />
                </div>
              </div>

              {/* Trade Catalyst Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-1">
                <div className="flex items-start sm:items-center gap-2 text-neutral-300">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-950 border border-neutral-800 uppercase text-neutral-400 shrink-0">
                    Trade Catalyst
                  </span>
                  <span className="leading-snug">{standing.keyTradeCatalyst}</span>
                </div>

                {/* Slippage impact warning if delayed */}
                {latencyMode !== 'realtime' && slippageDelta > 0 && (
                  <span className="text-[11px] font-mono text-amber-400 shrink-0">
                    Slippage Penalty: -${Math.round(slippageDelta).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Latency Experiment Pedagogical Takeaway */}
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-3 text-xs leading-relaxed">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Pedagogical Lesson: Execution Latency vs. Commercial Terminal Gap</span>
        </h4>
        <p className="text-neutral-300">
          In standard 15-minute delayed feeds, orders placed during volatile macro catalysts (such as CPI prints or Fed rate announcements) 
          suffer execution slippage because market-makers update spreads sub-second. Notice how toggling from <strong>Real-Time</strong> to 
          <strong> 15-Min Terminal Gap</strong> deducts up to $9,000+ from momentum trades, demonstrating why algorithmic latency budgeting 
          is a core pillar of modern quantitative finance.
        </p>
      </div>

    </div>
  );
};
