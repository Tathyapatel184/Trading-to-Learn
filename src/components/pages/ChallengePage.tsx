import React, { useState } from 'react';
import { CheckCircle2, Download, Plus, Trash2, Shield, Calendar, MapPin, Clock, BookOpen } from 'lucide-react';
import { TradingTerminal } from '../TradingTerminal';
import { OfficialDocuments } from '../OfficialDocuments';

interface TeamMember {
  name: string;
  email: string;
  major: string;
}

export const ChallengePage: React.FC = () => {
  const [university, setUniversity] = useState('');
  const [division, setDivision] = useState<'Undergraduate' | 'Graduate/MBA'>('Undergraduate');
  const [department, setDepartment] = useState('Department of Finance');
  const [teamName, setTeamName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadMajor, setLeadMajor] = useState('Economics / Finance');
  const [gradYear, setGradYear] = useState('2026');
  const [strategyStyle, setStrategyStyle] = useState('Fundamental Long-Horizon');
  const [facultyName, setFacultyName] = useState('');
  const [facultyEmail, setFacultyEmail] = useState('');
  const [additionalMembers, setAdditionalMembers] = useState<TeamMember[]>([
    { name: '', email: '', major: 'Computer Science' }
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [teamId, setTeamId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleAddMember = () => {
    if (additionalMembers.length < 4) {
      setAdditionalMembers([...additionalMembers, { name: '', email: '', major: '' }]);
    }
  };

  const handleRemoveMember = (idx: number) => {
    setAdditionalMembers(additionalMembers.filter((_, i) => i !== idx));
  };

  const handleMemberChange = (idx: number, field: keyof TeamMember, val: string) => {
    const updated = [...additionalMembers];
    updated[idx][field] = val;
    setAdditionalMembers(updated);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!university.trim()) errs.university = 'University name is required';
    if (!teamName.trim()) errs.teamName = 'Team name is required';
    if (!leadName.trim()) errs.leadName = 'Team lead name is required';
    if (!leadEmail.trim() || !leadEmail.includes('@')) errs.leadEmail = 'Valid student email required';
    if (!facultyName.trim()) errs.facultyName = 'Faculty advisor name is required';
    if (!facultyEmail.trim() || !facultyEmail.includes('@')) errs.facultyEmail = 'Faculty email is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `TTL-SPR26-${randomNum}`;
    setTeamId(generatedId);
    setSubmitted(true);
  };

  const handleDownloadWelcomePack = () => {
    const content = `=====================================================
TRADINGTOLEARN - SPRING 2026 TEAM REGISTRATION DOSSIER
=====================================================
Official Team ID: ${teamId}
Registration Timestamp: ${new Date().toISOString()}

TEAM & UNIVERSITY DETAILS:
--------------------------
University: ${university}
Division: ${division}
Department: ${department}
Team Name: ${teamName}
Strategy Mandate: ${strategyStyle}

ROSTER COMPOSITION:
-------------------
Team Lead: ${leadName} (${leadEmail}) - ${leadMajor}, Class of ${gradYear}
${additionalMembers
  .filter((m) => m.name.trim())
  .map((m, i) => `Member ${i + 2}: ${m.name} (${m.email}) - ${m.major}`)
  .join('\n')}

FACULTY OVERSIGHT:
------------------
Faculty Sponsor: ${facultyName} (${facultyEmail})

SPRING 2026 MANDATE SUMMARY:
- Starting Paper Capital: $1,000,000 USD
- Single Position Concentration Cap: 15.0%
- Minimum Distinct Holdings: 10 securities
- Cash Floor: Minimum 2.0% unencumbered
- Risk Objective: Maximize Annualized Sharpe Ratio; avoid drawdowns >15%

All paper trading is executed on the TradingToLearn Independent Simulation Sandbox.
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TradingToLearn_Welcome_${teamId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-16">
      {/* Header & Overview (Verbatim Chuck's Mockup) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
          <span>Spring 2026 Academic Season</span>
          <span aria-hidden="true">·</span>
          <span>Open Collegiate Registration</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance leading-[1.1]">
          Spring Trading Challenge
        </h1>

        <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 max-w-4xl">
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
            Challenge Overview & Mission
          </span>
          <p className="text-base sm:text-lg text-emerald-100 font-medium leading-relaxed">
            &ldquo;Teams from participating universities manage a simulated portfolio across the spring semester 
            and explain the reasoning behind every trade.&rdquo;
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            An independent educational initiative. All trading is executed on $1,000,000 in virtual paper capital with zero real money at risk.
          </p>
        </div>
      </div>

      {/* KEY DATES (Verbatim Chuck's Mockup: Jan 15, Feb 1, Apr 30, May 15) */}
      <div>
        <div className="max-w-2xl mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Official Schedule
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Key Dates
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Official timeline for the Spring 2026 trading challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 relative">
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">MILESTONE 01</span>
            <div className="text-lg font-bold text-white">Registration Opens</div>
            <div className="text-sm font-mono font-semibold text-emerald-400 mt-1">January 15</div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Teams of 3–5 students register with faculty advisor verification and receive sandbox credentials.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 relative">
            <span className="text-xs font-mono font-bold text-sky-400 block mb-1">MILESTONE 02</span>
            <div className="text-lg font-bold text-white">Starts</div>
            <div className="text-sm font-mono font-semibold text-sky-400 mt-1">February 1</div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Market open: Portfolios funded with $1,000,000 in virtual cash; active simulation begins.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 relative">
            <span className="text-xs font-mono font-bold text-amber-400 block mb-1">MILESTONE 03</span>
            <div className="text-lg font-bold text-white">Final Trading Day</div>
            <div className="text-sm font-mono font-semibold text-amber-400 mt-1">April 30</div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Market close at 4:00 PM EST. Portfolios locked; final trade notes and reflections finalized.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 relative">
            <span className="text-xs font-mono font-bold text-purple-400 block mb-1">MILESTONE 04</span>
            <div className="text-lg font-bold text-white">Results & Awards</div>
            <div className="text-sm font-mono font-semibold text-purple-400 mt-1">May 15</div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Faculty committee completes trade notes evaluation; winners announced and awards presented.
            </p>
          </div>
        </div>
      </div>

      {/* WHO CAN JOIN (Verbatim Chuck's Mockup) */}
      <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Eligibility & Roster Requirements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Who Can Join
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 mt-2 leading-relaxed font-medium">
            &ldquo;Undergraduate and graduate students at participating universities. Teams of 3–5 with a faculty advisor.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold">01 · Student Teams</span>
            <h4 className="text-sm font-bold text-white">3 to 5 Enrolled Students</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Open to both Undergraduate and Graduate/MBA divisions. Cross-disciplinary teams (Finance, CS, Economics, Math, Engineering) are strongly encouraged.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 space-y-2">
            <span className="text-xs font-mono text-sky-400 font-bold">02 · Faculty Advisor</span>
            <h4 className="text-sm font-bold text-white">1 Designated Faculty Mentor</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Each team must be sponsored by a verified university professor or finance lab director who confirms team eligibility and academic integrity.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold">03 · One Team Per Student</span>
            <h4 className="text-sm font-bold text-white">Strict Single-Roster Policy</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Students may only represent one university team per semester session to preserve tournament fairness and authentic course credit attribution.
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS (Three Steps: Chuck's Mockup) */}
      <div>
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Competition Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Three simple steps designed to build genuine investment competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Step 1 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400">STEP 1</span>
                <span className="text-xs font-mono text-neutral-500">Jan 15 – Feb 01</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Register Your Team</h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Form a team of 3–5 students, confirm your faculty advisor, and register below. Your team receives credentials to the independent trading sandbox with $1,000,000 in virtual capital.
              </p>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
              No registration fee · Paper currency only
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-400">STEP 2</span>
                <span className="text-xs font-mono text-neutral-500">Feb 01 – Apr 30</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Trade and Post Your Trade Notes</h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Manage your simulated portfolio under strict risk rules (no single position &gt;10%, ≥90% invested after week 2). 
                For every trade, write a mandatory 2–3 sentence rationale explaining the catalyst.
              </p>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
              Notes count for 30% of your total score
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">STEP 3</span>
                <span className="text-xs font-mono text-neutral-500">May 01 – May 15</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Present What You Learned</h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Submit your final reflection synthesis and present your semester investment learnings to faculty judges. 
                Teams are evaluated on both return vs benchmark (70%) and analytical rigor (30%).
              </p>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
              Awards & academic certificates awarded
            </div>
          </div>

        </div>
      </div>

      {/* SEMESTER THEME (From Professor / Chuck's call: Space Economy & AI) */}
      <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
              Curricular Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Semester Themes
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded border border-neutral-800 w-fit">
            Optional Academic Tracks
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
          Each semester, faculty advisors introduce thematic tracks to connect macroeconomic theory with emerging market sectors. 
          Teams can optionally focus their research thesis on these frontier domains:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-400">SPRING 2026 THEME</span>
              <span className="text-[11px] font-mono text-neutral-500">Active Now</span>
            </div>
            <h3 className="text-lg font-bold text-white">AI Infrastructure & Compute Supply Chains</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Evaluating semiconductor fabrication, advanced packaging, hyperscale power delivery, and high-bandwidth memory. 
              Teams model revenue runway versus capital expenditure cycles.
            </p>
            <div className="text-[11px] font-mono text-neutral-400 flex flex-wrap gap-2 pt-2">
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Semiconductors</span>
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Grid Energy</span>
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Photonics</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-sky-400">FALL 2026 THEME</span>
              <span className="text-[11px] font-mono text-neutral-500">Upcoming</span>
            </div>
            <h3 className="text-lg font-bold text-white">The Commercial Space Economy</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Satellite communications, low-earth orbit launch logistics, Earth observation analytics, and lunar infrastructure. 
              Analyzing government defense contracting vs commercial enterprise adoption.
            </p>
            <div className="text-[11px] font-mono text-neutral-400 flex flex-wrap gap-2 pt-2">
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Launch Services</span>
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Satellite Comms</span>
              <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Aerospace Defense</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Trading Lab Logistics & Schedule Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Campus Trading Lab</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Trading Room 204, School of Business. Workstations configured with simulated terminal environments.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-sky-400 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Faculty Office Hours</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Tuesdays & Thursdays, 3:30 PM – 5:00 PM EST. Portfolio risk modeling & factor screening help.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Trading Commences</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Market Open, February 1, 2026. Weekly rebalance audits logged every Friday at 4:30 PM EST.
            </span>
          </div>
        </div>
      </div>

      {/* Hero Visual & Key Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Media (7 Cols) */}
        <div className="lg:col-span-7 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/3] relative group">
          <img
            src="/src/assets/images/students_market_research_1793035467844.jpg"
            alt="Collegiate student team collaborating on portfolio risk analysis"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-xs text-neutral-300">
            <p className="font-semibold text-white">Multidisciplinary Student Investment Teams</p>
            <p className="text-neutral-400 mt-0.5">Combining quantitative modeling, fundamental valuation, and macroeconomic risk hedging.</p>
          </div>
        </div>

        {/* Challenge Highlights (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Virtual Capital Grant
            </span>
            <div className="text-2xl font-bold font-mono text-white">$1,000,000 USD</div>
            <p className="text-xs text-neutral-400 mt-1">Cash account simulation with simulated slippage and real-time order books.</p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Portfolio Mandate
            </span>
            <div className="text-lg font-bold text-white">Max 10% Position · ≥90% Invested</div>
            <p className="text-xs text-neutral-400 mt-1">Strict diversification enforcement after Week 2 with $5 stock price minimum.</p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Official Scoring Model (70 / 30)
            </span>
            <div className="text-lg font-bold text-emerald-400">70% Return vs Benchmark · 30% Notes</div>
            <p className="text-xs text-neutral-400 mt-1">Trade notes and weekly reflections evaluated by faculty judges.</p>
          </div>
        </div>

      </div>

      {/* 4-Phase Competition Timeline */}
      <div>
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Schedule of Events
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Four-Phase Competition Calendar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-emerald-400">PHASE 01</span>
            <h3 className="text-base font-bold text-white mt-1">Registration Opens</h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">January 15, 2026</p>
            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              Student roster formation (3–5 students), faculty advisor confirmation, and sandbox account provisioning.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-sky-400">PHASE 02</span>
            <h3 className="text-base font-bold text-white mt-1">Trading Starts</h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">February 1, 2026</p>
            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              Market open: Virtual $1,000,000 cash funded; live portfolio simulation begins with mandatory trade notes.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-amber-400">PHASE 03</span>
            <h3 className="text-base font-bold text-white mt-1">Final Trading Day</h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">April 30, 2026</p>
            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              Market close at 4:00 PM EST. Portfolio positions locked; trade notes and weekly reflections finalized.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 relative">
            <span className="text-xs font-mono font-bold text-purple-400">PHASE 04</span>
            <h3 className="text-base font-bold text-white mt-1">Results & Awards</h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">May 15, 2026</p>
            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              Faculty committee evaluations complete; composite 70/30 rankings finalized and awards presented.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Student Terminal Sandbox */}
      <div>
        <div className="max-w-2xl mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Participant Simulation Environment
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Live Order Entry Sandbox
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Test trade execution, trade note rationale logging, and the 10% holding cap before official roster lock.
          </p>
        </div>

        <TradingTerminal />
      </div>

      {/* Official Syllabus and Downloads */}
      <div>
        <OfficialDocuments />
      </div>

      {/* Interactive Registration Section */}
      <div id="register-section" className="pt-8 border-t border-neutral-800">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Team Registration Portal
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Register Your University Team
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Free for all accredited colleges and universities. Each team requires 2–5 students and 1 faculty sponsor.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 space-y-8">
            
            {/* Section 1: University & Division */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                01. Academic Institution & Division
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    University Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. University of Michigan"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  {errors.university && <p className="text-[11px] text-red-400 mt-1">{errors.university}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Academic Department
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ross School of Business"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Competition Division
                  </label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                  >
                    <option value="Undergraduate">Undergraduate Division</option>
                    <option value="Graduate/MBA">Graduate / MBA Division</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Team Name & Strategy Style */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                02. Team Identity & Strategy Mandate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wolverine Alpha Quant"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  {errors.teamName && <p className="text-[11px] text-red-400 mt-1">{errors.teamName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Primary Investment Strategy
                  </label>
                  <select
                    value={strategyStyle}
                    onChange={(e) => setStrategyStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                  >
                    <option value="Fundamental Long-Horizon">Fundamental Long-Horizon Value</option>
                    <option value="Quantitative Factor">Quantitative Factor & Statistical Arbitrage</option>
                    <option value="Macro Rotation">Global Macro & Sector Rotation</option>
                    <option value="Multi-Strategy">Multi-Strategy & Risk Parity</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Team Lead & Roster */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                03. Student Team Roster (2–5 Members)
              </h3>
              
              {/* Lead Member */}
              <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 mb-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold block mb-2">Team Lead (Primary Contact)</span>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Hayes"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                    />
                    {errors.leadName && <p className="text-[10px] text-red-400 mt-0.5">{errors.leadName}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">University Email (.edu) *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jhayes@umich.edu"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                    />
                    {errors.leadEmail && <p className="text-[10px] text-red-400 mt-0.5">{errors.leadEmail}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Major / Degree</label>
                    <input
                      type="text"
                      placeholder="e.g. Finance & Data Science"
                      value={leadMajor}
                      onChange={(e) => setLeadMajor(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Graduation Year</label>
                    <select
                      value={gradYear}
                      onChange={(e) => setGradYear(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    >
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Members */}
              <div className="space-y-3">
                {additionalMembers.map((member, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-neutral-900/30 border border-neutral-800 flex flex-col sm:flex-row items-center gap-3">
                    <span className="text-[11px] font-mono text-neutral-400 shrink-0 w-20">Member {idx + 2}:</span>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={member.name}
                      onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                      className="w-full sm:w-1/3 px-3 py-1.5 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="University Email"
                      value={member.email}
                      onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                      className="w-full sm:w-1/3 px-3 py-1.5 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Major"
                      value={member.major}
                      onChange={(e) => handleMemberChange(idx, 'major', e.target.value)}
                      className="w-full sm:w-1/4 px-3 py-1.5 text-xs rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    />
                    {additionalMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(idx)}
                        className="p-1.5 text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                        title="Remove member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {additionalMembers.length < 4 && (
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="mt-3 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 py-1 px-2 rounded bg-neutral-900 border border-neutral-800 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Another Member (Up to 5 total)</span>
                </button>
              )}
            </div>

            {/* Section 4: Faculty Advisor Sponsorship */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                04. Faculty Advisor Verification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Faculty Advisor Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. Katherine Miller"
                    value={facultyName}
                    onChange={(e) => setFacultyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  {errors.facultyName && <p className="text-[11px] text-red-400 mt-1">{errors.facultyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Faculty Advisor Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. kmiller@umich.edu"
                    value={facultyEmail}
                    onChange={(e) => setFacultyEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  {errors.facultyEmail && <p className="text-[11px] text-red-400 mt-1">{errors.facultyEmail}</p>}
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero registration fee. Submissions subject to faculty confirmation email.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                Submit Team Registration
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Receipt */
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Registration Received
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Welcome to the Spring Challenge!
            </h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
              Your registration has been logged under ID <strong className="text-white font-mono">{teamId}</strong>. 
              A confirmation verification link has been sent to faculty advisor <strong className="text-white">{facultyEmail}</strong>.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-500">Team:</span>
                <span className="text-white">{teamName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Institution:</span>
                <span className="text-white">{university}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Division:</span>
                <span className="text-white">{division}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Paper Capital:</span>
                <span className="text-emerald-400">$1,000,000 USD</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDownloadWelcomePack}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Team Welcome Pack (.txt)</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Register Another Team
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
