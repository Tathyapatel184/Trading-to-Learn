import React from 'react';
import { PageId } from '../types';
import { GraduationCap, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Mission (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <span className="text-base font-bold tracking-tight text-white uppercase">
                TradingToLearn
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Independent collegiate market simulation initiative empowering university students to master institutional portfolio management, factor allocation, and quantitative risk discipline.
            </p>

            <div className="text-[11px] font-mono text-neutral-500 pt-1 space-y-0.5">
              <p>Academic Secretariat: governance@tradingtolearn.org</p>
              <p>Platform Support: desk@tradingtolearn.org</p>
            </div>
          </div>

          {/* Navigation 1 */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-white font-medium mb-3">
              Competition Hub
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Overview & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('horserace')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-emerald-400 font-medium"
                >
                  The Weekly Horse Race
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discussions')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-sky-400 font-medium"
                >
                  Financial Discussion Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('challenge')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Spring Trading Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('challenge')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Team Registration Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('challenge')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Competition Schedule
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation 2 */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-white font-medium mb-3">
              Mandate & Standings
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('rules')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Official Competition Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rules')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Scoring Formula Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leaderboard')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Live Collegiate Leaderboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rules')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  10% Cap & 90% Invested Mandate
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation 3 */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-white font-medium mb-3">
              Governance
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Academic Advisory Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Student Executive Committee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Support Desk
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Required Independent Disclosure Notice (Verbatim Prompt Mandate) */}
        <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed flex items-start gap-2.5">
          <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong>Official Academic Disclaimer:</strong> TradingToLearn is an independent educational initiative. It is not affiliated with, sponsored by, or endorsed by any trading platform or data provider. All trading is simulated; nothing here is investment advice.
          </span>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 TradingToLearn Academic Initiative. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>Intercollegiate Academic Network</span>
            <span aria-hidden="true">·</span>
            <span>Academic Honor Code</span>
            <span aria-hidden="true">·</span>
            <span>Privacy & Ethics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
