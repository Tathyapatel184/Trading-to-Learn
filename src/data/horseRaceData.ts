import { HorseRaceWeek } from '../types';

export const HORSE_RACE_WEEKS: HorseRaceWeek[] = [
  {
    weekNumber: 1,
    weekDates: 'March 01 – March 07, 2026',
    marketEvent: 'Market Inception & US Core CPI Print (+0.3% MoM)',
    standings: [
      {
        rank: 1,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 3.40,
        cumulativeReturnPct: 3.40,
        keyTradeCatalyst: 'Initial overweight in Berkshire Hathaway ($BRK.B) and defensive consumer staples as CPI came in hot.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1034000, fiveMinDelayNav: 1033200, fifteenMinDelayNav: 1031800 }
      },
      {
        rank: 2,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 2.80,
        cumulativeReturnPct: 2.80,
        keyTradeCatalyst: 'Short duration tilt with conservative 22% cash reserve during initial rate repricing.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1028000, fiveMinDelayNav: 1027500, fifteenMinDelayNav: 1026000 }
      },
      {
        rank: 3,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 1.80,
        cumulativeReturnPct: 1.80,
        keyTradeCatalyst: 'Statistical factor model absorbed minor spread crossing costs during broad index rebalancing.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1018000, fiveMinDelayNav: 1017400, fifteenMinDelayNav: 1015900 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 1.50,
        cumulativeReturnPct: 1.50,
        keyTradeCatalyst: 'Cross-sectional mean reversion opened positions in oversold mega-cap tech.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1015000, fiveMinDelayNav: 1014800, fifteenMinDelayNav: 1013900 }
      },
      {
        rank: 5,
        teamName: 'Palo Alto Silicon Syndicate',
        university: 'Stanford University',
        weeklyReturnPct: 1.40,
        cumulativeReturnPct: 1.40,
        keyTradeCatalyst: 'Aggressive cloud software entries experienced initial headline volatility.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1014000, fiveMinDelayNav: 1013200, fifteenMinDelayNav: 1011500 }
      }
    ]
  },
  {
    weekNumber: 2,
    weekDates: 'March 08 – March 14, 2026',
    marketEvent: 'Semiconductor Foundry Earnings Wave & AI Capex Guidance',
    standings: [
      {
        rank: 1,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 4.20,
        cumulativeReturnPct: 6.00,
        keyTradeCatalyst: 'Surged 2 spots! Factor momentum model locked in 9.5% max allocation to NVDA & ASML right before hyperscaler capex revisions.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1060000, fiveMinDelayNav: 1058200, fifteenMinDelayNav: 1052400 }
      },
      {
        rank: 2,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 2.80,
        cumulativeReturnPct: 6.20,
        keyTradeCatalyst: 'Steady healthcare advance via Eli Lilly ($LLY) and UnitedHealth ($UNH).',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1062000, fiveMinDelayNav: 1061500, fifteenMinDelayNav: 1060200 }
      },
      {
        rank: 3,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 2.40,
        cumulativeReturnPct: 5.20,
        keyTradeCatalyst: 'Defense prime rotation ($RTX) gained ground amid European aerospace tenders.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1052000, fiveMinDelayNav: 1051200, fifteenMinDelayNav: 1049800 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 3.90,
        cumulativeReturnPct: 5.40,
        keyTradeCatalyst: 'High-frequency momentum triggers captured semiconductor supply chain upside.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1054000, fiveMinDelayNav: 1053100, fifteenMinDelayNav: 1049200 }
      },
      {
        rank: 5,
        teamName: 'Hyde Park Empirical Models',
        university: 'University of Chicago (Booth)',
        weeklyReturnPct: 2.70,
        cumulativeReturnPct: 4.80,
        keyTradeCatalyst: 'Small-cap value filter resisted macro tech chop; strong financial balance.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1048000, fiveMinDelayNav: 1047600, fifteenMinDelayNav: 1046800 }
      }
    ]
  },
  {
    weekNumber: 3,
    weekDates: 'March 15 – March 21, 2026',
    marketEvent: 'FOMC Press Conference & Yield Curve Steepening',
    standings: [
      {
        rank: 1,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 3.70,
        cumulativeReturnPct: 8.90,
        keyTradeCatalyst: 'Climbed to 1st! Masterfully played Treasury steepener and energy rotation ($XOM) as oil touched $88/bbl.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1089000, fiveMinDelayNav: 1087400, fifteenMinDelayNav: 1081500 }
      },
      {
        rank: 2,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 2.40,
        cumulativeReturnPct: 8.40,
        keyTradeCatalyst: 'Trimmed tech exposure to maintain Rule 2.2 15% cap after rapid price run-up.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1084000, fiveMinDelayNav: 1083100, fifteenMinDelayNav: 1079800 }
      },
      {
        rank: 3,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 1.60,
        cumulativeReturnPct: 7.80,
        keyTradeCatalyst: 'Prudent cash allocation kept portfolio drawdown under 2.5% during rate volatility.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1078000, fiveMinDelayNav: 1077500, fifteenMinDelayNav: 1076400 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 1.40,
        cumulativeReturnPct: 6.80,
        keyTradeCatalyst: 'Multi-factor hedge dampened downside during Fed Chair speech.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1068000, fiveMinDelayNav: 1067200, fifteenMinDelayNav: 1064500 }
      },
      {
        rank: 5,
        teamName: 'Hyde Park Empirical Models',
        university: 'University of Chicago (Booth)',
        weeklyReturnPct: 1.40,
        cumulativeReturnPct: 6.20,
        keyTradeCatalyst: 'Goldman Sachs ($GS) investment banking rebound offset industrial drag.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1062000, fiveMinDelayNav: 1061400, fifteenMinDelayNav: 1060100 }
      }
    ]
  },
  {
    weekNumber: 4,
    weekDates: 'March 22 – March 28, 2026',
    marketEvent: 'Mid-Term Rebalance & Space Defense Procurement Announcements',
    standings: [
      {
        rank: 1,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 3.40,
        cumulativeReturnPct: 11.80,
        keyTradeCatalyst: 'Reclaimed 1st Place! High-conviction rebalance into data center thermal cooling ($VRT) and enterprise software ($MSFT).',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1118000, fiveMinDelayNav: 1116200, fifteenMinDelayNav: 1109400 }
      },
      {
        rank: 2,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 3.10,
        cumulativeReturnPct: 12.00,
        keyTradeCatalyst: 'Defense contractor earnings surprise lifted portfolio NAV past $1.12M.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1120000, fiveMinDelayNav: 1118900, fifteenMinDelayNav: 1113200 }
      },
      {
        rank: 3,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 2.70,
        cumulativeReturnPct: 10.50,
        keyTradeCatalyst: 'Costco ($COST) membership fee hike announcement yielded +6.4% gain on core holding.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1105000, fiveMinDelayNav: 1104600, fifteenMinDelayNav: 1103800 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 2.40,
        cumulativeReturnPct: 9.20,
        keyTradeCatalyst: 'Alphabet ($GOOGL) AI model launch generated immediate intraday momentum gains.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1092000, fiveMinDelayNav: 1090800, fifteenMinDelayNav: 1086200 }
      },
      {
        rank: 5,
        teamName: 'Hyde Park Empirical Models',
        university: 'University of Chicago (Booth)',
        weeklyReturnPct: 2.20,
        cumulativeReturnPct: 8.40,
        keyTradeCatalyst: 'Materials leader Linde ($LIN) provided steady industrial gas margin resilience.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1084000, fiveMinDelayNav: 1083600, fifteenMinDelayNav: 1082500 }
      }
    ]
  },
  {
    weekNumber: 5,
    weekDates: 'March 29 – April 04, 2026',
    marketEvent: 'Geopolitical Tensions & Energy Price Spike ($92 Crude)',
    standings: [
      {
        rank: 1,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 0.90,
        cumulativeReturnPct: 12.90,
        keyTradeCatalyst: 'Preserved lead during market chop via high exposure to defense primes and oil majors.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1129000, fiveMinDelayNav: 1127800, fifteenMinDelayNav: 1122100 }
      },
      {
        rank: 2,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 1.60,
        cumulativeReturnPct: 13.40,
        keyTradeCatalyst: 'Cross-asset volatility parity algorithms triggered automated profit-taking.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1134000, fiveMinDelayNav: 1132500, fifteenMinDelayNav: 1127600 }
      },
      {
        rank: 3,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 0.90,
        cumulativeReturnPct: 11.40,
        keyTradeCatalyst: 'High dividend cash flow cushioned the portfolio against broader index sell-off.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1114000, fiveMinDelayNav: 1113500, fifteenMinDelayNav: 1112800 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 0.90,
        cumulativeReturnPct: 10.10,
        keyTradeCatalyst: 'Tight stop-loss triggers limited downside in consumer discretionary.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1101000, fiveMinDelayNav: 1100200, fifteenMinDelayNav: 1097400 }
      },
      {
        rank: 5,
        teamName: 'Hyde Park Empirical Models',
        university: 'University of Chicago (Booth)',
        weeklyReturnPct: 0.80,
        cumulativeReturnPct: 9.20,
        keyTradeCatalyst: 'Pristine 3.2% maximum drawdown remains lowest in the entire competition.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1092000, fiveMinDelayNav: 1091500, fifteenMinDelayNav: 1090600 }
      }
    ]
  },
  {
    weekNumber: 6,
    weekDates: 'April 05 – April 12, 2026',
    marketEvent: 'Final Week Push Ahead of Strategy Memo Submissions',
    standings: [
      {
        rank: 1,
        teamName: 'Alpha Variance Quantitative',
        university: 'MIT Sloan',
        weeklyReturnPct: 1.46,
        cumulativeReturnPct: 14.86,
        keyTradeCatalyst: 'Clinches Round 1 Lead! Optimized risk-parity rebalance and Eli Lilly drug trial milestone propelled final NAV to $1,148,650.',
        tradeEffect: 'surge',
        latencyImpact: { realTimeNav: 1148650, fiveMinDelayNav: 1146800, fifteenMinDelayNav: 1139400 }
      },
      {
        rank: 2,
        teamName: 'Radcliffe Macro Allocation',
        university: 'University of Oxford',
        weeklyReturnPct: 0.52,
        cumulativeReturnPct: 13.42,
        keyTradeCatalyst: 'Locked in 2nd place with 2.18 Sharpe ratio; balanced defense, tech, and cash reserve.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1134200, fiveMinDelayNav: 1132900, fifteenMinDelayNav: 1126500 }
      },
      {
        rank: 3,
        teamName: 'Keystone Value Partners',
        university: 'Wharton School',
        weeklyReturnPct: 0.78,
        cumulativeReturnPct: 12.18,
        keyTradeCatalyst: 'Captured 3rd place with pristine 2.05 Sharpe and zero rule infractions throughout all 6 weeks.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1121800, fiveMinDelayNav: 1121200, fifteenMinDelayNav: 1119500 }
      },
      {
        rank: 4,
        teamName: 'Singa Capital Algorithmic',
        university: 'National University of Singapore',
        weeklyReturnPct: 0.74,
        cumulativeReturnPct: 10.84,
        keyTradeCatalyst: 'Strong 22-position diversification and systematic volatility targeting.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1108400, fiveMinDelayNav: 1107500, fifteenMinDelayNav: 1103200 }
      },
      {
        rank: 5,
        teamName: 'Hyde Park Empirical Models',
        university: 'University of Chicago (Booth)',
        weeklyReturnPct: 0.65,
        cumulativeReturnPct: 9.85,
        keyTradeCatalyst: 'Wins Lowest Maximum Drawdown Award (3.2%) with exceptional institutional risk discipline.',
        tradeEffect: 'neutral',
        latencyImpact: { realTimeNav: 1098500, fiveMinDelayNav: 1098100, fifteenMinDelayNav: 1097200 }
      }
    ]
  }
];
