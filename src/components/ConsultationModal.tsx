import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Download, Clock, Shield } from 'lucide-react';

export interface ConsultationInitialData {
  typology?: string;
  budgetFormatted?: string;
  scale?: number;
  notes?: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: ConsultationInitialData | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [typology, setTypology] = useState('Private Monolith Residence');
  const [budgetTier, setBudgetTier] = useState('$2.5M – $5.0M');
  const [preferredDate, setPreferredDate] = useState('2026-11-12');
  const [preferredTime, setPreferredTime] = useState('14:00 CET (Zurich)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      if (initialData.typology) setTypology(initialData.typology);
      if (initialData.budgetFormatted) setBudgetTier(initialData.budgetFormatted);
      if (initialData.notes) setNotes(initialData.notes);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errs.email = 'Valid corporate or personal email is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `KRONA-ARCH-2026-${randomSuffix}`;
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const handleDownloadBrief = () => {
    const textContent = `=====================================================
KRONA STUDIO - ARCHITECTURAL CONSULTATION DOSSIER
=====================================================
Reference Code: ${confirmationCode}
Date Created: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

CLIENT PARTICULARS:
-------------------
Principal: ${fullName}
Email: ${email}
Organization: ${organization || 'Private Individual'}

PROJECT PARAMETERS:
-------------------
Project Typology: ${typology}
Estimated Investment Tier: ${budgetTier}
Proposed Consultation Session: ${preferredDate} at ${preferredTime}
Studio Coordination Hub: Zurich / San Francisco

CLIENT PROGRAM & SITE SPECIFICATIONS:
-------------------------------------
${notes || 'Standard confidential feasibility inquiry submitted via digital studio portal.'}

KRONA ARCHITECTURAL GUARANTEE:
All technical documentation, site coordinates, and CAD assets are held
under strict mutual non-disclosure in accordance with Swiss civil engineering codes.
=====================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `KRONA_Consultation_Brief_${confirmationCode}.txt`;
    link.click();
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
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="max-w-lg mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Studio Engagement
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request an Architectural Discovery Session.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Meet with our Zurich or San Francisco engineering partners. We review site zoning, 
                structural timber feasibility, and investment horizons under mutual confidentiality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Maya Lindqvist"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border text-white placeholder-neutral-500 focus:outline-none ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800 focus:border-neutral-600'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Corporate or Personal Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. m.lindqvist@capital.ch"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border text-white placeholder-neutral-500 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-neutral-600'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Organization / Estate (Optional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Lindqvist Family Trust"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Project Typology
                  </label>
                  <select
                    value={typology}
                    onChange={(e) => setTypology(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                  >
                    <option value="Private Monolith Residence">Private Monolith Residence</option>
                    <option value="Civic Cultural Institution">Civic Cultural Institution</option>
                    <option value="Commercial / Studio HQ">Commercial / Studio HQ</option>
                    <option value="Precision Hardware System">Precision Hardware System</option>
                    <option value="Adaptive Urban Rehabilitation">Adaptive Urban Rehabilitation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Estimated Construction Budget
                  </label>
                  <input
                    type="text"
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Preferred Consultation Session
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-2 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                    >
                      <option value="10:00 CET (Zurich)">10:00 CET</option>
                      <option value="14:00 CET (Zurich)">14:00 CET</option>
                      <option value="10:00 PST (SF)">10:00 PST</option>
                      <option value="14:00 PST (SF)">14:00 PST</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Site Coordinates, Program Brief & Objectives
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your parcel topography, desired square footage, timber ambitions, or hardware specifications..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Shield className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Strict mutual non-disclosure protected.</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Submit Discovery Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white mb-4">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              Engagement Confirmed
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Architectural Discovery Scheduled
            </h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
              Our partners will review your site topography and preliminary parameters prior to our session. 
              A calendar sync link has been dispatched to <strong className="text-white">{email}</strong>.
            </p>

            {/* Confirmation Dossier Card */}
            <div className="mt-6 p-5 rounded-lg border border-neutral-800 bg-neutral-900 text-left text-xs max-w-md mx-auto space-y-2.5">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Reference ID</span>
                <span className="font-mono font-bold text-white">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Principal</span>
                <span className="font-medium text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Typology</span>
                <span className="font-medium text-white">{typology}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Estimated Capital</span>
                <span className="font-mono font-medium text-white">{budgetTier}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-800 pt-2">
                <span className="text-neutral-400">Session</span>
                <span className="font-mono text-white">{preferredDate} · {preferredTime}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDownloadBrief}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Consultation Brief (.txt)</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Return to Studio Portfolio
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
