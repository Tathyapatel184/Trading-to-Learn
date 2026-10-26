import { OrganizerMember, FAQItem } from '../types';

export const ACADEMIC_STEERING_COMMITTEE: OrganizerMember[] = [
  {
    name: 'Dr. Evelyn Vance, PhD',
    role: 'Faculty Co-Chair & Competition Director',
    institution: 'Department of Finance & Economics',
    department: 'Quantitative Portfolio Theory Group',
    bio: 'Former senior quantitative researcher and university endowed professor specializing in empirical asset pricing and collegiate pedagogical simulation tools.'
  },
  {
    name: 'Prof. David K. Thorne',
    role: 'Academic Oversight & Ethics Committee',
    institution: 'School of Management & Applied Mathematics',
    department: 'Center for Capital Market Studies',
    bio: 'Pioneered collegiate trading laboratory curriculums across twelve North American universities; author of "Risk Discipline in Systematic Portfolio Management".'
  },
  {
    name: 'Dr. Mei-Ling Zhang',
    role: 'Director of Algorithmic & Factor Evaluation',
    institution: 'Institute for Financial Technology & Machine Learning',
    department: 'Computational Economics',
    bio: 'Leads collegiate algorithmic sandbox architectures; specializes in multi-asset factor modeling and synthetic order simulation engines.'
  },
  {
    name: 'Robert Alistair Campbell, CFA',
    role: 'Judge Panel Liaison & Industry Advisory Lead',
    institution: 'Global Institutional Asset Management Council',
    department: 'Curriculum & Student Mentorship',
    bio: 'Over 25 years in institutional global equity management, bridging university academic research with real-world buyside risk parameters.'
  }
];

export const STUDENT_EXECUTIVE_BOARD: OrganizerMember[] = [
  {
    name: 'Alexander Ward',
    role: 'Student Executive President',
    institution: 'Collegiate Financial Society',
    department: 'Senior in Mathematical Economics',
    bio: 'Coordinates campus ambassador network, liaison with student finance clubs across 180+ partner universities.'
  },
  {
    name: 'Priya Sundaram',
    role: 'Head of Competition Operations & Platform Support',
    institution: 'Association of Collegiate Traders',
    department: 'Senior in Computer Science & Finance',
    bio: 'Oversees trade settlement verification, team registration onboarding, and daily leaderboard audits.'
  },
  {
    name: 'Lucas Meyer',
    role: 'Lead for European & International Chapters',
    institution: 'Continental Collegiate Investment Network',
    department: 'Graduate Student in Financial Engineering',
    bio: 'Manages university outreach across UK, Continental European, and Swiss academic finance laboratories.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Platform & Simulation',
    question: 'Is TradingToLearn affiliated with Bloomberg, FactSet, or commercial data vendors?',
    answer: 'No. TradingToLearn is a completely independent, non-commercial collegiate trading simulation initiative. We do not use commercial terminal logos, proprietary data streams, or imply third-party corporate sponsorship. All simulated order execution runs on an open independent academic simulation engine.'
  },
  {
    category: 'Eligibility & Rules',
    question: 'Is there any fee or financial cost for students or universities to participate?',
    answer: 'No. TradingToLearn is 100% free for all registered universities, faculty sponsors, and enrolled students. Our mission is entirely academic: to make institutional-grade portfolio management and risk discipline accessible to all collegiate scholars.'
  },
  {
    category: 'Platform & Simulation',
    question: 'How are trade orders executed and filled in the simulation?',
    answer: 'Orders are matched against consolidated real-time US exchange feeds with simulated algorithmic latency, dynamic half-spread crossing costs, and institutional commission deductions ($0.005/share) to ensure paper returns mirror realistic market conditions.'
  },
  {
    category: 'Eligibility & Rules',
    question: 'Can graduate students (MBA / Master of Finance) compete with undergraduates?',
    answer: 'We maintain two distinct competition divisions: Undergraduate Division and Graduate/Master Division. Both compete under the identical $1,000,000 portfolio mandate and rules, but are ranked and awarded independently on the official leaderboards.'
  },
  {
    category: 'Faculty & Scoring',
    question: 'What is required of the Faculty Advisor?',
    answer: 'Faculty advisors act as institutional sponsors. They verify student enrollment status, ensure adherence to the academic honor code, and receive weekly portfolio risk reports detailing their student teams’ allocations and drawdown statistics.'
  },
  {
    category: 'Faculty & Scoring',
    question: 'How does the 70 / 30 scoring formula work?',
    answer: 'The championship score is calculated as 70% portfolio return relative to the S&P 500 benchmark, and 30% quality of trade notes and weekly reflections. Every trade requires a mandatory 2–3 sentence rationale explaining the catalyst. Fulfilling the educational requirement is non-negotiable—teams cannot win through unreasoned risk-taking alone.'
  }
];
