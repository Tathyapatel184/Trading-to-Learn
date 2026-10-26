export type PageId = 'home' | 'challenge' | 'horserace' | 'discussions' | 'rules' | 'leaderboard' | 'contact';

export interface Holding {
  ticker: string;
  name: string;
  sector: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  weight: number;
  unrealizedPL: number;
  unrealizedPLPct: number;
}

export interface SectorAllocation {
  sector: string;
  weight: number;
  color: string;
}

export interface LeaderboardEntry {
  rank: number;
  teamId: string;
  teamName: string;
  university: string;
  location: string;
  region: 'Americas' | 'EMEA' | 'APAC';
  division: 'Undergraduate' | 'Graduate/MBA';
  strategyStyle: 'Quantitative Factor' | 'Fundamental Long-Horizon' | 'Macro Rotation' | 'Multi-Strategy';
  portfolioValue: number;
  totalReturnPct: number;
  alphaVsSP500: number;
  sharpeRatio: number;
  maxDrawdownPct: number;
  dailyChangePct: number;
  holdingsCount: number;
  facultyAdvisor: string;
  thesisSummary: string;
  topHoldings: Holding[];
  sectorAllocations: SectorAllocation[];
  history: number[];
}

export interface RuleSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  clauses: {
    code: string;
    headline: string;
    details: string;
  }[];
}

export interface OrganizerMember {
  name: string;
  role: string;
  institution: string;
  department: string;
  bio: string;
  avatarInitials?: string;
  avatarBg?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Platform & Simulation' | 'Eligibility & Rules' | 'Faculty & Scoring';
}

// Discussions Board Types
export interface DiscussionComment {
  id: string;
  authorName: string;
  authorUniversity: string;
  authorRole: string; // e.g. 'Student Trader', 'Teaching Assistant', 'Faculty Advisor'
  date: string;
  content: string;
  upvotes: number;
}

export interface DiscussionPost {
  id: string;
  title: string;
  authorName: string;
  authorUniversity: string;
  authorRole: string;
  date: string; // YYYY-MM-DD
  dayLabel: string; // e.g. 'Monday', 'Tuesday'
  topic: 'AI & Semiconductor Trade' | 'Space Economy & Defense' | 'Macro & Interest Rates' | 'Algo & Execution Latency' | 'Weekly Trade Post-Mortem' | 'Course Class Discussion';
  taggedTickers: string[];
  content: string;
  upvotes: number;
  classCreditVerified: boolean;
  comments: DiscussionComment[];
}

// Horse Race Types
export interface HorseRaceWeek {
  weekNumber: number;
  weekDates: string;
  marketEvent: string;
  standings: {
    rank: number;
    teamName: string;
    university: string;
    weeklyReturnPct: number;
    cumulativeReturnPct: number;
    keyTradeCatalyst: string;
    tradeEffect: 'surge' | 'neutral' | 'drawdown';
    latencyImpact: {
      realTimeNav: number;
      fiveMinDelayNav: number;
      fifteenMinDelayNav: number;
    };
  }[];
}
