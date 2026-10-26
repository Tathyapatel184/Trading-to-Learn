import { RuleSection } from '../types';

export const COMPETITION_RULES: RuleSection[] = [
  {
    id: 'eligibility',
    number: '01',
    title: 'Teams & Eligibility',
    summary: '3–5 students plus one faculty advisor. One team per student.',
    clauses: [
      {
        code: '1.1',
        headline: 'Roster Composition',
        details: 'Each team consists of 3 to 5 enrolled undergraduate or graduate students at participating regional and national universities, plus one designated faculty advisor.'
      },
      {
        code: '1.2',
        headline: 'Single-Team Policy',
        details: 'One team per student. Students may not participate across multiple teams or competing university entries.'
      },
      {
        code: '1.3',
        headline: 'Faculty Advisor Role',
        details: 'Each team must have a verified faculty sponsor (Professor, Lecturer, or Finance Lab Director) who affirms academic integrity and acts as the institutional contact.'
      }
    ]
  },
  {
    id: 'portfolio',
    number: '02',
    title: 'Portfolio & Investment Limits',
    summary: '$1,000,000 in virtual cash. At least 90% invested after week 2. No single holding above 10%.',
    clauses: [
      {
        code: '2.1',
        headline: '$1,000,000 Virtual Cash Allocation',
        details: 'Each registered team begins with exactly $1,000,000 in virtual simulation currency. All orders are paper executions with zero real capital at risk.'
      },
      {
        code: '2.2',
        headline: '90% Investment Requirement',
        details: 'To foster active asset allocation and discourage sitting entirely in risk-free cash, portfolios must be at least 90.0% invested by the end of Week 2 through the close of the competition.'
      },
      {
        code: '2.3',
        headline: '10% Single-Holding Cap',
        details: 'No single equity security or exchange-traded asset may exceed 10.0% of total portfolio net asset value (NAV) at the time of purchase. This guarantees diversified portfolio construction.'
      }
    ]
  },
  {
    id: 'prohibited',
    number: '03',
    title: 'Prohibited Instruments & Trading Constraints',
    summary: 'Margin, short selling, and stocks priced under $5 are strictly prohibited.',
    clauses: [
      {
        code: '3.1',
        headline: 'No Margin or Leverage',
        details: 'Accounts are standard 1.0x cash simulation accounts. Margin borrowing, leveraged synthetic derivatives, and leveraged 3x inverse ETFs are blocked.'
      },
      {
        code: '3.2',
        headline: 'No Short Selling',
        details: 'Naked short positions are prohibited. Teams must identify high-conviction long opportunities and manage downside through asset allocation and cash weighting.'
      },
      {
        code: '3.3',
        headline: '$5 Minimum Stock Price Rule',
        details: 'Penny stocks and micro-cap securities trading under $5.00 are excluded to prevent low-liquidity manipulation and gambling.'
      }
    ]
  },
  {
    id: 'trade-notes',
    number: '04',
    title: 'Trade Notes & Educational Reflection',
    summary: 'Every trade needs a 2–3 sentence rationale. Notes count toward your score.',
    clauses: [
      {
        code: '4.1',
        headline: 'Mandatory Rationale Log',
        details: 'Every buy or sell order must be accompanied by a 2–3 sentence explanation detailing the macroeconomic, fundamental, or technical catalyst for the position.'
      },
      {
        code: '4.2',
        headline: 'The "Learn to Win" Twist',
        details: 'Teams submit weekly reflections synthesizing portfolio behavior, unexpected market shifts, and risk adjustments. Fulfilling the educational requirement is non-negotiable.'
      }
    ]
  },
  {
    id: 'scoring',
    number: '05',
    title: 'Scoring Formula (70 / 30)',
    summary: '70% portfolio return relative to a benchmark, 30% quality of trade notes and weekly reflections.',
    clauses: [
      {
        code: '5.1',
        headline: '70% Portfolio Return vs. Benchmark',
        details: 'Calculated based on net time-weighted return relative to the S&P 500 / broad equity index over the competition duration.'
      },
      {
        code: '5.2',
        headline: '30% Trade Notes & Reflections',
        details: 'Evaluated blindly by faculty judges assessing clarity of analytical thesis, adherence to risk rules, and quality of post-trade post-mortems.'
      }
    ]
  },
  {
    id: 'conduct-faq',
    number: '06',
    title: 'Academic Conduct & Integrity',
    summary: 'Honor code, one account per team, and dispute resolution.',
    clauses: [
      {
        code: '6.1',
        headline: 'Academic Honor Code',
        details: 'All work must represent original student team analysis. Cross-team collusion and order manipulation are grounds for immediate review.'
      },
      {
        code: '6.2',
        headline: 'Dispute Handling',
        details: 'Disputes are reviewed by the Academic Steering Committee within 48 business hours. Committee rulings are final.'
      }
    ]
  }
];
