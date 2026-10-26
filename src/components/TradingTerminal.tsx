import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, AlertCircle, CheckCircle2, RefreshCw, Shield, HelpCircle } from 'lucide-react';

interface MockPosition {
  ticker: string;
  name: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
}

const SAMPLE_MARKET_DATA: { [ticker: string]: { name: string; price: number; changePct: number; sector: string } } = {
  'NVDA': { name: 'NVIDIA Corporation', price: 132.80, changePct: 2.14, sector: 'Technology' },
  'MSFT': { name: 'Microsoft Corporation', price: 438.60, changePct: 0.85, sector: 'Technology' },
  'AAPL': { name: 'Apple Inc.', price: 228.00, changePct: -0.42, sector: 'Technology' },
  'JPM': { name: 'JPMorgan Chase & Co.', price: 218.40, changePct: 1.12, sector: 'Financials' },
  'LLY': { name: 'Eli Lilly and Company', price: 895.50, changePct: 1.65, sector: 'Healthcare' },
  'SPY': { name: 'SPDR S&P 500 ETF Trust', price: 582.40, changePct: 0.54, sector: 'Broad Market ETF' },
  'CAT': { name: 'Caterpillar Inc.', price: 368.50, changePct: -0.30, sector: 'Industrials' },
  'XOM': { name: 'Exxon Mobil Corporation', price: 119.20, changePct: 0.72, sector: 'Energy' },
  'TLT': { name: 'iShares 20+ Year Treasury Bond ETF', price: 92.15, changePct: -0.18, sector: 'Fixed Income ETF' },
  'BRK.B': { name: 'Berkshire Hathaway Inc.', price: 442.00, changePct: 0.38, sector: 'Financials' }
};

