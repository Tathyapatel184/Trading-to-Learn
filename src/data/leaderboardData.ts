import { LeaderboardEntry } from '../types';

export const LEADERBOARD_TEAMS: LeaderboardEntry[] = [
  {
    rank: 1,
    teamId: 'ttl-01',
    teamName: 'Alpha Insights',
    university: 'University A (Northeast Region)',
    location: 'Boston, MA',
    region: 'Americas',
    division: 'Undergraduate',
    strategyStyle: 'Quantitative Factor',
    portfolioValue: 1124000,
    totalReturnPct: 12.40,
    alphaVsSP500: 4.46,
    sharpeRatio: 2.28,
    maxDrawdownPct: 3.2,
    dailyChangePct: 0.75,
    holdingsCount: 14,
    facultyAdvisor: 'Prof. David Vance',
    thesisSummary: 'Disciplined factor weighting across cloud computing and semiconductor equipment. Rotated into AI infrastructure early with strict 10% maximum holding limits.',
    history: [1000000, 1021000, 1045000, 1068000, 1092000, 1124000],
    sectorAllocations: [
      { sector: 'Technology', weight: 32.0, color: '#38bdf8' },
      { sector: 'Healthcare', weight: 22.0, color: '#34d399' },
      { sector: 'Financials', weight: 18.0, color: '#fbbf24' },
      { sector: 'Industrials', weight: 18.0, color: '#a78bfa' },
      { sector: 'Cash Buffer', weight: 10.0, color: '#94a3b8' }
    ],
    topHoldings: [
      { ticker: 'NVDA', name: 'Nvidia Corp', sector: 'Technology', shares: 750, avgPrice: 118.0, currentPrice: 132.8, weight: 8.86, unrealizedPL: 11100, unrealizedPLPct: 12.5 },
      { ticker: 'LLY', name: 'Eli Lilly & Co', sector: 'Healthcare', shares: 110, avgPrice: 790.0, currentPrice: 895.5, weight: 8.75, unrealizedPL: 11605, unrealizedPLPct: 13.3 },
      { ticker: 'MSFT', name: 'Microsoft Corp', sector: 'Technology', shares: 210, avgPrice: 415.0, currentPrice: 438.6, weight: 8.19, unrealizedPL: 4956, unrealizedPLPct: 5.7 }
    ]
  },
  {
    rank: 2,
    teamId: 'ttl-02',
    teamName: 'Market Minds',
    university: 'University B (Midwest Region)',
    location: 'Chicago, IL',
    region: 'Americas',
    division: 'Undergraduate',
    strategyStyle: 'Macro Rotation',
    portfolioValue: 1097000,
    totalReturnPct: 9.70,
    alphaVsSP500: 1.76,
    sharpeRatio: 2.04,
    maxDrawdownPct: 3.6,
    dailyChangePct: 0.42,
    holdingsCount: 16,
    facultyAdvisor: 'Dr. Katherine Miller',
    thesisSummary: 'Macro allocation focusing on defensive industrial manufacturers and sovereign fixed income proxies. Preserved capital through interest rate volatility.',
    history: [1000000, 1018000, 1039000, 1058000, 1079000, 1097000],
    sectorAllocations: [
      { sector: 'Industrials', weight: 28.0, color: '#a78bfa' },
      { sector: 'Energy & Materials', weight: 24.0, color: '#f97316' },
      { sector: 'Financials', weight: 20.0, color: '#fbbf24' },
      { sector: 'Technology', weight: 18.0, color: '#38bdf8' },
      { sector: 'Cash Buffer', weight: 10.0, color: '#94a3b8' }
    ],
    topHoldings: [
      { ticker: 'CAT', name: 'Caterpillar Inc', sector: 'Industrials', shares: 260, avgPrice: 325.0, currentPrice: 368.5, weight: 8.73, unrealizedPL: 11310, unrealizedPLPct: 13.4 },
      { ticker: 'XOM', name: 'Exxon Mobil Corp', sector: 'Energy', shares: 740, avgPrice: 110.0, currentPrice: 119.2, weight: 8.04, unrealizedPL: 6808, unrealizedPLPct: 8.4 }
    ]
  },
  {
    rank: 3,
    teamId: 'ttl-03',
    teamName: 'Twin Peaks Capital',
    university: 'University C (Pacific Region)',
    location: 'Seattle, WA',
    region: 'Americas',
    division: 'Undergraduate',
    strategyStyle: 'Fundamental Long-Horizon',
    portfolioValue: 1081000,
    totalReturnPct: 8.10,
    alphaVsSP500: 0.16,
    sharpeRatio: 1.92,
    maxDrawdownPct: 2.8,
    dailyChangePct: -0.12,
    holdingsCount: 15,
    facultyAdvisor: 'Prof. Robert Thorne',
    thesisSummary: 'Bottom-up value investing in wide-moat consumer staples and healthcare providers. Zero rule violations and exemplary trade notes logged every week.',
    history: [1000000, 1012000, 1029000, 1047000, 1064000, 1081000],
    sectorAllocations: [
      { sector: 'Healthcare', weight: 30.0, color: '#34d399' },
      { sector: 'Consumer Staples', weight: 25.0, color: '#4ade80' },
      { sector: 'Financials', weight: 20.0, color: '#fbbf24' },
      { sector: 'Technology', weight: 15.0, color: '#38bdf8' },
      { sector: 'Cash Buffer', weight: 10.0, color: '#94a3b8' }
    ],
    topHoldings: [
      { ticker: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', shares: 180, avgPrice: 485.0, currentPrice: 532.0, weight: 8.86, unrealizedPL: 8460, unrealizedPLPct: 9.7 },
      { ticker: 'COST', name: 'Costco Wholesale', sector: 'Consumer Staples', shares: 90, avgPrice: 800.0, currentPrice: 874.0, weight: 7.28, unrealizedPL: 6660, unrealizedPLPct: 9.2 }
    ]
  },
  {
    rank: 4,
    teamId: 'ttl-04',
    teamName: 'Keystone Quant Group',
    university: 'University D (Mid-Atlantic)',
    location: 'Philadelphia, PA',
    region: 'Americas',
    division: 'Undergraduate',
    strategyStyle: 'Quantitative Factor',
    portfolioValue: 1074000,
    totalReturnPct: 7.40,
    alphaVsSP500: -0.54,
    sharpeRatio: 1.84,
    maxDrawdownPct: 3.1,
    dailyChangePct: 0.35,
    holdingsCount: 18,
    facultyAdvisor: 'Dr. Mei-Ling Zhang',
    thesisSummary: 'Statistical arbitrage with strict 90% invested constraint satisfied by Week 2.',
    history: [1000000, 1010000, 1025000, 1042000, 1058000, 1074000],
    sectorAllocations: [
      { sector: 'Financials', weight: 26.0, color: '#fbbf24' },
      { sector: 'Technology', weight: 24.0, color: '#38bdf8' },
      { sector: 'Healthcare', weight: 20.0, color: '#34d399' },
      { sector: 'Industrials', weight: 20.0, color: '#a78bfa' },
      { sector: 'Cash Buffer', weight: 10.0, color: '#94a3b8' }
    ],
    topHoldings: [
      { ticker: 'JPM', name: 'JPMorgan Chase & Co', sector: 'Financials', shares: 380, avgPrice: 198.0, currentPrice: 218.4, weight: 7.73, unrealizedPL: 7752, unrealizedPLPct: 10.3 }
    ]
  },
  {
    rank: 5,
    teamId: 'ttl-05',
    teamName: 'Crescent Harbor Asset Mgmt',
    university: 'University E (Southern Region)',
    location: 'New Orleans, LA',
    region: 'Americas',
    division: 'Graduate/MBA',
    strategyStyle: 'Multi-Strategy',
    portfolioValue: 1068000,
    totalReturnPct: 6.80,
    alphaVsSP500: -1.14,
    sharpeRatio: 1.76,
    maxDrawdownPct: 3.4,
    dailyChangePct: 0.22,
    holdingsCount: 15,
    facultyAdvisor: 'Prof. Andrew Bell',
    thesisSummary: 'Balanced multi-asset equity strategy with weekly rationale documentation.',
    history: [1000000, 1008000, 1022000, 1038000, 1054000, 1068000],
    sectorAllocations: [
      { sector: 'Technology', weight: 28.0, color: '#38bdf8' },
      { sector: 'Financials', weight: 22.0, color: '#fbbf24' },
      { sector: 'Healthcare', weight: 20.0, color: '#34d399' },
      { sector: 'Utilities', weight: 20.0, color: '#2dd4bf' },
      { sector: 'Cash Buffer', weight: 10.0, color: '#94a3b8' }
    ],
    topHoldings: [
      { ticker: 'BRK.B', name: 'Berkshire Hathaway', sector: 'Financials', shares: 200, avgPrice: 412.0, currentPrice: 442.0, weight: 8.28, unrealizedPL: 6000, unrealizedPLPct: 7.3 }
    ]
  }
];
