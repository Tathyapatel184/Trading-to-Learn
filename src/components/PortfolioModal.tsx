import React from 'react';
import { LeaderboardEntry } from '../types';
import { X, TrendingUp, Shield, BarChart3, UserCheck, Download } from 'lucide-react';

interface PortfolioModalProps {
  team: LeaderboardEntry | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ team, onClose }) => {
  if (!team) return null;

  // Render SVG Performance Curve
  const history = team.history;
  const minVal = Math.min(...history);
  const maxVal = Math.max(...history);
  const range = maxVal - minVal || 1;
  const svgWidth = 600;
  const svgHeight = 120;
  const padding = 10;

  const points = history
    .map((val, idx) => {
      const x = padding + (idx / (history.length - 1)) * (svgWidth - 2 * padding);
      const y = svgHeight - padding - ((val - minVal) / range) * (svgHeight - 2 * padding);
      return `${x},${y}`;
    })
    .join(' ');

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleExportData = () => {
    const textData = `TRADINGTOLEARN - OFFICIAL PORTFOLIO AUDIT REPORT
Team: ${team.teamName} (${team.teamId})
University: ${team.university} - ${team.location}
Division: ${team.division} | Region: ${team.region}
Current Portfolio Net Asset Value: ${formatCurrency(team.portfolioValue)}
Total Return: +${team.totalReturnPct.toFixed(2)}% | Alpha vs S&P 500: +${team.alphaVsSP500.toFixed(2)}%
Annualized Sharpe Ratio: ${team.sharpeRatio.toFixed(2)} | Max Peak-to-Trough Drawdown: ${team.maxDrawdownPct.toFixed(1)}%
Active Holdings Count: ${team.holdingsCount}
Faculty Sponsor: ${team.facultyAdvisor}

INVESTMENT THESIS SUMMARY:
${team.thesisSummary}

TOP RECORDED ALLOCATIONS:
${team.topHoldings
  .map(
    (h) =>
      `- ${h.ticker} (${h.name}): ${h.shares} shares @ avg $${h.avgPrice.toFixed(2)} | Weight: ${h.weight}% | P&L: +$${h.unrealizedPL.toLocaleString()} (+${h.unrealizedPLPct}%)`
  )
  .join('\n')}

Audit Timestamp: ${new Date().toISOString()}
Independent Academic Verification Engine: TradingToLearn Simulation Core`;

    const blob = new Blob([textData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Portfolio_Audit_${team.teamId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="max-w-2xl pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <span>Rank #{team.rank}</span>
            <span aria-hidden="true">·</span>
            <span>{team.university}</span>
            <span aria-hidden="true">·</span>
            <span>{team.division}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {team.teamName}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Strategy Style: <strong className="text-white font-medium">{team.strategyStyle}</strong> · {team.location}
          </p>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-5 rounded-lg border border-neutral-800 bg-neutral-900/60">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Portfolio NAV
            </span>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5 tabular-nums">
              {formatCurrency(team.portfolioValue)}
            </div>
            <span className="text-[11px] text-emerald-400 font-mono">
              +{team.totalReturnPct.toFixed(2)}% Total Return
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Sharpe Ratio
            </span>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5 tabular-nums">
              {team.sharpeRatio.toFixed(2)}
            </div>
            <span className="text-[11px] text-neutral-400">
              Annualized vs 3M T-Bill
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Alpha vs S&P 500
            </span>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-0.5 tabular-nums">
              +{team.alphaVsSP500.toFixed(2)}%
            </div>
            <span className="text-[11px] text-neutral-400">
              Benchmark Outperformance
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Max Drawdown
            </span>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5 tabular-nums">
              {team.maxDrawdownPct.toFixed(1)}%
            </div>
            <span className="text-[11px] text-emerald-400 font-mono">
              Compliant (&lt;18% limit)
            </span>
          </div>
        </div>

        {/* Historical Equity Curve */}
        <div className="mt-6 p-5 rounded-lg border border-neutral-800 bg-neutral-900/40">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>NAV Progression Curve ($1,000,000 Inception)</span>
            </span>
            <span className="text-neutral-400 font-mono">
              {formatCurrency(minVal)} min → {formatCurrency(maxVal)} peak
            </span>
          </div>

          <div className="w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-24 overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`grad-${team.teamId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon
                fill={`url(#grad-${team.teamId})`}
                points={`10,${svgHeight - 10} ${points} ${svgWidth - 10},${svgHeight - 10}`}
              />
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />
            </svg>
          </div>
        </div>

        {/* Sector Allocation Breakdown */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5 text-neutral-300" />
            <span>Sector Risk Exposure Breakdown</span>
          </h4>

          {/* Allocation Bar */}
          <div className="w-full h-3 rounded-full overflow-hidden flex bg-neutral-800 mb-3">
            {team.sectorAllocations.map((sec, idx) => (
              <div
                key={idx}
                style={{ width: `${sec.weight}%`, backgroundColor: sec.color }}
                title={`${sec.sector}: ${sec.weight}%`}
                className="h-full transition-all"
              />
            ))}
          </div>

          {/* Sector Tags */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-300">
            {team.sectorAllocations.map((sec, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: sec.color }} />
                <span className="text-neutral-400">{sec.sector}:</span>
                <span className="font-mono font-medium text-white">{sec.weight}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Holdings Table */}
        <div className="mt-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Principal Portfolio Holdings ({team.holdingsCount} Total Active)
          </h4>

          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono">
                  <th className="py-2.5 px-3">Ticker</th>
                  <th className="py-2.5 px-3">Company Name</th>
                  <th className="py-2.5 px-3">Sector</th>
                  <th className="py-2.5 px-3 text-right">Shares</th>
                  <th className="py-2.5 px-3 text-right">Avg Cost</th>
                  <th className="py-2.5 px-3 text-right">Current</th>
                  <th className="py-2.5 px-3 text-right">Weight</th>
                  <th className="py-2.5 px-3 text-right">P&L ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80">
                {team.topHoldings.map((h, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-white">{h.ticker}</td>
                    <td className="py-2.5 px-3 text-neutral-200">{h.name}</td>
                    <td className="py-2.5 px-3 text-neutral-400">{h.sector}</td>
                    <td className="py-2.5 px-3 font-mono text-right text-neutral-300">{h.shares.toLocaleString()}</td>
                    <td className="py-2.5 px-3 font-mono text-right text-neutral-400">${h.avgPrice.toFixed(2)}</td>
                    <td className="py-2.5 px-3 font-mono text-right text-white">${h.currentPrice.toFixed(2)}</td>
                    <td className="py-2.5 px-3 font-mono text-right font-medium text-neutral-300">{h.weight}%</td>
                    <td className="py-2.5 px-3 font-mono text-right text-emerald-400 font-medium">
                      +${h.unrealizedPL.toLocaleString()} ({h.unrealizedPLPct}%)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment Committee Strategy Memo */}
        <div className="mt-6 pt-6 border-t border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            <UserCheck className="w-3.5 h-3.5 text-neutral-300" />
            <span>Faculty Sponsor: {team.facultyAdvisor}</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/80">
            <strong className="text-white block mb-1">Committee Strategy Memo:</strong>
            {team.thesisSummary}
          </p>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Shield className="w-3.5 h-3.5 text-neutral-400" />
            <span>Audited under TradingToLearn simulated academic portfolio rules.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportData}
              className="px-4 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Audit Dossier (.txt)</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
