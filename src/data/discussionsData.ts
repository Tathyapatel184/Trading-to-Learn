import { DiscussionPost } from '../types';

export const INITIAL_DISCUSSIONS: DiscussionPost[] = [
  {
    id: 'disc-01',
    title: 'Space Economy Trade: Why we allocated 8.5% into orbital launch and defense satellites',
    authorName: 'Rohan Sharma',
    authorUniversity: 'University of Michigan',
    authorRole: 'Student Portfolio Manager',
    date: '2026-10-26',
    dayLabel: 'Monday',
    topic: 'Space Economy & Defense',
    taggedTickers: ['RKLB', 'LMT', 'RTX'],
    classCreditVerified: true,
    upvotes: 24,
    content: `For our thematic semester allocation, our team looked past consumer tech into the commercial space economy. Rocket Lab ($RKLB) and defense primes ($LMT, $RTX) currently offer high-barrier contract backlogs that are completely decoupled from consumer spending dips. We conducted a discounted cash flow (DCF) factoring in European satellite defense procurement. Question for the class: How are other teams hedging against potential engine test delays in this sector?`,
    comments: [
      {
        id: 'c-01',
        authorName: 'Maya Lindqvist',
        authorUniversity: 'MIT Sloan',
        authorRole: 'Quant Researcher',
        date: '2026-10-26',
        content: 'We ran an event-study regression on defense aerospace. The beta to broad market drops during geopolitical escalations, effectively serving as an uncorrelated tail hedge. Strong thesis.',
        upvotes: 8
      },
      {
        id: 'c-02',
        authorName: 'Prof. David K. Thorne',
        authorUniversity: 'Academic Steering Committee',
        authorRole: 'Faculty Chair',
        date: '2026-10-26',
        content: 'Good valuation discipline, Rohan. Remember Rule 2.2: ensure your combined space basket does not violate individual issuer ceilings. Verified for Week 4 course discussion credit.',
        upvotes: 15
      }
    ]
  },
  {
    id: 'disc-02',
    title: 'The AI & Semiconductor Hardware Value Chain: Pricing in power and cooling constraints',
    authorName: 'Julian Zhao',
    authorUniversity: 'UC Berkeley (Haas)',
    authorRole: 'Senior Analyst',
    date: '2026-10-25',
    dayLabel: 'Friday',
    topic: 'AI & Semiconductor Trade',
    taggedTickers: ['NVDA', 'ASML', 'VRT', 'CEG'],
    classCreditVerified: true,
    upvotes: 31,
    content: `Everyone in the competition is holding pure-play GPUs ($NVDA), but we rotated 6% into data center infrastructure and nuclear power providers ($CEG, $VRT). The limiting factor for AI clusters is no longer just chip supply—it is gigawatt grid capacity. Our Sharpe ratio increased by 0.35 because Constellation Energy provided steady low-beta returns while tech experienced intra-day whip-saws.`,
    comments: [
      {
        id: 'c-03',
        authorName: 'Liam O’Connor',
        authorUniversity: 'University of Oxford',
        authorRole: 'Macro Strategist',
        date: '2026-10-25',
        content: 'Brilliant second-order thinking. We did a similar rotation into European utility infrastructure. The margin profiles on long-term power purchase agreements (PPAs) are exceptional.',
        upvotes: 6
      }
    ]
  },
  {
    id: 'disc-03',
    title: 'Execution Latency Post-Mortem: Does a 15-minute Bloomberg feed gap alter the winning horse?',
    authorName: 'Priya Sundaram',
    authorUniversity: 'Stanford University',
    authorRole: 'Head of Operations & TA',
    date: '2026-10-24',
    dayLabel: 'Thursday',
    topic: 'Algo & Execution Latency',
    taggedTickers: ['SPY', 'QQQ'],
    classCreditVerified: true,
    upvotes: 42,
    content: `Professor raised this vital question in lab: If collegiate platforms use a 15-minute delayed commercial quote vs. an independent sub-second real-time API, does it change the horse race? We backtested 1,400 collegiate orders from Week 3. In low-volatility regimes, the 15-min gap resulted in less than 0.08% NAV delta. However, during CPI prints and Fed rate decisions, delayed execution resulted in an average slippage penalty of 1.42%, completely shifting 1st and 3rd place! Check the Horse Race tab to inspect the simulation.`,
    comments: [
      {
        id: 'c-04',
        authorName: 'Marcus Vance',
        authorUniversity: 'Chicago Booth',
        authorRole: 'MBA Candidate',
        date: '2026-10-24',
        content: 'This proves why algorithmic latency budgeting matters. Great empirical analysis Priya. Will reference this in our Investment Committee Memo.',
        upvotes: 11
      }
    ]
  },
  {
    id: 'disc-04',
    title: 'Weekly Trade Post-Mortem: Why our team cut position in consumer discretionary after retail sales print',
    authorName: 'Elena Rostova',
    authorUniversity: 'Wharton School',
    authorRole: 'Junior Analyst',
    date: '2026-10-23',
    dayLabel: 'Wednesday',
    topic: 'Weekly Trade Post-Mortem',
    taggedTickers: ['NKE', 'TGT', 'COST'],
    classCreditVerified: true,
    upvotes: 19,
    content: `Following the consumer confidence release on Wednesday morning, credit card delinquency data showed mounting pressure on subprime households. We trimmed our apparel exposure ($NKE) and reallocated the proceeds into wholesale staples ($COST) and unencumbered cash buffer. While other teams suffered a 2.1% drawdown this week, our cash-flow tilt preserved capital and preserved our top-3 Sharpe standing.`,
    comments: [
      {
        id: 'c-05',
        authorName: 'Dr. Evelyn Vance, PhD',
        authorUniversity: 'Academic Steering Committee',
        authorRole: 'Faculty Co-Chair',
        date: '2026-10-23',
        content: 'Exemplary risk discipline Elena. This is the difference between "Trade to Learn" and recreational trading games. You managed the downside instead of hoping for a rebound.',
        upvotes: 18
      }
    ]
  },
  {
    id: 'disc-05',
    title: 'Class Discussion Credit: How should collegiate portfolios prepare for tomorrow’s FOMC Rate Decision?',
    authorName: 'Lucas Meyer',
    authorUniversity: 'London School of Economics',
    authorRole: 'Student Chapter Lead',
    date: '2026-10-22',
    dayLabel: 'Tuesday',
    topic: 'Course Class Discussion',
    taggedTickers: ['TLT', 'JPM', 'GLD'],
    classCreditVerified: true,
    upvotes: 27,
    content: `Required reading for Section B Finance 301 students before tomorrow’s lab session: With 25bps priced in with 88% probability, the real volatility will stem from the dot plot commentary. What is your team’s playbook if Powell signals higher-for-longer? Are you holding duration ($TLT) or staying defensively in short-term paper and cash reserves? Submit your rationale below for course credit.`,
    comments: [
      {
        id: 'c-06',
        authorName: 'Alexandre Martin',
        authorUniversity: 'HEC Paris',
        authorRole: 'Master in Finance',
        date: '2026-10-22',
        content: 'We are holding 14% cash and paired long money-center banks ($JPM) which benefit from elevated net interest margin. We avoid long duration until the 10-year Treasury yield settles.',
        upvotes: 9
      }
    ]
  }
];
