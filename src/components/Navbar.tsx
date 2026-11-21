import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronRight, LogOut, Sparkles, Building2, User as UserIcon } from 'lucide-react';
import { UserSession } from '../types/auth';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenProviderModal: () => void;
  onOpenAuth: () => void;
  userSession: UserSession | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenProviderModal,
  onOpenAuth,
  userSession,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1220]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Single Brand Lockup */}
          <a
            href="/"
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <span className="font-mono font-extrabold text-sm text-white tracking-tighter">HV</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-lg tracking-tight">HighValue</span>
              <span className="font-normal text-cyan-400 text-lg">Connect</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('explore-services')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:underline"
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:underline"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('for-providers')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:underline"
            >
              For Providers
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:underline"
            >
              About
            </button>
          </nav>

          {/* Zone 3: Actions (Logged in User Status OR Log In + Primary CTA) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {userSession ? (
              <div className="flex items-center gap-3">
                <div 
                  onClick={onOpenAuth}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 transition-colors cursor-pointer"
                  title="Click to view account or switch profile"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {getUserInitials(userSession.name)}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white leading-tight">
                        {userSession.name}
                      </span>
                      {userSession.isFirstUser && (
                        <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-semibold rounded tracking-tight">
                          1st User
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 leading-tight">
                      {userSession.companyName ? userSession.companyName : userSession.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  title="Log out and return to Launch Gate"
                  className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/40 transition-colors whitespace-nowrap cursor-pointer"
              >
                Log In / Join
              </button>
            )}

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Submit Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg whitespace-nowrap"
            >
              Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1220] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          {/* User Status Card if logged in */}
          {userSession && (
            <div className="p-3 bg-slate-900/90 border border-slate-700/80 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold text-xs flex items-center justify-center">
                  {getUserInitials(userSession.name)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    {userSession.name}
                    {userSession.isFirstUser && (
                      <span className="text-[9px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.2 rounded font-semibold">
                        First User
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400">{userSession.email}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="px-2.5 py-1 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg font-medium"
              >
                Sign Out
              </button>
            </div>
          )}

          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-800/60 text-left"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('explore-services')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-800/60 text-left"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-800/60 text-left"
            >
              <span>How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('for-providers')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-800/60 text-left"
            >
              <span>For Providers</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-800/60 text-left"
            >
              <span>About HighValue Connect</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            {!userSession && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-cyan-300 border border-cyan-500/40 bg-cyan-950/40 rounded-xl hover:bg-cyan-900/40"
              >
                Log In & Join Website
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/30"
            >
              Submit Enterprise Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
