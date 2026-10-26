import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, GraduationCap, Flame, MessageSquare, Trophy, BookOpen, Compass, Users } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRegisterClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'horserace', label: 'The Horse Race', badge: 'Weekly' },
    { id: 'discussions', label: 'Discussions', badge: 'Class' },
    { id: 'challenge', label: 'Spring Challenge' },
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'rules', label: 'Rules' },
    { id: 'contact', label: 'Organizers' }
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:gap-6 px-6 lg:px-8 h-18">
        
        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white group-hover:border-neutral-500 transition-colors">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white whitespace-nowrap block leading-tight">
              TradeToLearn
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase block">
              Collegiate Challenge
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-neutral-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 relative flex items-center gap-1.5 ${
                currentPage === link.id ? 'text-white font-semibold' : ''
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-900 border border-neutral-700 text-emerald-400">
                  {link.badge}
                </span>
              )}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onRegisterClick}
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Register Team
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onRegisterClick}
            className="px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-white rounded hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Register
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white transition-colors focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950/95 px-6 py-4 flex flex-col gap-2.5 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-left py-2 hover:text-white transition-colors flex items-center justify-between ${
                currentPage === link.id ? 'text-white font-semibold' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-emerald-400">
                    {link.badge}
                  </span>
                )}
              </div>
              {currentPage === link.id && (
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
