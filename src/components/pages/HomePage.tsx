import React from 'react';
import { PageId, LeaderboardEntry } from '../../types';
import { LEADERBOARD_TEAMS } from '../../data/leaderboardData';
import { TradingTerminal } from '../TradingTerminal';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Cpu, 
  Trophy, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  Award,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onInspectTeam: (team: LeaderboardEntry) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onInspectTeam }) => {
  const topTeams = LEADERBOARD_TEAMS.slice(0, 5);

  return (
    <div className="space-y-20 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="flex flex-col items-start gap-4 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
            <span>Intercollegiate experiential learning</span>
          </div>

          <h1
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            className="font-bold tracking-tight text-white leading-[1.06] max-w-4xl text-balance"
          >
            Learn Investing by Doing.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            A collegiate investment challenge where university teams manage $1,000,000 in simulated capital, 
            test real market hypotheses, and defend the analytical reasoning behind every trade.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('challenge')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>Spring Trading Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('rules')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:text-white hover:border-neutral-700 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card (16:9) */}
        <div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[16/9] w-full">
          <img
            src="/src/assets/images/trading_lab_university_1793035467488.jpg"
            alt="University Collegiate Trading Room with financial market analysis stations"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-xs text-neutral-300">
            <div>
              <p className="font-semibold text-white text-sm sm:text-base">
                Campus Financial Trading Room & Academic Simulation Lab
              </p>
              <div className="flex items-center gap-2 text-neutral-400 mt-1">
                <span>Real-Time Market Execution</span>
                <span aria-hidden="true">·</span>
                <span>Sub-Second Latency Model</span>
                <span aria-hidden="true">·</span>
                <span>Fiduciary Risk Budgeting</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('rules')}
              className="text-xs font-medium text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-500 whitespace-nowrap"
            >
              Review Rulebook & 10% Cap →
            </button>
          </div>
        </div>
      </section>

      {/* 2. FOUR PILLARS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Real-World Experience</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Trade US equities and liquid ETFs with institutional execution slippage, commissions, and risk limits.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-sky-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Intercollegiate Community</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Connect and compete with student investment teams and faculty mentors across regional and national universities.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-amber-400 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Data-Driven Learning</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Log mandatory trade rationales and conduct weekly portfolio post-mortems to analyze what drove real performance.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">A Platform for the Future</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Evolving into thematic algorithmic trading and open API modeling for next-generation quantitative finance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHALLENGE TEASER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Spring 2026 Season
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              A simulated stock trading competition for university students.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Teams manage a $1,000,000 virtual paper portfolio across the spring semester. 
              Detailed rules, eligibility, and key dates are published below.
            </p>
          </div>

          <button
            onClick={() => onNavigate('challenge')}
            className="px-6 py-3 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            Explore Spring Challenge →
          </button>
        </div>
      </section>

      {/* 4. LEADERBOARD PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              Live Standings Preview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Collegiate Leaderboard
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Updated weekly, every Monday. Results are entered by organizers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('leaderboard')}
            className="text-xs font-semibold text-white hover:text-emerald-400 flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Full Leaderboard</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Standings Table Preview */}
        <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono uppercase tracking-wider">
                <th className="py-3 px-4 w-16 text-center">Rank</th>
                <th className="py-3 px-4">Team</th>
                <th className="py-3 px-4">University</th>
                <th className="py-3 px-4 text-right">Portfolio Return</th>
                <th className="py-3 px-4 text-right">vs Benchmark</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80">
              {topTeams.map((team) => (
                <tr
                  key={team.teamId}
                  onClick={() => onInspectTeam(team)}
                  className="hover:bg-neutral-900/50 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 text-center font-mono font-bold text-neutral-300">
                    {team.rank === 1 ? '🥇 1' : team.rank === 2 ? '🥈 2' : team.rank === 3 ? '🥉 3' : team.rank}
                  </td>
                  <td className="py-3 px-4 font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {team.teamName}
                  </td>
                  <td className="py-3 px-4 text-neutral-400">{team.university}</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                    +{team.totalReturnPct.toFixed(1)}%
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-neutral-300">
                    +{team.alphaVsSP500.toFixed(2)}%
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-[11px] text-neutral-400 group-hover:text-white underline underline-offset-2">
                      Inspect
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. UPCOMING MILESTONES (4-Step Timeline) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Competition Calendar
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Upcoming Milestones
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Confirmed calendar for the Spring 2026 academic competition session.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">STEP 01</span>
            <h4 className="text-base font-bold text-white">Registration Opens</h4>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">January 15, 2026</p>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
              Teams of 3–5 students register with faculty advisor verification and roster lock.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-sky-400 block mb-1">STEP 02</span>
            <h4 className="text-base font-bold text-white">Competition Begins</h4>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">February 1, 2026</p>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
              Market open: Virtual $1,000,000 cash funded; live trading begins across US equities and ETFs.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-amber-400 block mb-1">STEP 03</span>
            <h4 className="text-base font-bold text-white">Final Trading Day</h4>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">April 30, 2026</p>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
              Market close at 4:00 PM EST. Portfolios locked; trade notes and reflections finalized.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-purple-400 block mb-1">STEP 04</span>
            <h4 className="text-base font-bold text-white">Results & Awards</h4>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">May 15, 2026</p>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
              Faculty committee evaluations complete; awards and scholarship distributions announced.
            </p>
          </div>

        </div>
      </section>

      {/* 6. BEYOND THE CHALLENGE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vision & Future Programs</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Beyond the Challenge
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              TradingToLearn will grow into an <strong>AI Investment Observatory</strong> and other experiential learning programs—bridging 
              academic finance education with real-time algorithmic backtesting and multi-asset research.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Learn About Academic Partnerships →
          </button>
        </div>
      </section>

      {/* Interactive Sandbox Terminal */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <TradingTerminal />
      </section>

    </div>
  );
};
