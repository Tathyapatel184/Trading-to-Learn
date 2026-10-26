import React, { useState } from 'react';
import { ACADEMIC_STEERING_COMMITTEE, STUDENT_EXECUTIVE_BOARD, FAQS } from '../../data/organizersData';
import { Mail, CheckCircle2, ChevronDown, ChevronUp, Shield, GraduationCap, Building2, MapPin, Clock, Calendar } from 'lucide-react';
import { OfficialDocuments } from '../OfficialDocuments';

export const OrganizersPage: React.FC = () => {
  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('Student Team Lead');
  const [category, setCategory] = useState('Platform & Technical Support');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid institutional email is required';
    if (!message.trim()) errs.message = 'Please provide details on your inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `TTL-INQ-${randomSuffix}`;
    setTicketId(code);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider uppercase mb-2">
          <span>Governance & Administration</span>
          <span aria-hidden="true">·</span>
          <span>Academic Committee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
          Organizers, Academic Board & Contact.
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
          TradingToLearn is guided by university faculty and student market leaders dedicated to 
          elevating financial literacy and ethical risk discipline in collegiate education.
        </p>
      </div>

      {/* Campus Trading Lab Logistics & Secretariat Office Hours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Secretariat Office</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Trading Room 204 & Department of Finance, Hall of Management.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-sky-400 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Student Help Desk Hours</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Monday–Thursday, 2:00 PM – 5:30 PM EST. In-person & Zoom terminal support.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Weekly Faculty Briefings</span>
            <span className="text-neutral-400 leading-snug block mt-0.5">
              Fridays at 12:00 PM EST. Weekly risk reports dispatched to registered advisors.
            </span>
          </div>
        </div>
      </div>

      {/* Critical Independence Notice */}
      <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 flex items-start gap-3">
        <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="text-xs text-neutral-300 space-y-1">
          <p className="font-semibold text-white">Independent Academic Initiative Notice:</p>
          <p className="text-neutral-400 leading-relaxed">
            TradingToLearn is an independent, non-commercial collegiate trading challenge. We do not use commercial 
            financial terminal logos, proprietary data streams, or imply third-party corporate sponsorship. All market 
            simulations run on an open, independent academic engine with zero real capital at risk. Platform permissions 
            and data arrangements are maintained separately.
          </p>
        </div>
      </div>

      {/* Section 1: Academic Steering Committee */}
      <div>
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Faculty Governance
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Academic Advisory Board
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Endowed professors and empirical asset pricing researchers overseeing scoring fidelity and academic integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_STEERING_COMMITTEE.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 font-medium block">
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{member.name}</h3>
                <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{member.institution}</span>
                  <span aria-hidden="true" className="text-neutral-700">·</span>
                  <span>{member.department}</span>
                </div>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Student Leadership Council */}
      <div>
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Collegiate Operations
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Student Executive Committee
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Student officers coordinating university chapter outreach, platform support, and daily leaderboard audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_EXECUTIVE_BOARD.map((officer, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                  {officer.role}
                </span>
                <h3 className="text-base font-bold text-white">{officer.name}</h3>
                <p className="text-xs text-neutral-400 mt-0.5">{officer.department}</p>
                <p className="text-xs text-neutral-300 mt-3 leading-relaxed">{officer.bio}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-500">
                {officer.institution}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Syllabus and Downloads */}
      <div>
        <OfficialDocuments />
      </div>

      {/* Section 3: Interactive FAQ Accordion */}
      <div className="pt-8 border-t border-neutral-800">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Student & Faculty Inquiries
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-neutral-800 bg-neutral-900/40 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      {faq.category}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section: Collegiate Partners & Student Investment Clubs (No Platform Logos) */}
      <div className="pt-8 border-t border-neutral-800">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Collegiate Network
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Participating Student Investment Societies & Chapters
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Independent student-run finance associations, quant clubs, and university departments participating in the 2026 challenge.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: 'Michigan Investment Group', school: 'Univ of Michigan' },
            { name: 'Berkeley Investment Group', school: 'UC Berkeley' },
            { name: 'Sloan Quant Association', school: 'MIT' },
            { name: 'Husky Financial Society', school: 'Univ of Washington' },
            { name: 'Stern Quantitative Finance', school: 'NYU Stern' },
            { name: 'Keystone Capital Club', school: 'Penn State' },
            { name: 'UChicago Asset Allocation Club', school: 'Univ of Chicago' },
            { name: 'Austin Quant Traders', school: 'UT Austin' },
            { name: 'Cornell Collegiate Traders', school: 'Cornell Univ' },
            { name: 'Oxford Student FinTech', school: 'Oxford Univ' },
            { name: 'LSE Capital Markets Society', school: 'London School of Econ' },
            { name: 'NUS Financial Club', school: 'Natl Univ of Singapore' }
          ].map((partner, i) => (
            <div key={i} className="p-3.5 rounded-lg border border-neutral-800 bg-neutral-900/30 text-center">
              <span className="text-xs font-semibold text-white block line-clamp-1">{partner.name}</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">{partner.school}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Contact & Inquiries Form */}
      <div className="pt-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              Direct Communication Channels
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Contact Organizers & Support
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Have a question regarding team eligibility, faculty advisor verification, or platform sandbox credentials? 
              Send us a message or reach our shared organizing team inbox directly.
            </p>
          </div>

          {/* Shared Inbox Card */}
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="text-neutral-500 font-mono block text-[10px] uppercase">Shared Committee Inbox</span>
              <a
                href="mailto:contact@tradingtolearn.org"
                className="font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                contact@tradingtolearn.org
              </a>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Institutional Email (.edu / university) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jchen@stanford.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  University / Affiliation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stanford University"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Your Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="Student Team Lead">Student Team Lead</option>
                  <option value="Team Member">Student Team Member</option>
                  <option value="Faculty Advisor">Faculty Advisor / Professor</option>
                  <option value="Finance Club President">Finance Club Executive</option>
                  <option value="Other">Other Institutional Representative</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                >
                  <option value="Platform & Technical Support">Platform & Simulation Support</option>
                  <option value="Team Registration Verification">Team Registration Verification</option>
                  <option value="Faculty Sponsorship Inquiries">Faculty Sponsorship Inquiries</option>
                  <option value="Rule Interpretation & Appeals">Rule Interpretation & Scoring</option>
                  <option value="General Academic Partnership">General Academic Partnership</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Message / Details *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe your inquiry, question about portfolio parameters, or platform support ticket..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
              {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
              <span className="text-xs text-neutral-400">
                Official support desk monitored during regular market hours (9:30 AM – 4:00 PM EST).
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                Send Message to Committee
              </button>
            </div>
          </form>
        ) : (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Message Transmitted
            </span>
            <h3 className="text-xl font-bold text-white">
              Inquiry Ticket Logged: {ticketId}
            </h3>
            <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
              Thank you, {name}. A member of the student executive committee or academic advisory board 
              will review your submission and respond to <strong className="text-white">{email}</strong> within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded transition-colors cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
