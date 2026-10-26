/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, LeaderboardEntry } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { ChallengePage } from './components/pages/ChallengePage';
import { RulesPage } from './components/pages/RulesPage';
import { LeaderboardPage } from './components/pages/LeaderboardPage';
import { OrganizersPage } from './components/pages/OrganizersPage';
import { DiscussionBoardPage } from './components/pages/DiscussionBoardPage';
import { HorseRacePage } from './components/pages/HorseRacePage';
import { PortfolioModal } from './components/PortfolioModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [inspectingTeam, setInspectingTeam] = useState<LeaderboardEntry | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'challenge', 'horserace', 'discussions', 'rules', 'leaderboard', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegisterClick = () => {
    if (currentPage !== 'challenge') {
      setCurrentPage('challenge');
      window.location.hash = 'challenge';
    }
    setTimeout(() => {
      const el = document.getElementById('register-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRegisterClick={handleRegisterClick}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onInspectTeam={(team) => setInspectingTeam(team)}
          />
        )}

        {currentPage === 'horserace' && <HorseRacePage />}

        {currentPage === 'discussions' && <DiscussionBoardPage />}

        {currentPage === 'challenge' && <ChallengePage />}

        {currentPage === 'leaderboard' && (
          <LeaderboardPage
            onInspectTeam={(team) => setInspectingTeam(team)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'rules' && <RulesPage />}

        {currentPage === 'contact' && <OrganizersPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Team Portfolio Inspection Modal */}
      <PortfolioModal
        team={inspectingTeam}
        onClose={() => setInspectingTeam(null)}
      />
    </div>
  );
}