export const TradingTerminal: React.FC = () => {
  const [cash, setCash] = useState<number>(685000);
  const [positions, setPositions] = useState<MockPosition[]>([
    { ticker: 'MSFT', name: 'Microsoft Corporation', shares: 250, avgPrice: 420.0, currentPrice: 438.60 },
    { ticker: 'JPM', name: 'JPMorgan Chase & Co.', shares: 350, avgPrice: 205.0, currentPrice: 218.40 },
    { ticker: 'SPY', name: 'SPDR S&P 500 ETF Trust', shares: 220, avgPrice: 570.0, currentPrice: 582.40 }
  ]);

  const [selectedTicker, setSelectedTicker] = useState<string>('NVDA');
  const [orderAction, setOrderAction] = useState<'BUY' | 'SELL'>('BUY');
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT'>('MARKET');
  const [quantity, setQuantity] = useState<number>(200);
  const [limitPrice, setLimitPrice] = useState<number>(SAMPLE_MARKET_DATA['NVDA'].price);
  
  const [tradeStatus, setTradeStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const activeSecurity = SAMPLE_MARKET_DATA[selectedTicker];
  const executionPrice = orderType === 'MARKET' ? activeSecurity.price : limitPrice;
  const estimatedTotal = quantity * executionPrice;
  const estimatedCommission = quantity * 0.005; // 0.5 cent per share institutional fee

  // Total Portfolio NAV calculation
  const holdingsValue = positions.reduce((acc, pos) => acc + pos.shares * pos.currentPrice, 0);
  const totalNAV = cash + holdingsValue;

  const handleSelectTicker = (ticker: string) => {
    setSelectedTicker(ticker);
    setLimitPrice(SAMPLE_MARKET_DATA[ticker].price);
    setTradeStatus({ type: null, message: '' });
  };

  const handleExecuteTrade = (e: React.FormEvent) => {
    e.preventDefault();
    setTradeStatus({ type: null, message: '' });

    if (quantity <= 0) {
      setTradeStatus({
        type: 'error',
        message: 'Order quantity must be at least 1 share.'
      });
      return;
    }

    if (orderAction === 'BUY') {
      const totalCost = estimatedTotal + estimatedCommission;
      
      // Rule 2.2: Concentration ceiling 15.0%
      const currentPosition = positions.find((p) => p.ticker === selectedTicker);
      const currentPosValue = currentPosition ? currentPosition.shares * activeSecurity.price : 0;
      const projectedPosValue = currentPosValue + estimatedTotal;
      const projectedConcentrationPct = (projectedPosValue / totalNAV) * 100;

      if (projectedConcentrationPct > 15.0) {
        setTradeStatus({
          type: 'error',
          message: `Rule 2.2 Violation: This buy would allocate ${projectedConcentrationPct.toFixed(1)}% of your portfolio to ${selectedTicker}. The institutional cap is 15.0% ($${(totalNAV * 0.15).toLocaleString()}).`
        });
        return;
      }

      // Check cash balance & 2% cash floor ($20,000)
      if (cash - totalCost < 20000) {
        setTradeStatus({
          type: 'error',
          message: `Rule 2.4 Liquidity Violation: Executing this order would leave $${(cash - totalCost).toLocaleString()} in cash, violating the 2.0% ($20,000) unencumbered liquidity cash floor.`
        });
        return;
      }

      // Execute BUY
      setCash((prev) => prev - totalCost);
      setPositions((prev) => {
        const existing = prev.find((p) => p.ticker === selectedTicker);
        if (existing) {
          const newShares = existing.shares + quantity;
          const newAvgPrice = (existing.shares * existing.avgPrice + estimatedTotal) / newShares;
          return prev.map((p) =>
            p.ticker === selectedTicker
              ? { ...p, shares: newShares, avgPrice: newAvgPrice, currentPrice: activeSecurity.price }
              : p
          );
        } else {
          return [
            ...prev,
            {
              ticker: selectedTicker,
              name: activeSecurity.name,
              shares: quantity,
              avgPrice: executionPrice,
              currentPrice: activeSecurity.price
            }
          ];
        }
      });

      setTradeStatus({
        type: 'success',
        message: `Filled: BUY ${quantity} shares of ${selectedTicker} @ $${executionPrice.toFixed(2)} (Commission: $${estimatedCommission.toFixed(2)})`
      });
    } else {
      // Execute SELL
      const existing = positions.find((p) => p.ticker === selectedTicker);
      if (!existing || existing.shares < quantity) {
        setTradeStatus({
          type: 'error',
          message: `Cannot sell ${quantity} shares of ${selectedTicker}. Your current holding is ${existing ? existing.shares : 0} shares. Short selling is prohibited under cash rules.`
        });
        return;
      }

      const grossProceeds = estimatedTotal - estimatedCommission;
      setCash((prev) => prev + grossProceeds);
      setPositions((prev) => {
        if (existing.shares === quantity) {
          return prev.filter((p) => p.ticker !== selectedTicker);
        } else {
          return prev.map((p) =>
            p.ticker === selectedTicker ? { ...p, shares: p.shares - quantity } : p
          );
        }
      });

      setTradeStatus({
        type: 'success',
        message: `Filled: SOLD ${quantity} shares of ${selectedTicker} @ $${executionPrice.toFixed(2)} (Net proceeds: $${grossProceeds.toLocaleString()})`
      });
    }
  };

  const handleResetPortfolio = () => {
    setCash(685000);
    setPositions([
      { ticker: 'MSFT', name: 'Microsoft Corporation', shares: 250, avgPrice: 420.0, currentPrice: 438.60 },
      { ticker: 'JPM', name: 'JPMorgan Chase & Co.', shares: 350, avgPrice: 205.0, currentPrice: 218.40 },
      { ticker: 'SPY', name: 'SPDR S&P 500 ETF Trust', shares: 220, avgPrice: 570.0, currentPrice: 582.40 }
    ]);
    setTradeStatus({ type: null, message: '' });
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span>TradingToLearn Simulation Engine</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Interactive Participant Sandbox</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Student Trading Room Terminal
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Experience the real order entry workflow and rule compliance checks enforced during the competition.
          </p>
        </div>

        <button
          onClick={handleResetPortfolio}
          className="self-start sm:self-auto px-3 py-1.5 text-xs text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sandbox</span>
        </button>
      </div>

      {/* Portfolio Financial Overview Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-neutral-950 border border-neutral-800/80">
        <div>
          <span className="text-[11px] font-mono text-neutral-500 uppercase block">Total Portfolio NAV</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block tabular-nums">
            ${Math.round(totalNAV).toLocaleString()}
          </span>
          <span className="text-[11px] text-emerald-400 font-mono">
            +{(((totalNAV - 1000000) / 1000000) * 100).toFixed(2)}% vs $1.0M Grant
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-neutral-500 uppercase block">Available Cash</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block tabular-nums">
            ${Math.round(cash).toLocaleString()}
          </span>
          <span className="text-[11px] text-neutral-400 font-mono">
            {((cash / totalNAV) * 100).toFixed(1)}% of NAV (≥2% required)
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-neutral-500 uppercase block">Active Positions</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block tabular-nums">
            {positions.length} Holdings
          </span>
          <span className="text-[11px] text-neutral-400">
            Min 10 required for final audit
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-neutral-500 uppercase block">Largest Exposure</span>
          <span className="text-xl font-bold font-mono text-white mt-0.5 block tabular-nums">
            {positions.length > 0
              ? `${Math.max(...positions.map((p) => (p.shares * p.currentPrice) / totalNAV * 100)).toFixed(1)}%`
              : '0.0%'}
          </span>
          <span className="text-[11px] text-emerald-400">
            Compliant (&lt;15.0% limit)
          </span>
        </div>
      </div>

      {/* Order Entry + Market Watch (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Order Ticket (5 Cols) */}
        <form onSubmit={handleExecuteTrade} className="lg:col-span-5 p-5 rounded-lg border border-neutral-800 bg-neutral-950/80 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Order Execution Ticket
            </span>
            <span className="text-[11px] font-mono text-neutral-500">
              Cash Account (1.0x)
            </span>
          </div>

          {/* Action (BUY / SELL) Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
            <button
              type="button"
              onClick={() => setOrderAction('BUY')}
              className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                orderAction === 'BUY'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              BUY / LONG
            </button>
            <button
              type="button"
              onClick={() => setOrderAction('SELL')}
              className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                orderAction === 'SELL'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              SELL / CLOSE
            </button>
          </div>

          {/* Security & Quote */}
          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Select Security from Eligible Universe:
            </label>
            <select
              value={selectedTicker}
              onChange={(e) => handleSelectTicker(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
            >
              {Object.keys(SAMPLE_MARKET_DATA).map((t) => (
                <option key={t} value={t}>
                  {t} - {SAMPLE_MARKET_DATA[t].name} (${SAMPLE_MARKET_DATA[t].price.toFixed(2)})
                </option>
              ))}
            </select>
            <div className="flex justify-between items-center text-xs mt-1.5 text-neutral-400">
              <span>Sector: <strong className="text-neutral-300">{activeSecurity.sector}</strong></span>
              <span className={activeSecurity.changePct >= 0 ? 'text-emerald-400 font-mono' : 'text-red-400 font-mono'}>
                {activeSecurity.changePct >= 0 ? `+${activeSecurity.changePct}%` : `${activeSecurity.changePct}%`}
              </span>
            </div>
          </div>

          {/* Order Type & Shares */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-neutral-400 mb-1">Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
              >
                <option value="MARKET">Market Order</option>
                <option value="LIMIT">Limit Order</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-neutral-400 mb-1">Share Quantity</label>
              <input
                type="number"
                min={1}
                max={50000}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
              />
            </div>
          </div>

          {orderType === 'LIMIT' && (
            <div>
              <label className="block text-xs text-neutral-400 mb-1">Limit Price ($)</label>
              <input
                type="number"
                step="0.05"
                value={limitPrice}
                onChange={(e) => setLimitPrice(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
              />
            </div>
          )}

          {/* Estimated Calculations */}
          <div className="p-3 rounded bg-neutral-900 border border-neutral-800/80 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between text-neutral-400">
              <span>Gross Value:</span>
              <span className="text-white">${Math.round(estimatedTotal).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Simulated Fee ($0.005/sh):</span>
              <span className="text-white">${estimatedCommission.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-neutral-300 font-bold pt-1 border-t border-neutral-800">
              <span>Estimated Capital Required:</span>
              <span className="text-emerald-400">
                ${Math.round(estimatedTotal + estimatedCommission).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-400 pt-0.5">
              <span>Post-Trade Allocation:</span>
              <span className="text-white">
                {(((positions.find((p) => p.ticker === selectedTicker)?.shares || 0) * activeSecurity.price + estimatedTotal) / totalNAV * 100).toFixed(1)}% of NAV
              </span>
            </div>
          </div>

          {/* Trade Status Alert */}
          {tradeStatus.message && (
            <div
              className={`p-3 rounded text-xs flex items-start gap-2 ${
                tradeStatus.type === 'error'
                  ? 'bg-red-950/80 border border-red-800/80 text-red-200'
                  : 'bg-emerald-950/80 border border-emerald-800/80 text-emerald-200'
              }`}
            >
              {tradeStatus.type === 'error' ? (
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              )}
              <span className="leading-snug">{tradeStatus.message}</span>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2.5 px-4 text-xs font-bold rounded-md text-white transition-all cursor-pointer ${
              orderAction === 'BUY'
                ? 'bg-emerald-600 hover:bg-emerald-500'
                : 'bg-red-600 hover:bg-red-500'
            }`}
          >
            Submit {orderAction} Order ({quantity} Shs {selectedTicker})
          </button>
        </form>

        {/* Live Holdings Blotter (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Active Portfolio Holdings
            </span>
            <span className="text-xs text-neutral-400">
              Real-Time Simulated Mark-to-Market
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono">
                  <th className="py-2.5 px-3">Ticker</th>
                  <th className="py-2.5 px-3 text-right">Shares</th>
                  <th className="py-2.5 px-3 text-right">Avg Cost</th>
                  <th className="py-2.5 px-3 text-right">Price</th>
                  <th className="py-2.5 px-3 text-right">Current Value</th>
                  <th className="py-2.5 px-3 text-right">Weight</th>
                  <th className="py-2.5 px-3 text-right">P&L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80">
                {positions.map((pos) => {
                  const val = pos.shares * pos.currentPrice;
                  const cost = pos.shares * pos.avgPrice;
                  const pl = val - cost;
                  const plPct = ((val - cost) / cost) * 100;
                  const weightPct = (val / totalNAV) * 100;

                  return (
                    <tr key={pos.ticker} className="hover:bg-neutral-900/40">
                      <td className="py-2.5 px-3 font-mono font-bold text-white">
                        <button
                          type="button"
                          onClick={() => handleSelectTicker(pos.ticker)}
                          className="hover:text-emerald-400 underline underline-offset-2 cursor-pointer"
                        >
                          {pos.ticker}
                        </button>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-neutral-300">
                        {pos.shares.toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-neutral-400">
                        ${pos.avgPrice.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-white">
                        ${pos.currentPrice.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold text-white">
                        ${Math.round(val).toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-neutral-300">
                        {weightPct.toFixed(1)}%
                      </td>
                      <td className={`py-2.5 px-3 text-right font-mono font-semibold ${pl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {pl >= 0 ? `+$${Math.round(pl).toLocaleString()}` : `-$${Math.abs(Math.round(pl)).toLocaleString()}`} ({plPct.toFixed(1)}%)
                      </td>
                    </tr>
                  );
                })}

                {/* Cash Row */}
                <tr className="bg-neutral-900/40 font-mono text-neutral-300">
                  <td className="py-2.5 px-3 font-bold text-neutral-400">USD_CASH</td>
                  <td className="py-2.5 px-3 text-right text-neutral-500">—</td>
                  <td className="py-2.5 px-3 text-right text-neutral-500">$1.00</td>
                  <td className="py-2.5 px-3 text-right text-neutral-500">$1.00</td>
                  <td className="py-2.5 px-3 text-right font-semibold text-white">${Math.round(cash).toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right">{((cash / totalNAV) * 100).toFixed(1)}%</td>
                  <td className="py-2.5 px-3 text-right text-neutral-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-2 p-3 rounded-lg bg-neutral-900/40 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Academic Sandbox Guardrails:</strong> Notice how trying to buy more than 15% of your portfolio triggers the Rule 2.2 risk violation. In the official competition, orders violating risk parameters are rejected by the matching engine.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
