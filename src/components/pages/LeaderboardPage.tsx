import React, { useState, useMemo } from 'react';
import { LeaderboardEntry } from '../../types';
import { LEADERBOARD_TEAMS } from '../../data/leaderboardData';
import { Search, Trophy, ArrowUpDown, Filter, Eye, Award } from 'lucide-react';

interface LeaderboardPageProps {
  onInspectTeam: (team: LeaderboardEntry) => void;
  onNavigate?: (page: any) => void;
}

export const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ onInspectTeam, onNavigate }) => {
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState<'All' | 'Americas' | 'EMEA' | 'APAC'>('All');
  const [divisionFilter, setDivisionFilter] = useState<'All' | 'Undergraduate' | 'Graduate/MBA'>('All');
  const [strategyFilter, setStrategyFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rank' | 'return' | 'sharpe' | 'nav' | 'alpha'>('rank');

  const filteredTeams = useMemo(() => {
    let list = [...LEADERBOARD_TEAMS];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.teamName.toLowerCase().includes(q) ||
          t.university.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q)
      );
    }

    if (regionFilter !== 'All') {
      list = list.filter((t) => t.region === regionFilter);
    }

    if (divisionFilter !== 'All') {
      list = list.filter((t) => t.division === divisionFilter);
    }

    if (strategyFilter !== 'All') {
      list = list.filter((t) => t.strategyStyle === strategyFilter);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'return') return b.totalReturnPct - a.totalReturnPct;
      if (sortBy === 'sharpe') return b.sharpeRatio - a.sharpeRatio;
      if (sortBy === 'nav') return b.portfolioValue - a.portfolioValue;
      if (sortBy === 'alpha') return b.alphaVsSP500 - a.alphaVsSP500;
      return a.rank - b.rank;
    });

    return list;
  }, [search, regionFilter, divisionFilter, strategyFilter, sortBy]);

  const handleExportCSV = () => {
    let csv = 'Rank,Team Name,University,Location,Region,Division,Strategy Style,Portfolio Value ($),Total Return (%),Alpha vs S&P 500 (%),Sharpe Ratio,Max Drawdown (%)\n';
    filteredTeams.forEach((t) => {
      csv += `${t.rank},"${t.teamName}","${t.university}","${t.location}",${t.region},${t.division},"${t.strategyStyle}",${t.portfolioValue},${t.totalReturnPct},${t.alphaVsSP500},${t.sharpeRatio},${t.maxDrawdownPct}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TradingToLearn_Collegiate_Standings_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleGoToHorseRace = () => {
    if (onNavigate) {
      onNavigate('horserace');
    } else {
      window.location.hash = 'horserace';
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header (Verbatim Chuck's Mockup) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
            <span>Official Academic Standings</span>
            <span aria-hidden="true">·</span>
            <span>Updated weekly, every Monday</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Leaderboard & Standings
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            Updated weekly, every Monday. Results are entered by organizers, not pulled live. 
            All portfolios are verified against the 10.0% single holding cap and ≥90% invested requirement.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap self-start md:self-auto shrink-0 shadow-sm"
        >
          <span>Download Standings (.csv)</span>
        </button>
      </div>

      {/* Horse Race Weekly Mover Callout Banner */}
      <div className="p-4 sm:p-5 rounded-xl border border-sky-500/30 bg-sky-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase">
            <span>The Weekly Horse Race Tracker</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Mover Analysis</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300">
            Want to see how trades caused teams to win or lose rank week-over-week? Inspect the dynamic horse race and order execution latency model.
          </p>
        </div>

        <button
          onClick={handleGoToHorseRace}
          className="px-4 py-2 text-xs font-semibold text-sky-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Open Weekly Horse Race →
        </button>
      </div>

      {/* Benchmark Summary Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 text-xs">
        <div>
          <span className="text-neutral-500 font-mono uppercase block text-[11px]">Benchmark (S&P 500 TR)</span>
          <span className="text-lg font-bold font-mono text-white mt-0.5 block">+7.94%</span>
          <span className="text-neutral-400">Baseline hurdle rate</span>
        </div>

        <div>
          <span className="text-neutral-500 font-mono uppercase block text-[11px]">Median Collegiate Return</span>
          <span className="text-lg font-bold font-mono text-white mt-0.5 block">+8.74%</span>
          <span className="text-emerald-400 font-mono">+0.80% avg alpha</span>
        </div>

        <div>
          <span className="text-neutral-500 font-mono uppercase block text-[11px]">Top Sharpe Ratio</span>
          <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">2.34 (MIT Sloan)</span>
          <span className="text-neutral-400">Annualized metric</span>
        </div>

        <div>
          <span className="text-neutral-500 font-mono uppercase block text-[11px]">Lowest Peak Drawdown</span>
          <span className="text-lg font-bold font-mono text-white mt-0.5 block">3.2% (UChicago)</span>
          <span className="text-neutral-400">Capital preservation lead</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search university or team..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end text-xs">
            <span className="text-neutral-400 whitespace-nowrap flex items-center gap-1 font-mono">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort By:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none text-xs"
            >
              <option value="rank">Official Rank</option>
              <option value="return">Total Return (%)</option>
              <option value="sharpe">Sharpe Ratio</option>
              <option value="alpha">Alpha vs S&P 500</option>
              <option value="nav">Portfolio NAV ($)</option>
            </select>
          </div>

        </div>

        {/* Filter Segment Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
          
          {/* Region */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-900 border border-neutral-800">
            {(['All', 'Americas', 'EMEA', 'APAC'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  regionFilter === r ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {r === 'All' ? 'All Regions' : r}
              </button>
            ))}
          </div>

          {/* Division */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-900 border border-neutral-800">
            {(['All', 'Undergraduate', 'Graduate/MBA'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDivisionFilter(d)}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  divisionFilter === d ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {d === 'All' ? 'All Divisions' : d}
              </button>
            ))}
          </div>

          {/* Strategy Style */}
          <div className="flex items-center gap-1.5 ml-auto text-neutral-400">
            <span>Showing: <strong className="text-white font-mono">{filteredTeams.length}</strong> teams</span>
          </div>

        </div>
      </div>

      {/* Main Leaderboard Table */}
      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono uppercase tracking-wider">
              <th className="py-3 px-4 text-center w-14">Rank</th>
              <th className="py-3 px-4">University & Team</th>
              <th className="py-3 px-4">Division</th>
              <th className="py-3 px-4 text-right">Portfolio NAV</th>
              <th className="py-3 px-4 text-right">Return</th>
              <th className="py-3 px-4 text-right">Alpha</th>
              <th className="py-3 px-4 text-right">Sharpe</th>
              <th className="py-3 px-4 text-right">Max DD</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {filteredTeams.map((team) => {
              const isTop3 = team.rank <= 3;
              const medalColor =
                team.rank === 1 ? 'text-amber-400' : team.rank === 2 ? 'text-slate-300' : team.rank === 3 ? 'text-amber-600' : 'text-neutral-500';

              return (
                <tr
                  key={team.teamId}
                  onClick={() => onInspectTeam(team)}
                  className="hover:bg-neutral-900/60 transition-colors cursor-pointer group"
                >
                  {/* Rank */}
                  <td className="py-3.5 px-4 text-center">
                    <span className={`font-mono font-bold text-sm ${medalColor}`}>
                      {team.rank}
                    </span>
                  </td>

                  {/* University & Team */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">
                      {team.teamName}
                    </div>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 mt-0.5">
                      <span>{team.university}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span>{team.location}</span>
                    </div>
                  </td>

                  {/* Division & Style */}
                  <td className="py-3.5 px-4">
                    <div className="text-neutral-200">{team.division}</div>
                    <div className="text-[10px] text-neutral-400 font-mono mt-0.5">{team.strategyStyle}</div>
                  </td>

                  {/* Portfolio NAV */}
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-white text-sm tabular-nums">
                    {formatCurrency(team.portfolioValue)}
                  </td>

                  {/* Total Return */}
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-400 tabular-nums">
                    +{team.totalReturnPct.toFixed(2)}%
                  </td>

                  {/* Alpha */}
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums text-neutral-300">
                    <span className={team.alphaVsSP500 >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                      {team.alphaVsSP500 >= 0 ? `+${team.alphaVsSP500.toFixed(2)}%` : `${team.alphaVsSP500.toFixed(2)}%`}
                    </span>
                  </td>

                  {/* Sharpe */}
                  <td className="py-3.5 px-4 text-right font-mono font-semibold text-white tabular-nums">
                    {team.sharpeRatio.toFixed(2)}
                  </td>

                  {/* Max Drawdown */}
                  <td className="py-3.5 px-4 text-right font-mono text-neutral-300 tabular-nums">
                    {team.maxDrawdownPct.toFixed(1)}%
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded group-hover:text-white group-hover:border-neutral-700 transition-colors">
                      <Eye className="w-3 h-3 text-neutral-400" />
                      <span>Inspect</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};
